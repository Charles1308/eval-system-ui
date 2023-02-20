import useMFOMonitor from "./store/useMFOMonitor";

const useIsAllMFOCompleted = () => {
    const { mfo } = useMFOMonitor(state => state);

    return Object.values(mfo).every(mfo => mfo === true);
}

export default useIsAllMFOCompleted;