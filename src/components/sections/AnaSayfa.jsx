import { Download } from 'lucide-react'
import { SocialLinks } from '../ui/SocialLinks.jsx'
import { DilKullan } from '../../context/DilContext.jsx'
import profileData from '../../data/profile.json'

export const AnaSayfa = () => {
  const { dil, cevir } = DilKullan()

  return (
    <section className="ana-bolum">
      <div className="icerik-kapsayici">
        <div className="metin-kapsayici">
          <h1 className="baslik-bir">{profileData.name}</h1>
          <h2 className="baslik-iki">{profileData.title}</h2>
          <p className="aciklama-metin">{profileData.bio[dil]}</p>
          <SocialLinks sosyalMedya={profileData.social} email={profileData.email} />
          <div className="cv-kapsayici">
            <a href={profileData.cvFile} download="Ayşenur_Dik_CV.pdf" className="cv-indir-buton">
              <Download className="indir-ikon" />
              {cevir('hero.downloadCV') || cevir('cvIndir')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

