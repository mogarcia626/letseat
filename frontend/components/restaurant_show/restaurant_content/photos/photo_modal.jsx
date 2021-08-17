import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../../actions/modal_actions'
import { RiArrowRightSLine, RiArrowLeftSLine, RiCloseFill } from "react-icons/ri";

const mSTP = ({ ui }) => ({
    idx: ui.modal.data.idx,
    photos: ui.modal.data.photos,
});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
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
        return (
            <div className='photo-modal-background'>

                <div className='photo-modal'>
                    <RiArrowLeftSLine size={48}
                        className='photo-modal-buttons'
                        onClick={this.handleClickLeft}
                    />
                    
                    <img className='modal-image'
                        src={this.props.photos[this.props.idx]}
                    />

                    <RiArrowRightSLine size={48}
                        className='photo-modal-buttons'
                        onClick={this.handleClickRight}
                    />
                </div>

                <RiCloseFill size={48}
                    id='photo-modal-close'
                    className='photo-modal-buttons'
                    onClick={() => this.props.closeModal()}
                />
        </div>            
        )
    }
};

export default connect(mSTP, mDTP)(PhotoModal);

