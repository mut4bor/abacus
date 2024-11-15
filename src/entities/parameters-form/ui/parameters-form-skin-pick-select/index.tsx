import { pipeSkinType } from '@/shared/types/types'
import * as style from './style.module.scss'
import { ParametersFormPipeSkinPickSelectProps } from './types'

export const ParametersFormPipeSkinPickSelect = ({
  labelText,
  value,
  onChange,
}: ParametersFormPipeSkinPickSelectProps) => {
  const stoneMap = {
    red: 'Красный',
    gray: 'Серый',
  } as Record<pipeSkinType, string>

  return (
    <label className={style.label}>
      <span className={style.labelText}>{labelText}</span>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value as pipeSkinType)}
        className={style.input}
      >
        {Object.entries(stoneMap).map(([key, value]) => (
          <option value={key}>{value}</option>
        ))}
      </select>
    </label>
  )
}
