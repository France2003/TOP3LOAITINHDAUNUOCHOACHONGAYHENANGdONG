import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutClient from './component/LayoutClient'
import PageHome from './page/PageHome'

function App() {


  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/TyNa/' element={<LayoutClient />}>
            <Route index element={<PageHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
