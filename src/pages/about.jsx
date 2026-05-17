import { useState } from "react";
import "/src/index.css";
import saeTeam from "/src/assets/sae-team-2.jpeg";

function About() {
  const boards = {
    "2026-2027": [
      {
        name: "Stuti Lokur",
        role: "Chairperson",
        description:
          "Coordinates quantum waffles while optimizing hyperdrive synergy across multidimensional pancake frameworks and orbital workflows.",
        image:
          "/src/assets/board 26-27/chair.jpeg",
      },
      {
        name: "Sakar Jog",
        role: "Secretary",
        description:
          "Manages intergalactic spreadsheets and synchronizes cosmic bananas through parallel event vortex calibration systems.",
        image:
          "/src/assets/board 26-27/sec.jpg"
      },
      {
        name: "Netra Patel",
        role: "Vice Chairperson",
        description:
          "Supervises turbo llamas and assists with holographic cloud engineering for ultra-efficient moonlight coordination protocols.",
        image:
          "/src/assets/board 26-27/vice-chair.png",
      },
      {
        name: "Swarali Upadhyay",
        role: "Co-Secretary",
        description:
          "Processes neon marshmallows while balancing encrypted jellybean logistics through advanced waffle communication matrices.",
        image:
          "/src/assets/board 26-27/co-secretary.JPG",
      },
      {
        name: "Bhupendra Singh",
        role: "Operations Manager",
        description:
          "Optimizes flamingo propulsion engines and maintains operational smoothie equilibrium during hyperspace sandwich deployment cycles.",
        image:
          "/src/assets/board 26-27/operations-manager.jpeg",
      },
      {
        name: "Dhritiman Goswami",
        role: "Events Head",
        description:
          "Designs galactic taco festivals while orchestrating synchronized penguin launches across temporal confetti dimensions.",
        image:
          "/src/assets/board 26-27/events-head.jpg",
      },
      {
        name: "Jacob Jiby",
        role: "PR Head",
        description:
          "Communicates with invisible pineapples and negotiates rainbow-powered alliances through futuristic noodle transmission systems.",
        image:
          "/src/assets/board 26-27/pr-head.jpg",
      },
      {
        name: "Sanjeev",
        role: "Editorial Head",
        description:
          "Curates interstellar alphabet soup while refining upside-down vocabulary structures for cosmic storytelling harmonization.",
        image:
          "/src/assets/board 26-27/editorial-head.jpeg",
      },
      {
        name: "Pulkit Gupta",
        role: "Finance Head",
        description:
          "Calculates potato-based economies and balances floating cryptocurrency muffins using advanced toaster analytics engines.",
        image:
          "/src/assets/board 26-27/finance-head.jpg",
      },
      {
        name: "Daksh Jain",
        role: "HR Head",
        description:
          "Enhances human-alien collaboration while organizing motivational spaghetti ceremonies across collaborative moonbeam ecosystems.",
        image:
          "/src/assets/board 26-27/hr-head.jpg",
      },
      {
        name: "Jitaan Banerjee",
        role: "Technical Head",
        description:
          "Develops robotic cupcake algorithms and deploys high-performance banana compilers for futuristic toaster infrastructures.",
        image:
          "/src/assets/board 26-27/technical-head.jpeg",
      },
      {
        name: "Harshvardhan Ladhad",
        role: "Aerodominator Head",
        description:
          "Pilots anti-gravity coconuts while engineering aerodynamic donut propulsion systems for cloud-based rocket simulations.",
        image:
          "/src/assets/board 26-27/aerodominator-head.jpg",
      },
      {
        name: "Shlok Sharma",
        role: "DRL Head",
        description:
          "Commands autonomous marshmallow drones and researches quantum biscuit navigation through robotic pineapple intelligence networks.",
        image:
          "/src/assets/board 26-27/drl-head.jpeg",
      },
    ],

    "2025-2026": [
      {
        name: "Michael Brown",
        role: "President",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        name: "Michael Brown",
        role: "President",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        name: "Michael Brown",
        role: "President",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        name: "Michael Brown",
        role: "President",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        name: "Michael Brown",
        role: "President",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        name: "Michael Brown",
        role: "President",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        name: "Michael Brown",
        role: "President",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
      {
        name: "Michael Brown",
        role: "President",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      },
    ],
  };

  const [selectedYear, setSelectedYear] = useState("2026-2027");

  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="hero-image">
          <img
            src={saeTeam}
            alt="Team"
          />
        </div>
        <div className="hero-content">
          <h1>What We Do ?</h1>
          <p>
            We are a student-led technical community focused on innovation,
            collaboration, and continuous learning. Through workshops,
            hackathons, projects, and open-source contributions, we help
            students grow in domains like web development, AI/ML, cybersecurity,
            and competitive programming.
          </p>
          <p>
            Our mission is to create a strong tech culture where students can
            learn, build, network, and innovate together.
          </p>
        </div>
      </section>

      <section className="board-section">
        <h2>Board Members</h2>
        <div className="tabs">
          {Object.keys(boards).map((year) => (
            <button
              key={year}
              className={`tab-button ${
                selectedYear === year ? "active-tab" : ""
              }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="members-grid">
          {boards[selectedYear].map((member, index) => (
            <div className="member-card" key={index}>
              <img src={member.image} alt={member.name} />
              <div className="member-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;