# E-Portfolio PPG — Bintang Ramadhan

Website statis HTML/CSS/JavaScript untuk GitHub Pages.

## File utama
- `index.html` — beranda terpadu
- `semester-1.html` — enam refleksi 4C semester 1, analisis artefak, dan kaitan praktis; file artefak tinggal ditambahkan
- `semester-2.html` — lima refleksi 4C semester 2, analisis artefak, dan kaitan praktis
- `ppl.html` — PPL UTS siklus 1 dan PPL UAS siklus 2–4, siap untuk embed video Google Drive
- `lk4-karya-inovatif.html` — desain karya inovatif Coding Challenge Bertahap

## Cara menambahkan PDF artefak
1. Letakkan PDF di `assets/artefak/semester-1/` atau `assets/artefak/semester-2/`.
2. Edit halaman terkait dan ganti label placeholder menjadi tautan seperti:
   `<a class="btn secondary" href="assets/artefak/semester-1/nama-file.pdf" target="_blank" rel="noopener">Buka PDF</a>`
3. Tambahkan analisis: alasan pemilihan, bukti spesifik dalam artefak, kaitan dengan refleksi, dan perubahan praktik.

## Cara embed video Google Drive
1. Pastikan izin berbagi videonya sesuai kebijakan sekolah dan privasi murid.
2. Pada `ppl.html`, cari elemen `.video-placeholder` dengan `data-drive-id=""`.
3. Masukkan ID file Drive ke atribut itu, contoh: `data-drive-id="ID_FILE_DRIVE"`.
4. Simpan dan uji akses video dari akun/browser lain. Video akan memakai URL preview Drive.
5. Jangan membagikan video publik jika berisi murid tanpa izin yang sesuai.

## Publikasi GitHub Pages
- Pastikan `index.html` berada di root repository.
- Commit dan push seluruh perubahan.
- Pada GitHub: Settings → Pages → pilih branch publikasi dan folder `/ (root)`.
- Tunggu build selesai, lalu periksa semua tautan di website aktif.

## Catatan
- Placeholder yang ditandai “belum ditambahkan” memang sengaja belum diisi dengan dokumen fiktif.
- Halaman siklus lama (`siklus1.html`, `siklus2.html`, `siklus3.html`, `index2.html`) dan aset foto dari repository asal dipertahankan.
- Periksa kembali nama mata kuliah dan jumlah refleksi sesuai instruksi resmi LMS sebelum pengumpulan.


Catatan isi refleksi: enam refleksi semester 1 disusun dari dokumen refleksi yang ditemukan (Filosofi Pendidikan dan Pendidikan Nilai; Pemahaman Peserta Didik dalam Pembelajaran; Pembelajaran Berdiferensiasi; Pembelajaran Mendalam dan Asesmen; Pola Pikir Bertumbuh; Growth Mindset dan Dukungan Belajar). Periksa kembali penamaan mata kuliah keenam agar sama dengan LMS. Lima refleksi semester 2 merupakan draf terstruktur berdasarkan topik mata kuliah dan konteks tugas yang tersedia; sesuaikan bila pengalaman aktual berbeda.
