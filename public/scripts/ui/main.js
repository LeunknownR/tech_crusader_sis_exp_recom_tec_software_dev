import { getRecommendation } from "../logic/main.js";
import { QUESTIONS } from "../utils/questions.js";
import { 
    initMembers
} from "./members-animation.js";
import templates from "./templates.js";

const initQuestionary = () => {
    const $questionaryContent = document.querySelector("#questionary .content");
    $questionaryContent.innerHTML = templates.getQuestions(QUESTIONS);
}
const $questionaryForm = document.querySelector("#questionary form");
const $recomendations = document.querySelector("#recommendation");
const $questionaryWrapper = document.querySelector("#questionary-wrapper");
const processAnswers = () => {
    // Obteniendo respuestas
    const $alternatives = [...document.querySelectorAll(".alternative")];
    const answers = $alternatives
        .filter($alternative => $alternative.querySelector("input").checked)
        .map($alternative => $alternative.htmlFor);
    // Procesando respuestas
    const technologies = getRecommendation(answers);
    // Mostrando respuestas
    $recomendations.querySelector("ul").innerHTML = templates.getTechnologies(technologies);
    $recomendations.classList.add("active");
    $questionaryWrapper.classList.remove("active");
}
const answersCompleted = () => {
    const $questions = [...document.querySelectorAll(".question")];
    return $questions.every($question => {
        return [...$question.querySelectorAll(".alternative")].some($alternative => {
            return $alternative.querySelector("input").checked;
        });
    });
}
const notClearedForm = () => {
    const $questions = [...document.querySelectorAll(".question")];
    return $questions.some($question => {
        return [...$question.querySelectorAll(".alternative")].some($alternative => {
            return $alternative.querySelector("input").checked;
        });
    });
}
const initButtons = () => {
    $questionaryForm.addEventListener("submit", e => e.preventDefault());
    const [$processBtn, $clearBtn] = document.querySelectorAll("#btn-process, #btn-clear");
    // Procesar
    $processBtn.addEventListener("click", processAnswers);
    setInterval(() => {
        $processBtn.disabled = !answersCompleted();
    }, 100);
    // Limpiar
    $clearBtn.addEventListener("click", () => $questionaryForm.reset());
    setInterval(() => {
        $clearBtn.disabled = !notClearedForm();
    }, 100);
    initButtonBackToForm();
}
const initButtonBackToForm = () => {
    document.querySelector("#btn-back-to-form").addEventListener("click", () => {
        $questionaryForm.reset();
        $questionaryWrapper.classList.add("active");
        $recomendations.classList.remove("active");
    });
}
const initIntro = () => {
    const $intro = document.querySelector("#intro");
    $intro.classList.add("active");
    setTimeout(() => {
        $intro.classList.remove("active");
    }, 2000);
}

export const initUI = () => {
    initMembers();
    initQuestionary();
    initButtons();
    initIntro();
}