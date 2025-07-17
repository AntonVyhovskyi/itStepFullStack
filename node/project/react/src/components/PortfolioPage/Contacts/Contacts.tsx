import type { FunctionComponent } from "react";
import cls from './Contacts.module.css';
import type { IBasicInfo } from "../../Dashboard/UpdatePortfolio/UpdateBasicInfo/ContaierComponentUpdateBasicInfo";

interface ContactsProps {
    basicInfo: IBasicInfo
}
 
const Contacts: FunctionComponent<ContactsProps> = ({ basicInfo }) => {
    const { email, phone, linkedin, github, telegram, viber, watsup } = basicInfo;

    const contacts = [
        { label: 'Email', value: email, href: `mailto:${email}` },
        { label: 'Phone', value: phone, href: `tel:${phone}` },
        { label: 'Telegram', value: telegram, href: telegram},
        { label: 'WhatsApp', value: watsup, href: `https://wa.me/${watsup}` },
        { label: 'Viber', value: viber, href: `viber://chat?number=${viber}` },
        { label: 'LinkedIn', value: linkedin, href: linkedin },
        { label: 'GitHub', value: github, href: github },
    ];

    return (
        <div className={cls.container}>
            <h2 className={cls.title}>Contacts</h2>
            <ul className={cls.list}>
                {contacts.filter(c => c.value).map(({ label, value, href }) => (
                    <li key={label} className={cls.item}>
                        
                        <a href={href} className={cls.link} target="_blank" rel="noopener noreferrer">
                            {label === 'Email' || label === 'Phone' ? value : label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default Contacts;