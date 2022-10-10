import React from 'react'
import './style.scss'

const TYPE_INPUT = {
  TEXT: 'text',
  SELECT: 'select'
}

const COLOR = [
  {label: "Default", value: "default"}, 
  {label: "Red", value: "red"}, 
  {label: "Green", value: "green"}, 
  {label: "Blue", value: "blue"}, 
  {label: "Yellow", value: "yellow"}
]


const FormItem = ({ title, error, type = TYPE_INPUT.TEXT, options = [], ...rest }) => {
  return <div className='form-todo__item'>
    <span className='form-todo__item--title'>{title}</span>
    {type === TYPE_INPUT.TEXT && <input className='form-todo__item--input' {...rest} />}
    {type === TYPE_INPUT.SELECT && <select  {...rest}>
      {options?.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>}
    {error && <span className='form-todo__item--error'>{error}</span>}
  </div>
}

export const FormTodo = ({ formValues, onChangeValue }) => {
  return (
    <div className='form-todo'>
      <FormItem
        title="Title"
        value={formValues.title}
        onChange={(e) => onChangeValue("title", e.target.value)}
      />
      <FormItem
        title="Text"
        value={formValues.text}
        onChange={(e) => onChangeValue("text", e.target.value)}
      />
      <FormItem
        title="backgroundColor"
        value={formValues.color}
        type={TYPE_INPUT.SELECT}
        options={COLOR}
        onChange={(e) => onChangeValue("backgroundColor", e.target.value)}
      />
    </div>
  )
}