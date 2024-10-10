import React, { FC, ReactNode, HTMLAttributes } from 'react';

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  component?: string;
}

const Wrapper: FC<RowProps> = ({ children, className = '', component, ...props }) => {


  const triggerClick = ()=>{
    window.parent.postMessage({id: component, operation: "component_clicked"}, "*")
  }  

  return (
    <div onClick={triggerClick} className={`hover:border border-primary ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
