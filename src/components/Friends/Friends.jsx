import React from 'react';
import styles from "./Friends.module.css";
import * as axios from 'axios';
import smallavatar from "../../assets/images/smallavatar.jpg";

class Friends extends React.Component { 

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentsPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setFriends(response.data.items)
            this.props.setTotalFriendsCount(response.data.totalCount)
        })
    } 
    onPageChanged = () => {
        this.props.setCurrentsPage(this.props.currentsPage + 1);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentsPage + 1}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setFriends(response.data.items)
        });
    }

    render() {
        let pageCount = Math.ceil(this.props.totalFriendsCount / this.props.pageSize);
        
        let pages = [];
        for (let i=1; i<= pageCount; i++){
            pages.push(i);
        }
        
        return <div>
            
        {
            this.props.friends.map( f => <div key ={f.id}>
                <span>
                    <div>
                        <img src={f.photos.small != null ? f.photos.small: smallavatar} className={styles.photos} />
                    </div>
                    <div>
                        {f.followed 
                        ? <button onClick={() => {this.props.unfollow(f.id)}}>Unfollow</button>
                        : <button onClick={() => {this.props.follow(f.id)}}>Follow </button>}
                    
                    </div>
                </span>
                <span>
                    <div>{f.name}</div>
                    <div>{f.status}</div>
                </span>
                <span>
                    <div> {"f.location.country"} </div>
                    <div> {"f.location.city"} </div>   
                </span>
                                  
            </div>)
        }
        <div className = {styles.buttonShowMore}>
            <span className = {styles.showMore} onClick= {(e) => this.onPageChanged()}>Show more...</span>
         </div>  
    </div>
    }
};

export default Friends;