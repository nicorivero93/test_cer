import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

function Login() {
  const [error, setError] = useState(null);

  const handleGoogleSignIn = () => {
    const auth = firebase.auth();
    const provider = new GoogleAuthProvider();

    auth.signInWithPopup(provider)
      .then((result) => {
        // User is signed in.
        const user = result.user;
        console.log('User signed in:', user);
        // Redirect to dashboard or perform other actions
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        console.error('Error signing in:', error);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
}

export default Login;
