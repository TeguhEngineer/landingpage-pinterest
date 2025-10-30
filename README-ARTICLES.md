# 📝 Cara Membuat Artikel Baru

Panduan lengkap untuk menambahkan artikel baru ke blog Linexs.

## 🎯 Struktur Baru (External CSS + JS)

**Keuntungan:**
- ✅ **Tidak perlu copy-paste** styles & scripts lagi
- ✅ **Update sekali**, semua artikel ter-update
- ✅ **Browser cache** CSS/JS = loading lebih cepat
- ✅ **Artikel HTML lebih clean** & mudah dibaca

**File Shared:**
- `/css/article.css` → Semua styles (progress bar, Pinterest pin, tooltip)
- `/js/article.js` → Semua functions (share, copy, pin images)

## 🚀 Quick Start

### Step 1: Copy Template Artikel
```bash
Copy file: articles/article-template.html
Rename menjadi: articles/nama-artikel-anda.html
```

### Step 2: Edit Konten Artikel
Buka file artikel baru Anda dan ganti placeholder berikut:

**Meta Tags (untuk SEO):**
- `[ARTICLE TITLE]` → Judul artikel Anda
- `[ARTICLE DESCRIPTION]` → Deskripsi singkat (150-160 karakter)
- `[keywords, separated, by, commas]` → Kata kunci artikel
- `[article-url]` → URL artikel (contoh: winter-fashion-2025)
- `[article-meta-image]` → Gambar untuk social media

**Konten Artikel:**
- `[CATEGORY]` → Kategori (Nail Art / Fashion / Street Style / Trends)
- `[DATE]` → Tanggal publikasi (contoh: October 28, 2025)
- `[ARTICLE SHORT TITLE]` → Versi singkat untuk breadcrumb
- `[INTRODUCTION PARAGRAPH]` → Paragraf pembuka
- `[HEADING 1-3]` → Judul section
- `[CONTENT PARAGRAPH]` → Isi konten
- Ganti gambar placeholder dengan gambar Anda

**Script Initialization:**
Ganti di bagian akhir file:
```html
<script>
  initArticle({
    id: 'nama-artikel-unik',  // Sama dengan ID di JSON
    category: 'Fashion'        // Sama dengan category di JSON
  });
</script>
```

**Fitur Otomatis Yang Sudah Built-in:**
- ✅ Reading Progress Bar (gradient rose di atas)
- ✅ Social Share Buttons (WhatsApp, Pinterest, Copy Link)
- ✅ Pinterest Pin Button (hover pada gambar)
- ✅ Copy Link Tooltip (smooth animation)
- ✅ Breadcrumb Navigation (dengan category filter)
- ✅ Mobile Responsive Design

**TIDAK PERLU:**
- ❌ Copy-paste `<style>` tags
- ❌ Copy-paste JavaScript functions
- ❌ Khawatir tentang compatibility
- ❌ Update manual di setiap artikel

### Step 3: Tambahkan ke articles.json

File `data/articles.json` memiliki 2 bagian terpisah untuk memudahkan maintenance:

#### A. Untuk Artikel Biasa (Latest Articles)
Tambahkan ke array `latestArticles`:

```json
{
  "id": "nama-artikel-unik",
  "title": "Judul Artikel Anda",
  "description": "Deskripsi singkat artikel untuk ditampilkan di homepage.",
  "category": "Fashion",
  "date": "2025-11-15",
  "dateFormatted": "November 15, 2025",
  "url": "/articles/nama-artikel-anda.html",
  "image": "/image/banner-artikel-anda.jpg"
}
```

**Properti Penting:**
- `id` → Identifier unik (lowercase, gunakan dash)
- `title` → Judul yang muncul di card
- `description` → Deskripsi preview (max 200 karakter)
- `category` → Nail Art / Fashion / Street Style / Trends
- `date` → Format: YYYY-MM-DD
- `dateFormatted` → Format yang ditampilkan (atau "Coming Soon")
- `url` → Path ke file HTML artikel
- `image` → Path gambar thumbnail (simpan di folder /image/)

#### B. Untuk Featured Articles (Carousel di Homepage)
Tambahkan artikel ke array `featuredArticles` untuk ditampilkan di carousel:

```json
{
  "featuredArticles": [
    {
      "id": "artikel-featured-1",
      "title": "Artikel Super Penting",
      "category": "Fashion",
      "date": "2025-11-20",
      "dateFormatted": "November 20, 2025",
      "url": "/articles/artikel-terbaru.html",
      "image": "/image/featured-banner-1.jpg"
    },
    {
      "id": "artikel-featured-2",
      "title": "Artikel Trending Kedua",
      "category": "Nail Art",
      "date": "2025-11-22",
      "dateFormatted": "November 22, 2025",
      "url": "/articles/artikel-trending.html",
      "image": "/image/featured-banner-2.jpg"
    }
  ],
  "latestArticles": [...]
}
```

**Properti Featured Articles:**
- `id` → Identifier unik
- `title` → Judul artikel (tampil lebih besar di carousel)
- `category` → Kategori artikel
- `date` → Format: YYYY-MM-DD
- `dateFormatted` → Format display
- `url` → Path ke file HTML
- `image` → Gambar banner (recommended: 800x500px)
- **Note:** Featured articles tidak pakai description untuk tampilan lebih clean

**Tips:**
- Bisa ada **multiple featured articles** (tampil di carousel)
- Carousel auto-play setiap 5 detik
- Ada navigation buttons (prev/next) dan indicators (dots)
- Hover di carousel untuk pause auto-play
- Layout besar dengan image di samping kiri
- Urutan dalam array = urutan di carousel

### Step 5: Upload Gambar
- Simpan gambar artikel di folder `/image/`
- Format yang disarankan: WebP atau JPG
- Ukuran banner featured: 800x400px atau lebih besar
- Ukuran thumbnail grid: 400x300px atau lebih besar

## 📂 Struktur Folder

```
pinterest-landingpage/
├── index.html              # Homepage (otomatis load dari JSON)
├── articles/
│   ├── article-template.html  # Template untuk artikel baru
│   ├── fall-nails.html        # Contoh artikel
│   └── artikel-baru.html      # Artikel Anda
├── data/
│   └── articles.json       # Database semua artikel
└── image/
    └── banner-artikel.jpg  # Gambar artikel
```

## ✅ Checklist Sebelum Publish

- [ ] Artikel HTML sudah diisi lengkap (tidak ada placeholder `[...]`)
- [ ] Meta tags SEO sudah diupdate
- [ ] Entry artikel sudah ditambahkan ke `articles.json`
- [ ] Gambar sudah diupload ke folder `/image/`
- [ ] Path gambar di JSON sesuai dengan lokasi file
- [ ] Link "Back to Home" sudah benar (`../index.html`)
- [ ] Test artikel di browser (buka file HTML langsung)
- [ ] Test tampilan di homepage (refresh index.html)

## 🎨 Tips & Tricks

### Mengurutkan Artikel
Artikel di `latestArticles` akan muncul sesuai urutan dalam array JSON. Yang paling atas = paling baru.

### Mengubah Featured Articles
Tambahkan atau edit artikel di array `featuredArticles`. Artikel akan tampil di carousel berdasarkan urutan dalam array.

### Carousel Features
- **Auto-play**: Otomatis slide setiap 5 detik
- **Pause on hover**: Hover di carousel untuk berhenti sementara
- **Navigation**: Tombol prev/next di kiri/kanan
- **Indicators**: Dots di bawah untuk jump ke slide tertentu
- **Responsive**: Full responsive untuk mobile & desktop

### Kategori Custom
Anda bisa menambahkan kategori baru, tapi pastikan konsisten dengan kategori yang ada.

### Struktur JSON yang Baru
```json
{
  "featuredArticles": [
    // Array artikel untuk carousel (bisa 1 atau lebih)
    // Auto-play dengan navigation & dots
  ],
  "latestArticles": [
    // Array artikel untuk grid 3 kolom
  ]
}
```
Lebih mudah di-maintain karena terpisah jelas!

### Gambar Placeholder
Jika belum punya gambar, gunakan placeholder dari:
- https://placehold.co/800x400/colorcode/ffffff?text=Your+Text
- Ganti `colorcode` dengan hex color tanpa #

### Format Tanggal
- `date`: Format YYYY-MM-DD (untuk sorting otomatis nanti)
- `dateFormatted`: Format bebas yang ditampilkan ke user

## 🐛 Troubleshooting

**Artikel tidak muncul di homepage:**
- Cek apakah entry sudah ditambahkan ke `articles.json`
- Pastikan format JSON valid (gunakan JSONLint untuk cek)
- Refresh browser dengan Ctrl+F5 (hard refresh)

**Gambar tidak muncul:**
- Cek path gambar di JSON (harus sesuai dengan lokasi file)
- Gunakan path relatif: `/image/nama-file.jpg`

**Featured article tidak berubah:**
- Pastikan `"featured"` di root JSON sudah diubah ke ID artikel yang benar
- Hanya set 1 artikel dengan `"featured": true`

## 📞 Need Help?

Jika ada error atau pertanyaan, check:
1. Console browser (F12 → Console tab)
2. Network tab (apakah `articles.json` berhasil di-load?)
3. Validasi JSON di https://jsonlint.com/

---

**Happy Writing! 🚀**
