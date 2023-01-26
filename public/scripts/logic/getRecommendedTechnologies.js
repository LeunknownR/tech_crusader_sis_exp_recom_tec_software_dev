import Evaluator from "./evaluator.js";
import HandlerTechnologies from "./handlerTechnologies.js";

const getRecommendedTechnologies = answers => {
    const handlerTechnologies = new HandlerTechnologies(answers);
    const evaluator = new Evaluator(handlerTechnologies);
    evaluator.platform(handlerTechnologies);
    evaluator.databaseType(handlerTechnologies);
    evaluator.costs(handlerTechnologies);
    evaluator.largeWingspan(handlerTechnologies);
    evaluator.databaseManagement(handlerTechnologies);
    evaluator.uiDesignType(handlerTechnologies);
    evaluator.preferredLanguage(handlerTechnologies);
    return handlerTechnologies.getTechnologies();
}

export default getRecommendedTechnologies;