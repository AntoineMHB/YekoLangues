const clientId = '3f50e625da724aa2886064624c577da9';
const redirectUri = window.location.origin + window.location.pathname;
const scopes = 'user-read-playback-state';

function authorize() {
 const url = `https://accounts.spotify.com/authorize` +
    `?client_id=${clientId}` +
    `&response_type=token` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&scope=${encodeURIComponent(scopes)}`;
  window.location.href = url;
}

function getAccessTokenFromUrl() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get('access_token');
}

async function getCurrentTrack(accessToken) {
    const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: { Authorization: `Bearer ${accessToken}` }
    });

    if (!res.ok || res.status === 204) return null;
    const data = await res.json();

    return {
        artist: data.item.artist[0].name,
        title: data.item.name,
        progress_ms: data.progress_ms
    };
}

async function fetchLyrics(artist, title) {
    const res = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(title)}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.lyrics;
}

function synchLyrics(lyrics) {
    const lines = lyrics.split('\n').filter(line => line.trim() !== '');
    return lines.map((text, i) => ({
        time: i * 5000,
        text
    }));
}

function highlightLyrics(syncedLyrics, progress_ms) {
    const index = syncedLyrics.findIndex((line, i) => {
        const next = syncedLyrics[i + 1];
        return !next || progress_ms < next.time;
    });

    const container = document.getElementById('lyrics');
    container.innerHTML = syncedLyrics.map((line, i) =>
    `<div class="${i === index ? 'active' : ''}">${line.text}</div>`
  ).join('');
}

async function main() {
    const accessToken = getAccessTokenFromUrl();
    if (!accessToken) return;

    let lastTrack = '';
    let syncedLyrics = [];

    setInterval(async () => {
        const track = await getCurrentTrack(accessToken);
        if (!track) return;

        document.getElementById('trackInfo').inneerText = `${track.artist} - ${track.title}`;

        const trackId = `${track.artist}-${track.title}`;
        if (trackId !== lastTrack) {
            lastTrack = trackId;
            const lyrics = await fetchLyrics(track.artist, track.title);
            if (!lyrics) {
                document.getElementById('lyrics').innerText = 'Lyrics not found.';
                return;
            }
            syncedLyrics = syncLyrics(lyrics);
        }

        highlightLyrics(syncedLyrics, track.progress_ms);
    }, 1000);
}

main();

