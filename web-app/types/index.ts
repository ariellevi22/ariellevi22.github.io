import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { StaticImageData } from "next/image";

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

/** Base template for experience, education, and portfolio data types */
type Item = {
    id: string;
    logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    color?: { light: string; dark?: string };
    photo: StaticImageData | string;
    photoPosition?: string;
};

/** Template for education data */
export type EducationItem = Item & {
    school: string;
    href: string;
    degree: string;
    majors?: string[];
    minors?: string[];
    graduationDate: string;
    details?: string[];
    classes?: string[];
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
    responsibilities?: string[];
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
