import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/** The `children` prop for a React component */
export type ChildrenProps = {
    /** Content to place within the component */
    children?: React.ReactNode;
};

/** Template for the data of a navigation bar tab */
export type NavbarTab = {
    label: string;
    href: string;
    openWithNewTab?: boolean;
};

/** Template for the data of an icon tab or button */
export type IconTab = NavbarTab & {
    icon: IconDefinition;
    colorPrimary?: string;
    colorSecondary?: string;
};

/** Template for written content (consisting of a heading and body text) */
type Content = {
    heading: string;
    text: string;
};

/** Template for main and alternate formatting */
export type Format = {
    lightTheme: string;
    darkTheme?: string;
};

/** Base template for experience, education, and portfolio data types */
type Item = {
    id: string;
    logo: Format;
    color?: Format;
    photo: string;
};

/** Template for education data */
export type EducationItem = Item & {
    school: string;
    degree: string;
    majors?: string[];
    minors?: string[];
    graduationDate: string;
    classes: string[];
    additionalInfo?: Content[];
};

/** Template for experience data */
export type ExperienceItem = Item & {
    title: string;
    organization: string;
    organizationNote?: string;
    href: string;
    startDate: string;
    endDate?: string;
    location: string;
    responsibilities: string[];
    technologies?: string[];
};

/** Template for portfolio data */
export type PortfolioItem = Item & {
    title: string;
    description: string;
    technologies?: string[];
    website?: string;
    codeWebsite?: string;
};
