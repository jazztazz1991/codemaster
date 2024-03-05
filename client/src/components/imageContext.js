import React, { useState, createContext, useContext} from "react";

const ImageContext = createContext();

export const ImageContextProvider = ({children}) =>{
    // console.log("children:", children)
    
    const [userImages, setUserImages] = useState({});

    const imageUploader = (userId, res) => {
      if (res[0].url) {
            setUserImages(prevState => ({
            ...prevState,
            [userId]: res[0].url 
        }))
      } else {
          console.log(error);
      }
  }

    return(
        <ImageContext.Provider value={{ userImages, imageUploader  }}>
        {children}
      </ImageContext.Provider>
    )
}
export const useImageContext = () => useContext(ImageContext);

