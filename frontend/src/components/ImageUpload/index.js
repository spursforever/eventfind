import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createImage } from "../../store/image";


const ImageUpload = () => {
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;
    
  
    const [imageUrl, setImageUrl] = useState("");
    const [content, setContent] = useState("");
    const [errors, setErrors] = useState([]);
    const uploadValidation = (e) => {
        let validationErrors = [];
        if (!imageUrl.length) validationErrors.push("Please provide a valid URL");
        if (imageUrl.length > 0 && !imageUrl.match(/^https?:\/\/.+\/.+$/)) validationErrors.push("Please provide a valid URL");
        if (!content.length) validationErrors.push("Please provide a content");
    
        if (validationErrors.length) {
          setErrors(validationErrors);
        //   console.log('validationErrors', validationErrors);
          return true;
        } else return false;
      }
      const reset = () => {
        setImageUrl("");
        setContent("");
      };
    
      const handleSubmit = async (e) => {
        if(uploadValidation()) {
    
          e.preventDefault();
        } else {
    
          const newImage = {
            userId,
            imageUrl,
            content,
          };
    
          await dispatch(createImage(newImage));
          reset();
          
        }
      };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <NavLink></NavLink>
            <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div>
            <input
            type="text"
            onChange={(e) => setImageUrl(e.target.value)}
            value={imageUrl}
            name="imageUrl"
            placeholder="Image Url"
            ></input>
        </div>
        <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content"
            placeholder="Add your content"
            rows="5"
          ></textarea>
          <div>
              <NavLink onClick={handleSubmit} to="/images">Submit New Image</NavLink>
          </div>
            </form>
        </div>
    );
          };
export default ImageUpload;