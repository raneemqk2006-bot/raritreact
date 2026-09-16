import Main from '../Components/Sections/Main';
import WhyRarite from '../Components/Sections/WhyRarite';
import Quote from '../Components/Sections/Quote';
import Footer from '../Components/Sections/Footer';
import '../Styles/home-style.css';
 
export default function Home() {
  return (
    <div className="home-page">
      <Main />
      <WhyRarite />
      <Quote />
      <Footer />
    </div>
  );
};