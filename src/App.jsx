import { useState, lazy, Suspense } from 'react'

// Styles imports
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Navbar from './components/Navbar'
import Footer from './components/Footer';
import { styles } from './components/constants';

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/Loader";
import { AnimatePresence } from 'framer-motion';

const Home = lazy(() => import ('./pages/Home'));
const About = lazy(() => import ('./pages/About'));
const ServicesPage = lazy(() => import ('./pages/ServicesPage'));

const LocationProvider = ({children}) => ((
  <AnimatePresence>{ children }</AnimatePresence>
))

const AnimatedRoutes = () => {
  const location = useLocation()
  const routeVariants = {
    initial:{
      opacity:0
    },
    final:{
      opacity:1
    }
  }
  return(
    <Routes location={location} key={location.key}>
      <Route index element={<Home animation={routeVariants} />} />
      <Route path='/about' element={<About animation={routeVariants} />} />
      <Route path='services' element={<ServicesPage animation={routeVariants} />} />
    </Routes>
  )
}

function App() {
  const [ menu, setMenu ] = useState(false)

  const handleMenu = () => ((
      setMenu(prev => !prev)
  ))

  return (
    <div className={`${menu ? 'overflow-y-hidden' : 'overflow-y-scroll'} w-screen h-screen overflow-x-hidde bg-stone-950 ${styles.maxWidth}`}>
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <Navbar  menu={menu} handleMenu={handleMenu} />
            <LocationProvider>
              <AnimatedRoutes />
            </LocationProvider>
            <Footer />
          </BrowserRouter>
        </Suspense>
    </div>
  )
}

export default App
