/**
 * Variables de entorno
 *
 * Las variables de entorno son obtenidas del archivo public/env.js el cual es cargado en el head del root HTML public/index.html
 * Aca se las procesa para obtener un valor por defecto
 */
function getEnvs(): Config {
    const env = (window as any).env;
    if (!!env && !!env.API_URL) {
        return {          
            COUPONS_VISA_URL: env.COUPONS_VISA_URL,
        }
    } else {
        return {
            COUPONS_VISA_URL: process.env.REACT_APP_COUPONS_VISA_URL,
        }
    }
}

interface Config {
    COUPONS_VISA_URL?: string;
}
const CONSTANTS = getEnvs();

export const config: Config = CONSTANTS;

