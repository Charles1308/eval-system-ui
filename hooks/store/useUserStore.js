import { create } from 'zustand';

const useUserStore = create((set) => ({
    email: null,
    course: null,
    office: null,
    lastName: null,
    firstName: null,
    middleName: null,
    setUser: (key, value) => set(state => ({
        ...state,
        [key]: value,
    })),
    clearUser: () => set(() => ({})),
}));

export default useUserStore;