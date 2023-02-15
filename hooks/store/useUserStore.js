import { create } from 'zustand';

const useUserStore = create((set) => ({
    email: null,
    course: null,
    office: null,
    fullName: null,
    lastName: null,
    firstName: null,
    middleName: null,
    password: null,
    updateCount: 0,

    setUser: (key, value) => set(state => ({
        ...state,
        [key]: value,
    })),

    setBulk: (payload) => set(state => ({
        ...state,
        ...payload,
    })),
     
    updateOccured: () => set(state => ({
        ...state,
        updateCount: state.updateCount + 1,
    })),
    
    clearUser: () => set(() => ({})),
}));

export default useUserStore;