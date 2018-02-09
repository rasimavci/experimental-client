export const addNote = ({dispatch}) => {
  dispatch ('ADD_NOTE');
};

export const editNote = ({dispatch}, e) => {
  dispatch ('EDIT_NOTE', e.target.value);
};

export const deleteNote = ({dispatch}) => {
  dispatch ('DELETE_NOTE');
};

export const updateActiveNote = ({dispatch}, note) => {
  dispatch ('SET_ACTIVE_NOTE', note);
};

export const toggleFavorite = ({dispatch}) => {
  dispatch ('TOGGLE_FAVORITE');
};

export const switchComponent = ({dispatch}) => {
  dispatch ('SWITCH_COMPONENT');
};

export const refreshContacts = ({dispatch}) => {
  dispatch ('REFRESH_CONTACTS');
};
export const Connect = ({dispatch}, username, password) => {
  dispatch ('CONNECT', username, password);
};
export const disconnect = ({dispatch}) => {
  dispatch ('DISCONNECT');
};

export const make = ({dispatch}, callee) => {
  dispatch ('CALL_MAKE', callee);
};

export const answer = ({dispatch}) => {
  dispatch ('CALL_ANSWER');
};

export const reject = ({dispatch}) => {
  dispatch ('CALL_REJECT');
};

export const ignore = ({dispatch}) => {
  dispatch ('CALL_IGNORE');
};

export const send = ({dispatch}, participant, message) => {
  dispatch ('SEND', participant, message);
};

export const listCalls = ({dispatch}) => {
  dispatch ('LIST_CALLS');
};

export const retrieveCallLogs = ({dispatch}) => {
  dispatch ('HISTORY_FETCH');
};

export const getCallLogs = ({dispatch}) => {
  dispatch ('HISTORY_GET');
};

export const removeCallLog = ({dispatch}) => {
  dispatch ('HISTORY_REMOVE');
};

export const removeCallHistory = ({dispatch}) => {
  dispatch ('HISTORY_CLEAR');
};


