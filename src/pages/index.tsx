import { MainPage } from './main'
import { Provider } from 'react-redux'
import { store } from '@/shared/redux/store'

export const Routing = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  )
}
