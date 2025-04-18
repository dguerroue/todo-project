import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from './Button';
import Checkbox from './Checkbox';

type Task = {
  _id: string,
  name: string,
  completed: boolean
}

type PostTask = {
  name: string,
  completed: boolean
}

const API_URL = 'http://localhost:5000/api/todos';

const getTodos = () => axios.get(API_URL);

const createTodo = (item: PostTask) => axios.post(API_URL, item);

const toggleTodo = (id: string) => axios.put(`${API_URL}/toggle/${id}`);

function App() {
  const tasks: Task[] = [];

  const [taskList, setTaskList] = useState(tasks);
  const [newTaskName, setNewTaskName] = useState('');

  async function fetchTodos() {
    try {
      const resp = await getTodos();
      setTaskList(resp.data)
    } catch (err) {
      console.error('Error fetchTodos: ', err);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  async function handleAddTask() {
    if(newTaskName.trim() === '') {
      return;
    }
  
    const newTask: PostTask = {
      name: newTaskName,
      completed: false
    };

    const postedTodo = await createTodo(newTask);

    setTaskList([...taskList, postedTodo.data]);

    setNewTaskName('');
  }

  async function handleTaskChange(task: Task, checked: boolean) {
    console.log('Task changed:', task, 'Checked:', checked);
    // Update the task state here if needed

    await toggleTodo(task._id);
  }

  return (
    <>
    <div className='h-dvh flex items-center justify-center'>
      <div className="text-left">

        <h1 className='text-4xl mb-8 font-medium'>React TODO !</h1>

        {/* todo-input */}
        <form className="flex items-end gap-2 mb-5" onSubmit={(e) => {e.preventDefault(); handleAddTask();}}>

          <label htmlFor="newTodo">
            <span className="text-sm font-medium text-gray-700">New Todo</span>

            <input
              type="text"
              id="newTodo"
              className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
              placeholder='Add a new task...'
              onChange={(e) => setNewTaskName(e.target.value)}
              value={newTaskName}
            />
          </label>

          <span
            className="inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm"
          >
            <Button type="submit">
              Add
            </Button>
          </span>
        </form>

        {
          /* todo-list */
          taskList.length === 0 ? (
            <p className="text-sm text-gray-500">Pas de taches en cours</p>
          ) : (
            <div className='flex flex-col gap-4'>
              {taskList.map((task: Task) => (
                <Checkbox key={task._id} label={task.name} id={task._id.toString()} checked={task.completed} onChange={(value) => handleTaskChange(task, value)} />
              ))}
            </div>
          )
        }

      </div>
    </div>
    </>
  )
}

export default App
