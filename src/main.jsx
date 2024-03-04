import ReactDOM from 'react-dom/client'
import '@/assets/css/tailwind.css'
import { RouterProvider } from 'react-router-dom'
import routes from "@/routers"
import {store} from "@/app/store"
import {Provider} from "react-redux"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={routes}/>
  </Provider>
)
