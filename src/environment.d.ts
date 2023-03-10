declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production' | 'test';
            PORT: string;
            TOPGG_TOKEN: string;
        }
    }
}

// Path: src/index.ts
export {}