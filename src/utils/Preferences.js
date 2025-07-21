import { getUserPreference } from "../api/preferenceServices";

export const hasPreferences = async (userId) => {
  try {
    const response = await getUserPreference(userId);
    const preference = response;

    const kategori = JSON.parse(preference?.categoryPreference || "[]");
    const deskripsi = preference?.descriptionPreference;
    const rating = preference?.RatePreference;

  const isValidPreferences =
    Array.isArray(kategori) &&
    kategori.length === 3 &&
    typeof deskripsi === "string" &&
    rating !== undefined &&
    rating !== null;

    return isValidPreferences;
  } catch (error) {
    console.error("❌ Error checking preferences:", error);
    return false;
  }
};
