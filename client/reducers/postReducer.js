export default function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKE':
            console.log('Within posts reducers!');
            console.log(action.index);
            var a=action.index;
            
            var a=[];
            a.push(...state);
            console.log(a[1].code);
            a[1].code="hello";
            return a;
        default:
            return state;
    }
}