
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Header from './component/Header/Header';
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
          loader:()=>fetch("quizdata.json"),
          element:<Topic></Topic>
        },
        
        {
          path:'/statis',
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },

      ]
    },
    {
      path:'/',
      element:<Header></Header>
    },
     
  ])
  return (
    <div className="App">
        
         <RouterProvider router={router}></RouterProvider> 
    </div>
  );
}

export default App;
