import "react";

declare module "react" {
    interface CSSProperties {
        // Extend CSSProperties to allow setting CSS variables
        [key: `--${string}`]: string | number | undefined;
    }
}
