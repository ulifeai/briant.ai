import React, { FC, ReactNode, HTMLAttributes } from 'react';

interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Column: FC<ColumnProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`flex flex-col justify-center items-center ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Column;
