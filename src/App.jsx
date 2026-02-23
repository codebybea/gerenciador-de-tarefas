import AddTask from './assets/components/AddTask'
import Tasks from './assets/components/Tasks'
import { useEffect, useState } from 'react'
import { v4 } from 'uuid';
import Title from './assets/components/Title';
import FilterTasks from './assets/components/FilterTasks';

function App() {
  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []);

  const [statusFilter, setStatusFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // Função para marcar uma tarefa como concluída ou não concluída
  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      // Precisa atualizar essa tarefa, então inverte o valor de isCompleted
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      // Não precisa atualizar essa tarefa, então retorna ela como está
      return task
    })
    setTasks(newTasks)
  }

  // Função para deletar uma tarefa
  function onDeleteTaskClick(taskid) {
    const newTasks = tasks.filter(task => task.id !== taskid)
    setTasks(newTasks)
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }

  //Filtro
  const filteredTasks = tasks.filter(task => {
    if (statusFilter === 'completed') {
      return task.isCompleted
    }

    if (statusFilter === 'pending') {
      return !task.isCompleted
    }

    return true
  })

  return (
    <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px] space-y-4'>
        <Title>Gerenciador de Tarefas</Title>
        <FilterTasks
          title="Filtrar por Status"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        />
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={filteredTasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  )
}

export default App
