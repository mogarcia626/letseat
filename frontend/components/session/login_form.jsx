 import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            errors: [], 
            user: {
                email: '',
                password: '',
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ loading: true })
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(
            () => this.props.closeModal(), 
            () => this.setState( {loading: false} ) 
        )        
    }

    renderErrors() {(
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`err-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
    )}

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

                    {this.state.loading ? 
                        <div className="session-modal-button" id='loading-modal-button'>
                        <div className="spinner"></div></div>
                            :
                        <button className="session-modal-button">Sign In</button>
                    }

                    {this.renderErrors()}
                    
                    <div className='modal-link'> New to Letseat?
                        <button className='button-link'
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.openModal( {modal: 'signup'} )
                        }}>
                            Create an account
                        </button>
                    </div>
                </form>
            </div>
        );
    }
};

export default LoginForm;