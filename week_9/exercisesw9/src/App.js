import './App.css';
import List from './components/list';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <List />,
    },
  ]);

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;