
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './components/About/About';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Main from './layout/Main';

function App() {
const router = createBrowserRouter([
  {path:'/',element:<Main></Main>,
children:[
  {path:'/home',
   loader:async()=>{
    return fetch('https://openapi.programming-hero.com/api/quiz')
   },
   element:<Home/>},
  {path:'/about', element: <About></About>},
  {path:'/statistics', element:<Statistics>l</Statistics>},
  {path:'*', element: <div>You make error. please try again</div>}

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
