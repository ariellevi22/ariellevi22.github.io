/**
 * Gets the current year
 *
 * @returns the current year
 */
export const getCurrentYear = () => {
    const today = new Date();
    return today.getFullYear();
};

/**
 * Formats a unit with the correct pluralization based on an amount,
 * like "unit" or "units"
 *
 * @param amount the amount
 * @param unitSingular the unit to display if the amount is 1
 * @param unitPlural the unit to display if the amount is not 1
 * @returns the correct unit based on the amount
 */
export const formatUnitForAmount = (
    amount: number,
    unitSingular: string,
    unitPlural: string
) => (amount === 1 ? unitSingular : unitPlural);
