
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './components/About/About';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';

function App() {
const router = createBrowserRouter([
  {path:'/',element:<Main></Main>,
children:[
  {path:'/home', element:<Home/>},
  {path:'/about', element: <About></About>},
  {path:'/statistics', element:<Statistics>l</Statistics>}

]
},
 
  

])

  return (
    
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
