import useUserStore from "./store/useUserStore"

const usePermission = () => {
    const { roles } = useUserStore(store => store)
    
    const hasPermission = (permission) => {
        if (!roles) return false

        return roles.some(role => role.includes(permission))
    }

    return hasPermission
}

export default usePermission