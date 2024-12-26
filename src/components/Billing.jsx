import { pelatihan2 } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={pelatihan2}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] rounded-xl"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Pelatihan yang Disesuaikan untuk Kebutuhan Peserta
      </h2>
      <p className={`${styles.paragraph} max-w-[660px] mt-5`}>
        Silabus pelatihan Thematic Academy disesuaikan dengan kebutuhan target
        peserta, yang mana menyasar kalangan masyarakat yang belum menjadi
        target dari akademi-akademi yang lain di Digital Talent Scholarship.
      </p>
    </div>
  </section>
);

export default Billing;
