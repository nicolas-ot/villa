import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between h-screen bg-[url('../img/front_page.png')] bg-cover">
            <div className={"bg-transparent w-full bg-fit"}>
                <Navbar/>
            </div>
        </main>
    )
}
