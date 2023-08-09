export const CONST = Object.freeze({
  API_URL: process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://wazobia-backend.onrender.com'
})