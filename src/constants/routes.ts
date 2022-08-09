// Dependencies
import { FC } from 'react';

// Pages
import {
  DashboardPage,
} from '../pages';

// Export routes
export const ROUTES = {
  DASHBOARD: '/',
  PRODUCTS: '/products',
  CUSTOMERS: '/customers',
  SHOP: '/shop',
  INCOME: '/income',
  PROMOTE: '/promote',
};

// Interfaces
interface IRoute {
  path: string;
  element: FC;
}

export const PUBLIC_ROUTES: IRoute[] = [
  
];

export const MAIN_ROUTES: IRoute[] = [
  {
    path: ROUTES.DASHBOARD,
    element: DashboardPage,
  },
];
