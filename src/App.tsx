import { RouteObject, useRoutes } from 'react-router-dom'

import constantRoutes from '@/router'
import RouterGuard from '@/router/RouterGuard'
import useRouteStore from '@/store/route.ts'

const App = () => {
  const { routes } = useRouteStore((state) => state)
  const element = useRoutes((routes.length ? routes : constantRoutes) as RouteObject[])
  return (
    <>
      <RouterGuard>{element}</RouterGuard>
    </>
  )
}

export default App
