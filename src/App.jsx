import './App.css'
import TaskList from './components/TaskList'

const App = () => {
  const tasks = [
    {id:1, title:'Apprendre React'},
    {id:2, title:'Apprendre Redux'},
    {id:3, title:'Apprendre React Router'},
    { id: 4, title: "Aller courir " }

  ]
  return (
    <div>
      <h1>Mes Taches</h1>
      <TaskList tasks={tasks} />
    </div>
  )
}
export default App
