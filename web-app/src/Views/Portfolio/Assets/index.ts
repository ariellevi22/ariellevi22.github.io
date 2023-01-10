import { Format } from "../../../Types";

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
    logo: { lightTheme: cookBookLogo, darkTheme: cookBookLogoAlt },
    photo: cookBookPhoto,
};

export const personalWebsite: PortfolioAssetGroup = {
    logo: {
        lightTheme: personalWebsiteLogo,
        darkTheme: personalWebsiteLogoAlt,
    },
    photo: personalWebsitePhoto,
};

export const toGather: PortfolioAssetGroup = {
    logo: { lightTheme: toGatherLogo, darkTheme: toGatherLogoAlt },
    photo: toGatherPhoto,
};
