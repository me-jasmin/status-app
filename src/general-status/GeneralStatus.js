import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getStatusIcon } from '../helpers';

import './general-status.styles.scss';

/*
    @props
    general_status: string
    general_status_msg: string
*/

const GeneralStatus = props => {
    const { general_status, general_status_msg } = props.data;

    return (
        <section className="content-section">
            <div className="general-state">
                <div className={`general-state__icon status-${general_status}`}>
                    <span className="icon">
                        <FontAwesomeIcon icon={getStatusIcon(general_status)} />
                    </span>
                </div>
                <h1 className="section-title">{general_status_msg}</h1>
            </div>
        </section>
    );
};

export default GeneralStatus;

GeneralStatus.propTypes = {
    general_status: PropTypes.string,
    general_status_msg: PropTypes.string,
};
