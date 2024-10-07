class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance;  // Retorna la instancia existente si ya ha sido creada
        }
        Logger.instance = this;  // Almacena la instancia única
    }

    logInfo(message) {
        console.log(`INFO: ${message}`);
    }

    logWarning(message) {
        console.log(`WARNING: ${message}`);
    }

    logError(message) {
        console.log(`ERROR: ${message}`);
    }
}

// Uso del patrón Singleton
const logger1 = new Logger();
logger1.logInfo('Aplicación iniciada');

const logger2 = new Logger();
logger2.logError('Error de conexión');

console.log(logger1 === logger2);  // Debe imprimir true
