bro gw lagi mau bikin mobile apps pake react native expo.
jadi gw mau bikin aplikasi manajemen warga, ruang lingkup nya adalah RW dan RT.
gw udah bikin api backend nya pake laravel.

jadi di aplikasi ini ada beberapa fitur, yaitu
1. Dashboard atau Menu Utama
    di menu utama nantinya akan ada report berupa statistik menggunakan chart. diataranya yaitu
    1. menampilkan report keuangan RT maupun RW.
    2. statistik warga beradasrkan jenis kelamin, agama, pendidikan, status perkawinan, dan lain-lain.
    3. menampilkan tagihan terkahir yang sedang tersedia.
    4. saya belum tahu report apa lagi, mungkin kamu bisa kasih saran.

2. Manjemen Data Master
    2.1. Data Warga
    2.2. Data RT
    2.3. Data Kategori Iuran Warga. iuran warga ada 2 jenis, wajib dan opsional. Jika wajib, artinya warga wajib membayar iuran tersebut sesuai minimal nominal yang sudah ditentukan. jika opsional, warga boleh membayar boleh juga tidak. data iuran nantinya akan dimasukkan dalam laporan keuangan.
    2.4. Data Kategori Kegiatan Profit. ini merupakan kategori untuk kegiatan warga yang sifat nya profit atau menghasilkan uang, seperti menjual barang bekas, umkm, dan lain nya. data kegiatan profit nantinya akan dimasukkan dalam laporan keuangan.

3. Umum
    3.1. Fitur Pengumuman. yaitu data pengumuman yang akan dibuat oleh pengurus RT maupun RW yang akan tampil di setiap akun warga.
    3.2. Fitur Aduan Masyarakat. warga dapat membuat aduan mengenai masalah disekitar lingkungan, seperti kemalingan, kehilangan, lingkungan kotor, listrik mati, lampu jalan mati, dan lain lain. yang nantinya akan ditanggapi oleh pengurus RT maupun RW
    3.3. Fitur Iuran Warga. ini berkaitan dengan point 2.3, ini adalah data iuran yang akan dibuat oleh pengurus RT atau RW, mungkin nanti juga bisa dibuat otomatis setiap bulan sistem akan membuat data iuran secara otomatis jika kategorinya di setting untuk dibuat secara otomatis. lalu di setiap data iuran warga, akan tampil list warga dan terlihat siapa yang sudah bayar dan belum. jika iuran warga statusnya sudah completed, maka sistem akan otomatis memasukkan dalam laporan keuangan.
    3.4. Fitur Kegiatan Profit. ini berkaitan dengan point 2.4, setelah selesai melakukan kegiatan, pengurus akan mengupload nya ke fitur ini, dengan memasukkan jumlah pendapatan yang nantinya akan dimasukkan dalam laporan keuangan. 

4. Keuangan
    Fitur Keuangan ini saya buat menggunakan siklus akuntansi. yang berfungsi sebagai manajemen keuangan secara akuntasi agar datanya rapih dan terstruktur dengan baik. Laporan Keuangan RT atau RW dapat dilihat secara publik oleh warga sebagai bentuk transparansi keuangan.
    Di Fitur Keuangan ini terdapat beberapa fitur, yaitu:
    4.1. COA. Chart of Account, atau akun akun 