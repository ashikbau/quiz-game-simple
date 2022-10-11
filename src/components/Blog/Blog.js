import React from 'react';

const Blog = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
  <div className="card-body my-10">
    <h2 className="card-title">What is the purpose of react router?</h2>
    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
    
  </div>
  <div className="card-body">
    <h2 className="card-title">How does context API works?</h2>
    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
    
  </div>
  <div className="card-body">
    <h2 className="card-title"> Write about use ref hook?</h2>
    <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
    
  </div>
</div>
    );
};

export default Blog;