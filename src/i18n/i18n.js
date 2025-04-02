import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enConfig from "./en";
import zhConfig from "./zh";
import arConfig from "./ar";

const resources = {
  en: {
    translation: enConfig,
  },
  zh: {
    translation: zhConfig,
  },
  ar: {
    translation: arConfig,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;



// =================================================================
// i18n for antd
// =================================================================
// import React from "react";
// import { ConfigProvider } from "antd";
// import { useTranslation } from "react-i18next";
// import enUS from "antd/lib/locale/en_US";
// import zhCN from "antd/lib/locale/zh_CN";
// import Select from "./components/Select/Select";
// 
// const MyApp = () => {
//   const { i18n } = useTranslation();
// 
//   const locale = i18n.language === "zh" ? zhCN : enUS;
// 
//   return (
//     <ConfigProvider locale={locale}>
//       <Select />
//     </ConfigProvider>
//   );
// };
// 
// export default MyApp;
// =================================================================