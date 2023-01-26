export const ALTERNATIVES = {
    PLATFORM: {
        DESKTOP: "platform-desktop",
        WEB: "platform-web",
        MOBILE: "platform-mobile"
    },
    DATABASE_TYPE: {
        INTERNET: "db-internet",
        LOCAL: "db-local"
    },
    COSTS: {
        LOW: "costs-low",
        HIGH: "costs-high"
    },
    LARGE_WINGSPAN: {
        SMALL: "large-wingspan-small",
        BIG: "large-wingspan-big"
    },
    DATABASE_MANAGEMENT: {
        AUTOMATIC: "db-management-automatic",
        MANUAL: "db-management-manual"
    },
    IU_DESIGN_TYPE: {
        MODERN: "ui-design-type-modern",
        SIMPLE: "ui-design-type-simple"
    },
    PREFERRED_LANGUAGE: {
        JAVA: "preflang-java",
        CSHARP: "preflang-csharp",
        PYTHON: "preflang-python",
        JS: "preflang-js"
    }
};

export const QUESTIONS = {
    PLATFORM: {
        question: "¿Para qué plataforma requieres tu software?",
        alternatives: [
            {
                id: ALTERNATIVES.PLATFORM.DESKTOP,
                name: "Escritorio",
            },
            {
                id: ALTERNATIVES.PLATFORM.WEB,
                name: "Web"
            },
            {
                id: ALTERNATIVES.PLATFORM.MOBILE,
                name: "Móvil"
            }
        ]
    },
    DATABASE_TYPE: {
        question: "¿Tu software debe interactuar con internet?",
        alternatives: [
            {
                id: ALTERNATIVES.DATABASE_TYPE.INTERNET,
                name: "Sí"
            },
            {
                id: ALTERNATIVES.DATABASE_TYPE.LOCAL,
                name: "No"
            }
        ]
    }, 
    COSTS: {
        question: "¿Deseas gastar el mínimo para la puesta en producción?",
        alternatives: [
            {
                id: ALTERNATIVES.COSTS.LOW,
                name: "Pequeña"
            },
            {
                id: ALTERNATIVES.COSTS.HIGH,
                name: "Grande"
            }
        ]
    },
    LARGE_WINGSPAN: {
        question: `¿Tu proyecto tiene un tamaño relativamente grande? Ejemplo:<br/> 
        Grande: Un sistema de gestión de recursos humanos.<br/>
        Pequeño: Una aplicación de seguimiento de gastos personales.`,
        alternatives: [
            {
                id: ALTERNATIVES.LARGE_WINGSPAN.SMALL,
                name: "Pequeña"
            },
            {
                id: ALTERNATIVES.LARGE_WINGSPAN.BIG,
                name: "Grande",
            }
        ]
    }, 
    DATABASE_MANAGEMENT: {
        question: "¿Deseas que la gestión tu base de datos implique el menor uso de tecnologías?",
        alternatives: [
            {
                id: ALTERNATIVES.DATABASE_MANAGEMENT.AUTOMATIC,
                name: "Sí",
            },
            {
                id: ALTERNATIVES.DATABASE_MANAGEMENT.MANUAL,
                name: "No"
            }
        ]
    }, 
    IU_DESIGN_TYPE: {
        question: "¿Qué tipo de aspecto deseas que adopte la interfaz de usuario de tu software?",
        alternatives: [
            {
                id: ALTERNATIVES.IU_DESIGN_TYPE.MODERN,
                name: "Moderno",
            },
            {
                id: ALTERNATIVES.IU_DESIGN_TYPE.SIMPLE,
                name: "Simple"
            }
        ]
    },
    PREFERRED_LANGUAGE: {
        question: "Elige un lenguaje el cual tengas preferencia",
        alternatives: [
            {
                id: ALTERNATIVES.PREFERRED_LANGUAGE.CSHARP,
                name: "CSharp",
            },
            {
                id: ALTERNATIVES.PREFERRED_LANGUAGE.JAVA,
                name: "Java",
            },
            {
                id: ALTERNATIVES.PREFERRED_LANGUAGE.JS,
                name: "JavaScript",
            },
            {
                id: ALTERNATIVES.PREFERRED_LANGUAGE.PYTHON,
                name: "Python",
            },
        ]
    }
};