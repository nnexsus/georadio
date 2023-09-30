let dingsound = new Audio('/sounds/DING.WAV')

export const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state
        case 'update_link':
            sessionStorage.setItem('history', sessionStorage.getItem('history') + `,${action.link}`)
            return {
                ...state,
                link: action.link,
                browserInt: action.browserInt
            }
        case 'update_radio':
            return {
                ...state,
                radio: action.radio
            }
        case 'update_browserCount':
            return {
                ...state,
                browser: action.browser
            }
        case 'update_app':
            return {
                ...state,
                notes: action.notes,
                inbox: action.inbox
            }
        case 'update_email':
            localStorage.setItem('mailProg', `${action.email}`)
            dingsound.play()
            return {
                ...state,
                email: action.email
            }
        case 'update_error':
            return {
                ...state,
                error: action.error,
                notice: action.notice,
                errorMsg: action.errorMsg
            }
        case 'update_settings':
            return {
                ...state,
                settings: action.settings
            }
        case 'update_contextMenu':
            return {
                ...state,
                context: action.context,
                contextPos: action.contextPos,
                contextType: action.contextType
            }
        case 'new_site':
            return {
                ...state,
                newsite: action.newsite
            }
    }
}

export const initState = {
    link: 'http://www.home.com/', //opening page
    browserInt: 0,
    radio: 0, //radio number to sync to
    browser: 0, //check if any apps open
    notes: false, //app open
    inbox: false, //app open
    error: false, //app open
    settings: false, //app open
    email: [0, 1, 8], //for active inbox, num in array calls from email array in mail.json
    errorMsg: "No error!", 
    notice: false, //sets whether or not the warning popup is a yellow or red warning
    context: false,
    contextPos: [0, 0],
    contextType: false, //false = normal, true = browser
    newsite: 0 //site visit counter
}