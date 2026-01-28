// Tema Context - Açık/koyu tema geçişi için

import { createContext, useContext, useState, useEffect } from 'react'

const TemaContext = createContext()

// Tema context hook'u
export const TemaKullan = () => {
  const context = useContext(TemaContext)
  if (!context) {
    throw new Error('TemaKullan hook, TemaProvider içinde kullanılmalıdır')
  }
  return context
}

// Tema sağlayıcı bileşeni
export const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState('light')

  // İlk yüklemede localStorage'ı temizle ve açık tema ile başla
  useEffect(() => {
    localStorage.removeItem('theme')
    document.documentElement.classList.remove('dark')
  }, [])

  // Tema değişince kaydet ve DOM'u güncelle
  useEffect(() => {
    localStorage.setItem('theme', tema)
    if (tema === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [tema])

  // Tema değiştir
  const temaDegistir = () => {
    setTema(onceki => onceki === 'dark' ? 'light' : 'dark')
  }

  return (
    <TemaContext.Provider value={{ tema, temaDegistir, koyuMu: tema === 'dark' }}>
      {children}
    </TemaContext.Provider>
  )
}