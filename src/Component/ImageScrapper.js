import React from 'react';
import { useState } from 'react/cjs/react.development';

const ImageScrapper = ({images}) => {
    const [searchBar, setSearchBar] = useState('');
    return (
        <>
           <div className="flex-column">
                <input type="text" placeholder="Search image with tags...." className="Searchbox" onChange={(e)=>setSearchBar(e.target.value)}/> 
                <p><small>Ex: Rose, Life, Bird</small></p>   
           </div>
            <div className="flex">
                {
                    // eslint-disable-next-line array-callback-return
                    images.filter((image) => {
                        if(searchBar === ""){
                            return image;
                        }else if(image.tags.toLowerCase().includes(searchBar.toLowerCase())){
                            return image;    
                        }
                    }).map((image, key) => (
                        <div className="imageId" key={key}>
                            <img src={image.largeImageURL} alt={image.user} />
                            <p>{image.tags}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ImageScrapper;