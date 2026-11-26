import { createContext, useState, useEffect } from "react";
import apiclient from "../api/api.js";

export const Appcontext = createContext();

export default function Contextprovider({ children }) {

    const [auth, setAuth] = useState(null);

    useEffect(() => {

        const checkAuth = async () => {
            try {
                const response = await apiclient.get("/auth/me", {
                    withCredentials: true
                });

                setAuth(response.data.user);

            } catch (err) {
                setAuth(null);
            }
        };

        checkAuth();

    }, []);

    return (
        <Appcontext.Provider value={{ auth, setAuth }}>
            {children}
        </Appcontext.Provider>
    );
}

