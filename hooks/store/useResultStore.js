import { create } from 'zustand';

const useResultStore = create((set) => ({
    incorporated: {},
    incentives: {},

    setResult: (key, key2, value) => set(state => ({
        ...state,
        [key]: {
            ...state[key],
            [key2]: value
        },
    })),
}));

export default useResultStore;