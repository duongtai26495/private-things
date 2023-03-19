const { ISLOGIN, UPDATE_LOGIN_STATE, CURRENT_SIDEBAR, UPDATE_CURRENT_SIDEBAR, CURRENT_CHAT, UPDATE_CURRENT_CHAT } = require("../data/constants");

const initState = {
    login_state: window.localStorage.getItem(ISLOGIN) ?? false,
    current_sidebar: window.localStorage.getItem(CURRENT_SIDEBAR) ?? "Home",
    current_chat: window.localStorage.getItem(CURRENT_CHAT) ?? ""
}

function reducer(state, action) {
    switch (action.type) {
        case UPDATE_LOGIN_STATE:
            return {
                ...state,
                login_state: action.payload
            }
        case UPDATE_CURRENT_SIDEBAR:
            return {
                ...state,
                current_sidebar: action.payload
            }
        case UPDATE_CURRENT_CHAT:
            return {
                ...state,
                current_chat: action.payload
            }
    }
}


export { initState }
export default reducer