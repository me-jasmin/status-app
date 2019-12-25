import React from 'react';

// styles
import './timeline.styles.scss';

const Timeline = props => {
    const { events, title } = props;

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
            {title && <div className="timeline__event__title">{title}</div>}
            {renderTimeline()}
        </div>
    );
};

export default Timeline;
