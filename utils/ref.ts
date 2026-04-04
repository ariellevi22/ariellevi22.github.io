import { Ref } from "react";

/**
 * Combines multiple React ref values for use in a component's ref prop
 *
 * @param refs the refs to combine
 * @returns the combined refs
 */
export const mergeRefs = <T>(...refs: (Ref<T> | undefined)[]): Ref<T> => {
    if (refs.length > 1) {
        return (instance) => {
            const cleanups = refs.map((ref) => {
                if (ref) {
                    if (typeof ref === "function") {
                        return ref(instance);
                    } else {
                        ref.current = instance;
                    }
                }
            });

            return () => {
                cleanups.forEach((cleanup) => {
                    if (cleanup && typeof cleanup === "function") {
                        cleanup();
                    }
                });
            };
        };
    } else if (refs.length === 1) {
        return refs[0] ?? null;
    } else {
        return null;
    }
};
