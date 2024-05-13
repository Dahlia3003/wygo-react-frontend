import './Post.css'
import './Posting.css'

const Post = (props) =>
{
    const { post } = props;

    return(
        <div className='post_container'>
            <div className='post_header'>
                <div className='mini_avatar'>
                    <img src='https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg'></img>
                </div>
                <div className='post_header_info'>
                    <h4>
                        {post.author.name}
                    </h4>
                    <div>
                        {post.formattedDate}
                    </div>
                </div>
                <div className='post_more_button'>
                    <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            <div className='post_content'>
                {post.content}
            </div>
            <div className='posting_breakline'>
            </div>
            <div className='post_option_buttons'>
                <div className='post_option_button'>
                    <i class="far fa-heart"></i>
                    <div>
                        React
                    </div>
                </div>
                <div className='post_option_button'>
                    <i class="far fa-comment"></i>
                    <div>
                        Bình luận
                    </div>
                </div>
                <div className='post_option_button'>
                    <i class="fas fa-share"></i>
                    <div>
                        Chia sẻ
                    </div>
                </div>
            </div>
            <div className='posting_breakline'>
            </div>
            {post.comments && post.comments.map(comment => (
                <div key={comment.id} className='post_comment'>
                    {/* Comment avatar */}
                    <div className='mini_avatar'>
                        <img src='https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg' alt='Avatar'></img>
                    </div>
                    {/* Comment info */}
                    <div className='comment_info'>
                        <h4>{comment.authorName}</h4>
                        <div>{comment.content}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Post