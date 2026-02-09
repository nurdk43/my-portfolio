import { useState } from 'react'
import { DilKullan } from '../../context/DilContext.jsx'
import projectsData from '../../data/projeler.json'
import { ProjeKarti } from '../ui/ProjeKarti.jsx'
import { Modal } from '../ui/Modal.jsx'
import { motion } from 'framer-motion'

export const Projeler = () => {
  const { dil, cevir } = DilKullan()
  const [seciliKategori, setSeciliKategori] = useState('Tumu')
  const [seciliProje, setSeciliProje] = useState(null)
  const [modalAcik, setModalAcik] = useState(false)

  const kategoriler = ['Tumu', ...new Set(projectsData.map(p => p.category).filter(Boolean))]

  const filtrelenmisProjeler = seciliKategori === 'Tumu'
    ? projectsData
    : projectsData.filter(p => p.category === seciliKategori)

  const projeAc = (proje) => {
    setSeciliProje(proje)
    setModalAcik(true)
  }

  const projeKapat = () => {
    setModalAcik(false)
    setSeciliProje(null)
  }

  return (
    <motion.section 
      className="projeler-bolum"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="icerik-kapsayici">
        <motion.h2 
          className="bolum-baslik"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {cevir('projects.title') || 'Projelerim'}
        </motion.h2>

        <motion.div 
          className="filtre-butonlar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {kategoriler.map((kategori, index) => (
            <motion.button
              key={kategori}
              onClick={() => setSeciliKategori(kategori)}
              className={`filtre-buton ${seciliKategori === kategori ? 'aktif' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {kategori}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="projeler-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {filtrelenmisProjeler.map((proje, index) => (
            <motion.div
              key={proje.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <ProjeKarti
                proje={proje}
                dil={dil}
                cevir={cevir}
                onClick={() => projeAc(proje)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      {seciliProje && (
        <Modal
          proje={seciliProje}
          acik={modalAcik}
          kapat={projeKapat}
          dil={dil}
          cevir={cevir}
        />
      )}
    </motion.section>
  )
}

