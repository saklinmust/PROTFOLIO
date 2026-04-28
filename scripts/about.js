const aboutTabs = document.querySelectorAll(".tab");
const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
    if (aboutTabs) {
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        aboutTabs.forEach((a) => a.classList.remove("active"));
        tab.classList.add("active");

        aboutContent.forEach((c) => c.classList.remove("active"));

        document.getElementById(tab.dataset.section).classList.add("active");

        if (tab.dataset.section === "experience") {
            const experiences = document.querySelector(".experience-list");

            const experienceList = [{
                    id: 1,
                    date: "2025 - 2026",
                    position: "Frontend Developer",
                    company: "Mindstay Technology",
                    details: "Built responsive and optimized UIs using React.js and Tailwind CSS. Collaborated with backend teams to integrate APIs and improve user experience.",
                },
                {
                    id: 2,
                    date: "2024 - 2025",
                    position: "MERN Stack Intern",
                    company: "TechNova Solutions",
                    details: "Worked on full-stack web applications using the MERN stack. Gained hands-on experience in authentication, REST APIs, and MongoDB schemas.",
                },
                {
                    id: 3,
                    date: "2023 - 2024",
                    position: "Freelance Web Developer",
                    company: "Self-Employed",
                    details: "Developed custom websites for local businesses using HTML, CSS, JavaScript, and WordPress. Focused on performance, SEO, and mobile-first design.",
                },
            ];

            const experienceContent = experienceList
                .map((ele) => {
                    return `
            <div class="experience-box" key="${ele?.id}">
              <h4>${ele?.date}</h4>
              <h3>${ele?.position}</h3>

              <div class="company-name">
                <span></span>
                <p>${ele?.company}</p>
              </div>

              <p>${ele?.details}</p>
            </div>
        `;
                })
                .join("");

            if (experiences) {
                experiences.innerHTML = experienceContent;
            }
        } else if (tab.dataset.section === "education") {
            const education = document.querySelector(".education-list");

            const educationList = [{
                    id: 1,
                    date: "2025 - Present",
                    degree: "ITI-RAC(Refrigeration & Air Conditioning)",
                    institution: "Indian Training Institute, Barpeta",
                    details: "Pursuing technical training in refrigeration and air conditioning. Learning installation, maintenance, and repair of cooling systems.",
                },
                {
                    id: 2,
                    date: "2024 - Present",
                    degree: "Bachelor of Science (BSC)-Computer Science",
                    institution: "Madhab Choudury College, Barpeta",
                    details: "Studied core subjects like Data Structures, Web Development, and Operating Systems. Built multiple academic projects using JavaScript and the MERN stack.",
                },
                {
                    id: 3,
                    date: "2021 - 2023",
                    degree: "Higher Secondary Education (HSC - Science)",
                    institution: "Bhawanipur Higher Secondary School, Bhawanipur",
                    details: "Focused on Physics, Chemistry, and Mathematics. Developed a strong foundation in logical thinking and problem-solving.",
                },
                {
                    id: 4,
                    date: "2021 - 2022",
                    degree: "Diploma in Computer Application (DCA)",
                    institution: "Computer Dot Com Institute of Computer Education, Pathsala",
                    details: "Learned fundamental computer skills, including MS Office, basic programming, and internet usage. Completed projects on word processing and spreadsheet management.",
                },
                {
                    id: 5,
                    date: "2019 - 2021",
                    degree: "Secondary School Certificate (SSC)",
                    institution: "Paka Higher Secondary School, Fingua",
                    details: "Completed basic schooling with 1st Division . Actively participated in computer clubs and tech-related events.",
                },
            ];

            const educationContent = educationList
                .map((ele) => {
                    return `
            <div class="experience-box" key="${ele?.id}">
              <h4>${ele?.date}</h4>
              <h3>${ele?.degree}</h3>

              <div class="company-name">
                <span></span>
                <p>${ele?.institution}</p>
              </div>

              <p>${ele?.details}</p>
            </div>
        `;
                })
                .join("");

            if (education) {
                education.innerHTML = educationContent;
            }
        } else if (tab.dataset.section === "skills") {
            const skills = document.querySelector(".skill-list");

            const skillList = [{
                    id: 1,
                    name: "HTML - Hyper Text Markup Language",
                    icon: "assets/projects/skills/html.png",
                },
                {
                    id: 2,
                    name: "CSS - Cascading Style Sheet",
                    icon: "assets/projects/skills/css.png",
                },
                {
                    id: 3,
                    name: "JavaScript",
                    icon: "assets/projects/skills/js.png",
                },
                {
                    id: 4,
                    name: "MongoDB",
                    icon: "assets/projects/skills/mongodb.png",
                },
                {
                    id: 5,
                    name: "Bootstrap",
                    icon: "assets/projects/skills/bootstrap.png",
                },
                {
                    id: 6,
                    name: "Node JS",
                    icon: "assets/projects/skills/node.png",
                },
                {
                    id: 7,
                    name: "React JS",
                    icon: "assets/projects/skills/react.png",
                },
            ];

            const skillContent = skillList
                .map((ele) => {
                    return `
            <div class="skill-box" key=${ele?.id}>
              <img 
              src="${ele?.icon}"
              alt="${ele?.name}"
              title="${ele?.name}"
              loading="lazy"/>
            </div>
        `;
                })
                .join("");

            if (skills) {
                skills.innerHTML = skillContent;
            }
        } else if (tab.dataset.section === "about-me") {
            const myInfo = document.querySelector(".my-info");

            const infoList = [{
                    id: 1,
                    key: "Name : ",
                    value: "Coding Rocster",
                },
                {
                    id: 2,
                    key: "Country : ",
                    value: "India",
                },
                {
                    id: 3,
                    key: "Industry : ",
                    value: "Computer Science Student & IT Enthusiast",
                },
                {
                    id: 4,
                    key: "Experience : ",
                    value: "2+ years",
                },
                {
                    id: 5,
                    key: "Address : ",
                    value: "Fingua , Chaparbori , Barpeta , Assam-781352",
                },
            ];

            const infoContent = infoList
                .map((ele) => {
                    return `
            <div class="info-box" key=${ele?.id}>
              <span>${ele?.key}</span>
              <span>${ele?.value}</span>
            </div>
        `;
                })
                .join("");

            if (myInfo) {
                myInfo.innerHTML = infoContent;
            }
        }
    });
});