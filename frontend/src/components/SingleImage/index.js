import { NavLink } from 'react-router-dom';
import React from 'react';



const SingleImage = ({ id, imageUrl, content }) => {
  return (
    <div >
      <NavLink  to={`/images/${id}`}><img  width={400} height={400} src={`${imageUrl}`} alt={content}/></NavLink>
    </div>
  );
};
export default SingleImage;