import { csrfFetch } from "./csrf";

const LOAD_IMAGES = "images/loadImages";
const LOAD_IMAGE = "images/loadImage";
const ADD_IMAGE = "images/addImage";
const UPDATE_IMAGE = "images/updateImage";
const REMOVE_IMAGE = "images/removeImage";

export const loadImage = (singleImage) => {
  return {
    type: LOAD_IMAGE,
    singleImage
  }
}

export const loadImages = (images) => {
  return {
    type: LOAD_IMAGES,
    images,
  };
};

export const addImage = (image) => {
  return {
    type: ADD_IMAGE,
    image,
  };
};

export const editImage = (image) => {
  return {
    type: UPDATE_IMAGE,
    image,
  };
};

export const removeImage = (imageId) => {
  return {
    type: REMOVE_IMAGE,
    imageId,
  };
};

export const getSingleImage = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/images/${id}`);
  const image = await response.json();
  dispatch(loadImage(image));
  return image;
}

export const getAllImages = () => async (dispatch) => {
  const response = await csrfFetch("/api/images");
  const image = await response.json();
  dispatch(loadImages(image));
};

export const updateImage = (image) => async (dispatch) => {
  
  const response = await csrfFetch(`/api/images/${image.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addImage(data.image));
    return data;
  }
};

export const createImage = (newImage) => async (dispatch) => {
  const { userId, imageUrl, content } = newImage;
  const response = await csrfFetch("/api/images", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      imageUrl,
      content,
    }),
  });

  

  const data = await response.json();
  
  dispatch(addImage(data.id));
  return response;
};

export const deleteImage = (image) => async (dispatch) => {
  const response = await csrfFetch(`/api/images/${image.id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  dispatch(removeImage(data.id));
  return response;
};



const initialState = {};

const imageReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_IMAGE:
      newState = {...state, singleImage: action.singleImage }
      return newState;
    case LOAD_IMAGES:
      newState = {}
      action.images.forEach(image => newState[image.id] = image)
      return newState;
    case ADD_IMAGE:
      newState = { ...state, ...action.image };
      return newState;
    case UPDATE_IMAGE:
      newState = {
        ...state,
        [action.image.id]: {
          ...action.image,
        },
      };
      return newState;
    case REMOVE_IMAGE:
      newState = { ...state };
      delete newState[action.imageId];
      return newState;
    default:
      return state;
  }
};

export default imageReducer;