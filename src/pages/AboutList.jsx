import AboutCard from "./AboutCard";
import teamMembers from "../data/teamMembers";
import "../styles/About.scss";

function AboutList() {
  return (
    <div>
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
