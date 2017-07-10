import postsList from '../data/posts';

function posts(state = [], action) {
    console.log('Post reducer =====================');
    console.log('posts state=====', state);
    console.log('posts action=====', action);
    switch (action.type) {
        case 'INCREMENT_LIKES':
            break;
        case 'FETCH_POSTS':
            //debugger;
            if (action.postFrom + 5 <= postsList.length) {
                return [
                    ...state,
                    [...postsList].splice(action.postFrom, action.postFrom + 5)
                ];
            }
            break;
        default:
            return state;
    }
    return state;
}
export default posts;
