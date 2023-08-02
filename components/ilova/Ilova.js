import { useTranslation } from 'react-i18next'

function Ilova() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div className="ilova">
            <div className="ilovaSon">
                <h2 className="first">{t('h18')}</h2>
                <div className="ilovaInPhone">
                    <img src="https://tokbor.uz/themes/tokbor-oz/driver/img/bg/2.png" alt="appInPhone" />
                </div>
                <div className="ilovaUse">
                    <div className="ilovaUseSon">
                        <h2 className="second">{t('h19')}</h2>
                        <p>{t('h20')}</p>
                        <button><a href="">{t('h21')}</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ilova