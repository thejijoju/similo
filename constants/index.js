const path = require('path');

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const COMPANIES_PER_PAGE = 10;
export const UPLOADS_PATH = path.join(process.cwd(), 'public', 'uploads');
export const LOGOS_PATH = 'logos';
