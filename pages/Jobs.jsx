import Navbar from "./Navbar";
import Header from './Component/Header';
import { useRouter } from "next/router";
import JobsBoard from "./Component/JobBoard";
import Footer from "./Component/Footer";

const headersDictionary = {
    '/Jobs': 'Jobs and Vacancies',
   
  }; 
export default function Jobs(){
    const router = useRouter();
    const currentPage = router.pathname; // get the current page
    const headerText = headersDictionary[currentPage]; // look up the text in your dictionary
    return(
        <>
        <Navbar/>
        <Header headerText={headerText}/>
        <JobsBoard/>
        <Footer/>
        </>
    );

}