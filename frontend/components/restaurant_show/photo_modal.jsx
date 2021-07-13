import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const mSTP = ({ ui }) => ({
    idx: ui.modal.idx,
    photos: ui.modal.photos,
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

    handleClickRight(e) {
        e.preventDefault();
        this.props.openModal({
            modal: 'photo-carousel', 
            data: {
                idx: this.props.idx + 1,
                photos: this.props.photos
            }
        });
    };

    handleClickLeft(e) {
       this.props.openModal({
            modal: 'photo-carousel', 
            data: {
                idx: this.props.idx - 1,
                photos: this.props.photos
            }
        });
    };
    
    render() {
        return (
            <div className='photo-modal-container'>
                <RiArrowLeftSLine size={24} onClick={this.handleClickLeft}/>
                <img 
                    className='modal-image'
                    src={this.props.photos[this.props.idx]}
                />
                <RiArrowRightSLine size={24} onClick={this.handleClickRight}/>
            </div>            
        )
    }
};

export default connect(mSTP, mDTP)(PhotoModal);

