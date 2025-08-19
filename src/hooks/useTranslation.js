import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../translations/translations';

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();
  
  const t = (key) => getTranslation(currentLanguage, key);
  
  return { t, currentLanguage };
};
