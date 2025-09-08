import { generateLogoIconImageResponse } from "@/utils/image";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Generates an image response for the app's icon */
const Icon = () => generateLogoIconImageResponse(size.width, size.height);

export default Icon;

export const dynamic = "force-static";
