import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { openModal } from '../../actions/modal_actions';
import { FiSearch } from "react-icons/fi";

function SessionButtons() {
    const dispatch = useDispatch()

    function modal(modal) {
        dispatch(openModal( {modal: modal, data: null} ))
    }

    return (        
        <div className='right-nav'>
            <button
                onClick={()=>modal('search')}
                className="icon-button">
                <FiSearch size={20} />
            </button>
            <button 
                onClick={()=>modal('signup')} 
                className='session-button'
                id='session-button-dark'>
                    Sign Up
            </button>
            <button 
                onClick={()=>modal('login')} 
                className='session-button'
                id='session-button-light'>
                    Sign In
            </button>
        </div>
    )
}

export default SessionButtons;
