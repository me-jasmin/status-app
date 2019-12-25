import React from 'react';

import { Accordion } from '../accordion/';
import Timeline from '../timeline';

const CurrentEvents = props => {
    const { data } = props;
    let transformedData = [];

    data.forEach(item => {
        transformedData.push({
            key: item.key,
            status: item.status,
            title: item.title,
            events: item.events ? <Timeline events={item.events} /> : undefined,
        });
    });

    return <Accordion type="current-events" data={transformedData} />;
};

export default CurrentEvents;
