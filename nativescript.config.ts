import { NativeScriptConfig } from "@nativescript/core";

export default {
  id: "com.juankyapps.yaaay",
  appResourcesPath: "App_Resources",
  android: {
    v8Flags: "--expose_gc",
    markingMode: "none",
  },
  appPath: "src",
  webpackConfigPath: "webpack.config.js",
} as NativeScriptConfig;
