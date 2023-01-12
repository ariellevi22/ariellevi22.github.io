import { Format } from "../../../Types";

import personalWebsiteLogo from "./Logos/PersonalWebsite.svg";
import personalWebsiteLogoAlt from "./Logos/PersonalWebsiteAlt.svg";
import personalWebsitePhoto from "./Photos/PersonalWebsite.png";

import cookBookLogo from "./Logos/CookBook.svg";
import cookBookLogoAlt from "./Logos/CookBookAlt.svg";
import cookBookPhoto from "./Photos/CookBook.png";

import toGatherLogo from "./Logos/ToGather.svg";
import toGatherLogoAlt from "./Logos/ToGatherAlt.svg";
import toGatherPhoto from "./Photos/ToGather.png";

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
