import { useAppSelector } from '@/shared/redux/hooks'
import * as style from './style.module.scss'
import { StoneProps } from './types'
import stoneBlue from '@/shared/images/stoneBlue.png'
import stoneBrown from '@/shared/images/stoneBrown.png'
import { stoneSkinType } from '@/shared/types/types'

export const Stone = ({ onClick }: StoneProps) => {
  const pickedStoneSkin = useAppSelector((store) => store.skin.pickedStoneSkin)

  const stoneMap = {
    blue: stoneBlue,
    brown: stoneBrown,
  } as Record<stoneSkinType, string>

  return (
    <button type="button" className={style.stone} onClick={onClick}>
      <img className={style.image} src={stoneMap[pickedStoneSkin]} alt="" />
    </button>
  )
}
