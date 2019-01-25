import React, { Component } from 'react';
import { Segment, Comment } from 'semantic-ui-react';
import firebase from '../../firebase';

import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm';
import Message from './Message';

class Messages extends Component {
	state = {
		messages: [],
		messagesLoading: true,
		messagesRef: firebase.database().ref('messages'),
		channel: this.props.currentChannel,
		user: this.props.currentUser
	};

	componentDidMount() {
		const { channel, user } = this.state;

		if (channel && user) {
			this.addListeners(channel.id);
		}
	};

	addListeners = channelId => {
		this.addMessageListener(channelId);
	};

	addMessageListener = channelId => {
		const loadedMessages = [];
		this.state.messagesRef.child(channelId).on('child_added', snap => {
			loadedMessages.push(snap.val());
			this.setState({
				messages: loadedMessages,
				messagesLoading: false
			});
		});
	};

	displayMessages = messages => (
		messages.length > 0 && messages.map(message => (
			<Message
				key={message.timestamp}
				message={message}
				user={this.state.user}
			/>
		))
	);

	render() {
		const { messagesRef, messages, channel, user } = this.state;

		return (
			<React.Fragment>
				<MessagesHeader />
				<Segment>
					<Comment.Group className='messages'>
						{this.displayMessages(messages)}
					</Comment.Group>
				</Segment>

				<MessageForm
					currentChannel={channel}
					currentUser={user}
					messagesRef={messagesRef}
				/>
			</React.Fragment>
		)
	};
}

export default Messages;