const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET-FRIENDS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_FRIENDS_COUNT = 'SET-TOTAL-FRIENDS-COUNT';

let initialState = {
  friends: [],
  pageSize: 5,
  totalFriendsCount: 0,
  currentsPage: 3
}; 

const friendsReducer = (state = initialState, action) => {
  switch(action.type){
    case FOLLOW:
            return{
              ...state,
              friends: state.friends.map( f => {
                if (f.id === action.friendsId) {
                    return {...f, followed: true}
                } 
                return f;
              })
          };
    case UNFOLLOW:
            return{
              ...state,
              friends: state.friends.map( f => {
                if (f.id === action.friendsId) {
                    return {...f, followed: false}
                } 
                return f;
            })
          };
    case SET_FRIENDS: 
        return {
            ...state, 
            friends: [ ...action.friends]
        };
    case SET_CURRENT_PAGE:
        return {
          ...state, currentsPage: action.currentsPage
        }
    case SET_TOTAL_FRIENDS_COUNT:
        return {
          ...state,
          totalFriendsCount: action.totalFriendsCount
        }
        default:
      return state;  
    }  
}

export const followAC = (friendsId) => ({type: FOLLOW, friendsId})
export const unfollowAC= (friendsId) => ({type: UNFOLLOW, friendsId})
export const setFriendsAC = (friends) => ({type: SET_FRIENDS, friends})
export const setCurrentsPageAC = (currentsPage) => ({type: SET_CURRENT_PAGE, currentsPage})
export const setTotalFriendsCountAC = (totalFriendsCount) => ({type: SET_TOTAL_FRIENDS_COUNT, totalFriendsCount})
export default friendsReducer;