import service from './index'

export const initApi = (info) => service.post('/api/app/init', info);
