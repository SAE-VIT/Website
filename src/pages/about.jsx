import { useEffect, useState } from "react";
import "/src/index.css";
import naijuCdImg from "/src/assets/faculties/naiju cd.png";
import senthilKumarMImg from "/src/assets/faculties/senthil kumar m.png";
import gokulKumarKImg from "/src/assets/faculties/gokul kumar k.png";
import chairImg from "/src/assets/board 26-27/chair.jpeg";
import secImg from "/src/assets/board 26-27/sec.jpg";
import viceChairImg from "/src/assets/board 26-27/vice-chair.png";
import coSecretaryImg from "/src/assets/board 26-27/co-secretary.jpg";
import operationsManagerImg from "/src/assets/board 26-27/operations-manager.jpeg";
import eventsHeadImg from "/src/assets/board 26-27/events-head.jpg";
import prHeadImg from "/src/assets/board 26-27/pr-head.jpg";
import editorialHeadImg from "/src/assets/board 26-27/editorial-head.jpeg";
import financeHeadImg from "/src/assets/board 26-27/finance-head.jpg";
import hrHeadImg from "/src/assets/board 26-27/hr-head.jpg";
import technicalHeadImg from "/src/assets/board 26-27/technical-head.jpeg";
import aerodominatorHeadImg from "/src/assets/board 26-27/aerodominator-Head.jpg";
import drlHeadImg from "/src/assets/board 26-27/drl-head.jpeg";
import khushIMg from "/src/assets/board 25-26/khush.jpeg";
import paramImg from "/src/assets/board 25-26/param.jpg";
import aayushImg from "/src/assets/board 25-26/aayush.jpeg";
import srinjayImg from "/src/assets/board 25-26/srinjay.jpeg";
import shlokeImg from "/src/assets/board 25-26/shloke.jpeg";
import tavishaImg from "/src/assets/board 25-26/tavisha.jpeg";
import anujImg from "/src/assets/board 25-26/anuj.jpeg";
import abhinavImg from "/src/assets/board 25-26/abhinav.jpeg";
import { MdEmail } from "react-icons/md";
import {
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function About() {
  const facultyCoordinators = [
    { name: "Dr. Naiju CD", position: "Professor Higher Academic Grade", school: "School of Mechanical Engineering", note: "Guiding the SAE-VIT student chapter.", image: naijuCdImg, email: "faculty@vit.ac.in", linkedin: "https://www.linkedin.com/" },
    { name: "Dr. Senthil Kumar M", position: "Associate Professor Grade 2", school: "School of Mechanical Engineering", note: "Supporting student-led automotive innovation.", image: senthilKumarMImg, email: "faculty@vit.ac.in", linkedin: "https://www.linkedin.com/" },
    { name: "Dr. Gokul Kumar K", position: "Professor Grade 1", school: "School of Mechanical Engineering", note: "Mentoring the chapter's technical and professional growth.", image: gokulKumarKImg, email: "faculty@vit.ac.in", linkedin: "https://www.linkedin.com/" },
  ];

  const boards = {
    "2026-2027": [
      {
        name: "Stuti Lokur",
        role: "Chairperson",
        description:
          "Coordinates quantum waffles while optimizing hyperdrive synergy across multidimensional pancake frameworks and orbital workflows.",
        image: chairImg,
        email:"stutislokur@gmail.com",
        linkedin:"",
        github:"https://www.linkedin.com/in/stutilokur/",
      },
      {
        name: "Sakar Jog",
        role: "Secretary",
        description:
          "Manages intergalactic spreadsheets and synchronizes cosmic bananas through parallel event vortex calibration systems.",
        image: secImg,
        email:"",
        linkedin:"https://www.linkedin.com/in/sakar-jog-a2724b218/",
        github:"",
      },
      {
        name: "Netra Patel",
        role: "Vice Chairperson",
        description:
          "Supervises turbo llamas and assists with holographic cloud engineering for ultra-efficient moonlight coordination protocols.",
        image: viceChairImg,
        email:"netrapatel155@gmail.com",
        linkedin:"http://linkedin.com/in/netra-patel-117357349/",
        github:"https://github.com/Netra1505",
      },
      {
        name: "Swarali Upadhyay",
        role: "Co-Secretary",
        description:
          "Processes neon marshmallows while balancing encrypted jellybean logistics through advanced waffle communication matrices.",
        image: coSecretaryImg,
        email:"swaraliupd@gmail.com",
        linkedin:"https://www.linkedin.com/in/swarali-upadhyay-174582321/",
        github:"https://github.com/SwaraliUpadhyay",
      },
      {
        name: "Bhupendra Singh",
        role: "Operations Manager",
        description:
          "Optimizes flamingo propulsion engines and maintains operational smoothie equilibrium during hyperspace sandwich deployment cycles.",
        image: operationsManagerImg,
        email:"sbhupendra1107@gmail.com",
        linkedin:"https://grabcad.com/bhupendra.singh-46",
        github:"https://www.linkedin.com/in/bhupendra-singh-mech/",
      },
      {
        name: "Dhritiman Goswami",
        role: "Events Head",
        description:
          "Designs galactic taco festivals while orchestrating synchronized penguin launches across temporal confetti dimensions.",
        image: eventsHeadImg,
        email:"dhritimangoswami05@gmail.com",
        linkedin:"https://www.linkedin.com/in/dhritiman-goswami",
        github:"https://github.com/dhritimangoswami05",
      },
      {
        name: "Jacob Jiby",
        role: "PR Head",
        description:
          "Communicates with invisible pineapples and negotiates rainbow-powered alliances through futuristic noodle transmission systems.",
        image: prHeadImg,
        email:"jacobjibi21@gmail.com",
        linkedin:"https://github.com/jackisdum",
        github:"https://www.linkedin.com/in/thejacobjiby/",
      },
      {
        name: "Sanjeev",
        role: "Editorial Head",
        description:
          "Curates interstellar alphabet soup while refining upside-down vocabulary structures for cosmic storytelling harmonization.",
        image: editorialHeadImg,
        email:"⁠sanjeevasaurus@gmail.com",
        linkedin:"https://www.linkedin.com/in/sanjeev-p-bb768231b/",
        github:"https://github.com/sanjeevasaurus",
      },
      {
        name: "Pulkit Gupta",
        role: "Finance Head",
        description:
          "Calculates potato-based economies and balances floating cryptocurrency muffins using advanced toaster analytics engines.",
        image: financeHeadImg,
        email:"pulkitgupta51734@gmail.com",
        linkedin:"www.linkedin.com/in/pulkit-gupta-oct20",
        github:"https://github.com/pulkitgupta51734",
      },
      {
        name: "Daksh Jain",
        role: "HR Head",
        description:
          "Enhances human-alien collaboration while organizing motivational spaghetti ceremonies across collaborative moonbeam ecosystems.",
        image: hrHeadImg,
        email:"dakshjain2405@gmail.com",
        linkedin:"www.linkedin.com/in/daksh-jain-842b94385",
        github:"http://github.com/daksh2405",
      },
      {
        name: "Jitaan Banerjee",
        role: "Technical Head",
        description:
          "Develops robotic cupcake algorithms and deploys high-performance banana compilers for futuristic toaster infrastructures.",
        image: technicalHeadImg,
        email:"jitaanbanerjee@gmail.com",
        linkedin:"https://www.linkedin.com/in/jitaan",
        github:"https://github.com/Jitaan",
      },
      {
        name: "Harshvardhan Ladhad",
        role: "Aerodominator Head",
        description:
          "Pilots anti-gravity coconuts while engineering aerodynamic donut propulsion systems for cloud-based rocket simulations.",
        image: aerodominatorHeadImg,
        email:"",
        linkedin:"https://www.linkedin.com/in/harshvardhan-ladhad-40193a313/",
        github:"",
      },
      {
        name: "Shlok Sharma",
        role: "DRL Head",
        description:
          "Commands autonomous marshmallow drones and researches quantum biscuit navigation through robotic pineapple intelligence networks.",
        image: drlHeadImg,
        email:"shloksharma710@gmail.com",
        linkedin:"https://www.linkedin.com/in/shlok-sharma7/",
        github:"https://github.com/Shlok107",
      },
    ],

    "2025-2026": [
      {
        name: "Khush Patel",
        role: "Chairperson",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          khushIMg,
      },
      {
        name: "Param Kamat",
        role: "Secretary",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          paramImg,
      },
      {
        name: "Aayush Nambiar",
        role: "Vice-Chairperson",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          aayushImg,
      },
      {
        name: "Stuti Lokur",
        role: "Co-Secretary",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          chairImg,
      },
      {
        name: "Sakar Jog",
        role: "Operations Manager",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          secImg,
      },
      {
        name: "Srinjay Das",
        role: "Events Head",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          srinjayImg,
      },
      {
        name: "Shloke Binani",
        role: "PR Head",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          shlokeImg,
      },
      {
        name: "Tavisha Anand",
        role: "Editorial Head",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          tavishaImg,
      },
      {
        name: "Anuj Tiwari",
        role: "Finance Head",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          anujImg,
      },
      {
        name: "Abhinav Aligeti",
        role: "HR Head",
        description:
          "Managed organizational growth and strategic planning.",
        image:
          abhinavImg,
      },
    ],
  };

  const [selectedYear, setSelectedYear] = useState("2026-2027");

  useEffect(() => {
    const revealItems = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -80px",
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      <section className="faculty-section scroll-reveal px-6" aria-labelledby="faculty-title">
        <div className="event-title-wrap reveal-child">
          <h2 id="faculty-title">Faculty Coordinators</h2>
        </div>

        <div className="faculty-grid">
          {facultyCoordinators.map((faculty, index) => (
            <div className="member-card reveal-child" key={faculty.name} style={{ "--reveal-delay": `${index * 90}ms` }}>
              <img src={faculty.image} alt={faculty.name} />
              <div className="member-info">
                <h3>{faculty.name}</h3>
                <h4>{faculty.position}</h4>
                <div className="about-socials member-socials">
                  <a href={`mailto:${faculty.email}`} aria-label={`Email ${faculty.name}`}><MdEmail /></a>
                  <a href={faculty.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${faculty.name} on LinkedIn`}><FaLinkedin /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="board-section scroll-reveal px-6 ">
        <div className="event-title-wrap reveal-child">
          <h2 className="reveal-child font-bold">Board Members</h2>
        </div>
        <div className="tabs reveal-child" style={{ "--reveal-delay": "90ms" }}>
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
            <div
              className="member-card reveal-child"
              key={index}
              style={{ "--reveal-delay": `${(index % 4) * 90}ms` }}
            >
              <img src={member.image} alt={member.name} />
              <div className="member-info">
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <div className="about-socials member-socials">
                  <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer"> <MdEmail /> </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer"> <FaLinkedin /> </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer"> <FaGithub /> </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
