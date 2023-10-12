
export const remote = 'https://api.botler.com';
export const local = 'http://localhost:8081';

const isProduction = false;

export const BASE_URL = isProduction ? `${remote}` : `${local}`;