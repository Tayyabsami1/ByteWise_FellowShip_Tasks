import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout,Feed,SearchFeed,VideoDetail,ChannelDetail } from "./Pages"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Feed/>,
        },
        {
          path:"/search/:id",
          element:<SearchFeed/>,
        },
        {
          path:"/video/:id",
          element:<VideoDetail/>,
        },
        {
          path:"/channel/:id",
          element:<ChannelDetail/>,
        },

      ]

    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
