import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="px-[10%] pt-4 pb-7">
      <div className="flex w-full items-center justify-center border-t-2 border-[#F2F2F2] pt-5">
        <img
          src="/logo-with-tagline.png"
          alt="Sparkonomy logo"
          className="h-10"
          loading="lazy"
        />
      </div>
    </footer>
  );
};

export default Footer;
