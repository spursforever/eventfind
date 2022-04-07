import { useSelector, useDispatch } from "react-redux"
import { getImage } from "../../store/images"
import { useEffect } from "react"
import SingleImage from "../SingleImage"
import { Route } from "react-router-dom"
import "./index.css"

const Images =  () => {
    const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const imagesObj = useSelector((state) => state.image);
  const images = Object.values(imagesObj);
  const sessionImages = images.filter(
    (image) => image.userId === sessionUser.id
  );
    useEffect(() => {
        dispatch(getImage())
    }, [dispatch])
    
return (
    <div className="images">
        <div className="images-itself">
          {sessionImages?.map(({ imageUrl, id, content }) => (
        <SingleImage
          key={id}
          id={id}
          imageUrl={imageUrl}
          content={content}
        />
      ))} </div>
      <Route path="images/:id">
        <SingleImage images={images} />
      </Route>
    </div>
)
}
export default Images;