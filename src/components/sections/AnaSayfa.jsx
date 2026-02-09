import { useState, useEffect } from 'react'
import { Download } from 'lucide-react'
import { SocialLinks } from '../ui/SocialLinks.jsx'
import { DilKullan } from '../../context/DilContext.jsx'
import profileData from '../../data/profile.json'
import { motion } from 'framer-motion'

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
    <motion.section 
      className="ana-bolum"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="icerik-kapsayici">
        <motion.div 
          className="metin-kapsayici"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="baslik-bir"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {profileData.name}
          </motion.h1>
          <motion.h2 
            className="baslik-iki daktilo-baslik"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {gosterilenMetin}
            <span className="imlec">|</span>
          </motion.h2>
          <motion.p 
            className="aciklama-metin"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {profileData.bio[dil]}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <SocialLinks sosyalMedya={profileData.social} email={profileData.email} />
          </motion.div>
          <motion.div 
            className="cv-kapsayici"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.a 
              href={profileData.cvFile} 
              download="Ayşenur_Dik_CV.pdf" 
              className="cv-indir-buton"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Download className="indir-ikon" />
              {cevir('hero.downloadCV') || cevir('cvIndir')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
