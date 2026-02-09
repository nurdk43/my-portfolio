// İletişim Bölümü - Basit ve hızlı animasyonlar
import { Mail, MapPin } from 'lucide-react'
import { DilKullan } from '../../context/DilContext.jsx'
import profileData from '../../data/profile.json'
import { IletisimFormu } from '../ui/IletisimFormu.jsx'
import { motion } from 'framer-motion'

export const Iletisim = () => {
  const { dil, cevir } = DilKullan()

  return (
    <motion.section
      className="iletisim-bolum"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="icerik-kap-genis">
        <h2 className="bolum-baslik">
          {cevir('contact.title') || cevir('iletisim')}
        </h2>

        <div className="iletisim-grid">
          <motion.div
            className="iletisim-bilgi"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="bilgi-baslik">
              {cevir('contact.contactMe') || cevir('benimleIletisimeGecin')}
            </h3>

            <div className="bilgi-liste">
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="bilgi-ikon" />
                <div>
                  <p className="bilgi-etiket">{cevir('contact.email') || cevir('email')}</p>
                  <p className="bilgi-deger">{profileData.email}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="bilgi-ikon" />
                <div>
                  <p className="bilgi-etiket">{cevir('contact.location') || cevir('konum')}</p>
                  <p className="bilgi-deger">{profileData.location}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <IletisimFormu dil={dil} cevir={cevir} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
