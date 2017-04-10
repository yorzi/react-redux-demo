// users reducer
export default function users(state = {}, action) {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return action.users;

    // initial state
    default:
      return state;
  }
}
