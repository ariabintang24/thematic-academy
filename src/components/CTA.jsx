import styles from "../style";
import Button from "./Button";
import { accordions } from "../constants";
import Accordion from "./Accordion";

const CTA = () => (
  <>
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className="text-white font-poppins font-semibold text-[30px] w-full">
          Siap Menjadi Jagoan Digital? <br /> Mulai Pelatihanmu di Thematic Academy!
        </h2>
        <p className={`${styles.paragraph} max-w-[100%] mt-5`}>
          Pelatihan berkualitas yang membantu kamu menguasai keterampilan yang
          sedang dibutuhkan industri.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>

    {/* New Section for FAQ */}
    <section className="my-14">
      <div className="font-poppins text-white text-center font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently Asked Questions
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => (
          <Accordion key={accordion.id} {...accordion} />
        ))}
      </div>
    </section>
  </>
);

export default CTA;
