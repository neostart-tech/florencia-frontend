import { defineNuxtPlugin } from "nuxt/app";
import config from "../config";
import * as axios from "axios";

const baseURL = config.app_api_dev_url ? config.app_api_dev_url : config.app_api_deploy_url;

export default defineNuxtPlugin(() => {
    axios.default.defaults.baseURL = baseURL;
});