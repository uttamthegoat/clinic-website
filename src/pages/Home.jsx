import InfoComponent from "../components/Home/InfoComponent"
import LandingPage from "../components/Home/LandingPage"
import ReviewComponent from "../components/Home/ReviewComponent"

const Home = () => {
  return (
    <div className="mt-14">
      <LandingPage />
      <InfoComponent />
      <ReviewComponent />
    </div>
  )
}

export default Home
