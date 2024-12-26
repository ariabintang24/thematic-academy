// import React, { useState } from "react";
// import { BsChevronDown } from "react-icons/bs";

// const Accordion = ({ title, content, id }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleClick = (id) => {
//     setActiveIndex(id === activeIndex ? null : id);
//   };

//   // Fungsi untuk merender konten dengan list numerik
//   const renderContent = (content) => {
//     return content.split("\n").map((line, index) => {
//       // Cek apakah baris dimulai dengan angka dan titik (poin daftar)
//       const listItemPattern = /^\d+\.\s/;
//       if (listItemPattern.test(line)) {
//         // Jika ya, render sebagai item list
//         return <li key={index} className="pl-4">{line.trim()}</li>;
//       }
//       // Jika bukan, render sebagai paragraf biasa
//       return <p key={index} className="mb-2">{line.trim()}</p>;
//     });
//   };

//   return (
//     <div className="pb-8">
//       <div className="flex items-center justify-between">
//         <div className="sm:text-xl text-base font-bold">{title}</div>
//         <BsChevronDown
//           className={`${activeIndex === id ? "rotate-180" : "rotate-0"} cursor-pointer transition-all duration-300`}
//           onClick={() => handleClick(id)}
//         />
//       </div>
//       <AnimatePresence>
//         {id === activeIndex && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: "auto" }}
//             exit={{ height: 0 }}
//             transition={{ duration: 0.5 }}
//             style={{ overflow: "hidden" }}
//             className="pt-4"
//           >
//             <ul className="list-disc pl-5">
//               {renderContent(content)}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Accordion;


// import React, { useState } from "react";
// import { BsChevronDown } from "react-icons/bs";

// const Accordion = ({ title, id, content }) => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleClick = (id) => {
//     setActiveIndex(id === activeIndex ? null : id);
//   };

//   // Mengonversi string ke dalam format baris baru (\n) dan menampilkannya sebagai paragraf
//   const renderContent = (content) => {
//     const lines = content.split("\n").map((line, index) => line.trim()).filter((line) => line.length > 0);
//     return lines.map((line, index) => (
//       <p key={index} className="font-poppins text-sm leading-7 text-white">
//         {line}
//       </p>
//     ));
//   };

//   return (
//     <div className="pb-8">
//       <div
//         className="font-poppins flex items-center justify-between text-white cursor-pointer"
//         onClick={() => handleClick(id)} // Menambahkan onClick pada judul
//       >
//         <div className="sm:text-xl text-base font-bold">{title}</div>
//         <BsChevronDown
//           className={`${
//             activeIndex === id ? "rotate-180" : "rotate-0"
//           } cursor-pointer transition-all duration-300`}
//         />
//       </div>
//       {id === activeIndex && (
//         <div style={{ overflow: "hidden" }} className="pt-4">
//           {/* Render konten dengan setiap baris sebagai paragraf */}
//           {renderContent(content)}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Accordion;




import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const Accordion = ({ title, id, content }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };

  return (
    <div className="pb-8">
      <div
        className="font-poppins flex items-center justify-between text-white cursor-pointer"
        onClick={() => handleClick(id)} // Menambahkan onClick pada judul
      >
        <div className="sm:text-xl text-base font-bold">{title}</div>
        <BsChevronDown
          className={`${
            activeIndex === id ? "rotate-180" : "rotate-0"
          } cursor-pointer transition-all duration-300`}
        />
      </div>
      {id === activeIndex && (
        <div style={{ overflow: "hidden" }} className="pt-4">
          <p className="font-poppins text-sm leading-7 text-white">
            {content}
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;




