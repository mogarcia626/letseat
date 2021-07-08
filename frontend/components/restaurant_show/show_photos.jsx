import React from 'react';

function ShowPhotos(photos) {
    const count = photos.length;
    // const fourPhotos = 
    // const fivePhotos = 
    // const morePhotos = 

    return(
        <div >
            <h2 className='show-section-header'>
                {count} Photos
            </h2>

            <div className='photos-preview-container'>

                <div className='photos-column-two'>
                    <img className='show-image' src={photos[0]} alt="" />
                    <img className='show-image' src={photos[1]} alt="" />
                </div>

                <div className='photos-column-one'>
                    <img className='show-image' src={photos[2]} alt="" />                    
                </div>

                {count === 4 ? 
                    <div className='photos-column-two'>
                        <img className='show-image' src={photos[3]} alt="" /> 
                        <div className='empty-photo'></div>
                    </div>
                : null }

                {count === 5 ? 
                    <div className='photos-column-two'>
                        <img className='show-image' src={photos[3]} alt="" /> 
                        <img className='show-image' src={photos[4]} alt="" /> 
                    </div>
                : null }

                {count > 5 ?
                    <div className='photos-column-two'>
                        <img className='show-image' src={photos[3]} alt="" /> 
                        <div className='x-more-photos'>+ {count-4} more</div>
                    </div> 
                : null }

            </div>
        </div>
    )
}

export default ShowPhotos