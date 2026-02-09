import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Layout } from './layout/Layout.jsx'
import { PageTransition } from './PageTransition.jsx'
import { AnaSayfa } from './sections/AnaSayfa.jsx'
import { Yetenekler } from './sections/Yetenekler.jsx'
import { Hakkimda } from './sections/Hakkimda.jsx'
import { Projeler } from './sections/Projeler.jsx'
import { Iletisim } from './sections/Iletisim.jsx'

const AppContent = () => {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><AnaSayfa /></PageTransition>} />
          <Route path="/hakkimda" element={<PageTransition><Hakkimda /></PageTransition>} />
          <Route path="/projeler" element={<PageTransition><Projeler /></PageTransition>} />
          <Route path="/yetenekler" element={<PageTransition><Yetenekler /></PageTransition>} />
          <Route path="/iletisim" element={<PageTransition><Iletisim /></PageTransition>} />
          <Route path="*" element={<PageTransition><AnaSayfa /></PageTransition>} /> {/* Bilinmeyen yollar ana sayfaya yönlendirir */}
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}

export default AppContent
