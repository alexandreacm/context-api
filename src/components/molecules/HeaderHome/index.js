import React from 'react';
import { Button } from 'react-native';

import { StyledHeader } from './styles';

export function HeaderHome({ onHandleSignIn, onHandSignOut }) {    
    return (
        <StyledHeader>
            <Button
                title='SignIn'
                onPress={onHandleSignIn} />
            <Button
                title='SignOut'
                onPress={onHandSignOut} />
        </StyledHeader>
    );
}
