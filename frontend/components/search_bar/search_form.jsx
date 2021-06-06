import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     errors: [], users: {
        //         email: '',
        //         password: '',
            // }
        // };

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // update(type) {
    //     return (e) => {
    //         this.setState({ [type]: e.currentTarget.value });
    //     };
    // }

    // handleSubmit(e) {
    //     e.preventDefault();
    //     const user = Object.assign({}, this.state);
    //     this.props.processForm(user).then(() => {
    //         this.props.closeModal();
    //     })
    // }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li key={`err-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    // componentWillUnmount() {
    //     this.props.resetErrors()
    // };

    render() {
        return (
            <div>
                <form className="search-modal-form" id='login-modal'
                    onSubmit={this.handleSubmit}>

                    <input className="search-modal-dropdown"
                        placeholder="todays date (drop down calendar)"
                        type="text"
                        // value={this.state.reservation.date}
                        // onChange={this.update('date')}
                    />

                    <input className="search-modal-dropdown"
                        placeholder="todays time (drop down)"
                        type="text"
                        // value={this.state.reservation.time}
                        // onChange={this.update('time')}
                    />

                    <input className="search-modal-dropdown"
                        placeholder="party size (drop down)"
                        type="text"
                        // value={this.state.reservation.party_size}
                        // onChange={this.update('party_size')}
                    />

                    <input className="search-modal-saerch"
                        placeholder="Location, Restaurant, or Cuisine"
                        type="text"
                        // value={this.state.reservation.search_criteria}
                        // onChange={this.update('search_criteria')}
                    />

                    <button 
                        className='session-button'
                        id='session-button-dark'>
                            Let's go
                    </button>

                </form>
            </div>
        );
    }
};

export default SearchForm;