import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDateDropDown: false,
            searchCriteria: {
                date: '',
                time: '',
                party_size: '',
                search: '',
            }            
        };
        
        this.openDateDropDown = this.openDateDropDown.bind(this);
        this.closeDateDropDown = this.closeDateDropDown.bind(this);
        this.dateDropDown = this.dateDropDown.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    openDateDropDown() {
        this.setState({ showDateDropDown: true })
    }
    
    closeDateDropDown() {
        this.setState({ showDateDropDown: false })
    }

    dateDropDown() {
        const today = new Date()
        const dates = [today]
        let count = 0
        let nextDate;
        while (dates.length < 14) {
            nextDate = new Date(today)
            nextDate.setDate(nextDate.getDate() + count)
            dates.push(nextDate)
        }
        return dates
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value });
        };
    }

    componentDidUpdate() {

        const { showDateDropDown } = this.state;

        setTimeout(() => {
            if (showDateDropDown) {
                window.addEventListener("click", this.closeDateDropDown);
            } else {
                window.removeEventListener("click", this.closeDateDropDown);
            }
        }, 0);
    }

    handleSubmit(e) {
        e.preventDefault();
        //Redirect to /api/restaurants with data from form passed in as props
        // const restaurant = Object.assign({}, this.state);
        // this.props.processForm(user).then(() => {
            this.props.closeModal();
        // })
    }

    render() {
        
        return (
            <div>
                <form className="search-modal-form"
                    onSubmit={this.handleSubmit}>

                    <div className='search-content'>
                        <div className='dropdown-inputs'>

                            <input className="search-modal-dropdown-item"
                                id='left-dropdown-input'
                                placeholder={new Date().toDateString()}
                                type="text"
                                onClick={this.openDateDropDown}
                                // value={this.state.reservation.date}
                                // onChange={this.update('date')}
                            />
                            <input className="search-modal-dropdown-item"
                                placeholder="7:00 PM"
                                type="text"
                                // value={this.state.reservation.time}
                                // onChange={this.update('time')}
                            />
                            <input className="search-modal-dropdown-item"
                                id='right-dropdown-input'
                                placeholder="2 People"
                                type="text"
                                // value={this.state.reservation.party_size}
                                // onChange={this.update('party_size')}
                            />
                        </div>
                        <br />
                        <input className="search-modal-search"
                            placeholder="Location, Restaurant, or Cuisine"
                            type="text"
                            // value={this.state.reservation.search_criteria}
                            // onChange={this.update('search_criteria')}
                        />
                        <br />
                        <button 
                            className='search-button'>
                                Let's go
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchForm