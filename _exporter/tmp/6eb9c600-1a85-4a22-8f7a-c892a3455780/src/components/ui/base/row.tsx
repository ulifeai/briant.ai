import React, { FC, ReactNode, HTMLAttributes } from 'react';

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Row: FC<RowProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`flex flex-row justify-center items-center ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Row;
