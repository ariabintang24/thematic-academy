import React from "react";

const Button = ({ styles }) => (
  <a 
    href="https://digitalent.komdigi.go.id/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    Ayo Mulai!
  </a>
);

export default Button;


// import React from "react";

// const Button = ({ styles }) => (
//   <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
//     Ayo Mulai!
//   </button>
// );

// export default Button;
