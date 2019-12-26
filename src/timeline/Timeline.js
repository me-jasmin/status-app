import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getStatusIcon } from '../helpers';

// styles
import './timeline.styles.scss';

/*
    @props
    events: arrayOf(object)
    title: string
    status: string
*/

const Timeline = props => {
    const { events, title, status } = props;

    const renderTimeline = () => {
        return events.map((event, index) => {
            return (
                <div className="timeline__event" key={index}>
                    <div className="timeline__time">{event.time}</div>
                    <div className="timeline__text">{event.text}</div>
                </div>
            );
        });
    };

    return (
        <div className="timeline__event__group__container">
            {(title || status) && (
                <div className="timeline__event__title">
                    {title && title}
                    {status && (
                        <span className={`timeline__event__icon status-${status}`}>
                            <span className="icon">
                                <FontAwesomeIcon icon={getStatusIcon(status)} />
                            </span>
                        </span>
                    )}
                </div>
            )}
            {renderTimeline()}
        </div>
    );
};

export default Timeline;

Timeline.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    status: PropTypes.string,
};
