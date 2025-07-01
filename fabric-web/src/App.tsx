import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
function App() {
 

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-stone-50">
            <Header/>
            <main>
            <Routes>
                 
             <Route path="/" element={<Home />} />
             <Route path='/women' element={<Women/>} />
             <Route path='/Men' element={<Men/>}/>

            </Routes>
            </main>
            <Footer/>
          </div>
        </Router>
          
      </CartProvider>
     
    </AuthProvider>
  )
}

export default App
