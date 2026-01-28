import { useState, useEffect } from 'react'
import { Download } from 'lucide-react'
import { SocialLinks } from '../ui/SocialLinks.jsx'
import { DilKullan } from '../../context/DilContext.jsx'
import profileData from '../../data/profile.json'

export const AnaSayfa = () => {
  const { dil, cevir } = DilKullan()
  const [baslikIndex, setBaslikIndex] = useState(0)
  const [gosterilenMetin, setGosterilenMetin] = useState('')
  const [siliyor, setSiliyor] = useState(false)

  // Başlıkları JSON'dan al
  const basliklar = profileData.titles

  // Dil değişince baştan başla
  useEffect(() => {
    setBaslikIndex(0)
    setGosterilenMetin('')
    setSiliyor(false)
  }, [dil])

  useEffect(() => {
    const mevcutBaslik = basliklar[dil][baslikIndex]

    let timeout

    if (!siliyor) {
      // Yazma modu
      if (gosterilenMetin.length < mevcutBaslik.length) {
        timeout = setTimeout(() => {
          setGosterilenMetin(mevcutBaslik.slice(0, gosterilenMetin.length + 1))
        }, 100)
      } else {
        // Yazma bitti, 1 saniye bekle sonra silmeye başla
        timeout = setTimeout(() => {
          setSiliyor(true)
        }, 1000)
      }
    } else {
      // Silme modu
      if (gosterilenMetin.length > 0) {
        timeout = setTimeout(() => {
          setGosterilenMetin(gosterilenMetin.slice(0, -1))
        }, 50)
      } else {
        // Silme bitti, sonraki başlığa geç
        setSiliyor(false)
        setBaslikIndex((prev) => (prev + 1) % basliklar[dil].length)
      }
    }

    return () => clearTimeout(timeout)
  }, [gosterilenMetin, siliyor, baslikIndex, dil, basliklar])

  return (
    <section className="ana-bolum">
      <div className="icerik-kapsayici">
        <div className="metin-kapsayici">
          <h1 className="baslik-bir">{profileData.name}</h1>
          <h2 className="baslik-iki daktilo-baslik">
            {gosterilenMetin}
            <span className="imlec">|</span>
          </h2>
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
