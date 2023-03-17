import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main, { MainLoader } from './layouts/Main';
import Dashboard, { dashboardAction, DashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';
import { logoutAction } from './actions/logout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: MainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: DashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
  {
    path: '/about',
    element: <p>About us</p>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
