import { create } from 'zustand';

const useUserStore = create((set) => ({
    user: {},
    setUser: (key, value) => set(state => ({
        ...state.user,
        [key]: value,
    })),
    clearUser: () => set(() => ({})),
}));

export default useUserStore;