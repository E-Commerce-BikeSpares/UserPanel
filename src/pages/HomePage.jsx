import AccessoriesSection from "../Components/HomeComponents/AccessoriesComponent";
import HomeCard from "../Components/HomeComponents/CardComponent";
import HelmetsAndAccessories from "../Components/HomeComponents/HelmetAndAccessories";
import HeroSection from "../Components/HomeComponents/HeroSectionComponent";
import HomeRegister from "../Components/HomeComponents/RegisterComponent";
import SearchByBike from "../Components/HomeComponents/SearchByBikeComponent";
import SupportHome from "../Components/HomeComponents/SupportComponent";
// import ReusableCard from "../Components/ReusableComponents/CardComponent";
import FooterComp from "../Components/ReusableComponents/Footer";
import NavBarcomp from "../Components/ReusableComponents/NavBar";


const Home = () => {
  return (
    <>
      <header>
        <NavBarcomp />
      </header>
      <main className="relative top-16">
        <section>
          <HeroSection/>
        </section>
        <section>
          <SearchByBike/>
        </section>
        <section>
          <HomeCard/>
        </section>
        <section>
          <HelmetsAndAccessories/>
        </section>
        <section>
          {/* <AccessoriesSection/> */}
        </section>
        <section>
          <SupportHome/>
        </section>
        <section>
          <HomeRegister/>
        </section>
      </main>
      <footer>
        <FooterComp/>
      </footer>
    </>
  );
};

export default Home;
