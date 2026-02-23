import { useState } from "react";
import { CircleCheckBig } from "lucide-react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // Função para adicionar uma nova tarefa
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <div className="flex items-center space-x-2">
        <CircleCheckBig size={20} className=" text-slate-600" />
        <h1 className="text-lg font-semibold text-slate-700">Adicionar Tarefa</h1>
      </div>

      <Input type="text"
        placeholder="Adicione o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)} z
      />

      <Input type="text"
        placeholder="Adicione a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert('Por favor, preencha o título e a descrição da tarefa');
          }
          onAddTaskSubmit(title, description)
          setTitle('')
          setDescription('')
        }}
        className=" py-2 px-4 border font-medium border-slate-500 rounded-md bg-slate-500 text-white hover:bg-slate-600 flex gap-2 items-center justify-center"
      >
        Adicionar
      </button>
    </div >
  )
}

export default AddTask;