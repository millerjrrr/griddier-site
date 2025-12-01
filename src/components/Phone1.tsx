const Phone1: React.FC<{ source: string }> = ({ source }) => {
  return (
    <div className="relative w-[350px]">
      <img
        src={source}
        className="
          absolute
          object-cover
          left-[8.6%]
          w-[83.1%]
          top-[4.4%]  
          h-[91.2%]
          rounded-3xl
        "
      />
      <img src="Phone-1.png" className="w-full relative z-10" />
    </div>
  );
};

export default Phone1;
