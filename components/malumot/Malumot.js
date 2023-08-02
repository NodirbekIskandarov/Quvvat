import { useTranslation } from 'react-i18next'

function Malumot() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div className="malumot">
            <div className="malumotlar">
                <div className="textpartMalumot">
                    <h2>{t('h34')}</h2>
                    <p>{t('h35')}</p>
                    <p>{t('h36')}</p>
                    <p>{t('h37')}</p>
                </div>
            </div>
            <div className="picture">
                <div>
                    <img src="https://tokbor.uz/themes/tokbor-oz/driver/img/bg/3.png" />
                </div>
            </div>
        </div>
    )
}
export default Malumot