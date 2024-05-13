import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const ProtectedRoute = ({ children }:any) => {
    const { user } :any = useAuth();
    if (!user) {
        // user is not authenticated
        return <Navigate to="/Login" />;
    }
    return children;
};