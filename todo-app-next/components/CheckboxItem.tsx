import { useMemo, useEffect, useState } from "react"
import { PutTask } from '../types';

import debounce from 'lodash.debounce';

type CheckboxProps = {
  id: string,
  label: string,
  completed: boolean,
  onChange?: (data: PutTask) => void
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export default function Checkbox(props: CheckboxProps) {
  const labelSlug = slugify(props.label) + props.id;
  const [isChecked, setIsChecked] = useState(props.completed);
  const [newLabel, setLabel] = useState(props.label);
  const { onChange, completed } = props;

  function handleCheckChange(newCompleted: boolean) {
    setIsChecked(newCompleted)
    if (onChange) {
      onChange({
        completed: newCompleted,
        name: props.label
      })
    }
  }

  const debouncedLabelChange = useMemo(() => {
    return debounce((value: string) => {
      if (onChange) {
        onChange({
          completed: completed,
          name: value
        });
      }
    }, 500); // 500ms de délai
  }, [onChange, completed]);

  function handleLabelChange(newLabel: string) {
    setLabel(newLabel);
    debouncedLabelChange(newLabel);
  }

  // Clean debounced function
  useEffect(() => {
    return () => {
      debouncedLabelChange.cancel();
    };
  }, [debouncedLabelChange]);

  return (
    <div className="checkbox-item flex gap-2 items-center">
      <label htmlFor={labelSlug} className="inline-flex items-center gap-3 cursor-pointer">
        <input type="checkbox" className="checkbox" id={labelSlug} checked={isChecked} onChange={(event) => handleCheckChange(event.target.checked)} />

      </label>

      {
        isChecked
          ? <span className="text-gray-700 font-medium line-through px-2">{props.label}</span>
          : <input type="text" value={newLabel} onChange={(event) => handleLabelChange(event.target.value)} className={`font-medium text-gray-700 border-0 py-0 px-2 w-full`} />
      }
      
    </div>
  )
}