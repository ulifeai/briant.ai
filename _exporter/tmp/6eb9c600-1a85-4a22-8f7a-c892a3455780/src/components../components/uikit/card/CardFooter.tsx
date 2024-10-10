/**
 * Card component footer
 * @param {string} className Allows adding CSS classes
 * @param {string} children JSX component Image from nextjs/img
 */

import React from "react";

type Props = {
  children: React.ReactNode;
  className: string;
};

export default function CardFooter({ className, children }: Props) {
  return <div className={`mt-8 mr-0 mb-0 ml-0 ${className}`}>{children}</div>;
}
