import React from 'react';
import PropTypes from 'prop-types';

import { Accordion } from '../accordion/';
import Timeline from '../timeline';

/*
    @props
    data: arrayOf(object)
*/

const PastEvents = props => {
    const { data } = props;
    let transformedData = [];

    data.forEach(item => {
        let renderedEventGroup;

        if (item.service) {
            renderedEventGroup = item.service.map((service, index) => (
                <Timeline
                    title={service.title}
                    events={service.events}
                    status={service.status}
                    key={index}
                />
            ));
        }

        transformedData.push({
            title: item.date,
            events: renderedEventGroup,
        });
    });

    return (
        <section className="content-section">
            <h1 className="section-title">Past Events</h1>
            <Accordion type="past-events" data={transformedData} />
        </section>
    );
};

export default PastEvents;

PastEvents.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};
