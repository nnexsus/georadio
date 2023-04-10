
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
            console.log(action.lastsite)
            return {
                ...state,
                lastsite: action.lastsite
            }
        case 'new_depth':
            console.log("newdepth: ", action.navdepth, "and the array: ", state.lastsite)
        return {
            ...state,
            navdepth: action.navdepth
        }

    }
}

export const initState = {
    link: 'http://www.home.com/', //opening page
    radio: 0, //radio number to sync to
    browser: false, //app open
    notes: false, //app open
    inbox: false, //app open
    email: [0, 1], //for active inbox, num in array calls from email array in mail.json
    lastsite: ['http://www.home.com/'], //for back button
    navdepth: 0 //layer in array for forward/back. 0 = current site
}