import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdmWdl4JQZBzQslvYxoN4Qgtwk9ueRGb4",
    authDomain: "catch-of-the-day-gonzalez.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-gonzalez.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp }

//this is a default export
export default base;