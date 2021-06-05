import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
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
            <div className="modal-form" id="signup-modal">
                <form className="modal-form" id='signup-modal'
                    onSubmit={this.handleSubmit}>

                <h2 className='modal-title'>
                    Welcome to Letseat!
                    <hr class="solid" />
                </h2>

                    <input className='modal-input'
                        placeholder='Email'
                        type="text"
                        value={this.state.email}
                        onChange={this.update('email')}
                    />

                    <input className='modal-input'
                        placeholder='Password'
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                    />

                        <input className='modal-input'
                            placeholder='First Name'
                            type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                        />

                    <input className='modal-input'
                            placeholder='Last Name'
                            type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                    />

                    <button className='modal-button'>Create Account</button>
                    
                    {this.renderErrors()}
                    
                    <div className='modal-link'>Already have an account?
                        {this.props.otherForm}
                    </div>

                    <div className='modal-link'>
                        Try us out!
                            <button className='button-link'
                                onClick={this.demoLogin}>
                                Demo
                            </button>
                    </div>
                    
                </form>
            </div>
        );
    }
};

export default SignupForm;