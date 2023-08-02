import { useTranslation } from 'react-i18next'

function Offer () {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div>
            <div className='offer'>
                <div className='offerSon'>
                    <a href='/'>{t('h8')}</a>
                    <a href='/quvvat-berish-stansiyalari'>{t('h9')}</a>
                    <a href='/dasturiy-majmuaning-afzalliklari'>{t('h10')}</a>
                </div>
            </div>
        </div>
    )
}
export default Offer