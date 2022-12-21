import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Common/Router';

function App() {
  const routes = router;
  return (
    <div className="App max-w-[1800px] mx-auto">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
