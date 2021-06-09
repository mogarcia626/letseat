import React from 'react';

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>{this.props.restaurant}</h1>
                <p>{this.props.restaurant.cuisine}</p>
                <p>{this.props.restaurant.city}</p>
                
                <div>
                    <p>{`${reviewAverages['average']} out of 5`}</p>
                    <p>{`${reviewAverages['count']} reviews`}</p>
                </div>

                <div>
                    <h2>Reviews</h2>
                    <ul>
                        {this.props.reviews.map((review, i) => (
                            <li key={i}>
                                <h3>{`${this.props.restaurant.reviewAverages['average']} out of 5`}</h3>
                                <p>{review.comment}</p>
                            </li>                            
                        ))}
                    </ul>
                </div>



            </div>
        )
    }
}

export default RestaurantShow;