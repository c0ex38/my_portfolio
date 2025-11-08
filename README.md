# 🚀 ÇAĞRI ÖZAY - Elite Portfolio

Cyberpunk temalı, modern ve interaktif kişisel portfolyo web sitesi.

## ✨ Özellikler

- 🎨 **Cyberpunk/Hacker Teması** - Neon renkler ve glitch efektleri
- 🔐 **Login Animasyonu** - Otomatik hacker-style login ekranı
- 🌧️ **Matrix Rain Effect** - Canvas tabanlı matrix yağmuru efekti
- 🎵 **Müzik Çalar** - Arka plan müziği kontrolü
- 🎯 **4 Farklı Tema** - Cyan, Pink, Green, Orange
- 📊 **İstatistikler Dashboard** - Animasyonlu sayılar
- 📈 **GitHub-Style Aktivite Grafiği** - Yıllık aktivite haritası
- 💼 **Proje Galerisi** - Modal ile detaylı proje gösterimi
- 📝 **Blog Bölümü** - Son yazılar
- 📧 **İletişim Formu** - EmailJS entegrasyonu
- 📱 **Tam Responsive** - Mobil, tablet ve desktop uyumlu

## 🛠️ Teknolojiler

- **HTML5** - Semantic markup
- **CSS3** - Modüler CSS yapısı (5 dosya)
- **Vanilla JavaScript** - Modüler JS yapısı (9 dosya)
- **EmailJS** - Form gönderimi için
- **Canvas API** - Matrix rain efekti için

## 📁 Proje Yapısı

```
my_portfolio/
├── index.html          # Ana HTML dosyası
├── config.js           # Tüm içerik ve ayarlar (merkezi yapılandırma)
├── css/
│   ├── base.css        # Reset, variables, fonts
│   ├── layout.css      # Container, grid, sections
│   ├── components.css  # Buttons, cards, forms
│   ├── animations.css  # Keyframes ve transitions
│   └── responsive.css  # Media queries
├── js/
│   ├── init.js         # Başlatma (placeholder)
│   ├── login-loader.js # Login UI yükleyici
│   ├── login.js        # Login animasyonu
│   ├── loaders.js      # İçerik yükleyiciler
│   ├── animations.js   # Animasyonlar ve efektler
│   ├── cursor.js       # Özel cursor
│   ├── matrix.js       # Matrix rain efekti
│   ├── music.js        # Müzik çalar
│   └── ui.js           # UI etkileşimleri
└── music.mp3           # Arka plan müziği
```

## 🚀 Kurulum

1. **Repository'yi klonlayın:**
```bash
git clone https://github.com/c0ex38/my_portfolio.git
cd my_portfolio
```

2. **HTTP Server ile çalıştırın:**
```bash
# Python ile
python3 -m http.server 8000

# Node.js ile
npx serve

# VSCode Live Server extension kullanabilirsiniz
```

3. **Tarayıcıda açın:**
```
http://localhost:8000
```

## ⚙️ Yapılandırma

Tüm içerik ve ayarlar `config.js` dosyasında merkezi olarak yönetilir:

- **Kişisel Bilgiler** - İsim, email, sosyal medya linkleri
- **İstatistikler** - Proje sayısı, commits, sertifikalar
- **Deneyimler** - İş geçmişi
- **Yetenekler** - Skill seviyeleri
- **Projeler** - Proje detayları
- **Blog Yazıları** - Blog postları
- **EmailJS Ayarları** - Form gönderimi için

### EmailJS Kurulumu

1. [EmailJS](https://www.emailjs.com/) hesabı oluşturun
2. `config.js` dosyasındaki `EMAILJS_CONFIG` değerlerini doldurun:
```javascript
const EMAILJS_CONFIG = {
  publicKey: "YOUR_PUBLIC_KEY",
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
};
```

## 🌐 Vercel'de Deploy

### Yöntem 1: Vercel CLI

```bash
# Vercel CLI kurulumu
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### Yöntem 2: GitHub Entegrasyonu

1. [Vercel](https://vercel.com) hesabı oluşturun
2. GitHub hesabınızı bağlayın
3. `my_portfolio` repository'sini seçin
4. Deploy butonuna tıklayın
5. Vercel otomatik olarak deploy edecek!

### Yöntem 3: Vercel Dashboard

1. Vercel dashboard'a gidin
2. "Add New Project" tıklayın
3. GitHub repository'nizi seçin
4. Framework Preset: **Other** seçin
5. Build Command: boş bırakın
6. Output Directory: `.` (nokta)
7. Deploy!

## 📝 Özelleştirme

### Tema Renklerini Değiştirme

`config.js` dosyasındaki `THEMES` objesini düzenleyin:

```javascript
const THEMES = {
  cyan: { primary: "#00ffff", secondary: "#ff00ff", tertiary: "#bd00ff" },
  // Yeni tema ekleyebilirsiniz
};
```

### Login Bilgilerini Değiştirme

`config.js` dosyasındaki `LOGIN_CONFIG` objesini düzenleyin:

```javascript
const LOGIN_CONFIG = {
  username: "admin",
  password: "********",
  // ...
};
```

### Animasyon Hızlarını Ayarlama

`config.js` dosyasındaki `LOGIN_CONFIG` ve `GENERAL_CONFIG` objelerini düzenleyin.

## 🎨 Özellikler Detayı

### Login Animasyonu
- Otomatik username/password typing
- Authentication adımları
- Hacker-style sistem penetrasyon ekranı
- Progress bar ve mesajlar

### Matrix Rain
- Canvas tabanlı animasyon
- Toggle ile açılıp kapatılabilir
- Responsive ve performanslı

### Müzik Çalar
- Play/Pause/Stop kontrolleri
- Volume kontrolü
- Status mesajları

### Tema Sistemi
- 4 farklı tema (Cyan, Pink, Green, Orange)
- CSS değişkenleri ile dinamik renk değişimi
- Kolayca yeni tema eklenebilir

## 📱 Responsive

Proje tam responsive tasarıma sahiptir:
- 📱 **Mobile** (< 768px)
- 📱 **Tablet** (768px - 1024px)
- 💻 **Desktop** (> 1024px)
- 🖥️ **Large Screens** (> 1400px)

## 🔧 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📄 Lisans

Bu proje kişisel kullanım için oluşturulmuştur.

## 👤 Yazar

**Çağrı Özay**
- Portfolio: [GitHub](https://github.com/c0ex38)
- Email: dev@cybermail.com

## 🙏 Teşekkürler

- [Orbitron](https://fonts.google.com/specimen/Orbitron) - Font
- [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono) - Font
- [EmailJS](https://www.emailjs.com/) - Email servisi

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

