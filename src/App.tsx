import Navbar from "./components/Navbar";
import Projects from "./Projects";
import LandingBanner from "./LandingBanner";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <LandingBanner/>
        <Projects/>
      </main>
    </>
  );
}

export default App;
