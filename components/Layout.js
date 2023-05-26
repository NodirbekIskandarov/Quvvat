import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"
function Layout1({children}) {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}
export default Layout1