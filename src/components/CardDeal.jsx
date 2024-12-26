import { pelatihan3 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Tingkatkan Keterampilan Digital Dasarmu
      </h2>
      <p className={`${styles.paragraph} max-w-[475px] mt-5`}>
        Akademi ini bertujuan meningkatan Keterampilan Digital Dasar, ditandai
        dengan peningkatan nilai pre-test dan post test. Dan juga peningkatan
        Keterampilan Tools Digital Dasar, menggunakan software atau aplikasi
        tertentu untuk mengerjakan tugas praktek.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img
        src={pelatihan3}
        alt="billing"
        className="w-[100%] h-[100%] rounded-xl"
      />
    </div>
  </section>
);

export default CardDeal;
