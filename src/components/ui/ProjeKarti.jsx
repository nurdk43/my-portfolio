// Proje Kartı Bileşeni

import { Github, ExternalLink } from 'lucide-react'

export const ProjeKarti = ({ proje, dil, cevir, onClick }) => {
  const title = proje.title?.[dil] || proje.title || proje.baslik?.[dil] || proje.baslik
  const description = proje.description?.[dil] || proje.description || proje.aciklama?.[dil] || proje.aciklama
  const technologies = proje.technologies || proje.teknolojiler || []
  const githubUrl = proje.githubUrl || proje.githubLink

  return (
    <div className="proje-kart" onClick={onClick}>
      {/* Proje resmi */}
      {proje.image ? (
        <div className="proje-resim">
          <img src={proje.image} alt={title || 'Proje'} className="resim-icerik" />
        </div>
      ) : null}

      {/* Kart içeriği */}
      <div className="proje-icerik">
        <h3 className="kart-baslik">{title}</h3>
        <p className="kart-aciklama">{description}</p>

        {/* Teknolojiler */}
        {technologies && technologies.length > 0 && (
          <div className="teknoloji-etiketler">
            {technologies.map((tech, index) => (
              <span key={index} className="teknoloji-etiket">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* GitHub butonu */}
      <div className="kart-alt">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} //butona tıklayınca sadece link çalışır, modal açılmaz
            className="buton-link-tam"
          >
            <button className="buton-ana">
              <Github className="buton-ikon" />
              {cevir('projects.github') || 'GitHub'}
            </button>
          </a>
        )}
      </div>
    </div>
  )
}
