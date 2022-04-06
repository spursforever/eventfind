import { csrfFetch } from './csrf';

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

export const getImage = () => async (dispatch) => {
    const response = await csrfFetch(`/api/images`)
    if (response.ok) {
        const images = await response.json();
        dispatch(loadImages(images))
    }
}

export const getOneImage = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${id}`);
    if (response.ok) {
        const image = await response.json();
        dispatch(addImage(image))
    }
}

// export const updateImage = (id) => async (dispatch) => {
//     const response = await csrfFetch(`/api/images/${images.id}`,
//     {method: 'put',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(id)
//     });
//     if (response.ok) {
//         const image = await response.json();
//         dispatch(addImage(image))
//         return image
//     }
// }


    const initialState = {}
    
const imagesReducer = (state = initialState, action) => {
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

export default imagesReducer