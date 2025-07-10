import styles from './css/app.module.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FooterVet from './components/FooterVet'
import HomePage from './pages/HomePage'
import NosotrosPage from './pages/NosotrosPage';

function App() {

  return (
    <div className={styles.bodyPrincipal}>
      <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/nosotros' element={<NosotrosPage/>}/>
            </Routes>
      <FooterVet/>
    </div>
  )
}

export default App
