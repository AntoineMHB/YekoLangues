import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Music, BookOpen, RefreshCw, Play, Pause } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cultureImg from "../assets/cultureImg.jpg";

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

const CulturalSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [proverbs, setProverbs] = useState<Proverb[]>([]);
  const [currentProverb, setCurrentProverb] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [trackInfo, setTrackInfo] = useState<any>(null);
  const [lyrics, setLyrics] = useState<string>("");

  const authorize = () => {
    const clientId = "3f50e625da724aa2886064624c577da9";
    const redirectUri = "https://yeko-langues.vercel.app/";
    const scopes = ["user-read-currently-playing", "user-read-playback-state"];
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${scopes.join("%20")}`;

    window.location.href = authUrl;
  };

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

  useEffect(() => {
    if (proverbs.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentProverb((prev) => (prev + 1) % proverbs.length);
    }, 15000);

    return () => clearInterval(interval);
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
          backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,.6)),url(${cultureImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
            Culture
          </h1>
        </div>
      </header>

      <section
        id="cultural"
        className="py-12 sm:py-16 lg:py-20 bg-secondary-500 text-white relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            <div
              ref={ref}
              className={`${
                inView ? "animate-on-scroll animated" : "animate-on-scroll"
              }`}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <BookOpen className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold">
                  Expressions et Proverbes
                </h2>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                <button
                  className="absolute top-3 sm:top-4 right-3 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                  onClick={rotateProverb}
                  aria-label="Next proverb"
                >
                  <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>

                <button
                  className="absolute top-3 sm:top-4 right-12 sm:right-14 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
                  onClick={() => setIsPaused((prev) => !prev)}
                  aria-label={isPaused ? "Play" : "Pause"}
                >
                  {isPaused ? (
                    <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                  ) : (
                    <Pause className="w-3 h-3 sm:w-4 sm:h-4" />
                  )}
                </button>

                {proverbs.length > 0 ? (
                  <div className="mb-4 mt-3 sm:mt-4">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-accent-300">
                      {proverbs[currentProverb].lingala}
                    </h3>
                    <p className="text-base sm:text-lg italic mb-3 sm:mb-4">
                      {proverbs[currentProverb].french}
                    </p>
                    <div className="h-px bg-white bg-opacity-20 my-3 sm:my-4"></div>
                    <p className="text-sm sm:text-base text-gray-200">
                      {proverbs[currentProverb].moral}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm sm:text-base">
                    Chargement des proverbes...
                  </p>
                )}

                <div className="flex justify-center mt-3 sm:mt-4">
                  {proverbs.map((_, index) => (
                    <button
                      key={index}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 mx-0.5 sm:mx-1 rounded-full transition-colors duration-300 ${
                        index === currentProverb
                          ? "bg-white"
                          : "bg-white bg-opacity-40"
                      }`}
                      onClick={() => setCurrentProverb(index)}
                      aria-label={`Go to proverb ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`${
                inView ? "animate-on-scroll animated" : "animate-on-scroll"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <Music className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
                <h2 className="text-xl sm:text-2xl font-bold">
                  Playlist Lingala
                </h2>
              </div>

              <div className="mt-6 sm:mt-8">
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    className="w-full h-96"
                    src="https://open.spotify.com/embed/playlist/12Hk5OwmKbviybL6ZXZmZ2?utm_source=generator&theme=0"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CulturalSection;
