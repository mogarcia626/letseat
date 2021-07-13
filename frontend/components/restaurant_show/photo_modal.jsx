import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const mSTP = ({ ui }) => ({
    idx: ui.modal.data.idx,
    photos: ui.modal.data.photos,
});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
});

class PhotoModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickRight = this.handleClickRight.bind(this);
        this.handleClickLeft = this.handleClickLeft.bind(this);
    }
    
    forward() {
        if (this.props.idx === this.props.photos.length-1) return 0
        return this.props.idx + 1
    }

    handleClickRight(e) {
        e.preventDefault();
        this.props.openModal({
            modal: 'photo-carousel', 
            data: {
                idx: this.forward(),
                photos: this.props.photos
            }
        });
    };

    backward() {
        if (this.props.idx === 0) return (this.props.photos.length-1)
        return this.props.idx - 1
    }

    handleClickLeft(e) {
        e.preventDefault();
        this.props.openModal({
            modal: 'photo-carousel', 
            data: {
                idx: this.backward(),
                photos: this.props.photos
            }
        });
    };
    
    render() {
        console.log(this.props)
        return (
            <div className='photo-modal-container'>
                <div className='photo-modal'>
                    <RiArrowLeftSLine size={48} onClick={this.handleClickLeft}/>
                    <img 
                        className='modal-image'
                        src={this.props.photos[this.props.idx]}
                        />
                    <RiArrowRightSLine size={48} onClick={this.handleClickRight}/>
                </div>
            </div>            
        )
    }
};

export default connect(mSTP, mDTP)(PhotoModal);

