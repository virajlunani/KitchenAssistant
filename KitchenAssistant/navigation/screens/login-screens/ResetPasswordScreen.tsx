import React, { useState } from 'react'
import Background from '../../../login/login-components/Background'
import Logo from '../../../login/login-components/Logo'
import Header from '../../../login/login-components/Header'
import Button from '../../../login/login-components/Button'
import BackButton from '../../../login/login-components/BackButton'
import TextInput from '../../../login/login-components/TextInput'
import { emailValidator } from '../../../login/helpers/emailValidator'

interface StartScreenProps {
    navigation: any
}

export default function ResetPasswordScreen({ navigation }: StartScreenProps) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
    </Background>
  )
}