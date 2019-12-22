import {
    faCheck,
    faWrench,
    faExclamation,
} from '@fortawesome/free-solid-svg-icons';

const getStatusIcon = status => {
    const statusList = {
        no_issues: faCheck,
        maintenance: faWrench,
        incident: faExclamation,
        outage: faExclamation,
    };

    return statusList[status];
};

export { getStatusIcon };
