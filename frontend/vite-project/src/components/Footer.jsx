// import React from 'react'

// const Footer = () => {

//   return (
//     <div>
//  <footer className= "   bg-black text-white text-center p-8">
//     <p className="flex gap-5 justify-center mb-1">
//      <span> Conditions of Use & Sales</span>
//      <span> Privacy Notice  </span> 
//       <span> Contact Us :{"8178267253"}   <a href="mailto:hritikkumar.bijnor@gmail.com">   Mail me</a></span>
//    </p>
//    <p> &copy; 2023 -2025, MoviePicker , Inc. or its affiliates</p>
//    </footer>

//    {/* <footer className=" left-0 w-full bg-gray-900 text-white p-4 text-center">
//   © 2025 My Website
// </footer> */}



//     </div>
//   )
// }

// export default Footer

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-8">
      <p className="flex gap-5 justify-center mb-1">
        <span>Conditions of Use & Sales</span>
        <span>Privacy Notice</span>
        <span>
          Contact Us: 8178267253
          <a href="mailto:hritikkumar.bijnor@gmail.com"> Mail me</a>
        </span>
      </p>
      <p>&copy; 2023 - 2025, MoviePicker, Inc.</p>
    </footer>
  );
};

export default Footer;
