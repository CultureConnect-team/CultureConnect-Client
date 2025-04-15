import { getUserPreference } from "../api/preferenceServices";

export const hasPreferences = async (userId) => {
  try {
    const response = await getUserPreference(userId);
    const preference = response.data;

    const kategori = JSON.parse(preference?.categoryPreference || "[]");
    const uniqueCategories = [...new Set(kategori)];

    const isValidPreferences =
      Array.isArray(kategori) &&
      uniqueCategories.length === 3 &&
      preference?.descriptionPreference &&
      preference?.RatePreference !== undefined &&
      preference?.RatePreference !== null;

    return isValidPreferences;
  } catch (error) {
    console.error("Error checking preferences:", error);
    return false;
  }
};
