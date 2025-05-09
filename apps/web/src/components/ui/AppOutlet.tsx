import { Outlet } from 'react-router-dom';

/**
 * A type-safe wrapper for React Router's Outlet component
 * This avoids TypeScript errors while maintaining React Router functionality
 */
const AppOutlet = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppOutlet;
