// Application Interface
// Sever Web Application
import { wxRequest } from '@/utils/wxRequest';

const apiMall = 'https://sujiefs.com'
const getAdList = (params) => wxRequest(params, apiMall + '/api/adverts/list')
export default {
  getAdList
}