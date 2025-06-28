import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Music, BookOpen, RefreshCw, Play, Pause } from "lucide-react";
import { div } from "framer-motion/client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Proverb {
  lingala: string;
  french: string;
  moral: string;
}

interface TrackInfo {
  artist: string;
  title: string;
  lyrics: string;
}

const Blog: React.FC = () => {
  // const { ref, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  const [proverbs, setProverbs] = useState<Proverb[]>([]);
  const [currentProverb, setCurrentProverb] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [trackInfo, setTrackInfo] = useState<any>(null);
  const [lyrics, setLyrics] = useState<string>("");

  // Redirects user to Spotify login
  const authorize = () => {
    const clientId = "3f50e625da724aa2886064624c577da9";
    const redirectUri = "https://yeko-langues.vercel.app/";
    const scopes = ["user-read-currently-playing", "user-read-playback-state"];
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${scopes.join("%20")}`;

    window.location.href = authUrl;
  };

  // Get token from URL hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("access_token")) {
      const token = new URLSearchParams(hash.substring(1)).get("access_token");
      if (token) {
        setAccessToken(token);
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      }
    }
  }, []);

  // Fetch current track and lyrics
  useEffect(() => {
    if (!accessToken) return;

    async function fetchTrackAndLyrics() {
      try {
        const res = await fetch(
          "https://api.spotify.com/v1/me/player/currently-playing",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (!res.ok) throw new Error("No track or not playing");

        const data = await res.json();
        setTrackInfo(data);

        const artist = data.item?.artists?.[0]?.name;
        const title = data.item?.name;

        if (artist && title) {
          const lyricsRes = await fetch(
            `https://api.lyrics.ovh/v1/${artist}/${title}`
          );
          const lyricsData = await lyricsRes.json();
          setLyrics(lyricsData.lyrics || "Lyrics not found.");
        }
      } catch (error) {
        console.error("Error fetching track or lyrics:", error);
        setTrackInfo(null);
        setLyrics("No lyrics found or no song currently playing.");
      }
    }

    fetchTrackAndLyrics();
  }, [accessToken]);

  useEffect(() => {
    fetch("/lingalaProverbes.json")
      .then((res) => res.json())
      .then((data) => {
        setProverbs(data);
      })
      .catch((error) => {
        console.error("Failed to load proverbs:", error);
      });
  }, []);

  // Auto rotate proverbs every 15 seconds
  useEffect(() => {
    if (proverbs.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentProverb((prev) => (prev + 1) % proverbs.length);
    }, 15000); // every 15 seconds

    return () => clearInterval(interval); // Clean up
  }, [proverbs, isPaused]);

  const rotateProverb = () => {
    setCurrentProverb((prev) => (prev + 1) % proverbs.length);
  };

  return (
    <div>
      <Navbar />

            <header
              className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] flex items-center justify-center text-white"
              style={{
                backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,.6)),url("src/assets/blogImage.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center 30%",
              }}
            >
              <div className="text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
                  Blog
                </h1>
              </div>
            </header>
      
    <section
      id="cultural"
      className="py-12 sm:py-16 lg:py-20 bg-white text-white relative"
    >
         <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
              Nos Actus
            </h1>
         </div>
     </section>
     <Footer />
    </div>

  );
};

export default Blog;
