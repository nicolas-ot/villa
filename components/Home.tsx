import MainPageLayout from "@/components/MainPageLayout";

export default function Home() {
    return (
        <div className={"w-full"}>
            <div className={"w-full my-28"}>
                <h1 className={"mx-auto text-7xl w-[42rem] text-center"}>
                    Luxury Villas for Your Vacation
                </h1>
            </div>

            <MainPageLayout>
                <h3 className={"text-center text-2xl text-gray-700 my-12"}>
                    Experience the Best Villa Stay
                </h3>
                <div className={"mx-24 text-gray-600"}>
                    Stay in a luxurious villa surrounded by nature and enjoy the beauty and tranquility of the countryside.
                    Our villas offer a perfect blend of comfort and luxury, making it a unique
                    experience for our guests.
                </div>
            </MainPageLayout>
        </div>
    );
}
