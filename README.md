# Ayşenur Dik - Kişisel Portföy

## Genel Bakış
Frontend, backend ve full stack geliştirme alanlarında uzmanlaşmış bir yazılım geliştirici olan Ayşenur Dik'in projelerini, becerilerini ve bilgilerini sergileyen kişisel bir portföy web sitesidir. Modern ve kullanıcı dostu bir arayüzle tasarlanan bu uygulama, responsive tasarım sayesinde tüm cihazlarda sorunsuz çalışır.

## Özellikler
- Tüm cihazlarda çalışan duyarlı (responsive) tasarım
- Çoklu dil desteği (Türkçe ve İngilizce)
- Açıklamalar ve bağlantılarla proje sergileme
- Yeterlilik seviyeleriyle yetenekler bölümü
- İletişim formu ve sosyal medya bağlantıları
- Tema değiştirme (koyu/açık mod) desteği
- Modern ve etkileşimli kullanıcı arayüzü
- React Router DOM ile sayfa geçişleri

## Kullanılan Teknolojiler

- Frontend: React, JavaScript
- Framework: Vite
- Stil: CSS
- Routing: React Router DOM
- UI İkonları: Lucide React
- Geliştirme Ortamı: Node.js

## Proje Yapısı

```
my-portfolio/
├── public/
│   ├── cv.pdf
│   └── images/
│       ├── anaresim.jpg
│       ├── chat.jpg
│       ├── portfolio.jpg
│       ├── profil.jpg
│       ├── routella.jpg
│       └── tur.jpg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── Navbar.jsx
│   │   ├── sections/
│   │   │   ├── AnaSayfa.jsx
│   │   │   ├── Hakkimda.jsx
│   │   │   ├── Iletisim.jsx
│   │   │   ├── Projeler.jsx
│   │   │   └── Yetenekler.jsx
│   │   ├── ui/
│   │   │   ├── IletisimFormu.jsx
│   │   │   ├── LanguageSwitcher.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── ProjeKarti.jsx
│   │   │   ├── SocialLinks.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── YetenekCubugu.jsx
│   │   └── AppContent.jsx
│   ├── context/
│   │   ├── DilContext.jsx
│   │   └── TemaContext.jsx
│   ├── data/
│   │   ├── locales/
│   │   │   ├── en.json
│   │   │   └── tr.json
│   │   ├── profile.json
│   │   ├── projeler.json
│   │   └── yetenekler.json
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

### Ana Bileşenler

- **`App.jsx`**: Uygulamanın kök bileşeni, routing ve context sağlayıcılarını içerir
- **`AppContent.jsx`**: Ana sayfa yapısını ve route tanımlarını içerir
- **`Layout.jsx`**: Genel sayfa düzeni (Navbar ve Footer) sağlar
- **Section Bileşenleri**: Ana sayfa bölümlerini tanımlar (AnaSayfa, Hakkimda, Projeler, Yetenekler, Iletisim)
- **UI Bileşenleri**: Yeniden kullanılabilir kullanıcı arayüzü bileşenleri
- **Context Bileşenleri**: Tema ve dil yönetimi için global durum sağlar
- **Data Dosyaları**: Uygulama verilerini (projeler, yetenekler, profil bilgileri) içerir

## Kurulum ve Başlatma

1. Depoyu klonlayın:
   ```bash
   git clone <repository-url>
   ```

2. Proje dizinine gidin:
   ```bash
   cd my-portfolio
   ```

3. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

4. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

5. Tarayıcınızda şu adrese gidin:
   [http://localhost:5173](http://localhost:5173)

## Komut Dosyaları

- `npm run dev`: Geliştirme sunucusunu başlatır
- `npm run build`: Projeyi üretim için derler (dist klasörüne)
- `npm run preview`: Derlenmiş uygulamayı yerel sunucuda önizler

## Veri Yönetimi

Uygulama verileri JSON dosyaları aracılığıyla yönetilir:

- **`profile.json`**: Kişisel bilgiler, hakkımda, iletişim detayları ve sosyal medya bağlantıları
- **`projeler.json`**: Gösterilen projelerin detayları (başlık, açıklama, teknolojiler, bağlantılar)
- **`yetenekler.json`**: Yetenek kategorileri ve seviyeleri
- **`locales/`**: Dil dosyaları (Türkçe ve İngilizce çeviriler)

## Özellikler

### Çoklu Dil Desteği
Uygulama Türkçe ve İngilizce dillerinde kullanılabilir. Dil değişimi, dil değiştirme butonuyla yapılabilir.

### Tema Değiştirme
Koyu ve açık tema arasında geçiş yapabilen dinamik bir tema sistemi. Tercihler yerel depolamada saklanır.

### Projeler Bölümü
Projeler kartlar halinde sergilenir. Her proje kartı, başlık, açıklama, kullanılan teknolojiler ve GitHub/demo bağlantılarını içerir.

### Yetenekler Bölümü
Yetenekler kategorilere ayrılmış şekilde, ilerleme çubukları ile gösterilir.

### İletişim Formu
Doğrulama içeren iletişim formu ve sosyal medya bağlantıları.

## Geliştirme

Uygulama React ile geliştirilmiş modern bir SPA (Single Page Application) yapısındadır. Vite ile hızlı geliştirme ve derleme sağlanır.
