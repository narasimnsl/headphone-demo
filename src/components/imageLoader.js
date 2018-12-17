import React from 'react';
import ImageLoader from 'react-loading-image';
import Spinner from 'react-spinkit';

/* Image loader to load image with spinner */
const imageLoader  = (props) => {
   
    let sName = props.spinnerType ? props.spinnerType : 'ball-clip-rotate-multiple';
    let sColour = props.spinnerColour ?  props.spinnerColour : 'purple';
    return(
        <ImageLoader 
        src={props.imgSource}
        loading={() => <Spinner className="ImgLoadSpinner" name={sName} color={sColour}/>}
        error={() => <div className="ImgLoadError">Error</div>}
        className="headphoneImage"
    />
    )
         
}



export default imageLoader;

