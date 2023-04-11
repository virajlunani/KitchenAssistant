import json
from flask import Flask, request, jsonify
from constants import *
from utils.utils import *
from utils.langchain_utils import *

from langchain.chat_models import ChatOpenAI
from langchain.prompts import (
    ChatPromptTemplate,
    AIMessagePromptTemplate
)

app = Flask(__name__)

chat = ChatOpenAI(temperature=0, openai_api_key=openai_api_key)
messages = []

@app.route('/', methods=['POST'])
def get_agent_response():
    global messages
    request_data = request.get_json()
    print(json.dumps(request_data, indent=2), '\n')

    latest_message_string = request_data['new_message']
    profile_string = getProfile(request_data['profile'])

    print(profile_string, '\n')
    if len(messages) > 0:
        messages[0] = getSystemPrompt(profile_string)
    else:
        messages.append(getSystemPrompt(profile_string))

    new_message = getHumanMessage(latest_message_string)

    messages.extend(new_message)

    if len(messages) > 10:
        messages = [messages[0]] + messages[-10:]
    response = chat(messages)
    # response = ChatPromptTemplate.from_messages([AIMessagePromptTemplate.from_template('placeholder')]).format_prompt().to_messages()[0]
    messages.append(response)
    for message in messages: print(message)

    return jsonify({'response': response.content})

if __name__ == "__main__":
    app.run()