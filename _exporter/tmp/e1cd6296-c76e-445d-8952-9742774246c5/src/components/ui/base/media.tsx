import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
type MediaProps = {
    type?: 'image' | 'video';
    src: string;
    alt?: string;
    className?: string;
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    width?: number;
    height?: number;
  };

const Media = ({ type = "image", src = "", alt = 'placeholder', className = '', controls = true, autoPlay = false, loop = false, width, height }: MediaProps) => {
  if (type === 'image') {
    
    return (
        <img
            width={width}
            height={height}
            src={src}
            alt={alt}
            className={` w-[${width}] h-[${height}] object-cover  ${className}`}
            style={{borderRadius:  "var(--image-radius)"}}

      />
    );
  }

  if (type === 'video') {
    return (
      <video
        src={src}
        width={width}
        height={height}
        className={`object-cover ${className}`}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
      >
        Your browser does not support the video tag.
      </video>
    );
  }

  return null;
};



export default Media;
