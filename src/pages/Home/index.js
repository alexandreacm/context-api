import React, { useState }  from 'react';
import { Text } from 'react-native';

import { InputText } from '../../components/atoms/InputText';
import { InputPassword } from '../../components/molecules/InputPassword';
import { HeaderHome as Header } from '../../components/molecules/HeaderHome'; 
import { useAuthProvider } from '../../hooks/useAuthProvider';

export function Home() {
    const { user, SignIn, SignOut } = useAuthProvider();
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(true);
 
    function handleVisible() {
      setIsVisible(!isVisible);
    }
  
    // function dismissKeyboard() {
    //     Keyboard.dismiss();
    // }

    function onHandleSignIn() {
        SignIn(userName, password);
    }

    function onHandSignOut() {
        SignOut();
        resetAll()
    }
    
    function resetAll() { 
        setUserName('');
        setPassword('');
    }
    
    return (
        <>
            {/* molecules */}
            <Header
                onHandleSignIn={onHandleSignIn}
                onHandSignOut={onHandSignOut}
            />

            {/* atom */}
            <Text style={{ marginBottom: 10}}> Welcome: {user && user.name}</Text>

           {/* atom */}
            <InputText
                placeHolder='Please, type the userName'
                value={userName}
                onChangeText={setUserName}
            />

            {/* molecules */}
            <InputPassword
                placeHolder='Please, type the password'
                value={password}
                onChangeText={setPassword}
                handleVisible={handleVisible}
                isVisible={isVisible}
            />
        </>

    );
}
