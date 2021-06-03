import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [], users: {
            email: '',
            password: '',
        }};

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
        this.props.processForm(user);
    }

    renderErrors() {
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

    render() {
        return (
            <div className="modal-form">
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>

                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
                    <br />
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <br />
                    <button>Sign In</button>
                    <br />
                    {this.renderErrors()}
                    <br />
                    <p>
                        New to LetsEat?
                        <Link to="/signup">Create an Account</Link>
                    </p>
                </form>
            </div>
        );
    }
};

export default LoginForm;