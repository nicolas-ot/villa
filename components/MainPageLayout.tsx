import React from "react";

interface MainPageLayoutProsps {
    children: React.ReactNode;
}

export default function MainPageLayout({children}: MainPageLayoutProsps) {
    return (
        <div className={"mx-16 w-auto bg-white text-black"}>
            {children}
        </div>
    );
}
