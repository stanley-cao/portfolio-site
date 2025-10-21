"use client";
import { useState, useEffect } from "react";

export default function SongSuggestion() {
  const [song, setSong] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/song")
      .then((res) => res.json())
      .then((data) => setSong(data.song || ""))
      .finally(() => setLoading(false));
  }, []);

  const handleAdd = async () => {
    if (!input.trim()) return;
    await fetch("/api/song", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ song: input.trim() }),
    });
    setSong(input.trim());
    setInput("");
  };

  return (
    <div className="w-full h-full border border-gray-700 rounded-md p-4">
      <h3 className="text-purple-400 text-lg font-semibold mb-3">
        Leave a song suggestion 🎶
      </h3>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a song name and artist..."
          className="flex-1 p-2 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-purple-500"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium"
        >
          Send
        </button>
      </div>

      <div className="mt-4">
        {song ? (
          <p className="text-gray-300 text-base">
            <span className="text-purple-400 font-semibold">Current suggestion:</span>{" "}
            {song}
          </p>
        ) : (
          <p className="text-gray-500 text-sm">
            No song suggested yet — be the first!
          </p>
        )}
      </div>
    </div>
  );
}