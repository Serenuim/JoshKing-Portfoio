import About from "./about";
import Contact from "./contact";
import Footer_info from "./Footer_info";
import Header from "./header";
import Intro from "./intro";
import IntroSummary from "./introSummary";
import Result from "./result";

const Home = () => {
    return(
        <>
         <Header/>
         <Intro/>
         <IntroSummary/>
         <About/>
         <Result/>
         <Footer_info img={"home_.jpg"} sub={"Find me on"}/>
         <Contact/>
        </>
    )
}

export default Home;