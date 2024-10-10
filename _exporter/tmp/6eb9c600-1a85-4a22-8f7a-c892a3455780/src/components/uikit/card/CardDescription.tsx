/**
 * Card component description
 * @param {string} className Allows adding CSS classes
 * @param {string} children JSX component Image from nextjs/img
 */
type Props = {
  children?: string;
  className?: string;
};

export default function CardDescription({ className, children }: Props) {
  return (
    <div className={className}>
      <p className="text-lg">{children}</p>
    </div>
  );
}
