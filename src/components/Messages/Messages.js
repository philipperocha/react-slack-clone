import React, { Component } from 'react';
import { Segment, Comment } from 'semantic-ui-react';
import firebase from '../../firebase';

import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm';

class Messages extends Component {
	state = {
		messagesRef: firebase.database().ref('messages'),
		channel: this.props.currentChannel,
		user: this.props.currentUser
	}

	render() {
		const { messagesRef, channel, user } = this.state;

		return (
			<React.Fragment>
				<MessagesHeader />
				<Segment>
					<Comment.Group className='messages'>

					</Comment.Group>
				</Segment>

				<MessageForm
					currentChannel={channel}
					currentUser={user}
					messagesRef={messagesRef}
				/>
			</React.Fragment>
		)
	}
}

export default Messages;