import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { getOneImage } from '../../store/images';


const SingleImage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);
  const singleImage = useSelector(state => state.image.singleImage);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    dispatch(getOneImage(id));
  }, [dispatch, id]);

  const openCloseMenu = () => {
    if (showMenu) setShowMenu(false);
    else setShowMenu(true);
  };


  return (
    <div>
        <div>
          <div >
            <NavLink to="/images" >
               Back to Images</NavLink>
            </div>
                <img  src={singleImage?.imageUrl} alt={singleImage?.content} />


        </div>

        <div >

            <div >
                <div >
                <h2>Hi, {sessionUser.username}</h2>
                <button id="edit-image-button" onClick={openCloseMenu}>
                  <i ></i>
                </button>
                </div>
                <p>Content: {singleImage?.content}</p>
                
            </div>
        </div>
        
        )
    </div>
  );
};
export default SingleImage;