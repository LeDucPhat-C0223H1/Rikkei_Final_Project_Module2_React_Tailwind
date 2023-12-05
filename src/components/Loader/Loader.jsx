// import React from "react";
// import "./Loader.css";

// const Loader = () => {
//   return (
//     <div className="bg-black/30 w-full h-[100vh] flex justify-center items-center z-[999] fixed overflow-hidden top-0">
//       <div className="loader"></div>
//     </div>
//   );
// };

// export default Loader;

import loadingIcon from '../../assets/—Pngtree—colorful loading icon_5326551.png'
import './Loading.scss'

export default function Loader() {
  return (
    <div className='loading_container'>
      <img className='rotating-image' src={loadingIcon}/>
    </div>
  )
}


