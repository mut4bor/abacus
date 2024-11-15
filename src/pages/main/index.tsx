import { useAppSelector } from '@/shared/redux/hooks'
import * as style from './style.module.scss'
import { Frame } from '@/widgets/frame'
import { ParametersForm } from '@/widgets/parameters-form'

export const MainPage = () => {
  const pipeCount = useAppSelector((store) => store.skin.pipeCount)

  return (
    <div className={style.container}>
      <Frame pipeCount={pipeCount} />
      <ParametersForm />
    </div>
  )
}
