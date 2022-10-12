import React from 'react';
import { Link } from 'react-router-dom';


const Quiz = ({quiz}) => {
    // console.log(quiz)
    const {id,name,logo,total} = quiz
   

    return (
        <div className="card card-compact w-96 gap-10 p-4 bg-green-100 shadow-xl sm:col-span-1 md:2 lg:2 px-10 mx-10 pb-10 mb-10">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    
    <h2 className="card-title">{name}</h2>
    <p>total : {total}</p>
    
    <div className="card-actions justify-center">
      <Link to={`/quiz/${id}`}><button className="btn btn-primary">Select Quiz</button></Link>
    </div>
    


  </div>
</div>
    );
};

export default Quiz;