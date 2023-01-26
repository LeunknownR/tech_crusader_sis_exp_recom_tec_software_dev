
/**
 * @param {string[]} answers - Respuestas del usuario
 * @returns {string[]}
 */
export default class HandlerTechnologies {
    /**
     * @type {String[]} this.#technologies
     */
    #technologies;
    /**
     * @param {String[]} answers - Respuestas del usuario
     */
    constructor(answers) {
        this.#technologies = [];
        this.answers = answers;
    }
    #exists = (probablyTechnologies) => {
        return this.#technologies.some(technology => probablyTechnologies.includes(technology));
    }
    /**
     * @param {String[]} probablyTechnologies - Tecnologías probables
     */
    add = probablyTechnologies => {
        if (this.#exists(probablyTechnologies)) return;
        this.#technologies = [...this.#technologies, ...probablyTechnologies]
    }
    /**
     * @param {String[]} probablyTechnologies - Tecnologías probables
     */
    remove = probablyTechnologies => {
        this.#technologies = this.#technologies.filter(technology => !probablyTechnologies.includes(technology))
    }
    /**
     * @param {String} alternative - Alternativa que podría haber sido respondida
     */
    wasAnswered = alternative => {
        return this.answers.includes(alternative);
    }
    getTechnologies = () => {
        return this.#technologies;
    }
}