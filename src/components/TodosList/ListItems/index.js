import React, { useEffect } from 'react'
import { fetchTodo, selectTodo, showModalDelete, showModalEdit } from '../../../features/todos/todoSlice';
import TodoItem from '../TodoItem'
import './style.scss'
import { useSelector, useDispatch } from 'react-redux';

const ListItems = () => {
  const { isLoading, listFilterTodos } = useSelector(selectTodo);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodo())
  }, [dispatch])

  const handleClickDeleteItem = (deletingId) => {
    dispatch(showModalDelete({ deletingId }))
  }

  const handleClickEditItem = (editingTodoInfo) => {
    dispatch(showModalEdit({ editingTodoInfo }))
  }

  return (
    <div className='todos-list'>
      {isLoading
        ? <div className='loader' />
        : listFilterTodos?.map((todo) => {
          return <TodoItem
            key={todo?.id}
            {...todo}
            onDeleteItem={handleClickDeleteItem}
            onEditItem={handleClickEditItem}
          />
        })}
    </div>
  )
}

export default ListItems