import { useEffect, useState } from "react";

const useSeller = email => {
    const [isSeller, setSeller] = useState(false);
    // const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-12-server-xi.vercel.app/seller/isseller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setSeller(data.isSeller);
                    // setIsAdminLoading(false);
                })
        }
    }, [email])
    return [isSeller]
}

export default useSeller;