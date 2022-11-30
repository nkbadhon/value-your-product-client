import { useEffect, useState } from "react"

const AdminHook = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://reselling-web-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {

                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default AdminHook;