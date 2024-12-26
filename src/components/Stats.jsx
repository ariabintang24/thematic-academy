import { stats } from "../constants"; 
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {/* Menambahkan teks Tahun 2024 di atas seluruh stats */}
    <div className="w-full flex justify-center mb-1">
      <div className="flex items-center py-[6px] px-4 bg-discount-gradient rounded-[10px]">
        <p className="font-poppins font-normal text-white">
          <span className="text-white">Tahun</span> <span className="text-white">2024</span>
        </p>
      </div>
    </div>

    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex sm:justify-center justify-start items-center flex-row m-3`}>
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
