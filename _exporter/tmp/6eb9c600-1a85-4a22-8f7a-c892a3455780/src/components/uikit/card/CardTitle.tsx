/**
 * Card component title
 * @param {string} className Allows adding CSS classes
 * @param {string} children JSX component Image from nextjs/img
 */

type Props = {
  children?: string;
  className?: string;
};

export default function CardTitle({ className, children }: Props) {
  return (
    <div className="mt-0 mr-0 mb-4 ml-0">
      <h2
        className={`leading-tight font-semibold text-4xl lg:text-5xl lg:font ${className}`}
      >
        {children}
      </h2>
    </div>
  );
}
