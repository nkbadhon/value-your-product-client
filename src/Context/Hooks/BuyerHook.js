import { useEffect, useState } from "react"

const BuyerHook = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`https://reselling-web-server.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsBuyer(data.isBuyer);
                })
        }
    }, [email])
    return [isBuyer]
}

export default BuyerHook;