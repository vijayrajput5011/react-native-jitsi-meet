/**
 * @providesModule JitsiMeet
 */

import { NativeModules, requireNativeComponent } from "react-native";

export const QiscusMeetView = requireNativeComponent("RNJitsiMeetView");
export const QiscusMeetModule = NativeModules.RNJitsiMeetModule;
const call = QiscusMeetModule.call;
const audioCall = QiscusMeetModule.audioCall;
const setup = QiscusMeetModule.setup;

QiscusMeetModule.call = (info) => {
  const userInfo = info || {};
  const { videoMuted, audioMuted, room } = userInfo;
  
  if(!room) {
    console.log("Please provide room name");
    return;
  }

  if (!userInfo.audioOnly) {
    call(userInfo, room, videoMuted, audioMuted);
  } else {
    audioCall(userInfo,room, audioMuted);
  }
};

QiscusMeetModule.audioCall = (userInfo) => {
  userInfo = userInfo || {};
  audioCall(userInfo, audioMuted);
};

QiscusMeetModule.setup = (appId, url) => {
  setup(appId, url);
};
export default QiscusMeetModule;
