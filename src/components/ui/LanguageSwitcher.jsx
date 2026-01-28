// Dil Değiştirme Butonu

import { DilKullan } from '../../context/DilContext.jsx'

export const LanguageSwitcher = () => {
  const { dil, dilDegistir } = DilKullan()

  return (
    <button onClick={dilDegistir} className="dil-buton">
      {dil === 'tr' ? 'ENG' : 'TR'}
    </button>
  )
}
