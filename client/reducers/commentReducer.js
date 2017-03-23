export default function comments(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKE':
            console.log('Within comment reducers!');
            //but change the current state to a mew state amd return
            return state;
        default:
            return state;

    }
}