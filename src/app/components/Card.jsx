/*
 * @author Altanla <altan0225@gmail.com> 
 */
import Image from "next/image"
export default function Customcard({items}){
    return (
        <div className="border">
            <Image src={items.Picture.PictureUrl} alt={items.Picture.PictureDescription1}></Image>
            <div>{items.ScenicSpotName}</div>
        </div>
    )
}