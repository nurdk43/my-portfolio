// İletişim Formu Bileşeni

import { useState } from 'react'
import emailjs from '@emailjs/browser'

// EmailJS Ayarları
const EMAILJS_SERVICE_ID = 'service_70juq0m'
const EMAILJS_TEMPLATE_ID = 'template_ggna62m'
const EMAILJS_PUBLIC_KEY = '5rNhmDwZVeE239EeZ'

export const IletisimFormu = ({ dil, cevir }) => {
  // Form state
  const [formVerileri, setFormVerileri] = useState({
    isim: '',
    soyisim: '',
    email: '',
    mesaj: ''
  })
  const [butonYazisi, setButonYazisi] = useState(null)
  const [basariliMesaj, setBasariliMesaj] = useState(false)
  const [gonderiliyor, setGonderiliyor] = useState(false)
  const [hata, setHata] = useState(false)

  // Input değişikliği
  const inputDegistir = (e) => {
    const { name, value } = e.target
    setFormVerileri((onceki) => ({
      ...onceki,
      [name]: value
    }))
  }

  // Form gönderimi
  const formGonder = async (e) => {
    e.preventDefault()
    setGonderiliyor(true)
    setHata(false)

    // EmailJS ile email gönder
    const templateParams = {
      from_name: `${formVerileri.isim} ${formVerileri.soyisim}`,
      from_email: formVerileri.email,
      message: formVerileri.mesaj,
      to_name: 'Ayşenur'
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      setFormVerileri({ isim: '', soyisim: '', email: '', mesaj: '' })
      setBasariliMesaj(true)
      setTimeout(() => setBasariliMesaj(false), 5000)
    } catch (error) {
      console.error('EmailJS Hatası:', error)
      setHata(true)
      setTimeout(() => setHata(false), 5000)
    } finally {
      setGonderiliyor(false)
    }
  }

  return (
    <div className="form-wrapper">
      <div className="form-kart">
        <form onSubmit={formGonder} className="form-icerik">
          {/* İsim ve Soyisim */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="form-etiket">{cevir('contact.name')}</label>
              <input
                type="text"
                name="isim"
                value={formVerileri.isim}
                onChange={inputDegistir}
                onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇ\s]/g, '')}
                required
                className="form-girdi"
                placeholder={dil === 'en' ? 'Your Name' : 'Adınız'}
              />
            </div>
            <div className="flex-1">
              <label className="form-etiket">{cevir('contact.surname')}</label>
              <input
                type="text"
                name="soyisim"
                value={formVerileri.soyisim}
                onChange={inputDegistir}
                onInput={(e) => e.target.value = e.target.value.replace(/[^a-zA-ZğüşöçıİĞÜŞÖÇ\s]/g, '')}
                required
                className="form-girdi"
                placeholder={dil === 'en' ? 'Your Surname' : 'Soyadınız'}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="form-etiket">{cevir('contact.email')}</label>
            <input
              type="email"
              name="email"
              value={formVerileri.email}
              onChange={inputDegistir}
              required
              className="form-girdi"
              placeholder="email@example.com"
            />
          </div>

          {/* Mesaj */}
          <div>
            <label className="form-etiket">{cevir('contact.message')}</label>
            <textarea
              name="mesaj"
              value={formVerileri.mesaj}
              onChange={inputDegistir}
              required
              rows={4}
              className="form-girdi"
              placeholder={dil === 'en' ? 'Write your message here...' : 'Mesajınızı buraya yazın...'}
            />
          </div>

          <button type="submit" className="gonder-buton" disabled={gonderiliyor}>
            {gonderiliyor
              ? (dil === 'en' ? 'Sending...' : 'Gönderiliyor...')
              : cevir('contact.sendMessage')}
          </button>
        </form>
      </div>

      {/* Toast Bildirimleri - Sağ Üst Köşe */}
      {basariliMesaj && (
        <div className="toast-bildirim toast-basarili">
          <svg className="toast-ikon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <div className="toast-icerik">
            <p className="toast-baslik">
              {dil === 'en' ? 'Message Sent!' : 'Mesajınız Gönderildi!'}
            </p>
            <p className="toast-aciklama">
              {dil === 'en'
                ? 'I will get back to you as soon as possible.'
                : 'Sizinle en kısa sürede iletişime geçeceğim.'}
            </p>
          </div>
          <button className="toast-kapat" onClick={() => setBasariliMesaj(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}

      {hata && (
        <div className="toast-bildirim toast-hata">
          <svg className="toast-ikon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          <div className="toast-icerik">
            <p className="toast-baslik">
              {dil === 'en' ? 'Error!' : 'Hata!'}
            </p>
            <p className="toast-aciklama">
              {dil === 'en'
                ? 'Message could not be sent. Please try again.'
                : 'Mesaj gönderilemedi. Lütfen tekrar deneyin.'}
            </p>
          </div>
          <button className="toast-kapat" onClick={() => setHata(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}
