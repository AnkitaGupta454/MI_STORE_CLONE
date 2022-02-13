import "./App.css";
import Navbar from "./components/Navbar";
import PreNavbar from "./components/preNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Slider from "./components/slider";
import data from "./data/data.json";
import Offer from "./components/Offer";
import Heading from "./components/Heading";
import StarProducts from "./components/StarProducts";
import HotAccesoriesMenu from "./components/HotAccesoriesMenu";
import HotAccessory from "./components/HotAccessory";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos";
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />

       <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
     

      <Slider start={data.banner.start} />
      <Offer offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProducts starProduct={data.starProduct} />
      <Heading text="HOT ACCESORIES" />
      <HotAccesoriesMenu />

      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessory
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        ></Route>

        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessory
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        ></Route>

        <Route
          exact
          path="/home"
          element={
            <HotAccessory
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />

        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessory
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />

        <Route
          exact
          path="/mobileAccesories"
          element={
            <HotAccessory
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews}/>

      <Heading text="VIDEOS"/>
      <Videos videos={data.videos} />

      <Heading  text="IN THE PRESS"/>
   
       <Banner  banner={data.banner}/>

       <Footer footer={data.footer} />
    </Router>
    
  );
}

export default App;
