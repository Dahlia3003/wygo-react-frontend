import './PersonalPage.css'
import Posting from '../../components/Posting';
import Post from '../../components/Post/Post';

import React, { useState, useEffect } from 'react';

const PersonalPage = () =>
{
    const [userData, setUserData] = useState('');
    const [commentList, setCommentList] = useState('')
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://wygo-ojzf.onrender.com/profile/user2`);
                if (response.ok) {
                    const data = await response.json();
                    data.posts.forEach(async (post) => {
                        const dateObject = new Date(post.postTime[0], post.postTime[1] - 1, post.postTime[2], post.postTime[3], post.postTime[4], post.postTime[5], post.postTime[6]);
                        const day = String(dateObject.getDate()).padStart(2, '0');
                        const month = String(dateObject.getMonth() + 1).padStart(2, '0');
                        const year = dateObject.getFullYear();
                        post.formattedDate = `${day} tháng ${month}, ${year}`;

                        // Fetch comments for each post
                        const commentResponse = await fetch(`https://wygo-ojzf.onrender.com/posts/${post.id}/comments`);
                        if (commentResponse.ok) {
                            const commentData = await commentResponse.json();
                            post.comments = commentData;
                        }
                    });
                    setUserData(data);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        fetchUserData();
    }, []);

    return (    
    <div className='supercontainer'>
        <div className="header_section">
            <div className="background_container">
            </div>
            <div className='profile_container'>
                <div className='avatar'>
                    <img src='https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg'/>
                </div>
                <div className='profile_info'>
                    <h1>{userData?.user?.name ?? ''}</h1>
                    {userData && (<div>
                        /{userData?.user?.username ?? ''}
                    </div>)}
                    <div className='favor'>
                        <i className='fas fa-arrow-alt-circle-up' style={{color:'green'}}></i>
                        {userData?.user?.befavoredListSize ?? ''}
                        <i className='fas fa-arrow-alt-circle-down' style={{color:'red'}}></i>
                        {userData?.user?.bedisfavoredListSize ?? ''}
                    </div>
                </div>
                <div className='edit_profile'>
                    <a>
                        <i className='fas fa-arrow-alt-circle-up' style={{color:'grey'}}></i>
                        <div>Upvote</div>
                    </a>
                    <a>
                        <i className='fas fa-arrow-alt-circle-down' style={{color:'grey'}}></i>
                        <div>Downvote</div>
                    </a>
                    <a>
                        <i class="fas fa-pen"></i>
                        <div>Chỉnh sửa trang cá nhân</div>
                    </a>
                </div>
            </div>
            <div className='breakline'>

            </div>
            <div className='profile_tabs'>
                <div>Bài viết</div>
                <div>Favor</div>
                <div>Befavored</div>
                <div>Disfavor</div>
            </div>
        </div>
        <div className='content_section'>
            <div className='post_and_posting_tab'>
                <div className='introduce'>
                    <h2>
                        Giới thiệu
                    </h2>
                    <div className='bio'>{userData?.user?.bio ?? ''}</div>
                    <div className='text'>
                        <i class="fas fa-home"> </i>
                        <div>{userData?.user?.hometown ?? ''}</div>
                    </div>
                    <div className='text'>
                        <i class="fas fa-venus"></i>
                        <div>{userData?.user?.gender ?? ''}</div>
                    </div>
                </div>
                <div className='post_and_posting'>
                    <Posting/>
                    {userData && userData.posts && userData.posts.map(post => (
                        <Post key={post.id} post={post} comments={post.comments} />
                    ))}
                </div>
            </div>
            <div className='updownvote_tab'>
                <h2>
                    Favor
                </h2>
                <div className='updownvote_content'>
                    <div className='updownvote_card'>
                        <div className='updownvote_avatar'>
                            <img src='https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg'/>
                        </div>
                        <div className='updownvote_info'>
                            <div className='updownvote_name'>
                                Huỳnh Nam Duy
                            </div>
                        </div>
                        <div className='updownvote_more_button'>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className='updownvote_card'>
                        <div className='updownvote_avatar'>
                            <img src='https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg'/>
                        </div>
                        <div className='updownvote_info'>
                            <div className='updownvote_name'>
                                Huỳnh Nam Duy
                            </div>
                        </div>
                        <div className='updownvote_more_button'>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className='updownvote_card'>
                        <div className='updownvote_avatar'>
                            <img src='https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg'/>
                        </div>
                        <div className='updownvote_info'>
                            <div className='updownvote_name'>
                                Huỳnh Nam Duy
                            </div>
                        </div>
                        <div className='updownvote_more_button'>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className='updownvote_card'>
                        <div className='updownvote_avatar'>
                            <img src='https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg'/>
                        </div>
                        <div className='updownvote_info'>
                            <div className='updownvote_name'>
                                Huỳnh Nam Duy
                            </div>
                        </div>
                        <div className='updownvote_more_button'>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PersonalPage