
// // // var mhs = "jono" 
// // // var mhs = "joni"
// // // var kelas = 12
// // // var npm = 20421025

// // // let mhs = "jono"     // LEBIH BAIK PAKAI LET
// // // let kelas = 12

// // const mhs = "jono"
// // const kelas = 12

// // // const a = 10
// // // const b = 10
// // // const c= a / b
// // console.log(mhs) // untuk memanggil

// LEMBAR BARU
// METODE GET
const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded({
  extended:true
}))


// app.get('/', function (req, res) {
//   res.send('Selamat datang di API')
// })
// // http://localhost:3000/data-mahasiswa/20421025/monimustika
// app.get('/data-mahasiswa/:npm/:nama/:alamat', function (req, res) {
//   res.json({
//     npm : req.params.npm,
//     nama : req.params.nama,
//     alamat : req.params.alamat
//   })
// })
// // http://localhost:3000/data-mahasiswa-query?npm=20421025&nama=monimustika
// app.get('/data-mahasiswa-query', function (req, res) {
//   res.json({
//     npm : req.query.npm,
//     nama : req.query.nama,
//     alamat : req.query.alamat
//   })
// })

// app.post('/data-mahasiswa', function (req, res) {
//   res.json({
//     npm : req.body.npm,
//     nama : req.body.nama,
//     alamat : req.body.alamat
//   })
// })

app.post('/biodata/:nama/:npm/:tanggal_lahir/:umur', function (req, res) {
  res.json({
    nama: req.params.nama,
    npm: req.params.npm,
    prodi:req.query.prodi,
    fakultas:req.query.fakultas,
    universitas: req.query.universitas,
    tanggal_lahir: req.params.tanggal_lahir,
    umur:req.params.umur,
    hobi:req.body.hobi,
    alamat : req.body.alamat,
    pekerjaan: req.body.pekerjaan
    
// /biodata/:monika/:2042189/:03maret/:25?prodi=informatika&fakultas=fik&universitas=ubl
    
// localhost:3000/biodata/:moni mustika/:20421025/?prodi=informatika&fakultas=Fakultas Ilmu Komputer&universitas=UBL/:08 maret 2004/:18


  })
})



app.listen(3000)