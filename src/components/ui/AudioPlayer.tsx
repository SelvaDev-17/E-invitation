"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    // Initialize audio object once
    if (typeof window !== "undefined" && !audioRef.current) {
      audioRef.current = new Audio("/bgm.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }

    const handleInteraction = () => {
      if (!hasInteracted.current && audioRef.current) {
        hasInteracted.current = true;
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.log("Autoplay prevented:", err));
      }
      
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);
    document.addEventListener("scroll", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
      
      // Cleanup on unmount
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.error("Failed to play:", err));
      }
      hasInteracted.current = true;
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
