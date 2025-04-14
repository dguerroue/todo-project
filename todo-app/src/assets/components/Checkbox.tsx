import { useState } from "react"

type CheckboxProps = {
  id: string,
  label: string,
  checked: boolean,
  onChange?: (checked: boolean) => void
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export default function Checkbox(props: CheckboxProps) {
  const labelSlug = slugify(props.label) + props.id
  const [isChecked, setIsChecked] = useState(props.checked)

  function handleChange(checked: boolean) {
    setIsChecked(checked)
    if (props.onChange) {
      props.onChange(checked)
    }
  }

  return (
      <label htmlFor={labelSlug} className="inline-flex items-center gap-3 cursor-pointer">
        <input type="checkbox" className="size-5 rounded border-gray-300 shadow-sm cursor-pointer" id={labelSlug} checked={isChecked} onChange={(event) => handleChange(event.target.checked)} />

        <span className={`font-medium text-gray-700 ${isChecked ? 'line-through' : ''}`}>{props.label}</span>
      </label>
  )
}