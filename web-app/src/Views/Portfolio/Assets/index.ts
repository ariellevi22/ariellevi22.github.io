import { Format } from "../../../Types";

import PersonalWebsiteLogo from "./Logos/PersonalWebsite.svg";
import PersonalWebsiteLogoAlt from "./Logos/PersonalWebsiteAlt.svg";
import CookBookLogo from "./Logos/CookBook.svg";
import CookBookLogoAlt from "./Logos/CookBookAlt.svg";
import ToGatherLogo from "./Logos/ToGather.svg";
import ToGatherLogoAlt from "./Logos/ToGatherAlt.svg";

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

export { default as personalWebsitePhoto } from "./Photos/PersonalWebsite.png";
export { default as cookBookPhoto } from "./Photos/CookBook.png";
export { default as toGatherPhoto } from "./Photos/ToGather.png";
