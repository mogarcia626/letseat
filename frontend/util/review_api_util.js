// Create a Review
export const postReview = review => (
    $.ajax({
        url: `/api/reviews`,
        method: 'POST',
        data: { review }
    })
);

// Delete a Review
export const deleteReview = id => (
    $.ajax({
        url: '/api/reviews',
        method: 'DELETE',
        data: { id }
    })
);

// Edit Review info
export const putReview = review => (
    $.ajax({
        url: `/api/reviews/${id}`,
        method: 'PUT',
        data: { review }
    })
);

// Fetch reviews associated with past reservations
export const getReviews = () => (
    $.ajax({
        url: '/api/reviews',
        method: 'GET',
    })
);