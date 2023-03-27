
export const reducer = (state, action) => {
    switch (action.type) {
        case 'update_link':
            return {
                ...state,
                link: action.link,
            }

            default:
                return state

        case 'update_radio':
            return {
                ...state,
                radio: action.radio
            }
        case 'update_app':
            return {
                ...state,
                browser: action.browser,
                notes: action.notes,
                inbox: action.inbox
            }
        case 'update_email':
            return {
                ...state,
                email: action.email
            }
        case 'new_site':
            return {
                ...state,
                lastsite: action.lastsite
            }

    }
}

export const initState = {
    link: 'http://www.georadio.net/',
    radio: 0,
    browser: false, //app open
    notes: false, //app open
    inbox: false, //app open
    email: [0, 1], //for active inbox, num in array calls from email array in mail.json
    lastsite: []
}