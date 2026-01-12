const APP_URL = "http://127.0.0.1:8000";
const URL_QR_CODE = "https://togo.sirh-pharmacol.com";

export default {
  app_local: false,
  app_api_deploy_url: `${APP_URL}/api`,
  app_api_dev_url: `${APP_URL}/api`,
  app_back_url_img: `${APP_URL}/storage`,
} as const;
