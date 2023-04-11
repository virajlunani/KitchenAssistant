from langchain.prompts import (
    ChatPromptTemplate,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate
)

def getSystemPrompt(user_profile):
    with open('prompt_template.txt', 'r') as f:
        template = f.read()

    system_message_prompt = SystemMessagePromptTemplate.from_template(template)
    system_prompt = ChatPromptTemplate.from_messages([system_message_prompt])
    messages = system_prompt.format_prompt(user_profile=user_profile).to_messages()
    return messages[0]

def getHumanMessage(message):
    human_message_prompt = HumanMessagePromptTemplate.from_template('{latest_message}')
    human_prompt = ChatPromptTemplate.from_messages([human_message_prompt])
    return human_prompt.format_prompt(latest_message=message).to_messages()