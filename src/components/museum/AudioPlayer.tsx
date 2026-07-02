"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

type Props = {
  src: string;
  playLabel: string;
  pauseLabel: string;
};

function fmt(t: number): string {
  if (!isFinite(t) || t < 0) return "0:00";
  const m = Math.floor(t / 60);
  const s = String(Math.floor(t % 60)).padStart(2, "0");
  return `${m}:${s}`;
}

export default function AudioPlayer({ src, playLabel, pauseLabel }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => {
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
      setCurrentTime(audio.currentTime);
    };
    const onLoaded = () => setDuration(audio.duration);
    const onEnded = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play(); setPlaying(true); }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * audio.duration;
  };

  return (
    <div className="flex items-center gap-4">
      <audio ref={audioRef} src={src} preload="metadata" />
      <button
        onClick={toggle}
        aria-label={playing ? pauseLabel : playLabel}
        className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-museum-gold/50 text-museum-gold hover:bg-museum-gold/10 transition-colors"
      >
        {playing ? <Pause size={16} /> : <Play size={16} />}
      </button>
      <div
        className="flex-1 h-1 bg-museum-gold/20 cursor-pointer relative"
        onClick={seek}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="absolute inset-y-0 left-0 bg-museum-gold/70 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="font-body text-museum-walnut/40 text-xs tabular-nums shrink-0">
        {fmt(currentTime)} / {fmt(duration)}
      </span>
    </div>
  );
}
