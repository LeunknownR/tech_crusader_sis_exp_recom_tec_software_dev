const templates = {
    getQuestions: questions => {
        return Object.entries(questions).reduce((questionsStr, [questionId, { question, alternatives }]) => /* html */`
            ${questionsStr}
            <div class="question">
                <h2>${question}</h2>
                <div class="alternatives-container">
                    ${alternatives.reduce((alternativesStr, { id, name }) => /* html */`
                        ${alternativesStr}
                        <label for=${id} class="alternative">
                            ${name}
                            <input type="radio" name=${questionId} id="${id}" />
                            <span class="checkmark"></span>
                        </label>
                    `, "")}
                </div>
            </div>
        `, "");
    },
    getTechnologies: technologies => {
        return technologies.reduce((technologiesStr, technology) => {
            return /* html */`
                ${technologiesStr}
                <li>${technology}</li>
            `;
        }, "");
    }
};

export default templates;