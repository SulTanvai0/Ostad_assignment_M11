import React from 'react';

const IsLogIn = () => {
    const logIn = false ;
    return (
        <div>
            {
                logIn?  <p>You're LogIN </p> : <p>please LogIN / singUp </p>
            }
        </div>
    );
};

export default IsLogIn;