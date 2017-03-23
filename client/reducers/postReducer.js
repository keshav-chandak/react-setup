export default function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKE':
            console.log('Within posts reducers!');
            return state;
        default:
            return state;
    }
}