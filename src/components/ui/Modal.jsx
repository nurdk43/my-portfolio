// Proje Detay Modalı

import { X, Github } from 'lucide-react'

export const Modal = ({ proje, acik, kapat, dil, cevir }) => {
  if (!acik) return null

  return (
    <div className="modal-overlay" onClick={kapat}>
      <div className="modal-icerik" onClick={(e) => e.stopPropagation()}>
        {/* Kapat butonu */}
        <button className="modal-kapat-buton" onClick={kapat}>
          <X className="kapat-ikon" />
        </button>

        {/* Proje resmi */}
        <div className="modal-resim-kap">
          {proje.image && (
            <img
              src={proje.image}
              alt={proje.title?.[dil] || proje.baslik?.[dil] || 'Proje'}
              className="modal-resim"
            />
          )}
        </div>

        {/* Proje bilgileri */}
        <div className="modal-bilgi">
          <h3 className="modal-baslik">
            {proje.title?.[dil] || proje.baslik?.[dil]}
          </h3>
          <p className="modal-aciklama">
            {proje.detayliAciklama?.[dil] || proje.description?.[dil] || proje.aciklama?.[dil]}
          </p>

          {/* Teknolojiler */}
          {(proje.technologies || proje.teknolojiler) && (proje.technologies || proje.teknolojiler).length > 0 && (
            <div className="teknoloji-etiketler">
              {(proje.technologies || proje.teknolojiler).map((tech, index) => (
                <span key={index} className="teknoloji-etiket">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* GitHub linki */}
          <div className="modal-butonlar">
            <a
              href={proje.githubUrl || proje.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-buton-link"
            >
              <button className="buton-ana">
                <Github className="buton-ikon" />
                {cevir('projects.github') || 'GitHub'}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
