import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function AppLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-800">
            <Header/>
            <main className="flex-1 container mx-auto p-4">
                <Outlet></Outlet>
            </main>
            <Footer/>
        </div>
    )
}
