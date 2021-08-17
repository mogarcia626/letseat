export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// export const openModal = (modal) => ({
//         type: OPEN_MODAL,
//         modal: modal.modal,
//         data: modal.data,
// });

// export const closeModal = () => ({
//         type: CLOSE_MODAL
// });

export const closeModal = () => {
        // debugger
        return {type: CLOSE_MODAL}
};

export const openModal = (modal) => {
        // debugger    
        return {
                type: OPEN_MODAL,
                modal: modal.modal,
                data: modal.data,
        }
};