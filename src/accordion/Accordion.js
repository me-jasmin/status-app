import React from 'react';
import AccordionItem from './AccordionItem';
import './accordion.styles.scss';

const Accordion = props => {
    const renderItems = () => {
        const items = props.data.map((item, index) => {
            return (
                <li className="accordion-list__item" key={index}>
                    <AccordionItem title={item.title} status={item.status} events={item.events} />
                </li>
            );
        });

        return <ul className="accordion-list">{items}</ul>;
    };

    return renderItems();
};

export default Accordion;
