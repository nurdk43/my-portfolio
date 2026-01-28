import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from './Navbar.jsx'
import { Footer } from './Footer.jsx'

export const Layout = ({ children }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="ana-icerik">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

