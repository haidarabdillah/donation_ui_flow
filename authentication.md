### Desain Halaman Authentication dengan Notifikasi Error

#### 1. Halaman Registrasi
- **Judul**: "Buat Akun Baru"
- **Formulir Registrasi**:
  - **Kolom Input**:
    - Email: `[ ]` (field untuk memasukkan email pengguna)
    - Password: `[ ]` (field untuk memasukkan password)
    - Confirm Password: `[ ]` (field untuk mengkonfirmasi password)
    - Referral (optional): `[ ]` (field optional untuk memasukkan kode referral)
  - **Tombol Registrasi**: "Daftar" (tombol untuk mengirim formulir registrasi)
  - **Link ke Halaman Login**: "Sudah punya akun? Masuk" (link yang mengarahkan pengguna ke halaman login)
  - **Notifikasi Error** (jika ada):
    - "Email sudah terdaftar." (ketika email sudah digunakan)
    - "Password dan konfirmasi password tidak cocok." (ketika password dan konfirmasi password tidak sesuai)
    - "Format email tidak valid." (ketika format email salah)

#### 2. Halaman Verifikasi Email
- **Judul**: "Verifikasi Email Anda"
- **Deskripsi**: "Kami telah mengirimkan kode verifikasi 4 angka ke email Anda. Masukkan kode tersebut di bawah ini."
- **Formulir Verifikasi**:
  - **Kolom Input**:
    - Verification Code: `[ ]` (field untuk memasukkan kode verifikasi 4 angka)
  - **Tombol Verifikasi**: "Verifikasi" (tombol untuk mengirim kode verifikasi)
  - **Link untuk Mengirim Ulang Kode**: "Tidak menerima kode? Kirim ulang kode."
  - **Notifikasi Error** (jika ada):
    - "Kode verifikasi salah. Silakan coba lagi." (ketika kode verifikasi salah)
    - "Kode verifikasi telah kedaluwarsa. Silakan kirim ulang kode." (ketika kode verifikasi kedaluwarsa)

#### 3. Halaman Login
- **Judul**: "Masuk ke Akun Anda"
- **Formulir Login**:
  - **Kolom Input**:
    - Email: `[ ]` (field untuk memasukkan email pengguna)
    - Password: `[ ]` (field untuk memasukkan password)
  - **Tombol Login**: "Masuk" (tombol untuk mengirim formulir login)
  - **Link ke Halaman Forgot Password**: "Lupa Password?" (link yang mengarahkan pengguna ke halaman forgot password)
  - **Link ke Halaman Registrasi**: "Belum punya akun? Daftar" (link yang mengarahkan pengguna ke halaman registrasi)
  - **Notifikasi Error** (jika ada):
    - "Email atau password salah. Silakan coba lagi." (ketika email atau password salah)
    - "Akun belum diverifikasi. Silakan cek email Anda." (ketika akun belum diverifikasi)

#### 4. Halaman Forgot Password
- **Judul**: "Lupa Password"
- **Deskripsi**: "Masukkan email Anda untuk menerima tautan reset password."
- **Formulir Forgot Password**:
  - **Kolom Input**:
    - Email: `[ ]` (field untuk memasukkan email pengguna)
  - **Tombol Kirim**: "Kirim Tautan Reset Password" (tombol untuk mengirim permintaan reset password)
  - **Link ke Halaman Login**: "Kembali ke Halaman Masuk" (link yang mengarahkan pengguna kembali ke halaman login)
  - **Notifikasi Error** (jika ada):
    - "Email tidak ditemukan. Silakan coba lagi." (ketika email tidak terdaftar)

### Penjelasan

- **Halaman Registrasi**: 
  - Formulir registrasi berisi kolom untuk email, password, konfirmasi password, dan referral (opsional).
  - Tombol "Daftar" untuk mengirim formulir registrasi.
  - Link untuk mengarahkan pengguna yang sudah memiliki akun ke halaman login.
  - Notifikasi error ditampilkan jika ada kesalahan input atau validasi.

- **Halaman Verifikasi Email**:
  - Pengguna harus memasukkan kode verifikasi 4 angka yang dikirimkan ke email mereka.
  - Tombol "Verifikasi" untuk mengirim kode verifikasi.
  - Link untuk mengirim ulang kode jika pengguna tidak menerima kode verifikasi.
  - Notifikasi error ditampilkan jika kode verifikasi salah atau kedaluwarsa.

- **Halaman Login**: 
  - Formulir login berisi kolom untuk email dan password.
  - Tombol "Masuk" untuk mengirim formulir login.
  - Link untuk mengarahkan pengguna yang lupa password ke halaman forgot password.
  - Link untuk mengarahkan pengguna yang belum memiliki akun ke halaman registrasi.
  - Notifikasi error ditampilkan jika email atau password salah, atau akun belum diverifikasi.

- **Halaman Forgot Password**: 
  - Formulir forgot password berisi kolom untuk email.
  - Tombol "Kirim Tautan Reset Password" untuk mengirim permintaan reset password.
  - Link untuk kembali ke halaman login.
  - Notifikasi error ditampilkan jika email tidak terdaftar.

