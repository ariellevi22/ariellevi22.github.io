import { Format } from "../../../models";

import personalWebsiteLogo from "./PersonalWebsite/Logo.svg";
import personalWebsiteLogoAlt from "./PersonalWebsite/LogoAlt.svg";
import personalWebsitePhoto from "./PersonalWebsite/Photo.png";

import cookBookLogo from "./CookBook/Logo.svg";
import cookBookLogoAlt from "./CookBook/LogoAlt.svg";
import cookBookPhoto from "./CookBook/Photo.png";

import toGatherLogo from "./ToGather/Logo.svg";
import toGatherLogoAlt from "./ToGather/LogoAlt.svg";
import toGatherPhoto from "./ToGather/Photo.png";

type PortfolioAssetGroup = { logo: Format; photo: string };

export const cookBook: PortfolioAssetGroup = {
    logo: { main: cookBookLogo, alternate: cookBookLogoAlt },
    photo: cookBookPhoto,
};

export const personalWebsite: PortfolioAssetGroup = {
    logo: { main: personalWebsiteLogo, alternate: personalWebsiteLogoAlt },
    photo: personalWebsitePhoto,
};

export const toGather: PortfolioAssetGroup = {
    logo: { main: toGatherLogo, alternate: toGatherLogoAlt },
    photo: toGatherPhoto,
};
