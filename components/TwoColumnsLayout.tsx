import React from "react";
import Image, {StaticImageData} from "next/image";

interface TwoColumnsLayoutProps {
    children: React.ReactNode;
    img: StaticImageData;
    imgOnLeft?: boolean;
    height?: string;
}

export default function TwoColumnsLayout({children, img, imgOnLeft = false, height}: TwoColumnsLayoutProps) {
    const image = (
        <Image
            className={"w-full h-full"}
            src={img}
            alt={"Image"}
            width={0}
            height={0}
        />
    );

    const leftCol = (
        imgOnLeft
            ? image
            : children
    );

    const rightCol = (
        imgOnLeft
            ? children
            : image
    );

    return (
        <div className={"flex " + height}>
            <div className={"w-5/12 h-full"}>
                {leftCol}
            </div>
            <div className={"h-full w-full"}>
                {rightCol}
            </div>
        </div>
    );
}
