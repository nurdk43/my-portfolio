// Yetenek İlerleme Çubuğu Bileşeni - Hızlı animasyon
import { motion } from 'framer-motion'

export const YetenekCubugu = ({ seviye, isim }) => {
  return (
    <div className="yetenek-kutusu">
      <div className="yetenek-detay">
        <span className="yetenek-isim">{isim}</span>
      </div>
      <div className="progress-kapsayici">
        <div className="progress-cubuk">
          <motion.div
            className="progress-dolgu"
            initial={{ width: 0 }}
            animate={{ width: `${seviye}%` }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2
            }}
          >
            <span className="progress-yuzde">{seviye}%</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
