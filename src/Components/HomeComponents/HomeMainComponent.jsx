import AccessoriesSection from "./AccessoriesComponent";
import HelmetsAndAccessories from "./HelmetAndAccessories";
import HeroSection from "./HeroSectionComponent";
import NavBarcomp from "../ReusableComponents/NavBarComponent2";
import FooterComp from "../ReusableComponents/FooterComponent";
import ReusableCard from "../ReusableComponents/CardComponent";
import SupportHome from "./SupportComponent";
import SearchByBike from "./SearchByBikeComponent";
import HomeRegister from "./RegisterComponent";

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
        {/* <section className="h-[90vh] w-screen flex items-center justify-center ">
          <AutoPlay/>
        </section> */}
        <section>
          <SearchByBike/>
        </section>
        <section>
          <ReusableCard />
        </section>
        <section>
          <HelmetsAndAccessories />
        </section>
        <section>
          <AccessoriesSection />
        </section>
        <section>
          <SupportHome/>
        </section>
        <section>
          <HomeRegister/>
        </section>
      </main>
      <footer>
        <FooterComp />
      </footer>
    </>
  );
};

export default Home;
