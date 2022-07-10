import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

/**
 * Types of all possible React `children` props
 */
export type ReactChildren =
    | React.ReactElement
    | React.ReactElement[]
    | React.ReactNode
    | React.ReactNode[]
    | JSX.Element
    | JSX.Element[];

/**
 * Template for the data of a navigation bar tab
 */
export type NavbarTab = {
    label: string;
    href: string;
    openWithNewTab?: boolean;
};

/**
 * Template for the data of an icon tab or button
 */
export type IconTab = NavbarTab & {
    icon: IconDefinition;
    colorPrimary?: string;
    colorSecondary?: string;
};

/**
 * Template for written content (consisting of a heading and body text)
 */
type Content = {
    heading: string;
    text: string;
};

/**
 * Base template for experience, education, and portfolio data types
 */
type Item = {
    id: string;
    color?: string;
    colorAlt?: string;
    logo: string;
    logoAlt?: string;
    photo: string;
};

/**
 * Template for education data
 */
export type EducationItem = Item & {
    school: string;
    location: string;
    degree: string;
    majors?: string[];
    minors?: string[];
    graduationDate: string;
    classes: string[];
    additionalInfo?: Content[];
};

/**
 * Template for experience data
 */
export type ExperienceItem = Item & {
    title: string;
    companyName: string;
    startDate: string;
    endDate?: string;
    location: string;
    responsibilities: string[];
    technologies?: string[];
    companyWebsite: string;
};

/**
 * Template for portfolio data
 */
export type PortfolioItem = Item & {
    title: string;
    description: string;
    technologies?: string[];
    website?: string;
    codeWebsite?: string;
};
