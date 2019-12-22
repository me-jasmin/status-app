import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getStatusIcon } from '../helpers';

const AccordionItem = props => {
    const [isOpen, setIsOpen] = useState(false);
    const { title, status, events } = props;

    const renderEvents = () => {
        return events.map((event, index) => {
            return (
                <div className="timeline__event" key={event.time}>
                    <div className="timeline__time">{event.time}</div>
                    <div className="timeline__text">{event.text}</div>
                </div>
            );
        });
    };

    return (
        <>
            {status === 'no_issues' ? (
                <div className="accordion-item accordion-item--disabled">
                    <div className="accordion-item__line">
                        <span className="accordion-item__title">{title}</span>
                        <span className={`accordion-item__status status-${status}`}>
                            <FontAwesomeIcon icon={getStatusIcon(status)} />
                        </span>
                    </div>
                </div>
            ) : (
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
                            <div className="timeline">{renderEvents()}</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AccordionItem;
