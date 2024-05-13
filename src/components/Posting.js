import './Posting.css'

const Posting = () => 
{
    return(
    <div className='posting_container'>
        <div className='posting_area'>
            <div className='mini_avatar'>
                <img src='https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg'></img>
            </div>
            <div className='posting_button'>
                <a >
                    Bạn đang nghĩ gì?
                </a>
            </div>
        </div>
        <div className='posting_breakline'>
        </div>
        <div className='posting_option'>
            <i class="far fa-images"></i>
            <a>
                Ảnh/video
            </a>
            <i class="fas fa-map-marker-alt"></i>
            <a>
                Địa điểm
            </a>
        </div>
    </div>)
}

export default Posting