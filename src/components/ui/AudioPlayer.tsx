"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio object
    audioRef.current = new Audio("/bgm.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4; // Slightly lower volume for background music

    // Attempt to auto-play on first user interaction
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch((err) => {
            console.log("Autoplay prevented or audio file missing. Please ensure /public/bgm.mp3 exists.", err);
          });
      }
      
      // Remove listeners after first interaction
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);
    document.addEventListener("scroll", handleFirstInteraction);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
      document.removeEventListener("scroll", handleFirstInteraction);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.error("Failed to play audio:", err);
        });
      }
      setIsPlaying(!isPlaying);
      setHasInteracted(true);
    }
  };

  // Fixed z-index to very high number to ensure it's not hidden
  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-white shadow-xl hover:bg-orange-700 hover:scale-110 active:scale-95 transition-all"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? (
        <Volume2 className="h-6 w-6" />
      ) : (
        <div className="relative">
          <VolumeX className="h-6 w-6 opacity-80" />
          <Music className="h-3 w-3 absolute -top-1 -right-2 opacity-60" />
        </div>
      )}
      
      {/* Ripple effect when playing */}
      {isPlaying && (
        <span className="absolute -z-10 h-full w-full animate-ping rounded-full bg-orange-400 opacity-50" style={{ animationDuration: '3s' }} />
      )}
    </button>
  );
}
