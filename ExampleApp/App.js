import React, { useEffect } from 'react';
import QiscusMeet, { QiscusMeetView } from 'react-native-jitsi-meet';

function App() {

  useEffect(() => {
    setTimeout(() => {
      const url = 'https://meet.jit.si/testmeet';
      const userInfo = {
        displayName: 'User',
        email: 'user@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      QiscusMeet.call(url, userInfo);
      /* Você também pode usar o QiscusMeet.audioCall (url) para chamadas apenas de áudio */
      /* Você pode terminar programaticamente a chamada com QiscusMeet.endCall () */
    }, 1000);
  }, [])

  useEffect(() => {
    return () => {
      QiscusMeet.endCall();
    };
  });

  function onConferenceTerminated(nativeEvent) {
    /* Conference terminated event */
    console.log(nativeEvent)
  }

  function onConferenceJoined(nativeEvent) {
    /* Conference joined event */
    console.log(nativeEvent)
  }

  function onConferenceWillJoin(nativeEvent) {
    /* Conference will join event */
    console.log(nativeEvent)
  }
  return (
    <QiscusMeetView
      onConferenceTerminated={e => onConferenceTerminated(e)}
      onConferenceJoined={e => onConferenceJoined(e)}
      onConferenceWillJoin={e => onConferenceWillJoin(e)}
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}
    />
  )
}
export default App;