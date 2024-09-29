import Image from "next/image";
import PreloadIcon from "@/public/bouncing-circles.svg";

function Loading() {
    return (
        <div>
            <Image className="mx-auto max-w-24" src={PreloadIcon} alt="Loading ..."/>
        </div>
    );
}

export default Loading;