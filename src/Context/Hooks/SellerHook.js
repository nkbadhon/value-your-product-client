import { useEffect, useState } from "react"

const SellerHook = email => {
    const [isSeller, setIsSeller] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`https://reselling-web-server.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSeller(data.isSeller);
                })
        }
    }, [email])
    return [isSeller]
}

export default SellerHook;