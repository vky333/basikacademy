import Header from '../components/globals/header/Header';
import Banner from '../components/globals/banner/Banner';
import OurCourses from '../components/globals/ourCourses/OurCourses';
import BasikPrideSection from '../components/globals/basiksPride/BasikPrideSection';
import PartnerCounter from '../components/globals/partnerCounter/PartnerCounter';
import TalkComponentGlobal from '../components/globals/talkExpertLink/TalkComponentGlobal';
import Blog from '../components/globals/blog/Blog';
import Footer from '../components/globals/footer/Footer';
import MasterVideo from '../components/pagescomponents/faculty/MasterVideo'


export default function Home() {
    return (
        <>
        <Header/>
        <Banner/>
        <OurCourses/>
        <BasikPrideSection/>
        <PartnerCounter/>
        <TalkComponentGlobal 
          Heading="Transform your future with Basik’s education
          get register and celebrate the life." 
          buttonName="Talk to Our Expert"                  
        />
        <section className='masterVideo'>
        <MasterVideo/>
       </section>
        <Blog/>
        <Footer/>
            
        </>
    )
}