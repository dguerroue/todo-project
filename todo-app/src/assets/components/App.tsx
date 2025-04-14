import { useState } from 'react'
import Button from './Button'
import Checkbox from './Checkbox'

type Task = {
  id: number,
  label: string,
  checked: boolean
}

function App() {
  const [count, setCount] = useState(0);

  const tasks = [
    // {
    //   id: 1,
    //   label: 'Manger des chips',
    //   checked: true
    // },
    // {
    //   id: 2,
    //   label: 'Boire un café',
    //   checked: false
    // },
    // {
    //   id: 3,
    //   label: 'Regarder un film',
    //   checked: false
    // },
    // {
    //   id: 4,
    //   label: 'Coder',
    //   checked: true
    // },
    // {
    //   id: 5,
    //   label: 'Dormir',
    //   checked: false
    // }
  ];

  const [taskList, setTaskList] = useState(tasks);
  const [newTaskLabel, setNewTaskLabel] = useState('');

  function handleAddTask() {
    if(newTaskLabel.trim() === '') {
      return;
    }
  
    const newTask: Task = {
      id: taskList.length + 1,
      label: newTaskLabel,
      checked: false
    };

    setTaskList([...taskList, newTask]);

    setNewTaskLabel('');
  }

  function handleTaskChange(task: Task, checked: boolean) {
    console.log('Task changed:', task, 'Checked:', checked);
    // Update the task state here if needed
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
              onChange={(e) => setNewTaskLabel(e.target.value)}
              value={newTaskLabel}
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
              {taskList.map(task => (
                <Checkbox key={task.id} label={task.label} id={task.id.toString()} checked={task.checked} onChange={(value) => handleTaskChange(task, value)} />
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
