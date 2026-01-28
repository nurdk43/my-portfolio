// tüm uygulamayı katmanlar
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { TemaProvider } from './context/TemaContext.jsx'
import { DilProvider } from './context/DilContext.jsx'
import AppContent from './components/AppContent.jsx'

function App() {
  return (
    <BrowserRouter>
      <DilProvider>
        <TemaProvider>
          <AppContent />
        </TemaProvider>
      </DilProvider>
    </BrowserRouter>
  )
}

export default App