import Vue from 'vue';
import Vuex from 'vuex';
//import createKandy from '../kandy.onprem.js';

Vue.use (Vuex);

const state = {
  notes: [],
  calls: [],
  calllogs: [],
  messages: [],
  contacts: [],
  activeNote: {},
  showModal: false,
};

var callId;
var secondCallId;

var local = document.createElement ('local-container');
var remote = document.createElement ('remote-container');
var options = {
  isAudioEnabled: true, //document.getElementById ('isAudioEnabled').checked,
  isVideoEnabled: false, // document.getElementById ('isVideoEnabled').checked,
  sendInitialVideo: false, //document.getElementById ('sendInitialVideo').checked,
  sendScreenShare: false, //document.getElementById ('sendScreenShare').checked,
  localVideoContainer: local, //document.getElementById ('local-container'), //olmadi this.$refs.container1, //
  remoteVideoContainer: remote, //document.getElementById ('remote-container'),
};

// const newContact = {
//   text: 'ravci',
// };

// const newContact2 = {
//   text: 'hguner',
// };

// state.contacts.push (newContact);
// state.contacts.push (newContact2);

const newMsg = {
  text: 'message 1',
};

const newMsg2 = {
  text: 'message 2',
};

state.messages.push (newMsg);
state.messages.push (newMsg2);

const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'New note',
      favorite: false,
    };
    state.notes.push (newNote);
    state.activeNote = newNote;
    addEventListeners ();
  },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text;
  },

  DELETE_NOTE (state) {
    state.notes.$remove (state.activeNote);
    state.activeNote = state.notes[0];
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite;
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note;
  },

  SWITCH_COMPONENT (state, note) {
    state.currentComp = contact - list;
  },
  REFRESH_CONTACTS (state, text) {
    refreshContacts ();
  },
  CONNECT (state, username, password) {
    Connect (username, password);
  },
  DISCONNECT (state, username, password) {
    disconnect ();
  },
  ADD_CONTACT (state, firstName) {},

  CALL_MAKE (state, callee) {
    makeCall (callee, options);
  },

  CALL_ANSWER (state) {
    answerCall (callId, options);
  },

  LIST_CALLS (state) {
    listCalls ();
  },

  CALL_REJECT (state) {
    rejectCall (callId);
  },

  CALL_IGNORE (state, firstName) {},

  SEND (state, participant, message) {
    sendMessage (participant, message);
  },

  HISTORY_FETCH (state) {
    retrieveCallLogs ();
  },

  HISTORY_GET (state) {
    getCallLogs ();
  },

  HISTORY_REMOVE (state) {
    removeCallLog ();
  },

  HISTORY_CLEAR (state) {
    removeCallHistory ();
  },
};

export default new Vuex.Store ({
  state,
  mutations,
  getters: {
    showModal: state => {
      return state.showModal;
    },
    showCallState: state => {
      return state.calls[0].state;
    },
  },
});

// var kandy = createKandy ({
//   authentication: {
//     subscription: {
//       expires: 3600,
//       service: ['IM', 'Presence', 'call'],
//       protocol: 'https',
//       server: 'spidr-ucc.genband.com',
//       version: '1',
//       port: '443',
//     },
//     websocket: {
//       protocol: 'wss',
//       server: 'spidr-ucc.genband.com',
//       port: '443',
//     },
//   },
//   logs: {
//     logLevel: 'debug',
//     enableFcsLogs: true,
//   },
//   call: {
//     chromeExtensionId: 'put real extension ID here',
//     serverProvidedTurnCredentials: true,
//     iceserver: [
//       {
//         url: 'stun:turn-ucc-1.genband.com:3478?transport=udp',
//       },
//       {
//         url: 'stun:turn-ucc-2.genband.com:3478?transport=udp',
//       },
//       {
//         url: 'turns:turn-ucc-1.genband.com:443?transport=tcp',
//         credential: '',
//       },
//       {
//         url: 'turns:turn-ucc-2.genband.com:443?transport=tcp',
//         credential: '',
//       },
//     ],
//   },
// });

// createKandy ();

// function waitMiliseconds (miliseconds) {
//   return new Promise (function (resolve) {
//     var id = setInterval (function () {
//       if (5 === 4) {
//         resolve (id);
//       }
//       setTimeout (function () {
//         resolve (id);
//       }, miliseconds);
//     }, 1000);
//   });
// }

// function addEventListeners () {
//   kandy.on ('contacts:changed', function (params) {
//     console.log ('contacs changed');
//     params[0].forEach (function (contact) {
//       console.log (contact.firstName + ' ' + contact.lastName);

//       const newContact = {
//         text: contact.firstName + ' ' + contact.lastName,
//         favorite: false,
//       };

//       state.contacts.push (newContact);
//     });

//   });

//   kandy.on ('call:stateChange', function (call) {
//     var calls = kandy.call.getCalls ().filter (function (call) {
//       console.log ('caller Name: ' + call.callerName);
//       console.log ('call id: ' + call.id);
//       // state.calls = calls;
//       let callExist = false;
//       state.calls.forEach (function (savedCall) {
//         if (savedCall.id === call.id) callExist = true;
//       });

//       if (!callExist) {
//         state.calls.push (call);
//       }

//       if (call.state !== 'ENDED') {
//         callId = call.id;
//       }

//      });
//   });

//   kandy.on ('call:mediaStateChange', function (params) {
//     partner.setState ('mediaState', params.mediaState);
//   });

//   kandy.on ('call:start', function (params) {
//     partner.setState ('call', 'start');
//     if (!callId || callId === params.callId) {
//       callId = params.callId;
//     } else {
//       secondCallId = params.callId;
//     }
//   });

//   kandy.on ('call:incoming', function (params) {
//     callId = params; //.callId;
//     state.showModal = true;
//   });

//   kandy.on ('auth:changed', function (data) {
//     console.log ('auth:changed Event Data: ' + JSON.stringify (data));
//     if (kandy.getConnection ().isConnected === true) {
//       refreshContacts ();
//       retrieveCallLogs ();
//       getCallLogs ();
//     }
//   });

//   kandy.on ('call:joined', function (params) {
//     console.log ('call joined');
//     let {callId, joinedCalls} = params;
//   });
// }

// function refreshContacts () {
//   kandy.user.refreshContacts ();
// }

// function Connect (username, password) {
//   addEventListeners ();
//   var credentials = {
//     domainApiKey: '',
//     username: username,
//     password: password,
//   };
//   console.log ('connect method runs for ' + credentials.username);
//   kandy.connect (credentials);
// }

// function disconnect () {
//   console.log ('disconnect method runs for ');
//   kandy.disconnect ();
// }

// function makeCall (callee, options = {}) {
//   console.log ('aradiniz: ' + callee);
//   kandy.call.makeCall (callee, options);
// }

// function answerCall (callId, options) {
//   kandy.call.answerCall (callId, options);
// }

// function ignoreCall (callId) {
//   kandy.call.ignoreCall (callId);
// }

// function rejectCall (callId) {
//   kandy.call.rejectCall (callId);
// }

// function endCall (callId) {
//   kandy.call.endCall (callId);
// }

// function muteCall (callId) {
//   kandy.call.muteCall (callId);
// }

// function unMuteCall (callId) {
//   kandy.call.unmuteCall (callId);
// }

// function startVideo (callId, options = {}) {
//   kandy.call.startVideo (callId, options);
// }

// function stopVideo (callId) {
//   kandy.call.stopVideo (callId);
// }

// function holdCall (callId) {
//   kandy.call.hold (callId);
// }

// function unHoldCall (callId) {
//   kandy.call.unhold (callId);
// }

// function listCalls (callId) {
//   console.log (state.showModal);
//   console.log (kandy.call.getCalls ());
// }

// function startScreenshare (callId, options = {}) {
//   kandy.call.startScreenshare (callId, options);
// }

// function stopScreenshare (callId) {
//   kandy.call.stopScreenshare (callId);
// }

// function sendMessage (participant, message1) {
//   //currentConvo = self.getConversation(participant)
//   const currentConvo = kandy.conversation.getConversation (
//     participant,
//     options
//   );
//   const message = currentConvo.createMessage (message1);
//   message.sendMessage ();
// }

// // getConversation(userId, options = {}) {
// //     return kandy.conversation.get(userId, options);
// // }

// ///////////// CALL HISTORY /////////////
// function retrieveCallLogs (amount = 20, offset = 0) {
//   kandy.call.history.retrieveCallLogs (amount, offset); //fetch
// }

// function removeCallLog (recordId) {
//   kandy.call.history.removeCallLog (recordId); //remove
// }

// function removeCallHistory () {
//   kandy.call.history.removeCallHistory ('all'); //clear
// }

// function getCallLogs () {
//   let gecici = kandy.call.history.getCallLogs (); //get
//   state.calllogs = kandy.call.history.getCallLogs ();
// }
