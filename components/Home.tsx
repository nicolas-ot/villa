import MainPageLayout from "@/components/MainPageLayout";
import TwoColumnsLayout from "@/components/TwoColumnsLayout";

import villaPhoto from "../img/villa.png"
import villa2Photo from "../img/villa_2.png"

export default function Home() {
    return (
        <div className={"w-full"}>
            <div className={"w-full my-28"}>
                <h1 className={"mx-auto text-7xl w-[42rem] text-center"}>
                    Luxury Villas for Your Vacation
                </h1>
            </div>

            <MainPageLayout className={"mb-12"}>
                <h3 className={" text-center text-2xl text-gray-700 my-12"}>
                    Experience the Best Villa Stay
                </h3>
                <div className={"mb-12 mx-24 text-gray-600"}>
                    Stay in a luxurious villa surrounded by nature and enjoy the beauty and tranquility of the countryside.
                    Our villas offer a perfect blend of comfort and luxury, making it a unique
                    experience for our guests.
                </div>

                <TwoColumnsLayout img={villaPhoto} height={"h-72"}>
                    <div className={"h-full text-3xl pt-24 text-white text-center bg-[#6aa3a2]"}>
                        Our Villas
                    </div>
                </TwoColumnsLayout>
                <TwoColumnsLayout img={villa2Photo} height={"h-72"} imgOnLeft>
                    <div className={"h-full text-3xl pt-24 text-white text-center bg-[#6aa3a2] w-full"}>
                        Our Villas
                    </div>
                </TwoColumnsLayout>
            </MainPageLayout>

            <MainPageLayout>
                <TwoColumnsLayout img={villaPhoto} height={"h-72"}>
                    <div className={"h-full text-3xl pt-24 text-white text-center bg-[#6aa3a2]"}>
                        Our Villas
                    </div>
                </TwoColumnsLayout>

                <div className={"mb-12 mx-24 text-gray-600"}>
                    Stay in a luxurious villa surrounded by nature and enjoy the beauty and tranquility of the countryside.
                    Our villas offer a perfect blend of comfort and luxury, making it a unique
                    experience for our guests.
                </div>

                <TwoColumnsLayout img={villa2Photo} height={"h-72"} imgOnLeft>
                    <div className={"h-full text-3xl pt-24 text-white text-center bg-[#6aa3a2] w-full"}>
                        Our Villas
                    </div>
                </TwoColumnsLayout>
            </MainPageLayout>
        </div>
    );
}
