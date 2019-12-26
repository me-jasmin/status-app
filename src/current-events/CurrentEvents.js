import React from 'react';
import PropTypes from 'prop-types';

import { Accordion } from '../accordion/';
import Timeline from '../timeline';

/*
    @props
    data: arrayOf(object)
*/

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

    return (
        <section className="content-section">
            <Accordion type="current-events" data={transformedData} />
        </section>
    );
};

export default CurrentEvents;

CurrentEvents.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};
