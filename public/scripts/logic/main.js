/**
 * @param {string[]} answers - Respuestas del usuario
 * @returns {string[]}
 */
const getTechnologies = answers => {
    return [];
}
/**
 * @param {string[]} technologies - Respuestas del usuario
 * @returns {string}
 */
const interpretTechnologies = technologies => {
    return "";
}
/**
 * @param {string[]} answers - Respuestas del usuario
 * @returns {string}
 */
export const getRecommendation = answers => {
    const technologies = getTechnologies(answers);
    return interpretTechnologies(technologies);
}