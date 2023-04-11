import React, {useContext, useState} from 'react';
import { View, 
         Text, 
         TextInput, 
         Button, 
         StyleSheet,
         KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GLOBALS from '../Globals';
import { ProfileContext } from '../profile-components/ProfileContext';

export interface Message {
  text: string;
  timestamp: Date;
  isUserMessage: Boolean;
}
 
export default function ChatInterface() {
  // inputValue - stores new message,  messages - all past messages
  const [inputValue, setInputValue] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  const {
    height,
    weight,
    age,
    gender,
    numPeople,
    diets,
    additionalInfo
  } = useContext(ProfileContext)!;

  const handleInputChange = (text: any) => {
    setInputValue(text);
  }

  const handleSubmit = () => {
    const newMessage: Message = {
      text: inputValue,
      timestamp: new Date(),
      isUserMessage: true,
    };
    setInputValue('');
    setMessages([...messages, newMessage])
    /** code to send request to get agent response */
    const requestBody = {
      new_message: newMessage.text,
      profile: {
        height,
        weight,
        age,
        gender,
        numPeople,
        diets,
        additionalInfo
      }
    }
    fetch(GLOBALS.AGENT_RESPONSE_SERVER.DEV, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      return res.json()
    })
    .then((response) => {
      console.log(response)
      const agentResponse: Message = {
        text: response.response,
        timestamp: new Date(),
        isUserMessage: false,
      }
      setMessages([...messages, newMessage, agentResponse]);
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <KeyboardAvoidingView style={styles.container} 
                          behavior="padding" 
                          keyboardVerticalOffset={100}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} >
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