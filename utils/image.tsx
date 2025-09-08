import LogoIcon from "@/components/logo-icon";
import { ImageResponse } from "next/og";

/**
 * Generates an image response for the app's logo icon
 *
 * @param width the width at which to render the icon
 * @param height the height at which to render the icon
 * @returns the image response
 */
export const generateLogoIconImageResponse = (
    width: number = 32,
    height: number = width
) =>
    new ImageResponse(
        (
            <div
                style={{
                    background: "#000000",
                    color: "#ffffff",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <LogoIcon
                    height={Math.round(Math.min(width, height) * 0.5)}
                    fill="#48cae4"
                />
            </div>
        ),
        { width, height }
    );
