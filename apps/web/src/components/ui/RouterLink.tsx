import { useNavigate } from 'react-router-dom';
import * as React from 'react';

/**
 * A type-safe alternative to React Router's Link component
 * This component uses anchor tags but provides client-side navigation
 */
interface RouterLinkProps {
  to: string;
  children?: React.ReactNode;
  className?: string;
  replace?: boolean;
  state?: any;
  onClick?: () => void;
}

const RouterLink: React.FC<RouterLinkProps> = ({
  to,
  children,
  className,
  replace = false,
  state,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClick) onClick();
    navigate(to, { replace, state });
  };

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};

RouterLink.displayName = 'RouterLink';

export default RouterLink;
