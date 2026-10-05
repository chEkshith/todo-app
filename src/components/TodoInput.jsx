import { useState } from "react";

export default function TodoInput({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTodo(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What do you need to do?"
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder-slate-400 shadow-inner outline-none transition-all duration-300 focus:border-indigo-400 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(99,102,241,0.25)]"
      />
      <button
        type="submit"
        className="flex items-center gap-1.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-200 hover:scale-105 hover:shadow-indigo-500/50 hover:brightness-110 active:scale-95"
      >
        <span>+</span> Add
      </button>
    </form>
  );
}