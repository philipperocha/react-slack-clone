import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
	apiKey: "AIzaSyB2jCkff6mHMT88yZhGy3-IXEy9jnO8KqY",
	authDomain: "react-slack-clone-2.firebaseapp.com",
	databaseURL: "https://react-slack-clone-2.firebaseio.com",
	projectId: "react-slack-clone-2",
	storageBucket: "react-slack-clone-2.appspot.com",
	messagingSenderId: "1083858044973"
};
firebase.initializeApp(config);

export default firebase;