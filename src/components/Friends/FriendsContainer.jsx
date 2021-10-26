import {setTotalFriendsCountAC, setFriendsAC, followAC, unfollowAC, setCurrentsPageAC } from '../../redux/friendsReducer';
import Friends from './Friends';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        friends: state.friendsReducer.friends,
        pageSize: state.friendsReducer.pageSize,
        totalFriendsCount: state.friendsReducer.totalFriendsCount,
        currentsPage: state.friendsReducer.currentsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (friendsId) => {
            dispatch(followAC(friendsId))
        },
        unfollow: (friendsId) => {
            dispatch(unfollowAC(friendsId))
        },
        setFriends: (friends) => {
            dispatch(setFriendsAC(friends))
        },
        setCurrentsPage: (pageNumber) => {
            dispatch(setCurrentsPageAC(pageNumber))
        },
        setTotalFriendsCount: (totalCount) => {
            dispatch(setTotalFriendsCountAC(totalCount))
        }
    }
}
export default connect (mapStateToProps, mapDispatchToProps) (Friends);