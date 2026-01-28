import { Mail, MapPin } from 'lucide-react'
import { DilKullan } from '../../context/DilContext.jsx'
import profileData from '../../data/profile.json'
import { IletisimFormu } from '../ui/IletisimFormu.jsx'

export const Iletisim = () => {
  const { dil, cevir } = DilKullan()

  return (
    <section className="iletisim-bolum">
      <div className="icerik-kap-genis">
        <h2 className="bolum-baslik">{cevir('contact.title') || cevir('iletisim')}</h2>
        <div className="iletisim-grid">
          <div className="iletisim-bilgi">
            <h3 className="bilgi-baslik">{cevir('contact.contactMe') || cevir('benimleIletisimeGecin')}</h3>
            <div className="bilgi-liste">
              <div>
                <Mail className="bilgi-ikon" />
                <div>
                  <p className="bilgi-etiket">{cevir('contact.email') || cevir('email')}</p>
                  <p className="bilgi-deger">{profileData.email}</p>
                </div>
              </div>
              <div>
                <MapPin className="bilgi-ikon" />
                <div>
                  <p className="bilgi-etiket">{cevir('contact.location') || cevir('konum')}</p>
                  <p className="bilgi-deger">{profileData.location}</p>
                </div>
              </div>
            </div>
          </div>

          <IletisimFormu dil={dil} cevir={cevir} />
        </div>
      </div>
    </section>
  )
}

