import { IEducation, IProject, IWork } from "./types";

export const PROJECT_TAGS = {
  reactJs: "ReactJs",
  nodeJs: "Node.js",
  go: "Go",
  javaScript: "JavaScript",
  fun: "Fun",
};

export const PROJECT_TYPE = {
  frontEnd: "Front End",
  backEnd: "Back End",
  cli: "CLI",
};

export const educationList: IEducation[] = [
  {
    institution: "Government Polytechnic College",
    location: "Kalamassery",
    course: "Diploma in Computer Engineering",
    startingYear: 2021,
    endYear: 2018,
    mark: 8.05,
    markType: "CGPA",
  },
  {
    institution: "Asram HSS",
    location: "Perumbavoor",
    course: "Higher Secondary",
    startingYear: 2016,
    endYear: 2018,
    mark: 80,
    markType: "%",
  },
  {
    institution: "Jayakeralam HSS",
    location: "Pulluvazhy",
    course: "SSLC",
    startingYear: 2016,
    endYear: 2016,
    mark: 98,
    markType: "%",
  },
];

export const workList: IWork[] = [
  {
    organization: "QBurst Technologies",
    designation: "Software Engineer",
    startingYear: 2021,
    endYear: null,
    logo: "https://static-cdn.qburst.com/5-4-6/images/responsive/QBurstlogo.svg",
    link: "https://qburst.com",
  },
];

export const projects: IProject[] = [
  {
    title: "Hyper Mail",
    type: "Front End",
    tags: ["React.js", "JavaScript"],
    description: "",
    productionLink: "",
    sourceCodeLink: "",
    imageUrl: "/assets/images/projects/hypermail.jpg",
  },
  {
    title: "Hyper Mail",
    type: "Back End",
    tags: ["Node.js", "JavaScript"],
    description: "",
    productionLink: "",
    sourceCodeLink: "https://github.com/anandureghu/hypermail/tree/develop",
    imageUrl: "/assets/images/projects/hypermail.jpg",
  },
  {
    title: "Line-x",
    type: "CLI",
    tags: ["Go"],
    description: "",
    productionLink: "https://snapcraft.io/linex",
    sourceCodeLink: "",
    imageUrl: "/assets/images/projects/linex.png",
  },
  {
    title: "CocktailsDB",
    type: "Front End",
    tags: ["React.js"],
    description: "",
    productionLink: "https://react-cocktails-db.netlify.app/",
    sourceCodeLink: "https://github.com/anandureghu/cocktailsdb",
    imageUrl: "/assets/images/projects/cocktailsdb.png",
  },
];
