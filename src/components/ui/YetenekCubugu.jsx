// Yetenek İlerleme Çubuğu Bileşeni

export const YetenekCubugu = ({ seviye, isim }) => {
  return (
    <div className="yetenek-kutusu">
      <div className="yetenek-detay">
        <span className="yetenek-isim">{isim}</span>
      </div>
      <div className="progress-kapsayici">
        <div className="progress-cubuk">
          <div className="progress-dolgu" style={{ width: `${seviye}%` }}>
            <span className="progress-yuzde">{seviye}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
