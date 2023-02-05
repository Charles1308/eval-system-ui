import _ from 'lodash';

const useDeepCompare = (obj1, obj2) => {
    return !_.isEqual(obj1, obj2);
}

export default useDeepCompare;