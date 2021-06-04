import React from 'react';

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
            this.setState({ [type]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => {
            this.props.closeModal();
        })
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

    componentWillUnmount() {
        this.props.resetErrors()
    };

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
                    </label><br/>

                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label><br />

                    <button>Sign In</button>
                    <br />

                    {this.renderErrors()}
                    <br />
                    <div> New to Letseat?
                        {this.props.otherForm}
                    </div>
                </form>
            </div>
        );
    }
};

export default LoginForm;