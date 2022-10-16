import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto mt-5 bg-sky-400'>
            
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  <h1>What is purpose of react router?</h1>
  </div>
  <div className="collapse-content"> 
    <p className="text-lg"> Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
  </div>
</div>
           
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  <h1>How does context word?</h1>
  </div>
  <div className="collapse-content"> 
    <p className='text-lg'>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store</p>
  </div>
</div>


            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  <h1>what is useref ?</h1>
  </div>
  <div className="collapse-content"> 
    <p>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.
</p>
  </div>
</div>

            
           
        </div>
    );
};

export default Blog;