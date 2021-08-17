import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:
           const newModalState = {
                modal: action.modal,
                data: action.data,
            };
            return newModalState;
        case CLOSE_MODAL:
            return {};
        default:
            return state;
    }
}

export default modalReducer