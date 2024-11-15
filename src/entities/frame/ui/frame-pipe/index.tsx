import { useAppSelector } from '@/shared/redux/hooks'
import * as style from './style.module.scss'
import { FramePipeProps } from './types'
import { pipeSkinType } from '@/shared/types/types'

export const FramePipe = ({ isLong }: FramePipeProps) => {
  const pickedPipeSkin = useAppSelector((store) => store.skin.pickedPipeSkin)

  const stoneMap = {
    gray: style.gray,
    red: style.red,
  } as Record<pipeSkinType, string>

  return (
    <div
      className={`${style.pipe} ${stoneMap[pickedPipeSkin]} ${isLong && style.isLong}`}
    ></div>
  )
}
