import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

export const routers = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
  },
]);

export default null;