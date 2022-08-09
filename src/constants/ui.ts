import { ROUTES } from './routes';

interface INavLink {
  icon: string;
  label: string;
  size?: number;
  path: string;
}

export const CARD_LAYOUT_SPACING = {
  row: 10,
  column: 10,
}

export const NAV_LINKS: INavLink[] = [
  {
    label: 'home',
    icon: 'home',
    path: ROUTES.DASHBOARD,
  },
  {
    label: 'products',
    icon: 'add',
    path: ROUTES.PRODUCTS,
  },
  {
    label: 'customers',
    icon: 'users',
    path: ROUTES.CUSTOMERS,
  },
  {
    label: 'shop',
    icon: 'home',
    size: 18,
    path: ROUTES.SHOP,
  },
  {
    label: 'income',
    icon: 'user',
    path: ROUTES.INCOME,
  },
  {
    label: 'promote',
    icon: 'question',
    path: ROUTES.PROMOTE,
  },
];
