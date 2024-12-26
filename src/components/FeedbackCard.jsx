const FeedbackCard = ({ content, name, img, link }) => (
  <a
    href={link} // link yang akan dituju
    target="_blank"
    rel="noopener noreferrer"
    className="block p-2 shadow-lg min-w-[15rem] bg-white rounded-md max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
  >
    <div className="relative">
      {/* Gambar diubah menjadi persegi panjang */}
      <img
        src={img}
        alt={name}
        className="w-full h-[200px] object-cover rounded-md mb-4"
      />

      <div className="flex flex-col items-center">
        {/* Nama */}
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>

        {/* Isi konten */}
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-4">
          {content}
        </p>
      </div>
    </div>
  </a>
);

export default FeedbackCard;
