// Restaurant info
export const fetchReservation = id => (
    $.ajax({
        url: `/api/reservations/${id}`,
        method: 'GET',
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