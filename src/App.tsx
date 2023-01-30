import * as React from 'react'
import './assets/scss/App.scss'
import { Provider } from 'react-redux'
import generateStore from './redux/store'
import {router} from './Routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
  const store = generateStore()
  const routes = createBrowserRouter(router)
  return (
    <Provider store={store}>
      <React.Suspense fallback={<h2>Loading...</h2>}>
      <RouterProvider router={routes} />
      </React.Suspense>
    </Provider>
  )
}

export default App
