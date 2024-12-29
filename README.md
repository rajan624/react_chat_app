# Dummy Chat App

This is a dummy chat application built using React. It allows users to search for conversations by contact name, view conversations in the left sidebar, start new conversations, send messages

Check out the live version of the project: <a href="https://react-chat-app-sepia.vercel.app/" target="_blank">Chat App</a>

# Features
Search: Conversations can be searched by contact name.


Left Sidebar: Shows all the conversations created. Each conversation displays the contact name and some text from the last message.


Create Conversation Button: Opens a popup and loads all the contacts from a dummy data JSON file. Clicking on a contact starts a new conversation if no conversation was previously started, or opens the existing conversation for that contact.


Right Side View: Shows the messages of the currently selected conversation.


Send Message: Users can send messages in the conversation.


# Technologies Used


Reactjs: A JavaScript library for building user interfaces.


React Hooks: A feature introduced in React 16.8 that allows using state and other React features without writing a class.


JSON: A lightweight data-interchange format used for storing dummy data.


HTML and CSS: Used for structuring and styling the application.


# Setup


Clone the repository: git clone <repository-url>


Navigate to the project directory: cd dummy-chat-app


Install the dependencies: npm install


Start the development server: npm start


Open the application in your browser at http://localhost:3000


# Usage

## Start the application by following the setup instructions.


The homepage displays the list of conversations in the left sidebar and the currently selected conversation's messages in the right side view.


Use the search bar to search for conversations by contact name.


Click on a conversation in the left sidebar to view its messages.


Click the "Create Conversation" button to open a popup that displays all the contacts from the dummy data file.


Clicking on a contact in the popup will start a new conversation if one doesn't exist for that contact, or open the existing conversation.


In the conversation view, enter a message in the input field and click the "Send" button to send the message.

![Screenshot 2023-07-13 223031](https://github.com/rajan624/react_chat_app/assets/60213161/f5ed3544-fd91-4f85-9eb1-1f5d2a5a2a74)



![Screenshot 2023-07-13 223241](https://github.com/rajan624/react_chat_app/assets/60213161/16316bd4-ad93-46cb-a8e2-3aa5524daca9)

That's it! You can now use the dummy chat application to view and manage conversations.
