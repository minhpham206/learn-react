import React from 'react'
import BaseButton from '../../BaseButton'
import './style.scss'

const TodoItem = ({ title, id, text, onDeleteItem, backgroundColor = "black",  onEditItem }) => {
  return (
    <div
      className='todos-item'
      style={{ backgroundColor }}
    >
      <span className='todos-item__title'>{title}</span>
      <span>{text}</span>
      <i className="todos-item__btn-edit material-icons" onClick={() => onEditItem({ title, id, text, backgroundColor  })}>edit</i>
      <i className="todos-item__btn-close material-icons" onClick={() => onDeleteItem(id)}>close</i>
    </div>)
}

export default TodoItem