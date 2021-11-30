import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyD6SEyx-6YjhxhFMsfAeQJUBSH0wXomwEg",
      authDomain: "fir-pj-532e2.firebaseapp.com",
      projectId: "fir-pj-532e2",
      storageBucket: "fir-pj-532e2.appspot.com",
      messagingSenderId: "786156776421",
      appId: "1:786156776421:web:211c2de0fcfdf0b4e51d0c",
      measurementId: "G-2S5PCMN3XQ"
    }
  )
}

export default firebase
