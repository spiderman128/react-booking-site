// Dependencies
import { FC } from 'react';

// Pages
import {
  BrokersPage,
  ClientsPage,
  DashboardPage,
  FAQPage,
  LeadsPage,
  LeadsDetailPage,
  ObjectsPage,
  ObjectsDetailPage,
  LoginPage,
  RegisterPage,
} from '../pages';
import { ProfilePage } from '../pages/Profile';
import { BrokersDetailPage } from '../pages/BrokersDetail';

// Export routes
export const ROUTES = {
  DASHBOARD: '/',
  LEADS: {
    PREFIX: '/leads',
    INDEX: '/leads',
    DETAIL: '/leads/:id/detail',
  },
  CLIENTS: '/clients',
  OBJECTS: {
    PREFIX: '/objects',
    INDEX: '/objects',
    DETAIL: '/objects/:id/detail',
  },
  BROKERS: {
    PREFIX: '/brokers',
    INDEX: '/brokers',
    DETAIL: '/brokers/:id/detail',
  },
  FAQ: '/faqs',
  PROFILE: '/profile',
  LOGIN: '/login',
  REGISTER: '/register',
};

// Interfaces
interface IRoute {
  path: string;
  element: FC;
}

export const PUBLIC_ROUTES: IRoute[] = [
  {
    path: ROUTES.LOGIN,
    element: LoginPage,
  },
  {
    path: ROUTES.REGISTER,
    element: RegisterPage,
  }
];

export const MAIN_ROUTES: IRoute[] = [
  {
    path: ROUTES.DASHBOARD,
    element: DashboardPage,
  },
  {
    path: ROUTES.LEADS.INDEX,
    element: LeadsPage,
  },
  {
    path: ROUTES.LEADS.DETAIL,
    element: LeadsDetailPage,
  },
  {
    path: ROUTES.CLIENTS,
    element: ClientsPage,
  },
  {
    path: ROUTES.OBJECTS.INDEX,
    element: ObjectsPage,
  },
  {
    path: ROUTES.OBJECTS.DETAIL,
    element: ObjectsDetailPage,
  },
  {
    path: ROUTES.BROKERS.INDEX,
    element: BrokersPage,
  },
  {
    path: ROUTES.BROKERS.DETAIL,
    element: BrokersDetailPage,
  },
  {
    path: ROUTES.FAQ,
    element: FAQPage,
  },
  {
    path: ROUTES.PROFILE,
    element: ProfilePage,
  },
];
