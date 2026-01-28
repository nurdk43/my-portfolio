import { Routes, Route } from 'react-router-dom'
import { Layout } from './layout/Layout.jsx'
import { AnaSayfa } from './sections/AnaSayfa.jsx'

import { Yetenekler } from './sections/Yetenekler.jsx'
import { Hakkimda } from './sections/Hakkimda.jsx'
import { Projeler } from './sections/Projeler.jsx'
import { Iletisim } from './sections/Iletisim.jsx'

const AppContent = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/hakkimda" element={<Hakkimda />} />
        <Route path="/projeler" element={<Projeler />} />
        <Route path="/yetenekler" element={<Yetenekler />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="*" element={<AnaSayfa />} /> // Bilinmeyen yollar ana sayfaya yönlendirir
      </Routes>
    </Layout>
  )
}

export default AppContent
