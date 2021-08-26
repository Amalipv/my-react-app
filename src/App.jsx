import Header from './components/header/Header'
import Summary from "./components/summary/Summary"
import Porfolio from "./components/portfolio/Portfolio"
import Projects from "./components/projects/Projects"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"

function App() {
  return (
    <div className="App">
     <Header/>
     <div className="sections">
       <Summary/>
       <Porfolio/>
       <Projects/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
