import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainPage } from './main'
import { Provider } from 'react-redux'
import { store } from '@/shared/redux/store'

type PathsType = {
  path: string
  Component: () => JSX.Element
  children?: PathsType[]
}

const paths: PathsType[] = [
  {
    path: '/',
    Component: MainPage,
  },
]

export const Routing = () => {
  const router = createBrowserRouter(
    paths.map(({ path, Component, children }) => ({
      path,
      element: <Component />,

      children: children?.map(({ path, Component }) => ({
        path,
        element: <Component />,
      })),
    })),
  )

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}
