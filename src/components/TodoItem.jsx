import { useState } from "react";
import { Check, Pencil, Trash2 } from "lucide-react";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    const trimmedText = editText.trim();

    if (!trimmedText) {
      return;
    }

    onEdit(todo.id, trimmedText);
    setIsEditing(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleEdit();
    }

    if (event.key === "Escape") {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3 transition hover:border-gray-200 hover:shadow-sm">
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        aria-label="Toggle todo"
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
          todo.completed
            ? "border-indigo-600 bg-indigo-600 text-white"
            : "border-gray-300 bg-white hover:border-indigo-500"
        }`}
      >
        {todo.completed && <Check size={14} strokeWidth={3} />}
      </button>

      {/* Todo Text / Edit Input */}
      {isEditing ? (
        <input
          autoFocus
          type="text"
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleEdit}
          className="min-w-0 flex-1 rounded-lg border border-indigo-300 bg-white px-2 py-1 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-100"
        />
      ) : (
        <span
          className={`min-w-0 flex-1 break-words text-sm ${
            todo.completed
              ? "text-gray-400 line-through"
              : "text-gray-700"
          }`}
        >
          {todo.text}
        </span>
      )}

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-1">
        <button
          onClick={() => setIsEditing(true)}
          aria-label="Edit todo"
          className="rounded-lg p-2 text-gray-400 transition hover:bg-indigo-50 hover:text-indigo-600"
        >
          <Pencil size={17} />
        </button>

        <button
          onClick={() => onDelete(todo.id)}
          aria-label="Delete todo"
          className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
        >
          <Trash2 size={17} />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;