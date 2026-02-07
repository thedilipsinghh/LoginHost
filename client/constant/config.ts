export const APP_URL = process.env.NEXT_PUBLIC_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_LIV
    : process.env.NEXT_PUBLIC_API_LOCA