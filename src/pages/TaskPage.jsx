import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../assets/components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get('title');
  const description = searchParams.get('description');
  return (

    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className='w-[500px] space-y-4'>
        <div className="flex justify-center relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-400 p-2 rounded-md text-white"
            onClick={() => navigate(-1)} >
            <ChevronLeftIcon />
          </button>
        </div>
        <Title>Detalhes da Tarefa</Title>
      </div>
      <div className="p-4 bg-slate-200 rounded-md shadow">
        <h2 className="text-xl font-bold text-slate-600">{title}</h2>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  )
}

export default TaskPage