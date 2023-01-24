import { getRecommendation } from "./logic/main.js";
import { ALTERNATIVES } from "./utils/questions.js";

const answers = [
    ALTERNATIVES.PLATFORM.DESKTOP,
    ALTERNATIVES.DATABASE_TYPE.LOCAL,
    ALTERNATIVES.COSTS.LOW,
    ALTERNATIVES.LARGE_WINGSPAN.SMALL,
    ALTERNATIVES.DB_MANAGEMENT.MANUAL,
    ALTERNATIVES.IU_DESIGN_TYPE.MODERN
];
const recommendation = getRecommendation(answers);
console.log(recommendation);