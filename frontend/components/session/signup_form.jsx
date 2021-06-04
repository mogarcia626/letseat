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
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then( () => {
            this.props.closeModal();
        })          
    }
    
    renderErrors() {
        console.log(this.errors)
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`err-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentWillUnmount () {
        this.props.resetErrors()
    };

    demoLogin (e) {
        e.preventDefault();
        const user = {email:'guest@letseat.com', password: '1a2b3c'};
        this.props.loginDemo(user);
        this.props.closeModal();
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
                    </label><br/>

                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label><br />

                    <br />
                    <label>First Name:
                        <input
                            type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                        />
                    </label><br/>

                    <label>Last Name:
                        <input
                            type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                        />
                    </label><br/>

                    <label>Phone:
                        <input
                            type="text"
                            value={this.state.phone_no}
                            onChange={this.update('phone_no')}
                        />
                    </label><br />

                    <button>Create Account</button>
                    <br />

                    {this.renderErrors()}
                    <br />
                    <div>Already have an account?
                        {this.props.otherForm}
                    </div>
                    <br />
                    <div>Try us out!
                        <button onClick={this.demoLogin}>
                            Demo
                        </button>
                    </div>
                    
                </form>
            </div>
        );
    }
};

export default SignupForm;