import { useEffect, useState } from "react";

const useUser = email => {
    const [isUser, setUser] = useState(false);
    // const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/seller/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setUser(data.isUser);
                    // setIsAdminLoading(false);
                })
        }
    }, [email])
    return [isUser]
}

export default useUser;