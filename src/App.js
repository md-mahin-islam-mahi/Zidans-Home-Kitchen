import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Common/Router';

function App() {
  const routes = router;
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
