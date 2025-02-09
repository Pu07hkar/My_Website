import Paid_Course from "../components/course";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

function Courses(){
    return(
        <>
        <Navbar/>
        <div className="min-h-screen">
        <Paid_Course/>
        </div>
        <Footer/>
        </>
    )
}

export default Courses;