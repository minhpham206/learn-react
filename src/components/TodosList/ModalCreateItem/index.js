import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, hideModalCreate, selectTodo } from '../../../features/todos/todoSlice'
import Modal from '../../Modal'
import { FormTodo } from '../FormTodo'

const DEFAULT_VALUE_TODO = {
  title: '',
  text: ''
}

const ModalCreateItem = () => {
  const { isShowModalCreate } = useSelector(selectTodo);

  const dispatch = useDispatch()


  const handleCancelModalCreate = () => {
    dispatch(hideModalCreate())
  }

  const [formValues, setFormValues] = useState(DEFAULT_VALUE_TODO)

  const handleChangeValue = (key, value) => {
    setFormValues((prevState) => ({ ...prevState, [key]: value }))
  }

  const handleConfirmCreateItem = () => {
    dispatch(addTodo({ todo: { ...formValues, id: new Date().getTime() } }))
    dispatch(hideModalCreate())
  }

  return (
    <Modal
      visible={isShowModalCreate}
      title="Add Item"
      onCancel={handleCancelModalCreate}
      onOk={handleConfirmCreateItem}
    >
      <FormTodo
        formValues={formValues}
        onChangeValue={handleChangeValue}
      />
    </Modal>
  )
}

export default ModalCreateItem