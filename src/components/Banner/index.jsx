export default function Banner ({text="", picture, altText=""}) {
    return (
        <div className='banner'>
            <img src={picture} alt={altText} />
            <p className="banner__text">{text}</p>
        </div>
    )
}