import * as React from 'react';

declare module 'react-router-dom' {
  // Fix for Link component
  export interface LinkProps {
    to: string;
    replace?: boolean;
    state?: any;
    relative?: 'route' | 'path';
    preventScrollReset?: boolean;
    reloadDocument?: boolean;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }

  // Fix for Outlet component
  export interface OutletProps {
    context?: unknown;
  }

  // Fix for Route component
  export interface RouteProps {
    path?: string;
    index?: boolean;
    element?: React.ReactNode;
    children?: React.ReactNode;
  }

  // Fix for Navigate component
  export interface NavigateProps {
    to: string;
    replace?: boolean;
    state?: any;
  }

  // Fix for BrowserRouter component
  export interface BrowserRouterProps {
    basename?: string;
    children?: React.ReactNode;
    window?: Window;
  }

  // Augment the existing types
  export interface LinkComponent
    extends React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>> {}
  export const Link: LinkComponent;

  export const Outlet: React.FC<OutletProps>;
  export const Route: React.FC<RouteProps>;
  export const Routes: React.FC<{ children?: React.ReactNode }>;
  export const Navigate: React.FC<NavigateProps>;
  export const BrowserRouter: React.FC<BrowserRouterProps>;
}
