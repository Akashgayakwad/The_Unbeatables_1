import React, { Component } from 'react';
import { Widget,addResponseMessage, addLinkSnippet, addUserMessage  } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
import avatar from './avatar.png';
import './Chatbot.css';

class Chatbot extends Component {
    componentDidMount() {
        addResponseMessage("Hey there! I am Foxy. How can I help you?");
      }
      handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        // Now send the message throught the backend API
        // var response = "Bhaag mc";
        // addResponseMessage(response);
        addLinkSnippet(    
        {
            title: 'Licence Application',
            link: 'https://github.com/Wolox/react-chat-widget',
            target: '_blank'
          }
          )
      }
    render() {
    return (
      <div className="App">
        <Widget 
        handleNewUserMessage={this.handleNewUserMessage}
        profileAvatar={avatar}
        titleAvatar={avatar}
        badge= {5}
        title="Foxy Bot"
          subtitle="Your Platform Assistant"
        />
      </div>
    );
  }
}
 
export default Chatbot;