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
            // console.log(this.props.user)
            // console.log(this.props.session)
            this.props.closeModal();
            // let userId = this.props.user.id
            // console.log(this.props.session)
        })
        .then(() => {
            this.props.requestAllReservations(this.props.session.id)
        })
        // console.log(this.props.session)
    }

    // mogarcia@gmail.com

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
            <div>
                <form className="session-modal-form" id='login-modal'
                    onSubmit={this.handleSubmit}>

                    <h2 className='session-modal-title'>
                        Please Sign in
                        <hr className="solid" />
                    </h2>

                    <input className="session-modal-input"
                        placeholder="Email"
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                    />

                    <input className="session-modal-input"
                        placeholder="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                    />

                    <button className="session-modal-button">Sign In</button>

                    {this.renderErrors()}
                    
                    <div className='modal-link'> New to Letseat?
                        {this.props.otherForm}
                    </div>
                </form>
            </div>
        );
    }
};

export default LoginForm;