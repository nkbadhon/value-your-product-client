import { useEffect, useState } from "react"

const BuyerHook = email => {
    const [isBuyer, setIsBuyer] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/buyer/${email}`)
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