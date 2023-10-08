import MainPageLayout from "@/components/MainPageLayout";
import TwoColumnsLayout from "@/components/TwoColumnsLayout";

import villaPhoto from "../img/villa.png"
import villa2Photo from "../img/villa_2.png"

export default function Home() {
    return (
        <div className={"w-full"}>
            <div className={"w-full my-28"}>
                <h5 className={"uppercase text-center mb-4 text-xl"}>
                    welcome to my villa
                </h5>
                <h1 className={"mx-auto text-7xl w-[42rem] text-center"}>
                    Luxury Villas for Your Vacation
                </h1>
            </div>

            <MainPageLayout className={"mb-12 overflow-auto font-display"}>
                <h3 className={" text-center text-2xl text-gray-900 my-12"}>
                    Experience the Best Villa Stay
                </h3>
                <div className={"mb-12 mx-24 text-gray-600"}>
                    Stay in a luxurious villa surrounded by nature and enjoy the beauty and tranquility of the countryside.
                    Our villas offer a perfect blend of comfort and luxury, making it a unique
                    experience for our guests.
                </div>

                <TwoColumnsLayout img={villaPhoto} className={"h-72"}>
                    <div className={"h-full text-3xl pt-24 text-white text-center bg-[#6aa3a2]"}>
                        Our Villas
                    </div>
                </TwoColumnsLayout>
                <TwoColumnsLayout img={villa2Photo} className={"h-72"} imgOnLeft>
                    <div className={"h-full text-3xl pt-24 text-white text-center bg-[#6aa3a2] w-full"}>
                        Our Villas
                    </div>
                </TwoColumnsLayout>
            </MainPageLayout>

            <MainPageLayout>
                <TwoColumnsLayout img={villaPhoto} className={"h-72"}>
                    <div className={"h-full text-3xl pt-24 text-white text-center bg-[#6aa3a2]"}>
                        Our Villas
                    </div>
                </TwoColumnsLayout>

                <div className={"mb-12 mx-24 text-gray-600"}>
                    Our villas are located in some of the most exotic and picturesque locations, offering our guests an opportunity to rejuvenate and relax.
                    The villas are nestled in the heart of nature, offering stunning views and a peaceful ambiance.
                </div>

                <TwoColumnsLayout img={villa2Photo} className={"h-72"} imgOnLeft>
                    <div className={"h-full text-3xl pt-24 text-white text-center bg-[#6aa3a2] w-full"}>
                        About Us
                    </div>
                </TwoColumnsLayout>
            </MainPageLayout>
        </div>
    );
}
