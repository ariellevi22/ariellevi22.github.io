import { generateLogoIconImageResponse } from "@/utils/image";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Generates an image response for the app's apple-touch-icon */
const AppleIcon = () => generateLogoIconImageResponse(size.width, size.height);

export default AppleIcon;

export const dynamic = "force-static";
