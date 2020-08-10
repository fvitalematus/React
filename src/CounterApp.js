import React from 'react';
import PropTypes from 'prop-types';

// Funtional Components
const CounterApp = ({ value }) => {

    // handleAdd: Evento click
    const handleAdd = (e) => {
        console.log(e)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {value} </h2>

            <button onClick={handleAdd}>+1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;