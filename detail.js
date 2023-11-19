const data = [
  {
    id: "film-01",
    judul: "The Dive",
    jenisFilm: "Thriller",
    produser: "Katzenstein, Maximilian Leo",
    sutradara: "Erlenwein",
    penulis: "Maximilian Erlenwein, Joachim Heden",
    produksi: "Falkun Films",
    casts:
      "Louisa Krause, Sophie Lowe, Stella Uhrig, Shire Richardson, David Scicluna",
    sinopsis:
      "Dua saudara perempuan pergi menyelam di lokasi yang indah dan terpencil. Drama terjadi saat salah satu saudarinya tertimpa batu dan membuatnya terjebak di bawah air. Dengan tingkat oksigen yang sangat rendah dan suhu dingin, adiknya harus berjuang untuk menyelamatkan sang kakak.",
    trailerLink: "https://www.youtube.com/watch?v=n-QTB7LFZBw",
    imgUrl: "img/the dive.jpg",
    rating: "R13+",
  },
  {
    id: "film-02",
    judul: "The Animal Kingdom",
    imgUrl: "img/the animal kingdom.jpg",
    rating: "D17+",
    jenisFilm: "Adventure, Drama",
    produser: "Pierre Guyard",
    sutradara: "Thomas Cailley",
    penulis: "Thomas Cailley, Pauline Munier",
    produksi: "Studio Canal",
    casts:
      "Romain Duris, Paul Kircher, Adele Exarchopoulos, Tom Mercier, Billie Blain, Xavier Aubert, Saadia Bentaieb, Gabriel Caballero, Iliana Khelifa",
    sinopsis:
      "Sebuah cerita petualangan antara seorang ayah dan anaknya, dalam dunia di mana sebagian manusia mulai mengalami mutasi menjadi makhluk yang tidak pernah terbayangkan sebelumnya.",
    trailerLink:
      "https://www.youtube.com/watch?v=ReHDO_rMlZo&pp=ygUTdGhlIGFuaW1hbCBraW5nZG9uZw%3D%3D",
  },
  {
    id: "film-03",
    judul: "The Three Musketeers: D'Artagnan",
    imgUrl: "img/The Three Musketeers D-Artagnan.jpg",
    rating: "R13+",
    jenisFilm: "Adventure, History",
    produser: "Dimitri Rassam",
    sutradara: "Martin Bourboulon",
    penulis: "Matthieu Delaporte, Alexandre de La Patelliere",
    produksi: "Chapter 2, Pathé",
    casts:
      "Francois Civil, Vincent Cassel, Romain Duris, Pio Marmai, Eva Green, Louis Garrel, Vicky Krieps, Lyna Khoudri, Jacob Fortune-Lloyd, Eric Ruf",
    sinopsis:
      "Setelah berusaha menyelamatkan seorang wanita muda dari penculikan, D'Artagnan (Francois Civil), seorang pemuda Gascon yang penuh semangat pergi ke Paris. Ketika ia tiba di Paris, ia memulai upaya untuk menemukan pelaku penculikan dengan segala cara. Namun, ia tidak menyadari bahwa pencariannya akan membawanya ke medan perang yang sebenarnya di mana masa depan Prancis dipertaruhkan.",
    trailerLink:
      "https://www.youtube.com/watch?v=ZMMB7GUb-Ik&pp=ygUndGhlIHRocmVlIG11c2tldGVlcnMgZCdhcnRhZ25hbiB0cmFpbGVy",
  },
  {
    id: "film-04",
    judul: "Wonka",
    imgUrl: "img/wonka.jpg",
    rating: "SU",
    jenisFilm: "Adventure, Family",
    produser: "Alexandra Derbyshire, David Heyman, Luke Kelly",
    sutradara: "Paul King",
    penulis: "Simon Farnaby, Paul King",
    produksi: "Warner Bros. Pictures",
    casts:
      "Timothee Chalamet, Olivia Colman, Hugh Grant, Sally Hawkins, Keegan-Michael Key, Rowan Atkinson, Mathew Baynton, Simon Farnaby, Matt Lucas",
    sinopsis:
      "Wonka akan berkisah tentang awal kehidupan Willy Wonka (Timothee Chalamet) sebelum dia menjadi pemilik dari pabrik coklat yang misterius dan terkenal. Perjuangan anak muda membuat coklat terenak di dunia dan dikenal oleh masyarakat luas.",
    trailerLink:
      "https://www.youtube.com/watch?v=xeT5B27xi4M&pp=ygUFd29ua2E%3D",
  },
  {
    id: "film-05",
    judul: "Wonka (IMAX 2D)",
    imgUrl: "img/wonka imax 2d.jpg",
    rating: "SU",
    jenisFilm: "Adventure, Family",
    produser: "Alexandra Derbyshire, David Heyman, Luke Kelly",
    sutradara: "Paul King",
    penulis: "Simon Farnaby, Paul King",
    produksi: "Warner Bros. Pictures",
    casts:
      "Timothee Chalamet, Olivia Colman, Hugh Grant, Sally Hawkins, Keegan-Michael Key, Rowan Atkinson, Mathew Baynton, Simon Farnaby, Matt Lucas",
    sinopsis:
      "Wonka akan berkisah tentang awal kehidupan Willy Wonka (Timothee Chalamet) sebelum dia menjadi pemilik dari pabrik coklat yang misterius dan terkenal. Perjuangan anak muda membuat coklat terenak di dunia dan dikenal oleh masyarakat luas.",
    trailerLink:
      "https://www.youtube.com/watch?v=wYmtRhKvmVE&pp=ygUFd29ua2E%3D",
  },
  {
    id: "film-06",
    judul: "Next Goal Wins",
    imgUrl: "img/next goal wins.jpg",
    rating: "R13+",
    jenisFilm: "Comedy, Drama, Sport",
    produser: "Garrett Basch, Taika Waititi, Jonathan Cavendish",
    sutradara: "Taika Waititi",
    penulis: "Taika Waititi, Iain Morris",
    produksi: "20th Century Studios",
    casts:
      "Michael Fassbender, Oscar Kightley, Kaimana, David Fane, Rachel House, Beulah Koale, Taika Waititi, Will Arnett, Elisabeth Moss, Uli Latukefu, Sisa Grey, Semu Filipo",
    sinopsis:
      "Sebuah kisah tentang sepak bola Samoa Amerika yang ikut dalam kualifikasi piala dunia 2001 dimana mereka kalah tragis dengan skor 31-0. Pasca kekalahan ini, tim mendatangkan Thomas Rongen (Michael Fassbender) untuk memperbaiki kualitas tim. Berkat kegigihan dan usaha pantang menyerah oleh seluruh pihak membuat Samoa Amerika kini memiliki kualitas untuk menjadi tim yang diperhitungkan.",
    trailerLink:
      "https://www.youtube.com/watch?v=pRH5u5lpArQ&pp=ygUWbmV4dCBnb2FsIHdpbnMgdHJhaWxlcg%3D%3D",
  },
  {
    id: "film-07",
    judul: "Rumah Masa Depan",
    imgUrl: "img/rumah masa depan.jpg",
    rating: "",
    jenisFilm: "Drama, Comedy",
    produser: "Putut Widjanarko",
    sutradara: "Danial Rifki",
    penulis: "Danial Rifki",
    produksi: "Mizan Pictures, Max Pictures",
    casts:
      "Fedi Nuril, Laura Basuki, Widyawati, Bima Azriel, Ciara Brosnan, Maisha Kanna",
    sinopsis:
      "Diangkat dari serial televisi dan serial novel yang amat populer di tahun 1980-an: Rumah Masa Depan karya Ali Shahab. Kali ini Sukri (Fedi Nuril) dan Surti (Laura Basuki) harus pulang ke kampung Cibeureum, karena Pak Musa (Cok Simbara), yaitu ayah Sukri, meninggal dunia. Namun setelah pemakaman, keluarga Sukri tidak bisa langsung kembali ke Jakarta, karena Bu Musa (Widyawati) dituduh terlibat kasus kriminal. Suasana keluarga makin tak menentu, karena “api dalam sekam” konflik lama yang terjadi antara Bu Musa dan Surti justru menjadi makin berkobar. Sedangkan kedua anak mereka, Bayu (Bima Azriel) dan Gerhana (Ciara Brosnan) mulai nyaman bertemu teman-teman baru, Cempaka (Maisha Kanna) dan Sangaji (Zayyan Sakha), dan bertualang mencoba membantu menyelesaikan masalah keluarga. Dapatkah konflik ibu mertua dan menantu terselesaikan demi kebahagiaan keluarga?",
    trailerLink:
      "https://www.youtube.com/watch?v=sqSDLx0nMz8&pp=ygUYcnVtYWggbWFzYSBkZXBhbiB0cmFpbGVy",
  },
  {
    id: "film-08",
    judul: "Malam Para Jahanam",
    imgUrl: "img/malam para jahanam.jpg",
    rating: "",
    jenisFilm: "Horror",
    produser: "Chand Parwez Servia, Fiaz Servia",
    sutradara: "Indra Gunawan",
    penulis: "Sugeng Wahyudi, Indra Gunawan",
    produksi: "Starvision",
    casts:
      "Harris Vriza, Aghniny Haque, Djenar Maesa Ayu, Daffa Wardhana, Teddy Syach, Zoul Pandjoul, Amel Carla, Derry Oktami, Mang Saswi, Odilla Yohana, M.N. Qomaruddin, Ibnu Widodo",
    sinopsis:
      "Rendi (Harris Vriza) ditemani Martin (Zoul Pandjoul) dan Siska (Amel Carla) mengantar jenazah kakeknya ke sebuah desa dan terjebak teror dendam Malam Para Jahanam. Mereka ditolong Marni (Djenar Maesa Ayu) dan Dira (Aghniny Haque) yang bercerita tentang konflik berdarah antara kelompok Pemuda Rakyat berhaluan komunis dengan kelompok santri pimpinan Kyai Malik (Teddy Syach) di tahun 1965. Apakah mereka bisa melewati kutukan tiga malam jahanam mencekam itu?",
    trailerLink:
      "https://www.youtube.com/watch?v=wY4ku99GsN8&pp=ygUabWFsYW0gcGFyYSBqYWhhbmFtIHRyYWlsZXI%3D",
  },
];

// Mengambil nilai parameter 'id' menggunakan URLSearchParams
const params = new URLSearchParams(window.location.search);
const filmId = params.get("id");

const targetFilmData = data.find((film) => film.id === filmId);

console.log(targetFilmData);

//image
const img = document.getElementById("image");
img.src = targetFilmData.imgUrl;

//judul
const judul = document.getElementById("judul");
judul.innerText = targetFilmData.judul;

//jenis film
const jenis = document.getElementById("jenis-film");
jenis.innerText = targetFilmData.jenisFilm;

//produser
const produser = document.getElementById("produser");
produser.innerText = targetFilmData.produser;

//sutradara
const sutradara = document.getElementById("sutradara");
sutradara.innerText = targetFilmData.sutradara;

//penulis
const penulis = document.getElementById("penulis");
penulis.innerText = targetFilmData.penulis;

//produksi
const produksi = document.getElementById("produksi");
produksi.innerText = targetFilmData.produksi;

//cast
const cast = document.getElementById("cast");
cast.innerText = targetFilmData.cast;

//sinopsis
const sinopsis = document.getElementById("sinopsis");
sinopsis.innerText = targetFilmData.sinopsis;

//trailerlink
const trailer = document.getElementById("trailer");
trailer.href = targetFilmData.trailerLink;
