import React from 'react'
import Background from '../../../login/login-components/Background'
import Logo from '../../../login/login-components/Logo'
import Header from '../../../login/login-components/Header'
import Button from '../../../login/login-components/Button'
import Paragraph from '../../../login/login-components/Paragraph'
import { NavigationScreenProp } from 'react-navigation'

interface StartScreenProps {
    navigation: NavigationScreenProp<any, any>
}

export default function StartScreen({ navigation }: StartScreenProps) {
  return (
    <Background>
      <Logo />
      <Header>Login Template</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}