import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            phone_no: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        console.log(user)
        console.log(this.state)
        this.props.processForm(user);
    }

    render() {
        return (
            <div className="modal-form">
                <h2>Create a New Account</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <br/>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <br />
                    <br />
                    <label>First Name:
                        <input
                            type="text"
                            value={this.state.firstName}
                            onChange={this.update('firstName')}
                        />
                    </label>
                    <br/>
                    <label>Last Name:
                        <input
                            type="text"
                            value={this.state.lastName}
                            onChange={this.update('lastName')}
                        />
                    </label>
                    <br/>
                    <label>Phone:
                        <input
                            type="text"
                            value={this.state.phoneNo}
                            onChange={this.update('phoneNo')}
                        />
                    </label>
                    <br />
                    <button>Create Account</button>
                    <br />
                    <p>Already have an account? {this.props.navLink}</p>
                    
                </form>
            </div>
        );
    }
};

export default SignupForm;