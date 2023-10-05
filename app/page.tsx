import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between h-screen bg-[url('../img/front_page.png')] .bg-opacity-100">
            <div className={"bg-transparent"}>
                <Navbar/>
            </div>
        </main>
    )
}
