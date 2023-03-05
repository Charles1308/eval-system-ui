import { create } from 'zustand';
import _ from 'lodash';

const useFormRequestStore = create((set) => ({
    url: null,
    payloads: [],
    method: null,
    setUrl: (value) => set(() => ({
        url: process.env.NEXT_PUBLIC_API_BASE_URL + value,
    })),
    setPayload: (value) => set((state) => {
        if (_.isEmpty(value)) return { ...state };

        const index = state.payloads.findIndex(item => item.index === value.index);

        if (index >= 0) {
            const tempPayloads = [...state.payloads];
            tempPayloads[index] = {...tempPayloads[index], ...value};
            return { ...state, payloads: tempPayloads };
        }

        return {
            ...state,
            payloads: [...state.payloads, value],
        };
    }),
    setPayloads: (value) => set((state) => ({
        ...state,
        payloads: [...state.payloads, ...value],
    })),
    setMethod: (value) => set((state) => ({
        ...state,
        method: value
    })),
    clearFormStore: () => set(() => ({
        url: null,
        method: null,
        payloads: []
    })),
}));

export default useFormRequestStore;