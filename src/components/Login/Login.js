import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <div className="w-25 mx-auto">
                <h3 className="text-primary mt-4 mb-4">Please Login</h3>
                <hr />
                <button onClick={signInWithGoogle} className="btn btn-primary mb-3 mt-2">Google Sign In</button>
                <br />
                <p>New User? <Link style={{ textDecoration: 'none' }} to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;