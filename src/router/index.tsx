// Dependencies
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

// Component
import { Layout } from '../components';
import { LoadingContainer } from '../components/LoadingContainer';

// Constants
import { MAIN_ROUTES, ROUTES, PUBLIC_ROUTES } from '../constants';

// Create app router
const AppRouter = () => {
  const authorized = false;
  const loading = false;

  // Return app router
  return (
    <Router>
      <Routes>
        {
          loading
            ? (<Route
                path="*"
                element={<LoadingContainer />}
              />)
            : (
              <>
                {!authorized && MAIN_ROUTES.map(({ path, element: E }) => (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <Layout>
                        <E />
                      </Layout>
                    }
                  />
                ))}
                {authorized && PUBLIC_ROUTES.map(({ path, element: E }) => (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <E />
                    }
                  />
                ))}
                {/* <Route path="*" element={<Navigate to={!authorized ? ROUTES.DASHBOARD : ROUTES.LOGIN} />} /> */}
                <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} />} />
              </>
            )
        }
      </Routes>
    </Router>
  );
};

// Export app routes
export default AppRouter;
