import { useParams } from 'react-router-dom';
import Post from "./Post";
import './Post.css';
import './PostContainer.css'
import {useEffect, useState} from "react";
import axios from "axios";
const ViewPostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);
    const [reactionAuthors, setReactionAuthors] = useState(null);
    const [fromUser, setFromUser] = useState(null);
    const [toUser, setToUser] = useState(null);

    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        axios.post(process.env.BE_HOST+'/posts/detail',{
            postId : id
        })
            .then(response => {
                console.log('post')
                setPost(response.data)
                setToUser(response.data.author.username);
                setFromUser(localStorage.getItem('username'));
            })
        axios.get(process.env.BE_HOST+'/posts/'+id+'/comments')
            .then(response => {
                console.log('cmt')
                setComments(response.data);
            })
        axios.get(process.env.BE_HOST+'/reactions/'+id+'/getauthors')
            .then(response => {
                console.log('react')
                setReactionAuthors(response.data);
            })
        const timeout = setTimeout(() => {
            setContentVisible(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            {contentVisible && (
                <div style={{ display: 'flex',  justifyContent: 'center', width: '100%', marginTop: '2rem' }}>
                    <div className='post_container_modifier'>
                        <Post key={id}
                              post={post}
                              comments={comments}
                              reactionAuthors={reactionAuthors}
                              fromUser={fromUser}
                              toUser={toUser} />
                    </div>
                </div>
            )}
        </>
    );
}
export default ViewPostDetail