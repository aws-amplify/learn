
/**
 * Helper function to capitalize enums coming from Amplify. 
 * @param {string | undefined} word Enum that needs to be capitalized
 * @returns The capitalized enum 
 */
export function capitalizeEnum(word: string | undefined) {
  if (word) {
    return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
}