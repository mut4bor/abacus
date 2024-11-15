import * as style from './style.module.scss'
import { ParametersFormButtonProps } from './types'

export const ParametersFormButton = ({
  onClick,
}: ParametersFormButtonProps) => {
  return (
    <button className={style.button} type="button" onClick={onClick}>
      Применить
    </button>
  )
}
