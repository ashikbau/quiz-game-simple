
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './components/About/About';
import Home from './components/Home/Home';
import QuizQuestion from './components/QuizQuestion/QuizQuestion';
import Statistics from './components/Blog/Blog';
import Main from './layout/Main';
import Blog from './components/Blog/Blog';

function App() {
const router = createBrowserRouter([
  {path:'/',element:<Main></Main>,
children:[
  {path:'/home',
   loader:async()=>{
    return fetch('https://openapi.programming-hero.com/api/quiz')
   },
   element:<Home/>},
   {
    path:'/quiz/:quizid',
    loader: async(params)=>{
     
      const{params:y}=params
     
    
       
      return fetch(`https://openapi.programming-hero.com/api/quiz/${y.quizid}`)
    },
    element: <QuizQuestion></QuizQuestion>
   },
  {path:'/about', element: <About></About>},
  {path:'/blog', element:<Blog></Blog>},
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
