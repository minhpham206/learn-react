import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editTodo, hideModalEdit, selectTodo } from '../../../features/todos/todoSlice'
import Modal from '../../Modal'
import { FormTodo } from '../FormTodo'

const DEFAULT_VALUE_TODO = {
  title: '',
  text: ''
}

const ModalEditItem = () => {
  const { isShowModalEdit, editingTodoInfo } = useSelector(selectTodo);
  const [formValues, setFormValues] = useState(DEFAULT_VALUE_TODO)

  const dispatch = useDispatch()

  useEffect(() => {
    if (editingTodoInfo && isShowModalEdit) setFormValues(editingTodoInfo)
  }, [editingTodoInfo, isShowModalEdit])


  const handleCancelModalEdit = () => {
    dispatch(hideModalEdit())
  }

  const handleChangeValue = (key, value) => {
    setFormValues((prevState) => ({ ...prevState, [key]: value }))
  }

  const handleConfirmEditItem = () => {
    dispatch(editTodo({ id: editingTodoInfo.id, todo: formValues }))
    dispatch(hideModalEdit())
  }

  return (
    <Modal
      visible={isShowModalEdit}
      title="Edit Item"
      textBtnOk="Edit"
      onCancel={handleCancelModalEdit}
      onOk={handleConfirmEditItem}
    >
      <FormTodo
        formValues={formValues}
        onChangeValue={handleChangeValue}
      />
    </Modal>
  )
}

export default ModalEditItem