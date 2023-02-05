import { create } from 'zustand';

const useFormRequestStore = create((set) => ({
    url: null,
    payload: null,
    method: null,
    setUrl: (value) => set(() => ({
        url: process.env.NEXT_PUBLIC_API_BASE_URL + value,
    })),
    setPayload: (value) => set(() => ({
        payload: { ...value }
    })),
    setMethod: (value) => set(() => ({
        method: value
    })),
    clearFormStore: () => set(() => ({
        url: null,
        payload: null
    })),
}));

export default useFormRequestStore;