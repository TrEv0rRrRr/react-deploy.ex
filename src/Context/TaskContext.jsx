import {createContext, useState, useEffect} from 'react'
import {tasks as data} from "../data/Tasks"

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data);
  }, [])

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id != taskId))
  }

  const createTask = (task) => {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length + 1,
      description: task.description,
    }]);
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}>
      {props.children}
    </TaskContext.Provider>
    )
}

export default TaskContextProvider