import TodoItem from "./TodoItem";

function TodoList({ todos, onToggle, onDelete, onEdit }) {
  if (todos.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="mb-3 text-4xl">📝</div>

        <p className="font-medium text-gray-600">
          No todos here
        </p>

        <p className="mt-1 text-sm text-gray-400">
          Add a task to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default TodoList;