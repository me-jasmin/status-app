import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckCircle,
    faWrench,
    faExclamationTriangle,
    faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

const AccordionItem = props => {
    const [isOpen, setIsOpen] = useState(false);
    const { title, status, events } = props;

    const getStatusIcon = status => {
        const statusList = {
            no_issues: faCheckCircle,
            maintenance: faWrench,
            incident: faExclamationCircle,
            outage: faExclamationTriangle,
        };

        return statusList[status]
    };

    return (
        <div className={`accordion-item ${isOpen ? 'accordion-item--opened' : ''}`}>
            <div className="accordion-item__line" onClick={() => setIsOpen(!isOpen)}>
                <span className="accordion-item__icon" />
                <span className="accordion-item__title">{title}</span>
                <span className={`accordion-item__status status-${status}`}>
                    <FontAwesomeIcon icon={getStatusIcon(status)} />
                </span>
            </div>
            <div className="accordion-item__inner">
                <div className="accordion-item__content">
                    <p className="accordion-item__paragraph">{JSON.stringify(events)}</p>
                </div>
            </div>
        </div>
    );
};

export default AccordionItem;
