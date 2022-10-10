import React, { useMemo } from 'react'
import './style.scss'

const BUTTON_TYPES = {
  PRIMARY: "primary",
  DANGER: "danger",
  SECENDARY: 'secondary'
}

const buttonClassNameForType = {
  [BUTTON_TYPES.PRIMARY]: "button-primary",
  [BUTTON_TYPES.DANGER]: "button-danger",
  [BUTTON_TYPES.SECENDARY]: "button-secondary"
}

const BaseButton = ({ className, children, type = BUTTON_TYPES.PRIMARY, ...rest }) => {
  const classNameButton = useMemo(() => {
    return className
      ? ["button", buttonClassNameForType[type], className].join(' ')
      : ["button", buttonClassNameForType[type]].join(' ')
  }, [className, type])
  return (
    <button
      {...rest}
      className={classNameButton}
    >
      {children}
    </button>
  )
}

export default BaseButton