"use client"

import Image from "next/image";
import {useState} from "react";

const Gallery = ({images, label}) => {
    const [activeImage, setActiveImage] = useState(images.mainImg);

    return (
        <div className="w-full">
            <figure className="max-w-screen-lg w-full mx-auto">
                <div className="h-[550px] relative w-full">
                    <Image className="w-full h-full object-cover" src={`/store/${activeImage}`} width={1000} height={600} alt={label}/>
                </div>
                <figcaption className="text-right text-xs mt-1">{label}</figcaption>
            </figure>
            <div className="gallery-thumbnails flex justify-center gap-4">
                {Object.values(images).map(image => {
                    return <div key={image} className={`w-20 h-20 relative border ${image === activeImage ? 'border-[#ea580c]' : 'border-transparent'}`}
                                onClick={() => setActiveImage(image)}>
                        <Image className="object-cover w-full h-full absolute"
                               src={`/store/${image}`} width={200} height={200} alt={label}/>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Gallery;