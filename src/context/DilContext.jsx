// Dil Context - Türkçe/İngilizce dil geçişi için

import { createContext, useContext, useState, useEffect } from 'react'
import trCeviriler from '../data/locales/tr.json'
import enCeviriler from '../data/locales/en.json'

const DilContext = createContext()

// Dil context hook'u
export const DilKullan = () => { // dil bilgilerini kullanmak için
  const context = useContext(DilContext)
  if (!context) {
    throw new Error('DilKullan hook, DilProvider içinde kullanılmalıdır')
  }
  return context
}

const ceviriler = {
  tr: trCeviriler,
  en: enCeviriler
}

// Dil sağlayıcı bileşeni
export const DilProvider = ({ children }) => {
  const [dil, setDil] = useState('en')

  // localStorage'dan dil al
  useEffect(() => {
    const kayitliDil = localStorage.getItem('language')
    if (kayitliDil === 'tr' || kayitliDil === 'en') {
      setDil(kayitliDil)
    }
  }, [])

  // Dil değişince kaydet
  useEffect(() => {
    localStorage.setItem('language', dil)
  }, [dil])

  // Çeviri fonksiyonu
  const cevir = (anahtar) => {
    const keys = anahtar.split('.')
    let deger = ceviriler[dil]
    for (const key of keys) {
      deger = deger?.[key]
      if (deger === undefined) break
    }
    return deger || ceviriler[dil]?.[anahtar] || anahtar
  }

  // Dil değiştir
  const dilDegistir = () => {
    setDil(onceki => onceki === 'tr' ? 'en' : 'tr')
  }

  return (
    <DilContext.Provider value={{ dil, dilDegistir, cevir }}>
      {children}
    </DilContext.Provider>
  )
}