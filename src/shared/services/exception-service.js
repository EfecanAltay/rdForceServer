import BaseService from "./base-service.js";

class ExceptionService extends BaseService {
    
    constructor() {
        super();
    }

    async initialize() {
        // Initialize Func
        process.on('uncaughtException', (err) => {
            console.error('🚨 Uncaught Exception:', err);
            // Uygulamayı güvenli şekilde kapatabilirsin
            process.exit(1);
        });

        process.on('unhandledRejection', (reason, promise) => {
            console.error('🚨 Unhandled Rejection:', reason);
            // Loglayabilir veya sistemsel aksiyon alabilirsin
        });
    }
}

export default ExceptionService;