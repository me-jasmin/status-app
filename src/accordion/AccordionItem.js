import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getStatusIcon } from '../helpers';

const AccordionItem = props => {
    const [isOpen, setIsOpen] = useState(false);
    const { title, status, events } = props;

    return (
        <li
            className={`accordion__item ${isOpen ? 'accordion__item--opened' : ''} ${
                !events ? 'accordion__item--disabled' : ''
            }`}
        >
            <div
                className="accordion__item__line clearfix"
                onClick={() => (events ? setIsOpen(!isOpen) : null)}
            >
                {events && <span className="accordion__item__icon" />}
                {title && (
                    <span className="accordion__item__title">
                        <span className="accordion__item__title__text">{title}</span>
                    </span>
                )}
                {status && (
                    <span className={`accordion__item__status status-${status}`}>
                        <span className="icon">
                            <FontAwesomeIcon icon={getStatusIcon(status)} />
                        </span>
                    </span>
                )}
            </div>
            {events && (
                <div className="accordion__item__inner">
                    <div className="accordion__item__content">{events}</div>
                </div>
            )}
        </li>
    );
};
export default AccordionItem;

AccordionItem.propTypes = {
    title: PropTypes.string,
    status: PropTypes.string,
    events: PropTypes.node,
};
