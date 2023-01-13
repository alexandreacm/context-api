import React, { useState }  from 'react';
import { Text, Button } from 'react-native';

import { useAuthProvider } from '../../contexts/AuthProvider';
import { Header } from './styles';

import { InputText } from '../../components/atoms/InputText';
import { InputPassword } from '../../components/molecules/InputPassword';

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
            <Header>
                <Button
                    title='SignIn'
                    onPress={onHandleSignIn} />
                <Button
                    title='SignOut'
                    onPress={onHandSignOut} />
            </Header>

            <Text style={{ marginBottom: 10}}> Welcome: {user && user.name}</Text>


            <InputText
                placeHolder='Please, type the userName'
                value={userName}
                onChangeText={setUserName}
            />

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
