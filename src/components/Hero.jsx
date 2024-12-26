// import { pelatihan } from "../assets";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="container mx-auto flex md:flex-row flex-col sm:py-16 py-6"
//     >
//       {/* Bagian Teks */}
//       <div className="flex-1 flex flex-col justify-center xl:px-0 sm:px-16 px-6 md:pr-8">
//         <div className="flex flex-row justify-between items-center w-full">
//           <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
//             Jadi Jagoan <br className="sm:block hidden" />{" "}
//             <span className="text-gradient">Digital</span>{" "}
//           </h1>
//           <div className="ss:flex hidden md:mr-4 mr-0"></div>
//         </div>
//         <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[90%] mt-5">
//           Thematic Academy (TA) merupakan salah satu bagian Program Digital
//           Talent Scholarship Kementerian Komunikasi dan Digital yang ditujukan
//           spesifik pada kalangan atau sektor tertentu. Pelatihan pada Thematic
//           Academy bertujuan untuk meningkatkan keterampilan digital dasar
//           masyarakat dalam rangka mempercepat transformasi digital Indonesia.
//         </p>
//       </div>

//       {/* Bagian Gambar */}
//       <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative lg:ml-8">
//         <img
//           src={pelatihan}
//           alt="billing"
//           className="w-[95%] h-auto md:w-[100%] relative z-[5] rounded-xl"
//         />

//         {/* gradient start */}
//         <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
//         <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
//         <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
//         {/* gradient end */}
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { pelatihan } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex md:flex-row flex-col sm:py-12 py-6"
    >
      <div
        className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6"
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Jadi Jagoan <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Digital</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[90%] mt-5">
          Thematic Academy (TA) merupakan salah satu bagian Program Digital
          Talent Scholarship Kementerian Komunikasi dan Digital yang ditujukan
          spesifik pada kalangan atau sektor tertentu. Pelatihan pada Thematic
          Academy bertujuan untuk meningkatkan keterampilan digital dasar
          masyarakat dalam rangka mempercepat transformasi digital Indonesia.
        </p>
      </div>
      <div
        className="flex-1 flex justify-center items-center md:my-0 my-10 relative"
      >
        <img
          src={pelatihan}
          alt="billing"
          className="w-auto h-auto max-w-[90%] md:max-w-[90%] relative z-[5] rounded-xl"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
