const projectList = [{
        id: 1,
        number: "01",
        title: "FullStack Thread Clone",
        description: "A complete social media platform clone built with MERN stack. Features user authentication, real-time posting, commenting, and liking functionality with a responsive UI.",
        techStack: ["MongoDB", "Express", "React", "Node"],
        image: "assets/projects/project1.webp",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 2,
        number: "02",
        title: "E-Commerce Platform",
        description: "Full-featured e-commerce website with product catalog, shopping cart, payment integration, and order management system built with React and Node.js backend.",
        techStack: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "assets/projects/project2.svg",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 3,
        number: "03",
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates, user assignments, due dates, and project organization features for teams.",
        techStack: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
        image: "assets/projects/project3.svg",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 4,
        number: "04",
        title: "Weather Dashboard",
        description: "Real-time weather application that displays current weather, forecasts, and detailed meteorological data with beautiful UI and smooth animations.",
        techStack: ["React", "Weather API", "Axios", "Chart.js"],
        image: "assets/projects/project4.svg",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 5,
        number: "05",
        title: "Portfolio Website",
        description: "Modern responsive portfolio website showcasing projects, skills, experience, and contact information with smooth animations and interactive elements.",
        techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        image: "assets/projects/project5.svg",
        liveLink: "#",
        githubLink: "#",
    },
];

const project = document.querySelector(".project");

let currentIndex = 0;

const renderProject = (index) => {
    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;
    const nextDisabled = currentIndex === projectList.length - 1;

    project.innerHTML = `
        <div class="project-info">
            <h3>${projectContent?.number}</h3>
            <h4>${projectContent?.title}</h4>
            <p>
            ${projectContent?.description}
            </p>
            <div class="tech-stack">
                ${projectContent?.techStack
                  ?.map((tech, i) => {
                    return `<span key=${i}>${tech}</span>`;
                  })
                  .join("")}
            </div>       
            <hr />
            <div class="links">
              <a href="${projectContent?.liveLink}">
                <i class="ph ph-arrow-right"></i>
              </a>
              <a href="${projectContent?.githubLink}">
                <i class="ph ph-github-logo"></i>
              </a>
            </div>
          </div>

          <div class="carousel">
            <img 
                src="${projectContent?.image}" 
                alt="${projectContent?.title}" 
            />

            <div class="arrows">
              <a href="#" id="previous" class='${
                previousDisabled ? "disabled-btn" : ""
              }'>
                <i class="ph ph-caret-left"></i>
              </a>
              <a href="#" id="next" class='${
                nextDisabled ? "disabled-btn" : ""
              }'>
                <i class="ph ph-caret-right"></i>
              </a>
            </div>
          </div>
  `;

    document.getElementById("previous").addEventListener("click", (e) => {
        e.preventDefault();

        if (currentIndex > 0) {
            currentIndex--;
            renderProject(currentIndex);
        }
    });

    document.getElementById("next").addEventListener("click", (e) => {
        e.preventDefault();

        if (currentIndex < projectList.length - 1) {
            currentIndex++;
            renderProject(currentIndex);
        }
    });
};

renderProject(currentIndex);