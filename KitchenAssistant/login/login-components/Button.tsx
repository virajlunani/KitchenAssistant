import React, { ReactNode } from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../../core/theme'

interface ButtonProps {
    mode: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
}

export default function Button({ mode, style, ...props }: ButtonProps) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})