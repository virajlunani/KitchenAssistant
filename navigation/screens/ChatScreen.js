import React, {useState} from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ChatInterface from '../../chat-components/ChatInterface';

export default function ChatScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ChatInterface/>
        </View>
    );
}