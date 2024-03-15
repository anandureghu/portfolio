export interface IEducation {
  institution: string; // Name of the educational institution
  location: string; // Location of the institution
  course: string; // Level of education (e.g., SSLC, High School, etc.)
  startingYear: number; // Year education started
  endYear: number; // Year education ended
  mark: number; // Grade/mark achieved
  markType: string; // Type of grade/mark (e.g., percentage, GPA, etc.)
}

export interface IWork {
  organization: string; // Name of the organization
  designation: string; // Designation in the organization
  startingYear: number; // Year education started
  endYear: number | null; // Year education ended
  logo: string; // Logo of the organization
  link?: string; // Link of organization website
}
