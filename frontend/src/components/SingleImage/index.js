import { NavLink } from 'react-router-dom';
import React from 'react';



const SingleImage = ({ id, imageUrl, content }) => {
  return (
    <div >
      <NavLink  to={`/images/${id}`}><img src={`${imageUrl}`} alt={content}/></NavLink>
    </div>
  );
};
export default SingleImage;