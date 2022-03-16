import logo from '/src/assets/Logo-MW-fondo-oscuro.svg'
import { FaLinkedin, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 h-20 px-40 bg-cyan-900">
      <div className="flex items-center h-full">
        <img src={logo} className="h-10" alt="logo" id="logo-nav" />

        {/* Links Navegación */}
        <ul className="flex flex-1 pl-10 space-x-5">
          <li className="text-lg text-white hover:text-cyan-400 hover:underline underline-offset-2 active:text-cyan-600 cursor-pointer">
            Inicio
          </li>
          <li className="text-lg text-white hover:text-cyan-400 hover:underline underline-offset-2 active:text-cyan-600 cursor-pointer">
            Nosotros
          </li>
          <li className="text-lg text-white hover:text-cyan-400 hover:underline underline-offset-2 active:text-cyan-600 cursor-pointer">
            Servicios
          </li>
          <li className="text-lg text-white hover:text-cyan-400 hover:underline underline-offset-2 active:text-cyan-600 cursor-pointer">
            Contacto
          </li>
        </ul>

        {/* Links Redes */}
        <ul className="flex space-x-2">
          <li className="text-white hover:text-cyan-400 active:text-cyan-600 cursor-pointer">
            <a
              href="https://www.linkedin.com/company/mw-servicios-industriales"
              target="_blank"
              rel="nofollow noopener noreferer"
            >
              <FaLinkedin className="h-6 w-6"/>
            </a>
          </li>
          <li className="text-white hover:text-cyan-400 active:text-cyan-600 cursor-pointer">
            <a
              href="https://www.instagram.com/mwserviciosindustriales?r=nametag"
              target="_blank"
              rel="nofollow noopener noreferer"
            >
              <FaInstagram className="h-6 w-6"/>
            </a>
          </li>
          <li className="text-white hover:text-cyan-400 active:text-cyan-600 cursor-pointer">
            <a
              href="https://wa.me/+543875185202"
              target="_blank"
              rel="nofollow noopener noreferer"
            >
              <FaWhatsapp className="h-6 w-6"/>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
