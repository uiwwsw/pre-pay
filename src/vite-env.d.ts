/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
    readonly VITE_KAKAO_KEY: string
    readonly VITE_KAKAO_REDIRECT: string
    readonly VITE_KAKAO_SECRET: string
    readonly VITE_FIREBASE_API_KEY: string;
    readonly VITE_FIREBASE_AUTH_DOMAIN: string;
    readonly VITE_FIREBASE_PROJECT_ID: string;
    readonly VITE_FIREBASE_STORAGE_BUCKET: string;
    readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
    readonly VITE_FIREBASE_APP_ID: string;
    readonly VITE_FIREBASE_MEASUREMENT_ID: string;
    readonly VITE_ADMIN_IDS: string;
    // 다른 환경 변수들에 대한 타입 정의...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}