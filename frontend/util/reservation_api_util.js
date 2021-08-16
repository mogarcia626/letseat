// reservation index
export const fetchReservations = () => {
    return $.ajax({
        url: '/api/reservations',
        method: 'GET',
    })
};

// Edit Reservation info
export const putReservation = id => (
    $.ajax({
        url: `/api/reservations/${id}`,
        method: 'PUT',
        data: { reservation }
    })
);

// Create a Reservation
export const postReservation = reservation => (
    $.ajax({
        url: `/api/reservations`,
        method: 'POST',
        data: { reservation }
    })
);

// Delete a Reservation
export const deleteReservation = reservation => (
    $.ajax({
        url: '/api/reservations',
        method: 'DELETE',
        data: { reservation }
    })
);