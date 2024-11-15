import * as style from './style.module.scss'
import { ParametersFormInputProps } from './types'

export const ParametersFormInput = ({
  value,
  onChange,
  labelText,
}: ParametersFormInputProps) => {
  return (
    <label className={style.label}>
      <span className={style.labelText}>{labelText}</span>
      <input
        className={style.input}
        type="number"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}
