import Account from '../pages/Account/Account';
import CustomerList from '../pages/CustomerList/CustomerList';
import Dashboard from '../pages/Dashboard/Dashboard';
import Product from '../pages/Product/Product';
import Settings from '../pages/Settings/Settings';

const routes = [
  { path: '/app', component: Dashboard },
  { path: '/app/php', component: Account },
  { path: '/app/customers', component: CustomerList },
  { path: '/app/product', component: Product },
  { path: '/app/settings', component: Settings }
];

export default routes;
