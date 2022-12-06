import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
    return (
        <section className={`${styles.paddingY} ${styles.flexCenter} flex-col`} >
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className='flex-1 flex flex-col justify-start mr-10 '>
                    <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain' />
                    <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make payments easy,  reliable and secured </p>
                </div>
            <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                {footerLinks.map((footerLink)=>(
                    <div
                    key={footerLink.key} 
                    className='flex flex-col ss:my-10 my-4 min-w-[150px]'>
<h4>
    {footerLink.title}
</h4>
<ul>
    {footerLink.links.map((link,index)=>(
        <li
        key={link.name}
        className={`font-poppins font-normal text-[16px] text-gray-600 hover:text-gray-900 `}
        ></li>
    ))}
</ul>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}

export default Footer;