import { useEffect, useState } from 'react'
import * as style from './style.module.scss'
import {
  ParametersFormInput,
  ParametersFormButton,
  ParametersFormStonePickSelect,
  ParametersFormPipeSkinPickSelect,
} from '@/entities/parameters-form'
import {
  bottomStonesCountChanged,
  pickedPipeSkinChanged,
  pickedStoneSkinChanged,
  pipeCountChanged,
  topStonesCountChanged,
  useAppDispatch,
  useAppSelector,
} from '@/shared/redux/hooks'
import { pipeSkinType, stoneSkinType } from '@/shared/types/types'

export const ParametersForm = () => {
  const dispatch = useAppDispatch()

  const [pipeCount, setPipeCount] = useState('')
  const [topStonesCount, setTopStonesCount] = useState('')
  const [bottomStonesCount, setBottomStonesCount] = useState('')
  const [pickedSkin, setPickedSkin] = useState<stoneSkinType>('blue')
  const [pickedPipeSkin, setPickedPipeSkin] = useState<pipeSkinType>('gray')

  const {
    pipeCount: pipeCountStored,
    topStonesCount: topStonesCounStored,
    bottomStonesCount: bottomStonesCountStored,
  } = useAppSelector((store) => store.skin)

  useEffect(() => {
    setPipeCount(`${pipeCountStored}`)
    setTopStonesCount(`${topStonesCounStored}`)
    setBottomStonesCount(`${bottomStonesCountStored}`)
  }, [])

  return (
    <div className={style.container}>
      <ParametersFormInput
        labelText="Количество столбцов"
        value={pipeCount}
        onChange={setPipeCount}
      />

      <ParametersFormInput
        labelText="Количество камней сверху"
        value={topStonesCount}
        onChange={setTopStonesCount}
      />

      <ParametersFormInput
        labelText="Количество камней снизу"
        value={bottomStonesCount}
        onChange={setBottomStonesCount}
      />

      <ParametersFormStonePickSelect
        labelText="Скин камней"
        value={pickedSkin}
        onChange={setPickedSkin}
      />

      <ParametersFormPipeSkinPickSelect
        labelText="Скин рамки"
        value={pickedPipeSkin}
        onChange={setPickedPipeSkin}
      />

      <ParametersFormButton
        onClick={() => {
          dispatch(pipeCountChanged(pipeCount))
          dispatch(topStonesCountChanged(topStonesCount))
          dispatch(bottomStonesCountChanged(bottomStonesCount))
          dispatch(pickedStoneSkinChanged(pickedSkin))
          dispatch(pickedPipeSkinChanged(pickedPipeSkin))
        }}
      />
    </div>
  )
}
