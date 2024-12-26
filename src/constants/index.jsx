import {
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

import people01 from "../assets/people01.png";
import people02 from "../assets/people02.png";
import people03 from "../assets/people03.png";
import people04 from "../assets/people04.png";
import people05 from "../assets/people05.png";
import people06 from "../assets/people06.png";
import people07 from "../assets/people07.png";
import people08 from "../assets/people08.png";
import people09 from "../assets/people09.png";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "benefit",
    title: "Benefit",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "pelatihan",
    title: "Pelatihan",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Pelatihan Berkualitas",
    content:
      "Dapatkan materi pelatihan dari para ahli industri dengan pendekatan praktis yang sesuai dengan kebutuhan pasar kerja.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Sertifikat Resmi",
    content:
      "Setelah menyelesaikan pelatihan, kamu akan mendapatkan sertifikat yang diakui oleh berbagai perusahaan, meningkatkan peluang karirmu.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Akses 24/7 ke Materi",
    content:
      "Belajar kapan saja, di mana saja dengan akses penuh ke materi dan sumber daya yang dapat membantu kamu berkembang dalam bidang digital.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Belajar membuat konten video kreatif dari ide hingga produksi, serta teknik editing dasar untuk menciptakan video menarik yang sesuai tren digital.",
    name: "Video Content Creator",
    img: people01,
    link: "https://digitalent.komdigi.go.id/akademi/TA?tema=729",
  },
  {
    id: "feedback-2",
    content:
      "Kenali ancaman dunia siber dan cara melindungi diri dari kejahatan online. Pelatihan ini dirancang khusus untuk meningkatkan kesadaran keamanan digital di kalangan siswa.",
    name: "Basic Cyber Security untuk Siswa SMA/SMK",
    img: people02,
    link: "https://digitalent.komdigi.go.id/akademi/TA?tema=723",
  },
  {
    id: "feedback-3",
    content:
      "Kuasai aplikasi perkantoran seperti Microsoft Office untuk meningkatkan produktivitas dalam pengajaran dan administrasi pendidikan.",
    name: "Aplikasi Perkantoran untuk Tenaga Pendidik",
    img: people03,
    link: "https://digitalent.komdigi.go.id/akademi/TA?tema=725",
  },
  {
    id: "feedback-4",
    content:
      "Pelajari dasar-dasar desain grafis menggunakan software seperti Canva untuk membuat materi pengajaran yang lebih menarik dan profesional.",
    name: "Desain Grafis untuk Tenaga Pendidik",
    img: people04,
    link: "https://digitalent.komdigi.go.id/akademi/TA?tema=726",
  },
  {
    id: "feedback-5",
    content:
      "Tingkatkan daya tarik sektor pariwisata dengan strategi pemasaran digital terkini, termasuk penggunaan media sosial dan iklan online untuk menjangkau wisatawan lokal maupun internasional.",
    name: "Pemasaran Digital untuk Sektor Pariwisata",
    img: people05,
    link: "https://digitalent.komdigi.go.id/akademi/TA?tema=730",
  },
  {
    id: "feedback-6",
    content:
      "Pelajari konsep dasar Metaverse, potensi teknologinya, dan bagaimana penerapannya di Indonesia untuk berbagai sektor, termasuk pendidikan, bisnis, dan hiburan.",
    name: "Metaverse 101: Pengenalan Metaverse di Indonesia",
    img: people06,
    link: "https://digitalent.komdigi.go.id/akademi/TA?tema=727",
  },
  {
    id: "feedback-7",
    content:
      "Eksplorasi dasar-dasar data science menggunakan tools Orange untuk membantu guru memvisualisasikan dan menganalisis data secara mudah dan efektif.",
    name: "Data Science untuk Guru SMA/SMK",
    img: people07,
    link: "https://digitalent.komdigi.go.id/akademi/TA?tema=724",
  },
  {
    id: "feedback-8",
    content:
      "Dukung pemberdayaan perempuan dalam teknologi dengan pelatihan khusus yang dirancang untuk mendorong keterlibatan dan kontribusi wanita di sektor teknologi.",
    name: "Women in Tech",
    img: people08,
    link: "https://digitalent.komdigi.go.id/akademi/TA?tema=728",
  },
  {
    id: "feedback-9",
    content:
      "Perkenalkan anak-anak pada dunia coding dengan metode block programming yang menyenangkan dan interaktif, cocok untuk siswa SD dan SMP.",
    name: "Pengenalan Coding (block programming) untuk anak SD dan SMP",
    img: people09,
    link: "https://digitalent.komdigi.go.id/akademi/TA?tema=722",
  },
];

// export {
//   people01,
//   people02,
//   people03,
//   people04,
//   people05,
//   people06,
//   people07,
//   people08,
//   people09,
//   pelatihan,
//   pelatihan2,
//   pelatihan3,
// };

export const stats = [
  {
    id: "stats-1",
    title: "Total Pendaftar",
    value: "30.000+",
  },
  {
    id: "stats-2",
    title: "Mengadakan Pelatihan",
    value: "500+",
  },
  {
    id: "stats-3",
    title: "Tema Pelatihan",
    value: "20+",
  },
];

export const footerLinks = [
  {
    title: "Menu",
    links: [
      {
        name: "Home",
        link: "home",
      },
      {
        name: "Benefit",
        link: "benefit",
      },
      {
        name: "About",
        link: "about",
      },
      {
        name: "Pelatihan",
        link: "pelatihan",
      },
    ],
  },
  {
    title: "Pranala",
    links: [
      {
        name: "Digital Talent Scholarship",
        link: "https://digitalent.komdigi.go.id/",
      },
      {
        name: "Badan Pengembangan SDM Komdigi",
        link: "https://bpsdm.kominfo.go.id/",
      },
    ],
  },
  {
    title: "Media Sosial",
    links: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/thematic.academy",
      },
      {
        name: "Youtube",
        link: "https://www.youtube.com/@thematicacademy5283",
      },
      {
        name: "Whatsapp",
        link: "https://wa.me/6281545943582",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/thematic.academy",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.youtube.com/@thematicacademy5283",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const accordions = [
  {
    id: 1,
    title: "Tema pelatihan apa saja yang ada di Thematic Academy?",
    content: `Thematic Academy memiliki target sebanyak 16.000 peserta pada tahun 2023 dengan 9 Tema Pelatihan, yaitu:
        1. Metaverse 101: Pengenalan Metaverse di Indonesia
        2. Pemasaran Digital untuk Sektor Pariwisata
        3. Basic Cyber Security untuk Siswa SMA/SMK
        4. Aplikasi Perkantoran untuk Tenaga Pendidik
        5. Video Content Creator
        6. Data Science untuk Guru SMA/SMK dengan Tools Orange
        7. Desain Grafis untuk Tenaga Pendidik
        8. Women In Tech
        9. Pengenalan Coding (block programming) untuk anak SD dan SMP.`,
  },
  {
    id: 2,
    title:
      "Bagaimana alur pendaftaran untuk mengikuti pelatihan di Thematic Academy?",
    content: (
      <>
        Pertama-tama, login ke website Digitalent atau melalui{" "}
        <a
          href="https://digitalent.komdigi.go.id"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-secondary"
        >
          https://digitalent.komdigi.go.id
        </a>
        , kemudian pilih menu "Pendaftaran", dan pilih pelatihan yang ingin kamu
        ikuti. Selain itu, persiapkan dokumen yang harus diperlukan.
      </>
    ),
  },
  {
    id: 3,
    title: "Pelatihan ini dilaksanakan secara online atau offline?",
    content:
      "Pelatihan di Thematic Academy tersedia dalam dua metode, yaitu online dan offline, yang mana disesuaikan dengan kebutuhan dan karakteristik setiap jenis pelatihan.",
  },
  {
    id: 4,
    title: "Apakah akan mendapatkan sertifikat?",
    content:
      "Ya, Kamu akan mendapatkan sertifikat digital setelah menyelesaikan pelatihan dengan memenuhi semua kriteria kelulusan",
  },
  {
    id: 5,
    title: "Kapan sertifikat tersedia dan mulai bisa diunduh?",
    content:
      "Sertifikat akan tersedia 1-2 minggu setelah pelatihan karena menunggu proses penilaian dan pendataan lainnya. Setelah itu, Kamu bisa mendownload atau mengunduhnya.",
  },
  {
    id: 6,
    title: "Bagaimana cara mendownload sertifikat?",
    content: (
      <>
        Untuk pelatihan yang kamu ikuti, Kamu bisa lihat dan download di laman
        web digitalent dan pergi ke menu dashboard atau kunjungi{" "}
        <a
          href="https://digitalent.komdigi.go.id/auth/user-profile?menu=pelatihan"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-secondary"
        >
          https://digitalent.komdigi.go.id/auth/user-profile?menu=pelatihan
        </a>
      </>
    ),
  },
];
