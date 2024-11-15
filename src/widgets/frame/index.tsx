import { pipeSkinType } from '@/shared/types/types'
import * as style from './style.module.scss'
import { FrameProps } from './types'
import { FramePipeContainer } from '@/entities/frame'
import { useAppSelector } from '@/shared/redux/hooks'

export const Frame = ({ pipeCount }: FrameProps) => {
  const { pickedPipeSkin, topStonesCount, bottomStonesCount } = useAppSelector(
    (store) => store.skin,
  )

  const frameMap = {
    gray: style.gray,
    red: style.red,
  } as Record<pipeSkinType, string>

  return (
    <div className={`${style.container} ${frameMap[pickedPipeSkin]}`}>
      <div className={style.topPipes}>
        {Array.from({ length: pipeCount }).map((_, index) => (
          <FramePipeContainer stonesCount={topStonesCount} key={index} />
        ))}
      </div>

      <div className={`${style.centerPipe} ${frameMap[pickedPipeSkin]}`}></div>

      <div className={style.bottomPipes}>
        {Array.from({ length: pipeCount }).map((_, index) => (
          <FramePipeContainer stonesCount={bottomStonesCount} key={index} />
        ))}
      </div>
    </div>
  )
}
