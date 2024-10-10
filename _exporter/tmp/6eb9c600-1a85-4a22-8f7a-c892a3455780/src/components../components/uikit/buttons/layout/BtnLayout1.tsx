import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

export default function BtnLayout1({ className, children }: Props) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>{children}</div>
  );
}
