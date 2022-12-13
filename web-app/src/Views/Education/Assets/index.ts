import { Format } from "../../../models";

import BvnLogo from "./Logos/BVN.svg";
import UnlLogo from "./Logos/UNL.svg";

import Bvn2019Photo from "./Photos/bvn-2019.jpg";
import Unl2023Photo from "./Photos/unl-2023.jpg";

/**
 * Education logos
 */
export const logos: { [index: string]: Format } = {
    unl: { lightTheme: UnlLogo },
    bvn: { lightTheme: BvnLogo },
};

/**
 * Education showcase photos
 */
export const photos: { [index: string]: string } = {
    unl2023: Unl2023Photo,
    bvn2019: Bvn2019Photo,
};
