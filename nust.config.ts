const APP_DEV_URL = "http://127.0.0.1:8000";
const APP_DEPLOY_URL = "https://togo.sirh-pharmacol.com";

export default {
  app_local: true,
  app_api_deploy_url: `${APP_DEPLOY_URL}/api`,
  app_api_dev_url: `${APP_DEV_URL}/api`,
  app_back_url_img: `${APP_DEPLOY_URL}/storage`,
} as const;
