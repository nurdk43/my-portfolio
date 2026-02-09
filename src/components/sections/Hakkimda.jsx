import { DilKullan } from '../../context/DilContext.jsx'
import profileData from '../../data/profile.json'
import { motion } from 'framer-motion'


export const Hakkimda = () => {
  const { dil, cevir } = DilKullan()
  const aboutData = profileData.hakkimda


  return (
    <motion.section 
      className="hakkimda-bolum"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="icerik-kap-genis">
        <motion.div 
          className="hakkimda-ust-alan"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="profil-foto-kapsayici">
            <motion.img
              src="/images/profil.jpg"
              alt="Profil Fotoğrafı"
              className="profil-foto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
            />
          </div>
        </motion.div>

        <motion.div 
          className="kart-icerik"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="kart-metin">{aboutData.metin[dil]}</p>
        </motion.div>

        {aboutData.egitim && aboutData.egitim.length > 0 && (
          <motion.div 
            className="kart-icerik"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="alt-baslik">{cevir('about.education') || cevir('egitim')}</h3>
            {aboutData.egitim.map((egitim, index) => (
              <motion.div 
                key={index} 
                className="egitim-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ x: 10, transition: { type: "spring", stiffness: 300 } }}
              >
                <h4 className="egitim-baslik">{egitim.bolum[dil]}</h4>
                <p className="egitim-detay">{egitim.okul[dil]} - {egitim.yillar[dil]}</p>
              </motion.div>
            ))}
          </motion.div>
        )}


        {aboutData.ilgiAlanlari && (
          <motion.div 
            className="kart-icerik"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3 className="alt-baslik">{cevir('about.interests') || cevir('ilgiAlanlari')}</h3>
            <div className="ilgi-liste">
              {aboutData.ilgiAlanlari[dil].map((ilgi, index) => (
                <motion.span 
                  key={index} 
                  className="ilgi-etiket"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {ilgi}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}