import useMFOMonitor from "./store/useMFOMonitor";

const useIsAllMFOCompleted = () => {
    const { mfo } = useMFOMonitor(state => state);

    return {
        completed: Object.values(mfo).every(mfo => mfo === true),
        which: Object.keys(mfo).find(key => mfo[key] !== true),
    }
}

export default useIsAllMFOCompleted;