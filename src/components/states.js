
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
                notes: action.notes
            }

    }
}

export const initState = {
    link: 'http://www.georadio.net/',
    radio: 0,
    browser: false,
    notes: false
}