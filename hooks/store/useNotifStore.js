import { create } from 'zustand';

const useNotifStore = create((set) => ({
    notifs: [],
    setNotifs: (newNotif) => set(state => ({
        notifs: [...state.notifs, newNotif],
    })),
    clearNotifByOne: () => set(state => {
        const tempNotifs = [...state.notifs];
        tempNotifs.shift();

        return {
            notifs: [...tempNotifs]
        }
    }),
}));

export default useNotifStore;