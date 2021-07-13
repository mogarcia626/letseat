import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
});

class ShowPhotos extends React.Component {
    constructor(props) {
        super(props);
        this.handlePhotoClick = this.handlePhotoClick.bind(this);
    }

    handlePhotoClick(i, photos) {        
        this.props.openModal({
            modal: 'photo-carousel', 
            data: {
                idx: i,
                photos: photos
            }
        });
    }

    render() {
        const photos = this.props.photos;
        const count = photos.length;
        const photosLayout = [];
        let image;

        for (let i = 0; i < 5; i++) {
    
            if (i===2) {
                photosLayout.push( <img
                    key={i}
                    className='show-middle-image'                    
                    onClick={(e)=> {e.preventDefault(); this.handlePhotoClick(i, photos);}}
                    src={photos[i]} />)
            } else if (i===4 && photos[i+1]) {
                image = {backgroundImage: "url(" + photos[i] +")"}
                photosLayout.push( 
                    <div 
                        key={i}
                        className='x-more-photos'
                        onClick={(e)=> {e.preventDefault(); this.handlePhotoClick(i, photos);}}
                    >
                        <div className='image-preview-underlay' style={image}></div>
                        <p className='text-on-image'>+ {count-4} more</p>
                    </div> 
                )
            } else if (photos[i]) {
                photosLayout.push(
                    <img
                        key={i}
                        className='show-image'
                        onClick={(e)=> {e.preventDefault(); this.handlePhotoClick(i, photos);}}
                        src={photos[i]}
                    />
                )
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

export default connect(null, mDTP)(ShowPhotos);