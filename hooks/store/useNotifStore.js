import { create } from 'zustand';

const useNotifStore = create((set) => ({
    notifs: [
        // {
        //   type: 'danger' | 'info' | 'success' | 'warning',
        //   message: string,
        //   timeout: number,
        // }, ...
    ],
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