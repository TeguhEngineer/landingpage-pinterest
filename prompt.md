# Template Prompt untuk Membuat Artikel Baru

## Cara Menggunakan:
1. Copy seluruh prompt di bawah ini
2. Ganti [JUDUL ARTIKEL] dengan judul artikel yang diinginkan
3. Ganti [KATEGORI] dengan kategori artikel (Fashion, Nail Art, Beauty, dll)
4. Ganti [FOLDER-GAMBAR] dengan nama folder gambar yang akan digunakan
5. Ganti [NAMA-FILE-HTML] dengan nama file HTML yang diinginkan
6. Paste ke AI assistant

---

## PROMPT TEMPLATE:

Saya ingin kamu buatkan konten untuk artikel [JUDUL ARTIKEL] dalam bahasa Inggris dengan judul di 'articles/[NAMA-FILE-HTML].html'. 

Style artikel harus mirip dengan 'articles/fall-nails.html' (gunakan sebagai referensi untuk struktur, gaya penulisan, dan format). 

Karena audience nya luar negeri (USA), saya ingin artikel yang:
- Menggunakan bahasa Inggris yang natural dan engaging
- Fokus untuk menampilkan ads Adsterra 
- Target audience USA dengan konten yang relevan

**PENTING:**
1. Copy kode ads dari 'articles/fall-nails.html' PERSIS sama tanpa ada perubahan atau typo
2. Pastikan semua tag ads sudah benar dan sama persis
3. Sesuaikan dari mulai meta tag SEO untuk target USA
4. Ambil foto sample untuk di artikel dari 'image/[FOLDER-GAMBAR]/' 
5. Harus dipakai semua fotonya kecuali 'image/[FOLDER-GAMBAR]/cover.webp' (karena itu sudah dipakai di halaman index)
6. Buat 10 ide/inspirasi sesuai tema artikel dengan deskripsi yang menarik
7. Letakkan ads banner di antara konten (setelah item 2 dan 7) seperti di fall-nails.html
8. Update breadcrumbs, category, dan semua placeholder sesuai tema
9. Pastikan tanggal menggunakan format USA (Month Day, Year)

**Struktur yang harus diikuti:**
- Header dengan breadcrumbs
- Introduction paragraph 
- 10 items dengan deskripsi dan gambar
- Ads placement setelah item 2 dan 7
- Conclusion/closing
- Social share buttons
- Proper meta tags untuk SEO

**Setelah selesai membuat artikel, tambahkan juga data artikel ke 'data/articles.json' dengan format:**
- Tambahkan ke array "featuredArticles" (jika ingin ditampilkan di carousel)
- Tambahkan ke array "latestArticles" 
- Gunakan format yang sama seperti artikel lainnya
- URL: "/articles/[NAMA-FILE-HTML].html"
- Image: "/image/[FOLDER-GAMBAR]/cover.webp"
- Date: gunakan tanggal hari ini
- Category: [KATEGORI]

Tujuan akhir: Menampilkan artikel dengan iklan Adsterra dan target user luar negeri (USA).

---

## CONTOH PENGGUNAAN:

Jika ingin membuat artikel "Winter Makeup Trends", maka prompt menjadi:

Saya ingin kamu buatkan konten untuk artikel Winter Makeup Trends dalam bahasa Inggris dengan judul di 'articles/winter-makeup.html'. 

Style artikel harus mirip dengan 'articles/fall-nails.html' (gunakan sebagai referensi untuk struktur, gaya penulisan, dan format). 

Karena audience nya luar negeri (USA), saya ingin artikel yang:
- Menggunakan bahasa Inggris yang natural dan engaging
- Fokus untuk menampilkan ads Adsterra 
- Target audience USA dengan konten yang relevan

**PENTING:**
1. Copy kode ads dari 'articles/fall-nails.html' PERSIS sama tanpa ada perubahan atau typo
2. Pastikan semua tag ads sudah benar dan sama persis
3. Sesuaikan dari mulai meta tag SEO untuk target USA
4. Ambil foto sample untuk di artikel dari 'image/winter-makeup/' 
5. Harus dipakai semua fotonya kecuali 'image/winter-makeup/cover.webp' (karena itu sudah dipakai di halaman index)
6. Buat 10 ide/inspirasi sesuai tema artikel dengan deskripsi yang menarik
7. Letakkan ads banner di antara konten (setelah item 2 dan 7) seperti di fall-nails.html
8. Update breadcrumbs, category, dan semua placeholder sesuai tema
9. Pastikan tanggal menggunakan format USA (Month Day, Year)

**Struktur yang harus diikuti:**
- Header dengan breadcrumbs
- Introduction paragraph 
- 10 items dengan deskripsi dan gambar
- Ads placement setelah item 2 dan 7
- Conclusion/closing
- Social share buttons
- Proper meta tags untuk SEO

**Setelah selesai membuat artikel, tambahkan juga data artikel ke 'data/articles.json' dengan format:**
- Tambahkan ke array "featuredArticles" (jika ingin ditampilkan di carousel)
- Tambahkan ke array "latestArticles" 
- Gunakan format yang sama seperti artikel lainnya
- URL: "/articles/winter-makeup.html"
- Image: "/image/winter-makeup/cover.webp"
- Date: gunakan tanggal hari ini
- Category: Beauty

Tujuan akhir: Menampilkan artikel dengan iklan Adsterra dan target user luar negeri (USA).