import React from "react";

interface MainPageLayoutProsps {
    children: React.ReactNode;
    className?: string;
}

export default function MainPageLayout({children, className}: MainPageLayoutProsps) {
    return (
        <div className={"mx-16 w-auto bg-white text-black " + className}>
            {children}
        </div>
    );
}
