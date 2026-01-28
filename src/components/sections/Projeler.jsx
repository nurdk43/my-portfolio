import { useState } from 'react'
import { DilKullan } from '../../context/DilContext.jsx'
import projectsData from '../../data/projeler.json'
import { ProjeKarti } from '../ui/ProjeKarti.jsx'
import { Modal } from '../ui/Modal.jsx'

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
    <section className="projeler-bolum">
      <div className="icerik-kapsayici">
        <h2 className="bolum-baslik">{cevir('projects.title') || 'Projelerim'}</h2>

        <div className="filtre-butonlar">
          {kategoriler.map((kategori) => (
            <button
              key={kategori}
              onClick={() => setSeciliKategori(kategori)}
              className={`filtre-buton ${seciliKategori === kategori ? 'aktif' : ''}`}
            >
              {kategori}
            </button>
          ))}
        </div>

        <div className="projeler-grid">
          {filtrelenmisProjeler.map((proje) => (
            <ProjeKarti
              key={proje.id}
              proje={proje}
              dil={dil}
              cevir={cevir}
              onClick={() => projeAc(proje)}
            />
          ))}
        </div>
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
    </section>
  )
}

