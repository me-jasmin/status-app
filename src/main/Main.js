import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../header';
import GeneralStatus from '../general-status';
import CurrentEvents from '../current-events';
import PastEvents from '../past-events';

//styles
import './main.styles.scss';

const Main = props => {
    const [state, setState] = useState({
        data: {},
        isLoading: true,
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(process.env.REACT_APP_API);
            setState({
                data: result.data,
                isLoading: false,
            });
        };
        fetchData();
    }, []);

    if (state.isLoading) return null;

    return (
        <>
            <Header />
            <div className="page-wrapper">
                {state.data.status && <GeneralStatus data={state.data.status} />}
                {state.data.current_events && <CurrentEvents data={state.data.current_events} />}
                {state.data.past_events && <PastEvents data={state.data.past_events} />}
            </div>
        </>
    );
};

export default Main;
