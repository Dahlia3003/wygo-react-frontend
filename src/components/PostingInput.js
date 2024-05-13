import './PostingInput.css'

const PostingInput = () =>
{
    return(
        <div className='posting_input_container'>
            <div className='header_text'>
                <h3>
                    Tạo bài viết
                </h3>
                <a>
                    <i class="fas fa-times"></i>
                </a>
            </div>
            <div className='posting_input_breakline'>
            </div>
            <div className='posting_input_content'>
                <div className='posting_input_content_header'>
                    <div className='mini_avatar'>
                        <img src='https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg'/>
                    </div>
                    <div className='post_header_info'>
                        <h4>
                            Công Phan
                        </h4>
                        <div>
                            22 Tháng 11, 2024
                        </div>
                    </div>
                </div>
                <div className='content_text'>
                    <input className='input_text' placeholder='Bạn đang nghĩ gì?'></input>
                </div>
            </div>
            <div className='posting_options_mini_button'>
                <div className='text'>
                    Thêm vào bài viết của bạn
                </div>
                <div className='icon'>
                    <i class="far fa-images"></i>
                    <i class="fas fa-map-marker-alt"></i>
                </div>
            </div>
            <a className='post_submit_button'>
                <div className='blurred_text'>
                    Đăng
                </div>
            </a>
        </div>
    )
}

export default PostingInput