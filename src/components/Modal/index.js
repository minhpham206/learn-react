import React from 'react'
import BaseButton from '../BaseButton'
import './style.scss'

const Modal = ({
  visible,
  title,
  children,
  footer = undefined,
  onCancel,
  onOk,
  isDisabledBtnOk = false,
  textBtnOk = "Ok"

}) => {
  const handleClickCancel = () => {
    if (typeof (onCancel) === 'function') onCancel()
  }
  const handleClickOk = () => {
    if (typeof (onOk) === 'function') onOk()
  }
  return (
    <>
      {visible && <div className='modal'>
        <div className='modal-content'>
          <div className='modal-content__header'>{title}</div>
          {children && <div className='modal-content__body'>{children}</div>}
          <div className='modal-content__footer'>
            {footer === undefined
              ? <>
                <BaseButton onClick={handleClickCancel} type="secondary">Cancel</BaseButton>
                <BaseButton onClick={handleClickOk} disabled={isDisabledBtnOk}>{textBtnOk}</BaseButton>
              </>
              : footer}
          </div>
        </div>
      </div>}
    </>
  )
}

export default Modal