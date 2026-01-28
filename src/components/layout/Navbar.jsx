import { useNavigate, useLocation } from 'react-router-dom'
import { ThemeToggle } from '../ui/ThemeToggle.jsx'
import { LanguageSwitcher } from '../ui/LanguageSwitcher.jsx'
import { DilKullan } from '../../context/DilContext.jsx'
import profileData from '../../data/profile.json'

export const Navbar = () => {
  const { cevir } = DilKullan()
  const navigate = useNavigate()
  const location = useLocation()

  const sayfaGit = (yol) => {
    navigate(yol)
  }

  return (
    <header className="ust-menu">
      <div className="icerik-kapsayici">
        <div className="menu-duzen">
          <button onClick={() => sayfaGit('/')} className="logo-metin-buton">
            <div className="logo-metin">{profileData.name}</div>
          </button>

          <nav className="menu-navigasyon">
            <button
              onClick={() => sayfaGit('/')}
              className={`menu-buton ${location.pathname === '/' ? 'aktif' : ''}`}
            >
              {cevir('nav.home')}
            </button>
            <button
              onClick={() => sayfaGit('/hakkimda')}
              className={`menu-buton ${location.pathname === '/hakkimda' ? 'aktif' : ''}`}
            >
              {cevir('nav.about')}
            </button>
            <button
              onClick={() => sayfaGit('/projeler')}
              className={`menu-buton ${location.pathname === '/projeler' ? 'aktif' : ''}`}
            >
              {cevir('nav.projects')}
            </button>
            <button
              onClick={() => sayfaGit('/yetenekler')}
              className={`menu-buton ${location.pathname === '/yetenekler' ? 'aktif' : ''}`}
            >
              {cevir('nav.skills')}
            </button>
            <button
              onClick={() => sayfaGit('/iletisim')}
              className={`menu-buton ${location.pathname === '/iletisim' ? 'aktif' : ''}`}
            >
              {cevir('nav.contact')}
            </button>
          </nav>

          <div className="buton-grubu">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
