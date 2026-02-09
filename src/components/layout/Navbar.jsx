import { useNavigate, useLocation } from 'react-router-dom'
import { ThemeToggle } from '../ui/ThemeToggle.jsx'
import { LanguageSwitcher } from '../ui/LanguageSwitcher.jsx'
import { DilKullan } from '../../context/DilContext.jsx'
import profileData from '../../data/profile.json'
import { motion } from 'framer-motion'

export const Navbar = () => {
  const { cevir } = DilKullan()
  const navigate = useNavigate()
  const location = useLocation()

  const sayfaGit = (yol) => {
    navigate(yol)
  }

  return (
    <header className="ust-menu">
      <motion.div 
        className="icerik-kapsayici"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="menu-duzen">
          <motion.button 
            onClick={() => sayfaGit('/')} 
            className="logo-metin-buton"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="logo-metin">{profileData.name}</div>
          </motion.button>

          <nav className="menu-navigasyon">
            <motion.button
              onClick={() => sayfaGit('/')}
              className={`menu-buton ${location.pathname === '/' ? 'aktif' : ''}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {cevir('nav.home')}
            </motion.button>
            <motion.button
              onClick={() => sayfaGit('/hakkimda')}
              className={`menu-buton ${location.pathname === '/hakkimda' ? 'aktif' : ''}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {cevir('nav.about')}
            </motion.button>
            <motion.button
              onClick={() => sayfaGit('/projeler')}
              className={`menu-buton ${location.pathname === '/projeler' ? 'aktif' : ''}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {cevir('nav.projects')}
            </motion.button>
            <motion.button
              onClick={() => sayfaGit('/yetenekler')}
              className={`menu-buton ${location.pathname === '/yetenekler' ? 'aktif' : ''}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {cevir('nav.skills')}
            </motion.button>
            <motion.button
              onClick={() => sayfaGit('/iletisim')}
              className={`menu-buton ${location.pathname === '/iletisim' ? 'aktif' : ''}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {cevir('nav.contact')}
            </motion.button>
          </nav>

          <div className="buton-grubu">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </header>
  )
}
