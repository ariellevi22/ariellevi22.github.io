import "@emotion/react";
import { CSSProperties } from "react";

declare module "@emotion/react" {
    export interface Theme {
        type: "light" | "dark";
        colors: {
            accentPrimary: string;
            accentSecondary: string;
            accentNavigation: string;

            textPrimary: string;
            textSecondary: string;
            textNavigation: string;

            backgroundPrimary: string;
            backgroundSecondary: string;
            backgroundTertiary: string;
            backgroundNavigation: string;
            backgroundNavigationMenu: string;

            shadow: string;
        };
        transitionTime: number;
        transition: (...properties: (keyof CSSProperties)[]) => string;
    }
}
