import React, { Component } from 'react';
import axios from 'axios';
import { Widget,addResponseMessage, addLinkSnippet, addUserMessage  } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
import avatar from './avatar.png';
import './Chatbot.css';

class Chatbot extends Component {
    componentDidMount() {
        addResponseMessage("Hey there! I am Foxy. How can I help you?");
      }
      handleNewUserMessage = (newMessage) => {
        
        axios.post('https://airport-licensing-server.shri99.now.sh/dialogflow', {
          text: newMessage
        })
        .then(function (response) {
          addResponseMessage(response);
        })
        .catch(function (error) {
          addResponseMessage("Opps!Unable to connect to chat server at the moment.");
        }); 

        // addLinkSnippet(    
        // {
        //     title: 'Licence Application',
        //     link: 'https://github.com/Wolox/react-chat-widget',
        //     target: '_blank'
        //   }
          // )
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