import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
 

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-stone-50">
            <Header/>
            <main>
            <Routes>
                 
              <h1>pattern & piece</h1>
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
