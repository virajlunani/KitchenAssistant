import React, {useState} from 'react';
import { View, 
         Text, 
         TextInput, 
         Button, 
         StyleSheet,
         KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GLOBALS from '../Globals';
 
export default function ChatInterface() {
  // inputValue String stores new message,  Messages List<String> all past messages
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (text) => {
    setInputValue(text);
  }

  const handleSubmit = () => {
    const newMessage = {
      text: inputValue,
      timestamp: new Date(),
      isUserMessage: true,
    };
    /** code to send request for response from agent (lambda function??) */
    const agentResponse = {
        text: 'agent response',
        timestamp: new Date(),
        isUserMessage: false,
    }
    setMessages([...messages, newMessage, agentResponse]);
    setInputValue('');
  }

  return (
    <KeyboardAvoidingView style={styles.container} 
                          behavior="padding" 
                          keyboardVerticalOffset={100}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator="false">
      <View style={styles.messagesContainer}>
        {/* create bubble for each message */}
        {messages.map((message, index) => (
          <View key={index} style={message.isUserMessage ? styles.myMessage : styles.otherMessage}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </View>
      </KeyboardAwareScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={inputValue}
          placeholder="Type a message..."
        />
        <Button color={GLOBALS.COLOR.DARKERGREEN} title="Send" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: GLOBALS.COLOR.WHITE,
    padding: 10,
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 10,
    width: '100%',
    justifyContent: 'flex-end'
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: GLOBALS.COLOR.LIGHTGREEN,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    marginBottom: 10,
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: GLOBALS.COLOR.LIGHTGREEN,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    marginBottom: 10,
  },
  messageText: {
    color: GLOBALS.COLOR.DARKGREY,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GLOBALS.COLOR.WHITE,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 10,
    paddingLeft: 10,
  },
});