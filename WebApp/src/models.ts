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
 * Template for branding information (colors, photos, and logos)
 */
type Brand = {
    color?: string;
    colorAlternate?: string;
    logo: string;
    logoAlternate?: string;
    photo: string;
};

/**
 * Template for an organization (company or other group)
 */
export type Organization = Brand & {
    name: string;
    website: string;
};

/**
 * Template for a school
 */
export type School = Brand & {
    name: string;
};

/**
 * Base template for experience, education, and portfolio data types
 */
type Item = {
    id: string;
};

/**
 * Template for education data
 */
export type EducationItem = Item & {
    school: School;
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
    organization: Organization;
    startDate: string;
    endDate?: string;
    location: string;
    responsibilities: string[];
    technologies?: string[];
};

/**
 * Template for portfolio data
 */
export type PortfolioItem = Item &
    Brand & {
        title: string;
        description: string;
        technologies?: string[];
        website?: string;
        codeWebsite?: string;
    };
