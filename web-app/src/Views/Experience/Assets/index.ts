import { Format } from "../../../models";

import EvergyLogo from "./Logos/Evergy.svg";
import EvergyLogoAlt from "./Logos/EvergyAlt.svg";
import GarminLogo from "./Logos/Garmin.svg";
import GarminLogoAlt from "./Logos/GarminAlt.svg";
import NelnetLogo from "./Logos/Nelnet.svg";
import NelnetLogoAlt from "./Logos/NelnetAlt.svg";
import ZoomLogo from "./Logos/Zoom.svg";
import ZoomLogoAlt from "./Logos/ZoomAlt.svg";

import NelnetDesignStudio2022Photo from "./Photos/nelnet-design-studio-2022.jpg";
import Garmin2022Photo from "./Photos/garmin-2022.jpg";
import NelnetDesignStudio2021Photo from "./Photos/nelnet-design-studio-2021.png";
import Evergy2021Photo from "./Photos/evergy-2021.jpg";
import Zoom2020Photo from "./Photos/zoom-2020.jpg";

/**
 * Experience logos
 */
export const logos: { [index: string]: Format } = {
    evergy: { lightTheme: EvergyLogo, darkTheme: EvergyLogoAlt },
    garmin: { lightTheme: GarminLogo, darkTheme: GarminLogoAlt },
    nelnet: { lightTheme: NelnetLogo, darkTheme: NelnetLogoAlt },
    zoom: { lightTheme: ZoomLogo, darkTheme: ZoomLogoAlt },
};

/**
 * Experience showcase photos
 */
export const photos: { [index: string]: string } = {
    nelnetDesignStudio2022: NelnetDesignStudio2022Photo,
    garmin2022: Garmin2022Photo,
    nelnetDesignStudio2021: NelnetDesignStudio2021Photo,
    evergy2021: Evergy2021Photo,
    zoom2020: Zoom2020Photo,
};
