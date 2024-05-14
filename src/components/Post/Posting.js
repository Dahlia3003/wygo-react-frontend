import './Posting.css'

const Posting = ({ togglePostingInput }) =>
{
    return(
        <div className='posting_container'>
            <div className='posting_area'>
                <div className='mini_avatar'>
                    <img src='https://i.pinimg.com/736x/c0/27/be/c027bec07c2dc08b9df60921dfd539bd.jpg'></img>
                </div>
                <div className='posting_button'>
                    <a style={{ cursor: 'pointer' }} className='posting_button_content' onClick={togglePostingInput}>
                        Bạn đang nghĩ gì?
                        <i style={{marginRight:'0.5rem'}} className="far fa-images"></i>
                    </a>
                </div>
            </div>
        </div>)
}

export default Posting