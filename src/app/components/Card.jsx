/*
 * @author Altanla <altan0225@gmail.com> 
 */
export default function Card({item}) {
    return (
        <div className="border">
            <img src={item.Picture.PictureUrl1}></img>
            <div>{item.ScenicSpotName}</div>
            <div>{item.Description}</div>
        </div>
    )
}