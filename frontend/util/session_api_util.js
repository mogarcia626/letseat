// Sign Up
export const signup = user => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user },
    })
);
window.signup = signup

// Log In
export const login = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user },
    })
);
window.login = login

// log Out
export const logout = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE',
    })
);
