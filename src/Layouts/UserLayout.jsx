import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"

export default function UserLayout({ children, isActive }) {
    return (
        <>
            <Navbar isActive={isActive}/>
            {children}
            <Footer/>
        </>
    )
}