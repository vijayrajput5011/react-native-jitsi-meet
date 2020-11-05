/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from 'react-native';

export const QiscusMeetView = requireNativeComponent('RNJitsiMeetView');
export const QiscusMeetModule = NativeModules.RNJitsiMeetModule
const call = QiscusMeetModule.call;
const audioCall = QiscusMeetModule.audioCall;
const setup = QiscusMeetModule.setup;
QiscusMeetModule.call = (userInfo, videoMuted = false, audioMuted = false) => {
  userInfo = userInfo || {};
  call(userInfo, videoMuted, audioMuted);
}
QiscusMeetModule.audioCall = (userInfo, audioMuted = false) => {
  userInfo = userInfo || {};
  audioCall(userInfo, audioMuted);
}
QiscusMeetModule.setup = (appId, url) => {
  setup(appId, url);
}
export default QiscusMeetModule;


