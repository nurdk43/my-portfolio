// Yetenekler Bölümü - Basit ve hızlı animasyonlar
import { DilKullan } from '../../context/DilContext.jsx'
import skillsData from '../../data/yetenekler.json'
import { YetenekCubugu } from '../ui/YetenekCubugu.jsx'
import { motion } from 'framer-motion'

export const Yetenekler = () => {
  const { dil, cevir } = DilKullan()

  return (
    <motion.section
      className="yetenekler-bolum"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="icerik-kap-genis">
        <h2 className="bolum-baslik">
          {cevir('skills.title') || cevir('yeteneklerim')}
        </h2>

        <div className="yetenekler-grid">
          {skillsData.map((kategori, index) => (
            <motion.div
              key={index}
              className="yetenek-kart"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(236, 72, 153, 0.25)"
              }}
            >
              <h3 className="yetenek-baslik">{kategori.category[dil]}</h3>
              <div className="yetenek-liste">
                {kategori.items.map((yetenek, idx) => (
                  <YetenekCubugu key={idx} seviye={yetenek.level} isim={yetenek.name} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
