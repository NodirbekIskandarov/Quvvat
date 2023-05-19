import { useTranslation } from 'react-i18next';

function LanguageButtons() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>{t('english')}</button>
      <button onClick={() => changeLanguage('uz')}>{t('uzbek')}</button>
      <button onClick={() => changeLanguage('ru')}>{t('russian')}</button>
    </div>
  );
}
export default LanguageButtons