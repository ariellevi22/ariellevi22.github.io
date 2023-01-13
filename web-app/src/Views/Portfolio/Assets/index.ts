import { Format } from "../../../Types";

import PersonalWebsiteLogo from "./Logos/PersonalWebsite.svg";
import PersonalWebsiteLogoAlt from "./Logos/PersonalWebsiteAlt.svg";
import PersonalWebsitePhoto from "./Photos/PersonalWebsite.png";

import CookBookLogo from "./Logos/CookBook.svg";
import CookBookLogoAlt from "./Logos/CookBookAlt.svg";
import CookBookPhoto from "./Photos/CookBook.png";

import ToGatherLogo from "./Logos/ToGather.svg";
import ToGatherLogoAlt from "./Logos/ToGatherAlt.svg";
import ToGatherPhoto from "./Photos/ToGather.png";

export const personalWebsiteLogo: Format = {
    lightTheme: PersonalWebsiteLogo,
    darkTheme: PersonalWebsiteLogoAlt,
};
export const cookBookLogo: Format = {
    lightTheme: CookBookLogo,
    darkTheme: CookBookLogoAlt,
};
export const toGatherLogo: Format = {
    lightTheme: ToGatherLogo,
    darkTheme: ToGatherLogoAlt,
};

export const personalWebsitePhoto = PersonalWebsitePhoto;
export const cookBookPhoto = CookBookPhoto;
export const toGatherPhoto = ToGatherPhoto;
