# Ayşenur Dik - Kişisel Portföy

> Modern, animasyonlu ve responsive kişisel portföy web sitesi

[🔗 Canlı Demo](https://aysenurdik.vercel.app)

## ✨ Özellikler

- 🎨 **Modern Tasarım** - Glassmorphism, gradient ve zarif tipografi
- 🌙 **Tema Desteği** - Koyu/Açık mod ile göz dostu deneyim
- 🌍 **Çoklu Dil** - Türkçe ve İngilizce dil desteği
- 📱 **Responsive** - Tüm cihazlarda mükemmel görünüm
- ✨ **Animasyonlar** - Framer Motion ile akıcı sayfa geçişleri ve shimmer efektleri
- 💼 **Proje Vitrini** - Detaylı proje kartları ve modal görünüm
- 📧 **İletişim Formu** - Doğrulama içeren modern form tasarımı
- 📄 **CV İndirme** - Tek tıkla PDF indirme

## 🛠️ Teknolojiler

| Kategori | Teknoloji |
|----------|-----------|
| Frontend | React 18, JavaScript |
| Build Tool | Vite |
| Stil | CSS3, Tailwind CSS |
| Animasyon | Framer Motion |
| Routing | React Router DOM |
| İkonlar | Lucide React |

## 📁 Proje Yapısı

```
my-portfolio/
├── public/
│   ├── cv.pdf
│   └── images/
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, Layout
│   │   ├── sections/        # AnaSayfa, Hakkimda, Projeler, Yetenekler, Iletisim
│   │   ├── ui/              # Yeniden kullanılabilir UI bileşenleri
│   │   ├── AppContent.jsx
│   │   └── PageTransition.jsx   # Sayfa geçiş animasyonları
│   ├── context/             # Tema ve Dil context'leri
│   ├── data/                # JSON veri dosyaları ve çeviriler
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## 🚀 Kurulum

```bash
# Depoyu klonla
git clone https://github.com/nurdk43/my-portfolio.git

# Dizine geç
cd my-portfolio

# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev
```

Tarayıcıda aç: [http://localhost:5173](http://localhost:5173)

## 📜 Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusunu başlatır |
| `npm run build` | Üretim için derler |
| `npm run preview` | Derlenmiş uygulamayı önizler |

## 🎨 Öne Çıkan Özellikler

### Sayfa Geçiş Animasyonları
Framer Motion kullanılarak geliştirilmiş parıltılı (shimmer) sayfa geçişleri:
- Blur efektli giriş/çıkış animasyonları
- Radial gradient parıltı overlay
- Akıcı scale ve opacity geçişleri

### Responsive Tasarım
- Mobil öncelikli tasarım yaklaşımı
- Hamburger menü (mobil)
- Esnek grid sistemleri

### Tema Sistemi
- CSS değişkenleri ile kolay özelleştirme
- LocalStorage ile tercih kaydetme
- Otomatik sistem teması algılama

## 👩‍💻 Geliştirici

**Ayşenur Dik**
---
<p align="center">Built with 💕 by Ayşenur Dik</p>
