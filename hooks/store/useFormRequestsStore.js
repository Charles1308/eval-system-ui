import { create } from 'zustand';
import _ from 'lodash';

const useFormRequestStore = create((set) => ({
    url: null,
    payloads: [],
    method: null,
    setUrl: (value) => set(() => ({
        url: process.env.NEXT_PUBLIC_API_BASE_URL + value,
    })),
    setPayload: (value) => set(({ payloads }) => {
        if (_.isEmpty(value)) return { payloads };

        const index = payloads.findIndex(item => item.index === value.index);

        if (index >= 0) {
            payloads[index] = {...payloads[index], ...value};
            return payloads;
        }

        return {
            payloads: [...payloads, value],
        };
    }),
    setPayloads: (value) => set(({ payloads }) => ({
            payloads: [...payloads, ...value],
    })),
    setMethod: (value) => set(() => ({
        method: value
    })),
    clearFormStore: () => set(() => ({
        url: null,
        payloads: []
    })),
}));

export default useFormRequestStore;