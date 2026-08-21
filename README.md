# SATRIA Builder V2

Web App Builder multi-kelas berbasis Google Apps Script + Google Spreadsheet.

## Fitur inti
- Bootstrap owner melalui frontend.
- MASTER_USERS, MASTER_GURU, MASTER_KARYAWAN, MASTER_KELAS, MASTER_MAPEL.
- MASTER_MENU, MASTER_MODUL, MASTER_PERMISSION.
- Role: owner, guru, karyawan, admin_kelas, siswa.
- Password internal menggunakan SHA-256.
- Guru, karyawan, dan admin_kelas dikelola di MASTER_USERS.
- User siswa berada di spreadsheet kelas masing-masing.
- Owner mengatur spreadsheet_id kelas melalui MASTER_KELAS.
- Owner dapat membuat menu dan modul melalui master.
- Admin_kelas dapat membuat sheet kelas, menambah header, dan mengaktifkan modul.
- Modul awal: 7KAIH, Belajar Mandiri, Kegiatan Literasi.
- Owner dapat melihat akumulasi metadata seluruh spreadsheet kelas.

## Deploy
Gunakan Apps Script Web App dengan **Execute as me/owner** dan akses **Anyone** sesuai kebutuhan sistem. Konfigurasi `appsscript.json` sudah menyediakan web-app setting untuk deployment.

## Bootstrap
1. Buat Spreadsheet MASTER kosong.
2. Buka Web App.
3. Pilih Bootstrap Owner.
4. Masukkan Spreadsheet ID MASTER, username dan password owner.
5. Login sebagai owner.
6. Dari Master Kelas, masukkan spreadsheet_id masing-masing kelas.
7. Admin kelas selanjutnya membuat sheet dan mengaktifkan modul yang diperlukan.

> Catatan: akses dan permission tetap diperiksa server-side; menyembunyikan menu di frontend bukan satu-satunya mekanisme keamanan.
