import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getStatusIcon } from '../helpers';

// styles
import './general-status.styles.scss';

const GeneralStatus = props => {
    const { general_status, general_status_msg } = props.data;

    return (
        <div className="general-state">
            <div className={`general-state__icon status-${general_status}`}>
                <FontAwesomeIcon icon={getStatusIcon(general_status)} />
            </div>
            <div className="general-state__text">{general_status_msg}</div>
        </div>
    );
};

export default GeneralStatus;
