import React from 'react';
import PropTypes from 'prop-types';

import AccordionItem from './AccordionItem';

// styles
import './accordion.styles.scss';

/*
    @props
    data: arrayOf(object)
    type: string
*/

const Accordion = props => {
    const { data, type } = props;

    const renderItems = () => {
        return data.map((item, index) => {
            return (
                <AccordionItem
                    key={index}
                    type={type}
                    title={item.title}
                    status={item.status}
                    events={item.events}
                />
            );
        });
    };

    return (
        <ul id={type} className="accordion">
            {renderItems()}
        </ul>
    );
};

export default Accordion;

Accordion.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.string,
};
