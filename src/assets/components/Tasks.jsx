import { CheckIcon, ChevronRightIcon, ListTodo, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams()
    query.set('title', task.title);
    query.set('description', task.description);
    navigate(`/task?${query}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <div className="flex items-center space-x-2 ">
        <ListTodo size={20} className="text-slate-600" />
        <h1 className="text-lg font-semibold text-slate-700">Tarefas</h1>
      </div>
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md flex items-center gap-2 ${task.isCompleted ? 'line-through' : ''}`}>
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)} className="hover:bg-slate-500 transition-colors">
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)} className="hover:bg-slate-500 transition-colors">
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
