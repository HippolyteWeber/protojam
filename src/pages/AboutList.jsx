import AboutCard from "./AboutCard";
import teamMembers from "../data/teamMembers";
import "../styles/About.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function AboutList() {
  return (
    <div className="about-background">
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
