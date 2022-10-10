import React from 'react'
import { useDispatch } from 'react-redux'
import { showModalCreate } from '../../features/todos/todoSlice'
import BaseButton from '../../components/BaseButton'
import ListItems from '../../components/TodosList/ListItems'
import './style.scss'
import ModalCreateItem from '../../components/TodosList/ModalCreateItem'
import ModalEditItem from '../../components/TodosList/ModalEditItem'
import ModalDeleteItem from '../../components/TodosList/ModalDeleteItem'
import Filter from '../../components/Filter'
import Search from '../../components/SearchBar'

const TodosList = () => {

  const dispatch = useDispatch()

  const handleClickAddItem = () => {
    dispatch(showModalCreate())
  }

  return (
    <div className='todos container'>
      <h3 className='todos__header'>TodosList</h3>
      <div className='todos__content'>
        <BaseButton
          onClick={handleClickAddItem}
          className='todos__content--btn-add'
        >
          Add Item
        </BaseButton>
        <Filter />
        <Search />
        <ListItems />
      </div>
      <ModalCreateItem />
      <ModalEditItem />
      <ModalDeleteItem />
    </div>
  )
}

export default TodosList