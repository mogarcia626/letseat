import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal, closeModal } from '../../../../actions/modal_actions'
import { RiArrowRightSLine, RiArrowLeftSLine, RiCloseFill } from "react-icons/ri";

function PhotoModal() {
    const dispatch = useDispatch()
    const idx = useSelector(state => state.ui.modal.data.idx)
    const photos = useSelector(state => state.ui.modal.data.photos)

    function forward() {
        if (idx === photos.length-1) return 0
        return idx + 1
    }

    function backward() {
        if (idx === 0) return (photos.length-1)
        return idx - 1
    }

    function handleClick(e, dir) {
        e.preventDefault();
        let newIdx;
        if (dir === 'right') {
            newIdx = forward()
        } else {
            newIdx = backward()
        }
        dispatch(openModal(
            {
                modal: 'photo-carousel', 
                data: { idx: newIdx, photos: photos }
            }
        ));
    };
    
    return (
        <div className='photo-modal-background'>

            <div className='photo-modal'>
                <div onClick={(e) => handleClick(e, 'left')}>
                <RiArrowLeftSLine size={48}                    
                    className='photo-modal-buttons'                    
                />
                </div>

                <img className='modal-image'
                    src={photos[idx]}
                />

                <div onClick={(e) => handleClick(e, 'right')}>
                    <RiArrowRightSLine size={48}
                        className='photo-modal-buttons'
                    />
                </div>

            </div>

            <RiCloseFill size={48}
                id='photo-modal-close'
                className='photo-modal-buttons'
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(closeModal());
                }}
            />
    </div>            
    )
};

export default PhotoModal;

