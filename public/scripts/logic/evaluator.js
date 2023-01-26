import TECHNOLOGIES from "../utils/technologies.js";
import { ALTERNATIVES } from "../utils/questions.js";
import HandlerTechnologies from "./handlerTechnologies.js";

export default class Evaluator {
    #actions;
    /**
     * @param {HandlerTechnologies} actions - Respuestas del usuario
     */
    constructor(actions) {
        this.#actions = actions;
    }
    platform = () => {
        const actions = this.#actions;
        if (actions.wasAnswered(ALTERNATIVES.PLATFORM.DESKTOP)) {
            actions.add([
                TECHNOLOGIES.CSHARP_WPF,
                TECHNOLOGIES.JAVA_FX,
                TECHNOLOGIES.ELECTRON_JS,
                TECHNOLOGIES.PYTHON_PYQT
            ]);
            return;
        }
        if (actions.wasAnswered(ALTERNATIVES.PLATFORM.MOBILE)) {
            actions.add([
                TECHNOLOGIES.JAVA_ANDROID,
                TECHNOLOGIES.REACT_NATIVE,
                TECHNOLOGIES.CSHARP_XAMARIN,
                TECHNOLOGIES.IONIC_JS
            ]);
        }
        if (actions.wasAnswered(ALTERNATIVES.PLATFORM.WEB)) {
            actions.add([
                TECHNOLOGIES.REACT_JS,
                TECHNOLOGIES.ANGULAR,
                TECHNOLOGIES.CSHARP_ASP_DOT_NET,
                TECHNOLOGIES.JAVA_SPRING_BOOT,
                TECHNOLOGIES.PYTHON_DJANGO,
                TECHNOLOGIES.NODE_JS_EXPRESS
            ]);
        }
    }
    databaseType = () => {
        const actions = this.#actions;
        if (actions.wasAnswered(ALTERNATIVES.DATABASE_TYPE.LOCAL)) {
            if (actions.wasAnswered(ALTERNATIVES.PLATFORM.MOBILE)) {
                actions.add([
                    TECHNOLOGIES.SQLite
                ]);
            }
            else if (actions.wasAnswered(ALTERNATIVES.PLATFORM.WEB)) {
                actions.add([
                    TECHNOLOGIES.MYSQL,
                    TECHNOLOGIES.SQL_SERVER
                ]);
            }
        }
        else if (actions.wasAnswered(ALTERNATIVES.DATABASE_TYPE.INTERNET)) {
            actions.add([
                TECHNOLOGIES.MYSQL,
                TECHNOLOGIES.SQL_SERVER,
                TECHNOLOGIES.CSHARP_ASP_DOT_NET,
                TECHNOLOGIES.JAVA_SPRING_BOOT,
                TECHNOLOGIES.PYTHON_DJANGO,
                TECHNOLOGIES.NODE_JS_EXPRESS
            ]);
        }
    }
    costs = () => {
        const actions = this.#actions;
        if (actions.wasAnswered(ALTERNATIVES.COSTS.LOW)) {
            actions.remove([
                TECHNOLOGIES.SQL_SERVER,
                TECHNOLOGIES.CSHARP_WPF,
                TECHNOLOGIES.CSHARP_ASP_DOT_NET
            ]);
            actions.add([
                TECHNOLOGIES.POSTGRE_SQL
            ]);
        }
        else if (actions.wasAnswered(ALTERNATIVES.COSTS.HIGH)) {
            actions.remove([
                TECHNOLOGIES.MYSQL,
                TECHNOLOGIES.JAVA_FX,
                TECHNOLOGIES.ELECTRON_JS,
                TECHNOLOGIES.PYTHON_PYQT
            ]);
            actions.add([
                TECHNOLOGIES.ORACLE_DB
            ]);
        }
    }
    largeWingspan = () => {
        const actions = this.#actions;
        if (actions.wasAnswered(ALTERNATIVES.LARGE_WINGSPAN.BIG)) {
            actions.remove([
                TECHNOLOGIES.ELECTRON_JS,
                TECHNOLOGIES.PYTHON_PYQT,
                TECHNOLOGIES.IONIC_JS,
                TECHNOLOGIES.REACT_NATIVE
            ]);
            if (!actions.wasAnswered(ALTERNATIVES.PLATFORM.MOBILE)) {
                actions.add([
                    TECHNOLOGIES.SQL_SERVER
                ]);
            }
            else {
                actions.add([
                    TECHNOLOGIES.CSHARP_XAMARIN,
                    TECHNOLOGIES.JAVA_ANDROID
                ]);
            }
        }
        if (actions.wasAnswered(ALTERNATIVES.LARGE_WINGSPAN.SMALL)) {
            actions.remove([
                TECHNOLOGIES.JAVA_ANDROID
            ]);
        }
    }
    databaseManagement = () => {
        const actions = this.#actions;
        if (actions.wasAnswered(ALTERNATIVES.DATABASE_MANAGEMENT.AUTOMATIC)) {
            actions.add([
                TECHNOLOGIES.ORM
            ])
        }
    }
    uiDesignType = () => {
        const actions = this.#actions;
        if (actions.wasAnswered(ALTERNATIVES.IU_DESIGN_TYPE.MODERN)) {
            if (actions.wasAnswered(ALTERNATIVES.PLATFORM.MOBILE)) {
                actions.remove([
                    TECHNOLOGIES.JAVA_ANDROID,
                    TECHNOLOGIES.CSHARP_XAMARIN,
                ]);
                actions.add([
                    TECHNOLOGIES.REACT_NATIVE,
                    TECHNOLOGIES.IONIC_JS
                ]);
            }
            if (actions.wasAnswered(ALTERNATIVES.PLATFORM.DESKTOP)) {
                actions.remove([
                    TECHNOLOGIES.CSHARP_WPF,
                    TECHNOLOGIES.JAVA_FX
                ]);
                actions.add([
                    TECHNOLOGIES.ELECTRON_JS,
                    TECHNOLOGIES.PYTHON_PYQT
                ]);
            }
            if (actions.wasAnswered(ALTERNATIVES.PLATFORM.WEB)) {
                actions.add([
                    TECHNOLOGIES.REACT_JS
                ]);
            }
        }
    }
    preferredLanguage = () => {
        const actions = this.#actions;
        if (actions.wasAnswered(ALTERNATIVES.PREFERRED_LANGUAGE.CSHARP)) {
            actions.remove([
                TECHNOLOGIES.ELECTRON_JS,
                TECHNOLOGIES.JAVA_FX,
                TECHNOLOGIES.PYTHON_PYQT,
                TECHNOLOGIES.JAVA_SPRING_BOOT,
                TECHNOLOGIES.PYTHON_DJANGO,
                TECHNOLOGIES.NODE_JS_EXPRESS,
                TECHNOLOGIES.JAVA_ANDROID,
                TECHNOLOGIES.REACT_NATIVE,
                TECHNOLOGIES.IONIC_JS
            ]);
            if (actions.wasAnswered(ALTERNATIVES.PLATFORM.DESKTOP)) {
                actions.add([
                    TECHNOLOGIES.CSHARP_WPF,
                ]);
                return;
            }
            if (actions.wasAnswered(ALTERNATIVES.PLATFORM.MOBILE)) {
                actions.add([
                    TECHNOLOGIES.CSHARP_XAMARIN,
                ]);
                return;
            }
            if (actions.wasAnswered(ALTERNATIVES.DATABASE_TYPE.INTERNET)) {
                actions.add([
                    TECHNOLOGIES.CSHARP_ASP_DOT_NET
                ]);
            }
            return;
        }
        if (actions.wasAnswered(ALTERNATIVES.PREFERRED_LANGUAGE.JAVA)) {
            if (actions.wasAnswered(ALTERNATIVES.PLATFORM.DESKTOP)) {
                actions.add([
                ]);
                actions.remove([
                    TECHNOLOGIES.CSHARP_WPF,
                    TECHNOLOGIES.ELECTRON_JS,
                    TECHNOLOGIES.PYTHON_PYQT,
                    TECHNOLOGIES.CSHARP_ASP_DOT_NET, 
                    TECHNOLOGIES.PYTHON_DJANGO,
                    TECHNOLOGIES.NODE_JS_EXPRESS
                ]);
                if (actions.wasAnswered(ALTERNATIVES.DATABASE_TYPE.INTERNET)) {
                    actions.add([
                        TECHNOLOGIES.JAVA_SPRING_BOOT,
                    ]);
                }
                return;
            }
            if (actions.wasAnswered(ALTERNATIVES.PLATFORM.MOBILE)) {
                actions.add([
                    TECHNOLOGIES.JAVA_ANDROID,
                ]);
                actions.remove([
                    TECHNOLOGIES.CSHARP_XAMARIN,
                    TECHNOLOGIES.REACT_NATIVE,
                    TECHNOLOGIES.IONIC_JS
                ]);
                return;
            }
            if (actions.wasAnswered(ALTERNATIVES.PLATFORM.WEB)) {
                actions.add([
                    TECHNOLOGIES.JAVA_SPRING_BOOT
                ]);
                actions.remove([
                    TECHNOLOGIES.CSHARP_ASP_DOT_NET,
                    TECHNOLOGIES.PYTHON_DJANGO,
                    TECHNOLOGIES.NODE_JS_EXPRESS
                ]);
            }
            return;
        }
        if (actions.wasAnswered(ALTERNATIVES.PREFERRED_LANGUAGE.JS)) {
            actions.remove([
                TECHNOLOGIES.CSHARP_WPF,
                TECHNOLOGIES.PYTHON_PYQT,
                TECHNOLOGIES.JAVA_FX,
                TECHNOLOGIES.CSHARP_ASP_DOT_NET, 
                TECHNOLOGIES.PYTHON_DJANGO,
                TECHNOLOGIES.JAVA_SPRING_BOOT,
                TECHNOLOGIES.JAVA_ANDROID,
                TECHNOLOGIES.CSHARP_XAMARIN
            ]);
            if (actions.wasAnswered(ALTERNATIVES.PLATFORM.DESKTOP)) {
                actions.add([
                    TECHNOLOGIES.ELECTRON_JS
                ]);
                return;
            }
            if (actions.wasAnswered(ALTERNATIVES.PLATFORM.MOBILE)) {
                actions.add([
                    TECHNOLOGIES.IONIC_JS,
                    TECHNOLOGIES.REACT_NATIVE
                ]);
                return;
            }
            if (actions.wasAnswered(ALTERNATIVES.PLATFORM.WEB)) {
                actions.add([
                    TECHNOLOGIES.NODE_JS_EXPRESS
                ]);
            }
            if (actions.wasAnswered(ALTERNATIVES.DATABASE_TYPE.INTERNET)) {
                actions.add([
                    TECHNOLOGIES.NODE_JS_EXPRESS
                ]);
            }
            return;
        }
        if (actions.wasAnswered(ALTERNATIVES.PREFERRED_LANGUAGE.PYTHON)) {
            actions.remove([
                TECHNOLOGIES.CSHARP_WPF,
                TECHNOLOGIES.JAVA_FX,
                TECHNOLOGIES.ELECTRON_JS,
                TECHNOLOGIES.CSHARP_ASP_DOT_NET, 
                TECHNOLOGIES.JAVA_SPRING_BOOT,
                TECHNOLOGIES.NODE_JS_EXPRESS,
                TECHNOLOGIES.JAVA_ANDROID,
                TECHNOLOGIES.CSHARP_XAMARIN,
            ]);
            if (actions.wasAnswered(ALTERNATIVES.PLATFORM.DESKTOP)) {
                actions.add([
                    TECHNOLOGIES.PYTHON_PYQT,
                ]);
                return;
            }
            if (actions.wasAnswered(ALTERNATIVES.PLATFORM.MOBILE)) {
                actions.add([
                    TECHNOLOGIES.IONIC_JS,
                    TECHNOLOGIES.REACT_NATIVE
                ]);
                return;
            }
            if (actions.wasAnswered(ALTERNATIVES.DATABASE_TYPE.INTERNET)) {
                actions.add([
                    TECHNOLOGIES.PYTHON_DJANGO
                ]);
            }
            return;
        }
    }
}