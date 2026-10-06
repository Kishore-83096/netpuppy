type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({
  href,
  children,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <a href={href} className={`ui-button ${className}`} onClick={onClick}>
      {children}
    </a>
  );
}