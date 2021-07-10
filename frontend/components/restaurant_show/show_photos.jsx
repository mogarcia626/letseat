import React from 'react';

class ShowPhotos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const photos = this.props.photos;
        const count = photos.length;
        const photosLayout = [];

        for (let i = 0; i < 4; i++) {
    
            if (i===2) {
                photosLayout.push(<img className='show-middle-image' key={i} src={photos[i]} alt="" />)
            } else if (photos[i]) {
                photosLayout.push(<img className='show-image' key={i} src={photos[i]} alt="" />)
            } else if (photos[i+1]) {
                photosLayout.push(<div className='x-more-photos' key={i}>+ {count-4} more</div>)
            } else {
                photosLayout.push(<div className='empty-photo' key={i}></div>)
            }                    
        }

        return(
        <div className='show-page-div'>
            <h2 className='show-section-header'>
                {photos.length} Photos
            </h2>

            <div className='photos-preview-container'>
                {photosLayout}
            </div>
        </div>
        )
    }
}

export default ShowPhotos