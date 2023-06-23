// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import en from "./locales/en.json";
import ja from "./locales/ja.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    fallbackNS: "en";
    // custom namespace type, if you changed it
    defaultNS: "en";
    // custom resources type
    resources: {
      en: typeof en;
      ja: typeof ja;
    };
    // other
  }
}
