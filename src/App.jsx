import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState("all");

  // Cursor states
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isInsideCard, setIsInsideCard] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Global mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!cursorVisible) setCursorVisible(true);
    };

    const handleMouseLeave = () => setCursorVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorVisible]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos((currentTodos) => [...currentTodos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const appLetters = "Todo-APP".split("");

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070913] px-4 py-12 selection:bg-indigo-500/30 sm:px-6">

      {/* ========================================================
          1. TWO DISTINCT INTERACTIVE CURSORS
         ======================================================== */}
      {cursorVisible && (
        <>
          {/* CURSOR 1: Outer Background Glow (Active when outside the glass box) */}
          {!isInsideCard ? (
            <div
              className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
              style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
            >
              <div className="h-12 w-12 rounded-full border border-indigo-400/40 bg-indigo-500/15 shadow-[0_0_25px_rgba(129,140,248,0.4)] backdrop-blur-[2px]" />
              <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_3px_rgba(168,85,247,0.9)]" />
            </div>
          ) : (
            /* CURSOR 2: Task Box Precision Ring (Active when hovering inside the glass box) */
            <div
              className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
              style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
            >
              <div className="h-9 w-9 rounded-full border border-cyan-400/80 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.5)] backdrop-blur-[1px]" />
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_10px_2px_rgba(34,211,238,1)] animate-ping" />
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            </div>
          )}
        </>
      )}

      {/* ========================================================
          2. DYNAMIC MOVING BACKGROUND
         ======================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-float-slow absolute -left-28 -top-28 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-transparent blur-[120px]" />
        <div className="animate-float-reverse absolute -bottom-36 -right-28 h-[38rem] w-[38rem] rounded-full bg-gradient-to-tr from-purple-700/25 via-pink-600/20 to-transparent blur-[140px]" />
        <div className="animate-pulse-glow absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[110px]" />
      </div>

      {/* Main Column */}
      <div className="relative z-10 mx-auto max-w-2xl">

        {/* ========================================================
            3. CENTERED HEADER & ANIMATED TEXT ELEMENTS
           ======================================================== */}
        <header className="mb-8 flex flex-col items-center justify-center text-center">
          
          {/* Badge animation */}
          <div className="group mb-5 inline-flex cursor-default items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-xs font-medium text-indigo-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-indigo-400/50 hover:bg-white/15 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-ping" />
            <span className="transition-colors duration-300 group-hover:text-white">
              Stay focused. Get things done.
            </span>
          </div>

          {/* Centered Todo-APP Interactive Heading */}
          <div className="group relative inline-flex cursor-pointer justify-center select-none">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />

            <h1 className="relative flex justify-center text-5xl font-black tracking-tight text-white sm:text-6xl">
              {appLetters.map((char, index) => (
                <span
                  key={index}
                  className="inline-block transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-110 hover:!text-cyan-300 hover:!-translate-y-3.5 hover:!scale-125"
                  style={{ transitionDelay: `${index * 25}ms` }}
                >
                  <span className="bg-gradient-to-r from-white via-indigo-100 to-purple-200 bg-clip-text text-transparent transition-all duration-300 group-hover:from-indigo-300 group-hover:via-purple-200 group-hover:to-pink-300">
                    {char}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          {/* Subtitle animation */}
          <p className="mt-3 cursor-default text-sm text-slate-400 transition-all duration-300 hover:text-slate-200 hover:tracking-wide sm:text-base">
            Organize your tasks and make progress every day.
          </p>
        </header>

        {/* ========================================================
            4. ULTRA-GLASS TASK BOX (Cursor switches on entry)
           ======================================================== */}
        <div
          onMouseEnter={() => setIsInsideCard(true)}
          onMouseLeave={() => setIsInsideCard(false)}
          className="relative overflow-hidden rounded-3xl border border-white/[0.14] bg-gradient-to-b from-white/[0.09] to-white/[0.02] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.55),inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl transition-all duration-500 hover:border-white/25 sm:p-8"
        >
          {/* Top highlight shine */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          {/* Input component */}
          <TodoInput onAddTodo={addTodo} />

          {/* Animated Filter Buttons */}
          <div className="mt-6 flex justify-center gap-2 rounded-2xl border border-white/[0.08] bg-black/25 p-1.5 backdrop-blur-md">
            {["all", "active", "completed"].map((filterName) => (
              <button
                key={filterName}
                onClick={() => setFilter(filterName)}
                className={`transform rounded-xl px-5 py-2 text-sm font-medium capitalize transition-all duration-200 active:scale-95 ${
                  filter === filterName
                    ? "scale-105 bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 text-white shadow-[0_4px_16px_rgba(99,102,241,0.5),inset_0_1px_1px_rgba(255,255,255,0.35)]"
                    : "text-slate-400 hover:scale-105 hover:bg-white/[0.09] hover:text-white"
                }`}
              >
                {filterName}
              </button>
            ))}
          </div>

          {/* Todo List */}
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />

          {/* Animated Task Counter */}
          <div className="group mt-6 border-t border-white/[0.08] pt-5 text-center">
            <p className="cursor-default text-sm font-medium text-slate-400 transition-all duration-300 group-hover:scale-105 group-hover:text-indigo-300">
              {todos.length} {todos.length === 1 ? "task" : "tasks"}
            </p>
          </div>
        </div>

        {/* Animated Footer */}
        <p className="mt-6 cursor-default text-center text-xs text-slate-500 transition-all duration-300 hover:text-slate-300 hover:tracking-wider">
          Built with React & Tailwind CSS
        </p>
      </div>
    </div>
  );
}

export default App;