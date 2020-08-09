import React from 'react';
import PropTypes from 'prop-types';
// import React, { Fragment } from 'react';

// Funtional Components
const PrimeraApp = ({ saludo }) => {

    return (
        <>
            <h1> {saludo} </h1>
            {/*<pre> { JSON.stringify( saludo, null, 3 ) } </pre>*/}
            <p>Mi primera aplicación</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;