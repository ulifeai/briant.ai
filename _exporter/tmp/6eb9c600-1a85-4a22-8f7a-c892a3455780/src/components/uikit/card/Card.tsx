/**
 * Card component containing the other card elements
 * @param {string} className Allows adding CSS classes
 * @param {string} children JSX component Image from nextjs/img
 */
import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function Card({ className, children }: Props) {
  return <div className={className}>{children}</div>;
}
