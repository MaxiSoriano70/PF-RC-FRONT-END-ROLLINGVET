import styles from './css/app.module.css';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FooterVet from './components/FooterVet'
import HomePage from './pages/HomePage'
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';
import Error404Page from './pages/Error404Page';

function App() {

  return (
    <div className={styles.bodyPrincipal}>
      <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/nosotros' element={<NosotrosPage/>}/>
                <Route path='/contacto' element={<ContactoPage/>}/>
                <Route path='*' element={<Error404Page/>}/>
            </Routes>
      <FooterVet/>
    </div>
  )
}

export default App
