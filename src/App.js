
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import JavascriptQuiz from './component/JavascriptQuiz/JavascriptQuiz';
import Statistics from './component/Statis/Statistics';
import Topic from './component/Topic/Topic';

import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
       
        {
          path:'/',
          loader:()=>fetch(' https://openapi.programming-hero.com/api/quiz '),
          element:<Topic></Topic>,
         
          
        },
        
        {
          path:'/statis',
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/topcis/:topcisId',
          loader:async({params})=>{
           return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topcisId}`)
          },
          element:<JavascriptQuiz/>
          
        },
        
       
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
