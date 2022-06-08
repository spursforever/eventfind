import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { getSingleImage } from '../../store/images';
import ImageEdit from '../ImageEdit';


const SingleImage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user);
  const singleImage = useSelector(state => state.image.singleImage);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    dispatch(getSingleImage(id));
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
        <img src={singleImage?.imageUrl} alt={singleImage?.content} />


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
      {showMenu && (
        <div >
          <ImageEdit singleImage={singleImage} />
        </div>
      )}
      )
    </div>
  );
};
export default SingleImage;