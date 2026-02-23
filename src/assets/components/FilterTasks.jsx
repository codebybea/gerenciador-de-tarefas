import { Funnel } from "lucide-react"

function FilterTasks({ title, value, onChange }) {
  return (
    <div className="p-6 bg-slate-200 rounded-md shadow">
      <div className="flex items-center gap-2 mb-4">
        <Funnel size={20} className="text-slate-600" />
        <h2 className="text-lg font-semibold text-slate-700">{title}</h2>
      </div>

      <select
        value={value}
        onChange={onChange}
        className="w-full p-2 rounded-md border border-slate-300"
      >
        <option value="all">Todas as tarefas</option>
        <option value="completed">Concluídas</option>
        <option value="pending">Pendentes</option>
      </select>
    </div>
  )
}

export default FilterTasks