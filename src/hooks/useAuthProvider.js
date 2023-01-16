import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

export function useAuthProvider() {
    const { user, SignIn, SignOut } = useContext(AuthContext);
        
    return { user, SignIn, SignOut };
}