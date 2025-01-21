
import './app.css'

const timelineItemsList = [
  
  {
    id: 'a19d93d6-bdac-479e-b554-974ef9e6e66c',
    categoryId: 'PROJECT',
    title: '21 SEPTEMBER 2023',
    projectTitle: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    duration: '1 hr',
    projectUrl: 'https://adityastaticweb.ccbp.tech/',
  },

  {
    id: 'ae2ede68-af77-427c-817c-0ce4beeb69c7',
    categoryId: 'PROJECT',
    title: '7 NOVEMBER 2023',
    projectTitle: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    duration: '2 hrs',
    projectUrl: 'https://adiresponsive.ccbp.tech/',
  },
  {
    id: 'd6c4b3a5-7b1d-4906-aca8-823f44129004',
    categoryId: 'PROJECT',
    title: '6 FEBRUARY 2024',
    projectTitle: 'Todos Application',
    description:
      'This app helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png',
    duration: '3 hrs',
    projectUrl: 'https://adidynamicapp.ccbp.tech/',
  },
  {
    id: '0a35abbe-22ca-40a1-81da-613f656b7702',
    categoryId: 'PROJECT',
    title: '15 FEBRUARY 2024',
    projectTitle: 'Wikipedia Search Application',
    description:
      'Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png',
    duration: '4 hrs',
    projectUrl: 'https://ccbpadiwiki.ccbp.tech/',
  },
  
  {
    id: '7bc3f006-f0f1-4574-924b-17c480556727',
    categoryId: 'PROJECT',
    title: '20 MARCH 2024',
    projectTitle: 'Move Messenger',
    description:
      'The landing page of Move Messenger gives you a brief intro of Move Messenger. The landing page is responsive enabling to view it across various devices.',
    imageUrl:
      'https://assets.ccbp.in/frontend/intermediate-rwd/move-messenger-img.png',
    duration: '5 hr',
    projectUrl: 'https://movemessengers.ccbp.tech/',
  },
  {
    id: 'e681e826-260c-4540-9ee5-f53d0e6ecba0',
    categoryId: 'COURSE',
    title: '30 APRIL 2024',
    courseTitle: 'React JS - Getting Started',
    description:
      'Learn how to build dynamic web applications with the React JS library. When you finish this course, you will be comfortable in creating a modern, clean, and maintainable application in React JS, from scratch.',
    duration: '18 days',
    tagsList: [
      {
        id: '94947ad2-f768-11eb-9a03-0242ac130003',
        name: 'Components',
      },
      {
        id: '94947d52-f768-11eb-9a03-0242ac130003',
        name: 'Lists',
      },
      {
        id: '94947e4c-f768-11eb-9a03-0242ac130003',
        name: 'Conditional Rendering',
      },
      {
        id: '94947f14-f768-11eb-9a03-0242ac130003',
        name: 'setState()',
      },
      {
        id: '94948270-f768-11eb-9a03-0242ac130003',
        name: 'Updating Phase',
      },
      {
        id: '94948342-f768-11eb-9a03-0242ac130003',
        name: 'Routing',
      },
      {
        id: '94948400-f768-11eb-9a03-0242ac130003',
        name: 'API Calls',
      },
    ],
  },
  {
    id: 'e093c08a-a2ae-413a-814b-e7c83f5f2ac3',
    categoryId: 'PROJECT',
    title: '26 AUGEST 2024',
    projectTitle: 'Nxt Trendz',
    description:
      'Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png',
    duration: '6 hrs',
    projectUrl: 'https://adinxtmart.ccbp.tech/',
  },
]


const groupProjectsByYear = (projects) => {
  return projects.reduce((acc, project) => {
    const year = new Date(project.title).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {});
};

const Projects = () => {
  const projects = timelineItemsList.filter(
    (item) => item.categoryId === 'PROJECT'
  );
  const groupedProjects = groupProjectsByYear(projects);

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      {Object.keys(groupedProjects)
        .sort((a, b) => a - b)
        .map((year) => (
          <div key={year} className="projects-year-group">
            <h2 className="year-title">{year}</h2>
            <div className="projects-list">
              {groupedProjects[year].map((project) => (
                <div key={project.id} className="project-card">
                  <img style={{borderRadius:"0px",background:"cover"}}
                    src={project.imageUrl}
                    alt={project.projectTitle}
                    className="project-image"
                  />
                  <div className="project-details">
                    <h3 className="project-title">{project.projectTitle}</h3>
                    <p className="project-description">{project.description}</p>
                    <p className="project-duration">
                      Duration: {project.duration}
                    </p>
                    <a
                      href={project.projectUrl}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Projects;