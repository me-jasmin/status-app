import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
// styles
import './general-status.styles.scss';

const GeneralStatus = () => {
    return (
        <div className="general-state">
            <span className="icon">
                <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className="text">All systems up and running!</span>
        </div>
    );
};

export default GeneralStatus;
