import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"

export default function UserLayout({ children, isActive, auth, setAuth, user, setUser }) {


    return (
        <>
            <Navbar isActive={isActive} auth={auth} setAuth={setAuth} user={user} setUser={setUser} />
            {children}
            <Footer/>
        </>
    )
}