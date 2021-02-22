import React from 'react'
import {
  FirebaseAuthConsumer,
  FirebaseAuthProvider,
  IfFirebaseAuthed,
  IfFirebaseUnAuthed,
} from '@react-firebase/auth';
import firebase from './firebase';
import MainBox from "./components/blocks/MainBox/MainBox";
import { SingInPaper } from "./components/blocks/SignInPaper/SignInPaper";
import { WeatherForecastPaper } from "./components/blocks/WeatherForecastPaper/WeatherForecastPaper";


function App() {

  return (
    <FirebaseAuthProvider firebase={firebase} >
      <MainBox>

        <FirebaseAuthConsumer>
          {_firebase => (
            <React.Fragment>
              <IfFirebaseAuthed>
                {
                  ({ user }) => (
                    <WeatherForecastPaper authUser={user} firebase={_firebase} />
                  )
                }
              </IfFirebaseAuthed>

              <IfFirebaseUnAuthed>
                {
                  () => <SingInPaper firebase={_firebase} />
                }
              </IfFirebaseUnAuthed>
            </React.Fragment>
          )}
        </FirebaseAuthConsumer>

      </MainBox>
    </FirebaseAuthProvider>

  );
}

export default App;
