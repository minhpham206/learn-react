import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hideModalDelete, removeTodo, selectTodo } from '../../../features/todos/todoSlice';
import Modal from '../../Modal';

const ModalDeleteItem = () => {
  const { isShowModalDelete, deletingId } = useSelector(selectTodo);

  const dispatch = useDispatch()
  const handleCancelModalDelete = () => {
    dispatch(hideModalDelete())
  }

  const handleConfirmDeleteItem = () => {
    dispatch(removeTodo({ id: deletingId }))
    dispatch(hideModalDelete())
  }

  return (
    <Modal
      visible={isShowModalDelete}
      title="Delete Item"
      textBtnOk="Delete"
      onCancel={handleCancelModalDelete}
      onOk={handleConfirmDeleteItem}
    >
      Delete Item
    </Modal>
  )
}

export default ModalDeleteItem