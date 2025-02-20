import { ProjectLanguage } from '@/apollo/client/graphql/__types__';

export const getLanguageText = (language: ProjectLanguage) =>
  ({
    [ProjectLanguage.EN]: '英语',
    [ProjectLanguage.ES]: '西班牙语',
    [ProjectLanguage.FR]: '法语',
    [ProjectLanguage.ZH_TW]: '繁体中文',
    [ProjectLanguage.ZH_CN]: '简体中文',
    [ProjectLanguage.DE]: '德语',
    [ProjectLanguage.PT]: '葡萄牙语',
    [ProjectLanguage.RU]: '俄语',
    [ProjectLanguage.JA]: '日语',
    [ProjectLanguage.KO]: '韩语',
  })[language] || language;
