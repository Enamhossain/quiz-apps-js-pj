import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({topcis}) => {
    
     const {id,name,logo}= topcis
    return (
        <div>
           <div className="card  w-96 bg-base-100 shadow-xl ">
  <figure className="px-10 pt-10">
    <img src={logo} alt="js" className="rounded-xl bg-slate-400" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    
    <div className="card-actions">
      <button  className="btn btn-primary">
        <Link to ={`/topcis/${id}`} > Start Quiz </Link> </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Topics;