
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FooterVet from './components/FooterVet'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
      <FooterVet/>
    </>
  )
}

export default App
