import { DilKullan } from '../../context/DilContext.jsx'
import skillsData from '../../data/yetenekler.json'
import { YetenekCubugu } from '../ui/YetenekCubugu.jsx'

export const Yetenekler = () => {
  const { dil, cevir } = DilKullan()

  return (
    <section className="yetenekler-bolum">
      <div className="icerik-kap-genis">
        <h2 className="bolum-baslik">{cevir('skills.title') || cevir('yeteneklerim')}</h2>
        <div className="yetenekler-grid">
          {skillsData.map((kategori, index) => (
            <div key={index} className="yetenek-kart">
              <h3 className="yetenek-baslik">{kategori.category[dil]}</h3>
              <div className="yetenek-liste">
                {kategori.items.map((yetenek, idx) => (
                  <YetenekCubugu key={idx} seviye={yetenek.level} isim={yetenek.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

