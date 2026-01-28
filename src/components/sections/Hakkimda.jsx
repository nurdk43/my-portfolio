import { DilKullan } from '../../context/DilContext.jsx'
import profileData from '../../data/profile.json'


export const Hakkimda = () => {
  const { dil, cevir } = DilKullan()
  const aboutData = profileData.hakkimda


  return (
    <section className="hakkimda-bolum">
      <div className="icerik-kap-genis">
        <div className="hakkimda-ust-alan">
          <div className="profil-foto-kapsayici">
            <img
              src="/images/profil.jpg"
              alt="Profil Fotoğrafı"
              className="profil-foto"
            />
          </div>
        </div>

        <div className="kart-icerik">
          <p className="kart-metin">{aboutData.metin[dil]}</p>
        </div>

        {aboutData.egitim && aboutData.egitim.length > 0 && (
          <div className="kart-icerik">
            <h3 className="alt-baslik">{cevir('about.education') || cevir('egitim')}</h3>
            {aboutData.egitim.map((egitim, index) => (
              <div key={index} className="egitim-item">
                <h4 className="egitim-baslik">{egitim.bolum[dil]}</h4>
                <p className="egitim-detay">{egitim.okul[dil]} - {egitim.yillar[dil]}</p>
              </div>
            ))}
          </div>
        )}


        {aboutData.ilgiAlanlari && (
          <div className="kart-icerik">
            <h3 className="alt-baslik">{cevir('about.interests') || cevir('ilgiAlanlari')}</h3>
            <div className="ilgi-liste">
              {aboutData.ilgiAlanlari[dil].map((ilgi, index) => (
                <span key={index} className="ilgi-etiket">
                  {ilgi}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}