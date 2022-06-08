import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteImage, updateImage } from '../../store/image';
import { useHistory } from "react-router-dom";
import './ImageEdit.css'


const ImageEdit = ({ singleImage }) => {

    
    const id = singleImage.id
  
    const userId = (parseInt(singleImage.userId, 10));
    const [content, setContent] = useState(singleImage.content);
    const [imageUrl, setImageUrl] = useState(singleImage.imageUrl);

    const updateContent = (e) => setContent(e.target.value);
    const updateImageUrl = (e) => setImageUrl(e.target.value);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleDelete = async (e) => {
      e.preventDefault();
      await dispatch(deleteImage(singleImage))
      history.push("/images")
    };

    const handleSubmit =  async (e) => {
      e.preventDefault();

      const updatedImage = {
        id,
        userId,
        imageUrl,
        content
      };


      await dispatch(updateImage(updatedImage))
      history.push("/images")

    };

    return (
      <div >
        <form onSubmit={handleSubmit}>
          <label> Image URL
          <input
            type='text'
            placeholder={imageUrl}
            value={imageUrl}
            onChange={updateImageUrl}
            name='imageUrl'
          />
          </label>
          <label> Content
          <textarea
            value={content}
            onChange={updateContent}
            name='content'
            placeholder={content}
            rows='5'
          ></textarea>
          </label>
          <button  type='submit'>Edit</button>
          <button  onClick={handleDelete}>Delete</button>
        </form>
      </div>
    );
  };

  export default ImageEdit;