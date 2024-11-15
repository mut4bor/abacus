import * as style from './style.module.scss'
import { Stone } from '@/entities/stone'
import { FramePipe } from '../frame-pipe'
import { FramePipeContainerProps } from './types'
import { Fragment, useState } from 'react'

export const FramePipeContainer = ({
  stonesCount,
}: FramePipeContainerProps) => {
  const [pickedStone, setPickedStone] = useState<number>(-1)

  return (
    <div className={style.pipe}>
      {Array.from({ length: stonesCount }).map((_, index) => (
        <Fragment key={index}>
          {index === 0 && <FramePipe isLong={pickedStone === -1} />}
          <Stone
            onClick={() => {
              if (pickedStone === index) {
                setPickedStone(index - 1)
                return
              }
              setPickedStone(index)
            }}
          />
          <FramePipe isLong={pickedStone === index} />
        </Fragment>
      ))}
    </div>
  )
}
