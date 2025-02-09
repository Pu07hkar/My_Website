import Banner from "../components/bannerComponent.jsx";
import Footer from "../components/footer.jsx";
import Course from "../components/freeCourse.jsx";
import Navbar from "../components/navbar.jsx";

function Home(){
    return(
        <>
        <Navbar/>
      <Banner />
      <Course/>
      <Footer/>
        </>
    )
}

export default Home;