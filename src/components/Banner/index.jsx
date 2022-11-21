export default function Banner ({text="", picture, altText=""}) {
    return (
        <div className='banner'>
            <img src={picture} alt={altText} className="banner__image" />
            <p className="banner__text">{text}</p>
        </div>
    )
}