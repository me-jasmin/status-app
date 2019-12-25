import React from 'react';

import AccordionItem from './AccordionItem';

// styles
import './accordion.styles.scss';

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
