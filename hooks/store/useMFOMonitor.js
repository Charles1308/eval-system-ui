import { create } from 'zustand';

const useMFOMonitor = create((set) => ({
    mfo: {
        // key: Boolean - is MFO field completed
    },
    setAddMFOField: (key, value) => set(state => ({
        mfo: { ...state.mfo, [key]: value },
    })),
    clearMFOMonitor: () => set(() => ({})),
}));

export default useMFOMonitor;