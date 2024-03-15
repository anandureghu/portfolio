import { IEducation, IWork } from "./types";

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
