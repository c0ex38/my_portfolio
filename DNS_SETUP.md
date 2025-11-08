# 🌐 DNS Yapılandırma Rehberi - cagriozay.com

## Natro.com DNS Ayarları

### ✅ Mevcut Durum
- `www.cagriozay.com` → CNAME → `6d826e64f9d0227f.vercel-dns-017.com` ✅ (Doğru)
- `cagriozay.com` (kök domain) → A kaydı eksik ❌

### 🔧 Yapılacak Değişiklikler

#### 1. Kök Domain (cagriozay.com) için A Kaydı Ekleme

**Natro.com Panelinde:**

1. **DNS Yönetimi** bölümüne gidin
2. **"+ Yeni Kayıt Ekle"** butonuna tıklayın
3. Formu doldurun:
   - **Tipi (Type):** `A`
   - **İsim (Name):** `@` veya **boş bırakın** (kök domain için)
   - **İçerik (Content):** `216.198.79.1`
   - **TTL:** Varsayılan değeri kullanın (3600)
4. **"Kaydet"** veya **"Ekle"** butonuna tıklayın

#### 2. www Alt Domain Kontrolü

`www.cagriozay.com` için CNAME kaydı zaten doğru görünüyor:
- **Tipi:** CNAME
- **İsim:** `www`
- **İçerik:** `6d826e64f9d0227f.vercel-dns-017.com`

Bu kayda dokunmanıza gerek yok.

### 📋 Son Durum (Olması Gereken)

| Tipi | İsim | İçerik | Açıklama |
|------|------|--------|----------|
| A | `@` (boş) | `216.198.79.1` | Kök domain (cagriozay.com) |
| CNAME | `www` | `6d826e64f9d0227f.vercel-dns-017.com` | www alt domain |

### ⏱️ DNS Yayılımı

DNS değişikliklerinin yayılması genellikle:
- **Minimum:** 5-10 dakika
- **Ortalama:** 1-2 saat
- **Maksimum:** 24-48 saat

### ✅ Doğrulama

1. DNS kaydını ekledikten sonra **Vercel panelinde "Refresh"** butonuna tıklayın
2. Birkaç dakika sonra tekrar kontrol edin
3. Durum **"Valid Configuration"** olarak değişmeli

### 🔍 Test Etme

DNS yayılımından sonra test edin:

```bash
# Terminal'de test edin
nslookup cagriozay.com
# Sonuç: 216.198.79.1 olmalı

nslookup www.cagriozay.com
# Sonuç: 6d826e64f9d0227f.vercel-dns-017.com olmalı
```

### 🆘 Sorun Giderme

**Eğer hala "Invalid Configuration" görüyorsanız:**

1. DNS kaydının doğru eklendiğini kontrol edin
2. TTL değerini düşürün (örn: 300 saniye)
3. Birkaç saat bekleyin (DNS yayılımı zaman alabilir)
4. Vercel'de "Refresh" butonuna tıklayın
5. Farklı bir DNS kontrol aracı kullanın: https://dnschecker.org/

### 📝 Notlar

- Vercel'in IP adresi değişirse, A kaydını güncellemeniz gerekebilir
- `www` için CNAME kaydı doğru, değiştirmeyin
- Her iki domain de (`cagriozay.com` ve `www.cagriozay.com`) aynı Vercel projesine yönlendirilecek

