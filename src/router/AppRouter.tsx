import { Navigate, Route, Routes } from 'react-router-dom'

import { Home } from '../mev/pages/home/Home';
import { About } from '../mev/pages/about/About';
import { Contact } from '../mev/pages/contact/Contact';
import { Footer } from '../mev/components/Footer';
import { Navbar } from '../mev/components/Navbar';
import { Donaciones } from '../mev/pages/donaciones/Donaciones';

export const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/*' element={<Navigate to ='/' />}/> 


        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="donations" element={<Donaciones/>}/>

    </Routes>
    <Footer/>
    </>
  )
}
