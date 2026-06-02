# MANUAL PENGGUNAAN STUDOTASK

## 1. Persyaratan Sistem

Sebelum menjalankan aplikasi StudoTask, pastikan perangkat telah memiliki:

* Visual Studio Code
* Browser (Google Chrome, Microsoft Edge, Mozilla Firefox)
* Extension Live Server pada Visual Studio Code

## 2. Instalasi

### Langkah 1: Buka Project

1. Buka Visual Studio Code.
2. Pilih menu **File > Open Folder**.
3. Pilih folder **StudoTask**.

### Langkah 2: Install Live Server

1. Buka menu Extensions (Ctrl + Shift + X).
2. Cari **Live Server**.
3. Install extension yang dibuat oleh Ritwick Dey.

### Langkah 3: Menjalankan Aplikasi

1. Buka file `index.html`.
2. Klik kanan pada file tersebut.
3. Pilih **Open with Live Server**.
4. Browser akan terbuka secara otomatis.

## 3. Halaman Landing

Pada halaman awal tersedia:

* Tombol Sign In
* Tombol Log In

Pengguna dapat memilih untuk membuat akun baru atau masuk menggunakan akun yang sudah tersimpan.

## 4. Sign In (Pendaftaran Akun)

### Cara Menggunakan

1. Klik tombol **Sign In**.
2. Masukkan:

   * Email atau Username
   * Password
3. Klik tombol **Sign In**.

### Hasil

Data akun akan disimpan ke LocalStorage browser dan pengguna akan diarahkan ke halaman Login.

## 5. Login

### Cara Menggunakan

1. Klik tombol **Log In**.
2. Masukkan:

   * Email atau Username
   * Password
3. Klik tombol **Log In**.

### Hasil

Jika data sesuai dengan akun yang tersimpan, pengguna akan masuk ke Dashboard.

## 6. Dashboard

Dashboard merupakan halaman utama aplikasi.

Fitur yang tersedia:

* Statistik tugas
* Progress pengerjaan tugas
* Navigasi menuju:

  * Task Manager
  * Calendar
  * Features

## 7. Task Manager

Task Manager digunakan untuk memonitor seluruh tugas.

### Fitur

* Menampilkan daftar tugas
* Menampilkan deadline
* Menampilkan tingkat urgency
* Sort berdasarkan deadline
* Sort berdasarkan urgency

### Menambahkan Tugas

Klik tombol **+** pada pojok kanan atas untuk membuka halaman To-Do List.

## 8. To-Do List

To-Do List digunakan untuk mengelola tugas.

### Menambah Tugas

Isi data berikut:

* Title
* Description
* Task Link
* Start Date
* Deadline
* Finish Date
* Urgency

Klik tombol **Save Task**.

### Edit Tugas

1. Klik tombol **Edit**.
2. Ubah data yang diinginkan.
3. Klik **Save Task**.

### Hapus Tugas

1. Klik tombol **Delete**.
2. Konfirmasi penghapusan.

### Checklist Selesai

Centang checkbox pada tugas.

Hasil:

* Tugas ditandai selesai.
* Teks akan dicoret.
* Progress dashboard bertambah.

## 9. Calendar

Calendar menampilkan deadline tugas berdasarkan tanggal.

### Fitur

* Kalender bulanan
* Highlight deadline tugas
* Warna urgency:

  * Merah = High
  * Oranye = Medium
  * Hijau = Low

### Detail Tugas

Klik tanggal pada kalender untuk melihat:

* Judul tugas
* Deskripsi
* Deadline
* Tingkat urgency
* Link tugas

## 10. Features

Halaman Features menampilkan:

* Statistik tugas
* Progress pengerjaan
* Penjelasan fitur aplikasi
* Shortcut menuju halaman lain

## 11. Dashboard Button

Pada halaman:

* Task Manager
* To-Do List
* Calendar
* Features

tersedia tombol **Dashboard** di kanan bawah untuk kembali ke halaman utama.

## 12. Penyimpanan Data

Aplikasi menggunakan LocalStorage browser.

Data yang disimpan:

* Akun pengguna
* Daftar tugas
* Status penyelesaian tugas

### Menghapus Seluruh Data

1. Tekan F12 pada browser.
2. Pilih tab Application.
3. Pilih Local Storage.
4. Hapus data dengan key:

   * studoUser
   * tasks

## 13. Troubleshooting

### Data Tidak Muncul

Pastikan browser mengizinkan LocalStorage.

### Login Gagal

Pastikan akun telah dibuat melalui halaman Sign In.

### Kalender Kosong

Pastikan terdapat tugas yang memiliki Deadline.

## 14. Penutup

StudoTask merupakan aplikasi manajemen tugas akademik yang membantu mahasiswa mengelola tugas, memonitor deadline, dan meningkatkan produktivitas belajar melalui fitur Dashboard, Task Manager, To-Do List, Calendar, dan Features.
