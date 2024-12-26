import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="pelatihan"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>Tema Pelatihan Populer</h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[100%]`}>
          Pada tahun 2024, Thematic Academy bekerjasama dengan BSSN, Rakamin
          Academy, Coding Bee Academy, Karirmu dan lainnya sebagai mitra dalam
          melaksanakan pelatihan. Berikut tema pelatihan populer di Thematic
          Academy:
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
