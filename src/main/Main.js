import React from 'react';

import Header from '../header';
import GeneralStatus from '../general-status';
import { Accordion } from '../accordion/';

import './main.styles.scss';

export default class Main extends React.Component {
    getAPIdata = {
        status: {
            general_status: 'no_issues',
            general_status_msg: 'Everything is up and running',
        },
        data: [
            {
                key: 'database',
                status: 'no_issues',
                title: 'Database',
                events: [
                    {
                        time: '2007-03-01T13:00:00+02:00',
                        event_status: 'maintenance',
                        event_title: 'Maintenance',
                        event_text:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.',
                    },
                    {
                        time: '2007-03-01T13:00:00+02:00',
                        event_status: 'maintenance',
                        event_title: 'Maintenance',
                        event_text:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.',
                    },
                    {
                        time: '2007-03-01T13:00:00+02:00',
                        event_status: 'maintenance',
                        event_title: 'Maintenance',
                        event_text:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.',
                    },
                ],
            },
            {
                key: 'citrix',
                status: 'maintenance',
                title: 'Citrix',
                events: [
                    {
                        time: '2007-03-01T13:00:00+02:00',
                        event_status: 'no_issues',
                        event_title: 'No issues',
                        event_text:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.',
                    },
                    {
                        time: '2007-03-01T13:00:00+02:00',
                        event_status: 'no_issues',
                        event_title: 'No issues',
                        event_text:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.',
                    },
                    {
                        time: '2007-03-01T13:00:00+02:00',
                        event_status: 'no_issues',
                        event_title: 'No issues',
                        event_text:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.',
                    },
                ],
            },
            {
                key: 'integrations',
                status: 'incident',
                title: 'Integrations',
                events: [
                    {
                        time: '2007-03-01T13:00:00+02:00',
                        event_status: 'no_issues',
                        event_title: 'No issues',
                        event_text:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.',
                    },
                    {
                        time: '2007-03-01T13:00:00+02:00',
                        event_status: 'no_issues',
                        event_title: 'No issues',
                        event_text:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.',
                    },
                ],
            },
            {
                key: 'web_shops',
                status: 'outage',
                title: 'Web shops',
                events: [
                    {
                        time: '2007-03-01T13:00:00+02:00',
                        event_status: 'no_issues',
                        event_title: 'No issues',
                        event_text:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.',
                    },
                    {
                        time: '2007-03-01T13:00:00+02:00',
                        event_status: 'no_issues',
                        event_title: 'No issues',
                        event_text:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.',
                    },
                ],
            },
        ],
    };

    render() {
        return (
            <>
                <Header />
                <div className="page-wrapper">
                    <GeneralStatus />
                    <Accordion data={this.getAPIdata.data} />
                </div>
            </>
        );
    }
}
