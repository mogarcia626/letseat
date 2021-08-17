import * as APIUtil from '../util/review_api_util'

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_PAST_REVIEWS = 'RECEIVE_PAST_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const RESET_REVIEW_ERRORS = 'RESET_REVIEW_ERRORS';

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

export const receiveReviews = (reviews) => ({
    type: RECEIVE_PAST_REVIEWS,
    reviews
})

export const receiveErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const resetErrors = () => ({
    type: RESET_REVIEW_ERRORS,
});

export const createReview = formReview => dispatch => (
    APIUtil.postReview(formReview)
    .then(review => dispatch(receiveReview(review)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const requestReviews = () => dispatch => (
    APIUtil.getReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
)

export const destroyReview = reviewId => dispatch => (
    APIUtil.deleteReview(reviewId)
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const editReview = formReview => dispatch => (
    APIUtil.putReview(formReview)
    .then( review => dispatch(receiveReview(review)) )
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))    
);