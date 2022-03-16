import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Cover from './components/Cover'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex flex-col px-20">
      {/* Barra de navegación */}
      <Navbar />
      {/* Portada */}
      <Cover />
      {/* Sección Nosotros */}
      <About />
      {/* Sección de servicios */}
      <Services />
      {/* Sección contacto */}
      <Contact />
      {/* Pie de página */}
      <Footer />
    </div>
  )
}

export default App
