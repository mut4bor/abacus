import { stoneSkinType } from '@/shared/types/types'
import * as style from './style.module.scss'
import { ParametersFormStonePickSelectProps } from './types'

export const ParametersFormStonePickSelect = ({
  labelText,
  value,
  onChange,
}: ParametersFormStonePickSelectProps) => {
  const stoneMap = {
    blue: 'Голубой',
    brown: 'Коричневый',
  } as Record<stoneSkinType, string>

  return (
    <label className={style.label}>
      <span className={style.labelText}>{labelText}</span>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value as stoneSkinType)}
        className={style.input}
      >
        {Object.entries(stoneMap).map(([key, value], index) => (
          <option value={key} key={index}>
            {value}
          </option>
        ))}
      </select>
    </label>
  )
}
