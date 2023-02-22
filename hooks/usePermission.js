import useUserStore from "./store/useUserStore"

const usePermission = () => {
    const { role } = useUserStore(store => store)
    
    const hasPermission = (permission) => {
        if (!role) return false

        if (role.permissions) {
            return role.permissions.includes(permission)
        }
    }

    return hasPermission
}

export default usePermission