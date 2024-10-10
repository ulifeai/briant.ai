import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

const logoPath = {
  facebook: "img/logo/facebook.svg",
  instagram: "img/logo/instagram.svg",
  linkedin: "img/logo/linkedin.svg",
  x: "img/logo/x.svg",
  youtube: "img/logo/youtube.svg",
};

const LogoSocial = ({ as = "f", className = "" }) => {
  const logo = logoPath[as];
  return (
    <Image
      src={logo}
      width={150}
      height={150}
      alt="palcehplder"
      className={`size-6 ${className}`}
    />
  );
};

LogoSocial.propTypes = {
  as: PropTypes.oneOf(["facebook", "instagram", "linkedin", "x", "youtube"]),
  className: PropTypes.string,
};

export default LogoSocial;
