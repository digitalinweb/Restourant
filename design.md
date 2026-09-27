# Design Documentation — Website Restoran/Catering ("Caterly" & "Onionz")

## 1. Overview
Referensi desain ini merupakan gabungan dua tone: **catering premium** (kiri, brand "Caterly") dan **food delivery/recipe modern** (kanan, brand "Onionz"). Gaya keseluruhan: playful tapi tetap elegan — pakai foto makanan close-up dramatis, warna hangat (oranye/terracotta), aksen gradasi lembut (pastel blur blob), dan tipografi editorial.

---

## 2. Color Palette

| Warna | Hex (perkiraan) | Penggunaan |
|---|---|---|
| Oranye/Terracotta | `#E96B3A` | Tombol CTA utama, aksen teks penting ("Occasion You Love", "Confidence", "Onionz") |
| Krem/Off-white | `#FAF6F1` | Background utama mayoritas section |
| Hitam/Navy Gelap | `#1A1A1A` | Navbar, background section "Order Delicious Food", teks judul besar |
| Pastel Blob (pink/ungu/biru muda) | `#F5D9E8`, `#DCE4F7` | Dekorasi blur/gradient di background sebagai aksen lembut, card promo |
| Putih | `#FFFFFF` | Card, container foto |
| Abu Gelap | `#4A4A4A` | Body text |

Pola: warna netral (krem/putih) mendominasi sebagai kanvas, oranye jadi *signature color* untuk CTA & highlight kata, blob pastel dipakai sebagai dekorasi halus di belakang foto (bukan warna solid besar).

---

## 3. Typography
- **Heading:** Serif/Display elegan dengan sedikit sentuhan editorial (mirip *Fraunces* atau *Instrument Serif*), ukuran besar, kombinasi warna hitam + oranye dalam satu kalimat untuk menekankan kata kunci (contoh: "Bringing Flavor to Every **Occasion You Love**").
- **Body/Nav:** Sans-serif modern clean, ukuran kecil-menengah, warna abu gelap untuk deskripsi.
- **Aksen script/handwritten:** Dipakai pada nama chef ("Marcus Wellington") — memberi sentuhan personal/personal branding.
- **Label kategori kecil:** Pill/badge kecil uppercase dengan border tipis (contoh "PREMIUM CATERING SERVICES") — menambah kesan eksklusif.

---

## 4. Analisis Section yang Ada di Referensi

### 4.1 Navbar
Logo + menu (About us, Services, Menu, About, Events, Contact) + icon search & phone + tombol CTA solid gelap "Book Catering".

### 4.2 Hero
Headline besar 2 warna, sub-deskripsi singkat, dua CTA (primary solid oranye "Book Catering" + secondary outline "View Menu"), foto makanan tersebar di 4 sudut (bukan satu foto besar) dikelilingi elemen dekoratif (garis melengkung, ikon daun/tomat), badge label kecil di atas headline.

### 4.3 Promo Banner Strip
3 kartu promo horizontal dengan foto makanan bulat, badge diskon (mis. "20% OFF UPTO $80"), nama menu, rating bintang, waktu masak, kalori. Cocok untuk highlight menu unggulan/promo aktif.

### 4.4 "Master the Art of Cooking" (Feature/Proses Section)
Headline dengan kata kunci berwarna, kolase foto step-by-step proses masak, kartu testimoni mini melayang (floating card) dengan foto profil + kutipan singkat, kartu achievement/notifikasi kecil, dan foto chef besar dengan CTA overlay "Cook with Master Chefs".

### 4.5 Meet the Chef
Layout split: foto burger dramatis + badge info chef di kiri, deskripsi profil chef + 3 angka statistik (tahun pengalaman, jumlah event, kepuasan klien) di kanan, tombol "Order Now".

### 4.6 Team/Gallery Strip
5 foto berjajar horizontal (tim dapur, momen memasak, hasil masakan) — memberi kesan "di balik layar" dan skala tim yang solid.

### 4.7 Why Choose Us (USP)
Headline + 3 kartu fitur dengan ikon custom (pisau, cabai, ayam) di atas card gradient pastel, judul singkat + deskripsi 1 kalimat per kartu.

### 4.8 FAQ
Layout split: ilustrasi chef karakter (mascot) di kiri sebagai elemen personal/friendly, list accordion pertanyaan di kanan dengan ikon +/− .

### 4.9 Order/Delivery CTA Banner (Footer Teaser)
Background gelap kontras, foto makanan close-up dramatis di kedua sisi, headline "Order Delicious Food Right to Your Doorstep", CTA "Order Now", badge menu spesial di pojok (mis. "Shrimp Scampi").

---

## 5. Struktur Section Lengkap agar Website Restoran Terlihat Profesional

Referensi di atas sudah kuat, tapi untuk website restoran yang **lengkap dan profesional**, urutan section idealnya sebagai berikut (menggabungkan yang sudah ada + yang perlu ditambahkan):

1. **Navbar** — logo, menu utama, CTA reservasi/order, kontak/search icon *(sudah ada)*
2. **Hero Section** — headline + value proposition + CTA ganda + visual makanan *(sudah ada)*
3. **Trust Bar / Logo Strip** — logo media/partner yang pernah meliput, atau badge penghargaan ("Featured in...", "Awarded Best Restaurant 2025") — belum ada, disarankan ditambahkan untuk kredibilitas instan.
4. **Promo/Menu Highlight Strip** — kartu menu unggulan dengan harga & rating *(sudah ada)*
5. **About/Our Story** — cerita singkat restoran, filosofi, tahun berdiri — belum eksplisit terlihat, sebaiknya jadi section tersendiri sebelum "Meet the Chef".
6. **Meet the Chef / Our Team** — profil chef + statistik *(sudah ada)*
7. **Why Choose Us (USP)** — keunggulan kompetitif *(sudah ada)*
8. **Our Process / How It Works** — misal untuk catering: alur pemesanan (Pilih Menu → Konfirmasi → Persiapan → Pengantaran) — disarankan ditambahkan, terutama untuk brand catering agar calon klien paham proses order.
9. **Gallery / Behind the Kitchen** — strip foto tim & dapur *(sudah ada)*, bisa diperluas jadi galeri interaktif (lightbox) atau Instagram feed live.
10. **Testimonials / Reviews** — saat ini baru muncul sebagai floating card kecil di section proses masak; sebaiknya dibuat section testimoni penuh (grid card dengan nama, rating, foto pelanggan) agar social proof lebih kuat.
11. **Menu Preview Lengkap** — grid menu per kategori (Appetizer, Main Course, Dessert, Drink) dengan foto & harga — belum terlihat sebagai section tersendiri, penting untuk restoran (bukan cuma promo strip).
12. **Reservation / Booking Form** — form pemesanan meja/tanggal event catering langsung di halaman — belum ada, krusial untuk konversi.
13. **FAQ** — accordion pertanyaan umum *(sudah ada)*.
14. **Location & Hours / Map** — peta lokasi, jam operasional, alamat — belum ada, wajib untuk restoran fisik.
15. **Order/Delivery CTA Banner** — ajakan order online kontras gelap *(sudah ada)*.
16. **Newsletter/Subscribe** — form email untuk promo & event terbaru — disarankan ditambahkan.
17. **Footer** — navigasi ulang, social media icon, kontak lengkap, copyright — pastikan konsisten dengan warna dark navbar.

---

## 6. Rekomendasi agar Tampilan Lebih Profesional
- **Konsistensi brand tunggal**: referensi saat ini mencampur 2 identitas ("Caterly" & "Onionz") — pilih satu nama & palet warna konsisten di seluruh section.
- **Section testimoni diperkuat**: jangan hanya floating card kecil, buat grid testimoni dengan foto asli pelanggan + rating jelas.
- **Tambahkan CTA reservasi langsung (form)**, bukan hanya tombol yang mengarah ke halaman lain — mempercepat konversi.
- **Tambahkan section lokasi & jam buka** dengan embed map — penting untuk kepercayaan dan kemudahan kunjungan.
- **Konsistensi ikon & ilustrasi**: mascot chef di FAQ bagus untuk personality, tapi pastikan gaya ilustrasi ini konsisten dipakai di section lain (misal empty state, loading, dsb) agar tidak terasa "nempel".
- **Hierarki promo vs menu tetap**: pisahkan jelas antara "Promo Aktif" (waktu terbatas) dan "Menu Andalan" (permanen) agar user tidak bingung.

---

## 7. Kesimpulan Gaya (Design Language)
- **Mood:** Warm, appetizing, sedikit playful (blob pastel, mascot ilustrasi) namun tetap premium (foto dramatis, tipografi editorial).
- **Kontras:** Krem/putih sebagai kanvas, oranye sebagai signature, hitam untuk section penutup/CTA kuat.
- **Layout:** Kombinasi grid rapi (promo strip, gallery) dan komposisi asimetris/floating (hero, proses masak).
- **CTA:** Pill/rounded button, selalu warna oranye solid untuk aksi utama, outline untuk aksi sekunder.
