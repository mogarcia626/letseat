// Sign Up
export const signup = user => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user },
    })
);

// Log In
export const login = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: { user },
    })
);

// log Out
export const logout = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE',
    })
);
