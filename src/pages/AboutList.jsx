<<<<<<< HEAD
import AboutCard from "./AboutCard";
import teamMembers from "../data/teamMembers";
import "../styles/About.scss";
function AboutList() {
  return (
    <div className="about-background">
      <div className="about-section">
        <div className="team-section">
          {teamMembers.map((teamMember) => (
            <AboutCard key={teamMember.id} teamMember={teamMember} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutList;
=======
import AboutCard from "./AboutCard";
import teamMembers from "../data/teamMembers";
import "../styles/About.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function AboutList() {
  return (
    <div className="bg-gradient-to-b from-green-50 from-10% via-green-300 via-30% to green-400">
      <Navbar />
      <div className="about-section">
        <div className="team-section">
          {teamMembers.map((teamMember) => (
            <AboutCard key={teamMember.id} teamMember={teamMember} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutList;
>>>>>>> 0a67830f91aa90b1411fd08a7a6db83febdb079f
