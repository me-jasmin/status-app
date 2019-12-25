import React from 'react';

import { Accordion } from '../accordion/';
import Timeline from '../timeline';

const PastEvents = props => {
    const { data } = props;
    let transformedData = [];

    data.forEach(item => {
        let renderedEventGroup;

        if (item.service) {
            renderedEventGroup = item.service.map((service, index) => (
                <Timeline title={service.title} events={service.events} key={index} />
            ));
        }

        transformedData.push({
            title: item.date,
            events: renderedEventGroup,
        });
    });

    return (
        <div>
            <h1>Past events</h1>
            <Accordion type="past-events" data={transformedData} />
        </div>
    );
};

export default PastEvents;
