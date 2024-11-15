import { stoneSkinType } from '@/shared/types/types'

export type ParametersFormStonePickSelectProps = {
  labelText: string
  value: stoneSkinType
  onChange: (value: stoneSkinType) => void
}
