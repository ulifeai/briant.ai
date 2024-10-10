"use client";

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Manrope } from 'next/font/google';

const headingStyles = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-semibold',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
};

const font = Manrope({
  subsets: ['latin'],
  weight: 'variable'
})

const Text = ({ as = 'p', children, className = '' }) => {
  const [editable, setEditable] = useState(false)
  const Component = as;
  const baseStyle = headingStyles[as] || 'text-base';
  const fonts = {
    "p":{
      fontFamily: "var(--page-font)"
    }, 
    "h1":{
      fontFamily: "var(--header-font)"
    }
  }

  return (
    <Component className={`${baseStyle} ${className} ${font.className} py-2`} style={  fonts[as] } contentEditable={editable} onDoubleClick={()=>setEditable(!editable)}>
      {children}
    </Component>
  );
};

Text.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Text;
