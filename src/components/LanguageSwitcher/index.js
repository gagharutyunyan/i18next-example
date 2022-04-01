import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const { pathname, search, hash } = useLocation();

    const switcher = (lng) => () => {
        i18n.changeLanguage(lng)
        window.location.replace(
            `/${lng}${pathname}${search}${hash}`
        )
    }

    return (
        <ul>
            <li onClick={switcher('en')}>EN</li>
            <li onClick={switcher('am')}>AM</li>
            <li onClick={switcher('ru')}>RU</li>
        </ul>
    );
}

