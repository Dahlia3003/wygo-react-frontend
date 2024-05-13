import axios from "axios";
import {useEffect, useState} from "react";
import './ViewAllUserReport';
import {Link, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import Post from "./Post/Post";

const Home = () => {



    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('loginState')!=='ok'){
            navigate('/');
        }
        const timeout = setTimeout(() => {
            setContentVisible(true);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);



    const currentTime = new Date();
    const formattedTime = currentTime.toISOString().slice(0, 19);
    console.log(formattedTime);

    const [favorList, setFavorList] = useState([]);
    const [favorPost, setFavorPost] = useState([]);
    const getFavorPost = () => {
        axios.get('https://wygo-ojzf.onrender.com/homepage/recommend-post/'+localStorage.getItem('username'))
            .then(response =>{
                setFavorPost(response.data);
            });
    }
    useEffect(() =>{
        if (localStorage.getItem('username')!==null)
        {
            axios.get('https://wygo-ojzf.onrender.com/homepage/recommend-user/'+localStorage.getItem('username'))
                .then(response =>{
                    setFavorList(response.data);
                });
            axios.get('https://wygo-ojzf.onrender.com/homepage/recommend-post/'+localStorage.getItem('username')+'/'+formattedTime)
                .then(response =>{
                    setFavorPost(response.data);
                    const length = favorPost.length;
                    const lastPost = length > 0 ? favorPost[length - 1] : null;
                    if (lastPost!==null){
                        localStorage.setItem('lastTimePost',lastPost.postTime);
                    }
                })
                .catch(err => {
                    console.log(err.response.data);
                });
        }
    },[])
    const navigate = useNavigate();
    const redirectToUserDetail = (username) => {
        navigate('/edit-profile');
    }


    ///////////////////////////////////////////////////
    useEffect(() => {
        favorPost.forEach(post => {
            getPostData(post.id);
        });
    }, [favorPost]);

    const [id, setID ] =useState(0);
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(null);
    const [reactionAuthors, setReactionAuthors] = useState(null);
    const [fromUser, setFromUser] = useState(null);
    const [toUser, setToUser] = useState(null);

    const getPostData = (id) => {
        setID(id);
        axios.post('https://wygo-ojzf.onrender.com/posts/detail',{
            postId : id
        })
            .then(response => {
                console.log('post');
                setPost(response.data)
                setToUser(response.data.author.username);
                setFromUser(localStorage.getItem('username'));
            })
        axios.get('https://wygo-ojzf.onrender.com/posts/'+id+'/comments')
            .then(response => {
                console.log('cmt');
                setComments(response.data);
            })
        axios.get('https://wygo-ojzf.onrender.com/reactions/'+id+'/getauthors')
            .then(response => {
                console.log('react');
                setReactionAuthors(response.data);
            })
    }
    ///////////////////////////////////////////////////
    return (
        <>
            {contentVisible && (
                <div>
                    <NavBar/>
                    <div style={{ display: 'flex', justifyContent:'center', backgroundColor:'#dddfe2' }}>
                        <div style={{ width: '50%', paddingRight:'10%', marginTop:'2rem' }}>
                            {/* Nội dung của phần bên trái */}
                            {favorPost && favorPost.map((post, index) => (
                                <div style={{  width: '100%', marginTop: '2rem' }}>
                                    <div>
                                        <Post key={id}
                                              post={post}
                                              comments={null}
                                              reactionAuthors={reactionAuthors}
                                              fromUser={fromUser}
                                              toUser={toUser} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ width: '25%', backgroundColor: '#fff', height:'fit-content', marginTop:'2rem', borderRadius: '10px', padding:'0.5rem' }}>
                            {/* Nội dung của phần bên phải */}
                            <Typography variant="h6" gutterBottom fontWeight="bold">
                                Có thể bạn muốn xem
                            </Typography>
                            {favorList && favorList.map((report, index) => (
                                <div key={index} className='user_info' onClick={() => redirectToUserDetail(report.username)} style={{display:'flex', flexDirection:'row', alignItems:'center', marginLeft:'0.5rem', marginTop: '1rem', cursor: 'pointer'}}>
                                    <div className='user_info_avatar' style={{width:'3.3rem', height:'3.3rem'}}>
                                        <img src={report.avatar} alt="Avatar"></img>
                                    </div>
                                    <div>
                                        <h3 style={{margin:'0'}}>{report.name}</h3>
                                        <div >/{report.username}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default Home;