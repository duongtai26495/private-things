import { UPDATE_CURRENT_CHAT, UPDATE_CURRENT_SIDEBAR, UPDATE_LOGIN_STATE } from "../data/constants"


export const updateLoginState = payload => ({
    type:UPDATE_LOGIN_STATE,
    payload
})

export const updateCurrentSidebar = payload => ({
    type:UPDATE_CURRENT_SIDEBAR,
    payload
})

export const updateCurrentChat = payload => ({
    type:UPDATE_CURRENT_CHAT,
    payload
})