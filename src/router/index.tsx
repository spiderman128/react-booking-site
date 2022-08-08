// Dependencies
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Hooks
import { useAccountState } from '../hooks';

// Component
import { Layout } from '../components';
import { LoadingContainer } from '../components/LoadingContainer';

// Constants
import { MAIN_ROUTES, ROUTES, PUBLIC_ROUTES } from '../constants';

// Actions
import { getAccount } from '../redux/actions';

// Create app router
const AppRouter = () => {
  const dispatch = useDispatch();
  const { authorized, loading } = useAccountState();

  useEffect(() => {
    dispatch(getAccount());
  }, [dispatch]);

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
                <Route path="*" element={<Navigate to={!authorized ? ROUTES.DASHBOARD : ROUTES.LOGIN} />} />
              </>
            )
        }
      </Routes>
    </Router>
  );
};

// Export app routes
export default AppRouter;
