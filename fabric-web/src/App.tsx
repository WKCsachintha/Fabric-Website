import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
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
