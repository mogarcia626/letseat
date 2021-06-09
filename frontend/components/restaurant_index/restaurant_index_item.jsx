import React from 'react';

class RestaurantIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

        render() {
            let reviewAverages = this.props.restaurant.reviewAverages
            return(
            <div className='index-item'>
                <h2>[Image Here]</h2>
                <p>{this.props.restaurant.name}</p>
                <div>
                    <p>{`${reviewAverages['average']} out of 5`}</p>
                    <p>{`${reviewAverages['count']} reviews`}</p>
                </div>
                    <p>{this.props.restaurant.cuisine}</p>
                    <p>{this.props.restaurant.city}</p>

            </div>    
            )      
        }
}

export default RestaurantIndexItem;