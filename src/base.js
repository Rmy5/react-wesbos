import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyAXnNscKuhetqwTavkY_ugM1rBlgukZs20',
    authDomain: 'catch-of-the-day-r-c.firebaseapp.com',
    databaseURL: 'https://catch-of-the-day-r-c.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;