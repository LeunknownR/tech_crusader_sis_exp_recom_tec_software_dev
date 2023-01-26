import getRecommendedTechnologies from "./getRecommendedTechnologies.js";

/**
 * @param {string[]} answers - Respuestas del usuario
 * @returns {string}
 */
export const getRecommendation = answers => {
    const recommendedTechnologies = getRecommendedTechnologies(answers);
    return recommendedTechnologies;
}