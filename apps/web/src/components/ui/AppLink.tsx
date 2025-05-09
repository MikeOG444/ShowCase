import { useNavigate } from 'react-router-dom';
import { ReactNode, MouseEvent } from 'react';

interface AppLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * A type-safe link component that uses anchor tags but provides client-side navigation
 * This avoids TypeScript errors while maintaining React Router functionality
 */
const AppLink = ({ to, children, className, onClick }: AppLinkProps) => {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick();
    navigate(to);
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

export default AppLink;
