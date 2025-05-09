'use client';

import { useEffect, useState } from 'react';
import api from '../helpers/api';
import Button from '../components/base/Button';
import CheckboxItem from '../components/CheckboxItem';

import { Task, PostTask, PutTask } from '../types';
import ProtectedRoute from '@/components/function/ProtectedRoute';

// API calls
const getTodos = () => api.get('/todos');

const createTodo = (item: PostTask) => api.post('/todos', item);

// const toggleTodo = (id: string) => api.put(`/todos/toggle/${id}`);
const updateTodo = (id: string, data: PutTask) => api.put(`/todos/${id}`, data);

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

  async function handleTaskChange(task: Task, data: PutTask) {
    console.log('Task changed:', task, data);
    // Update the task state here if needed

    await updateTodo(task._id, data);
  }

  return (
    <ProtectedRoute>
      <div className='h-dvh flex flex-col items-center justify-center container mx-auto'>

          <h1 className="text-3xl font-bold text-center mb-8">React TODO !</h1>

          <div>
            <form className="mb-6" onSubmit={(e) => {e.preventDefault(); handleAddTask();}}>
              <label htmlFor="newTodo" className='label mb-2'>New Task</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  id="newTodo"
                  className="input"
                  placeholder='Add a new task...'
                  onChange={(e) => setNewTaskName(e.target.value)}
                  value={newTaskName}
                />
                <Button type="submit" className="btn">
                  Add
                </Button>
              </div>
            </form>

            {
              /* todo-list */
              taskList.length === 0 ? (
                <p className="text-sm text-gray-500">Pas de taches en cours</p>
              ) : (
                <div className='flex flex-col gap-4'>
                  {taskList.map((task: Task) => (
                    <CheckboxItem key={task._id} label={task.name} id={task._id.toString()} completed={task.completed} onChange={(data) => handleTaskChange(task, data)} />
                  ))}
                </div>
              )
            }
          </div>

        </div>
    </ProtectedRoute>
  )
}

export default App