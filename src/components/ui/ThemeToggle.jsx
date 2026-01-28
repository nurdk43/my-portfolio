// Tema Değiştirme Butonu

import { Sun, Moon } from 'lucide-react' // İkonlar
import { TemaKullan } from '../../context/TemaContext.jsx'

export const ThemeToggle = () => {
  const { temaDegistir, koyuMu } = TemaKullan()  // true: koyu tema, false: açık tema

  return (
    <button onClick={temaDegistir} className="tema-buton">
      {koyuMu ? <Sun className="tema-ikon" /> : <Moon className="tema-ikon" />}
    </button>
  )
}
