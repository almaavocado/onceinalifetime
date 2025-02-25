'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/content'
import { LanguageIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'home', href: '#home' },
    { name: 'services', href: '#services' },
    { name: 'about', href: '#about' },
    { name: 'pricing', href: '#pricing' },
    { name: 'contact', href: '#contact' },
];

const socials = [
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/onceinalifeq/',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/@onceinalifeq',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
            </svg>
        ),
    },
    {
        name: 'TikTok',
        href: 'https://www.tiktok.com/@onceinalifeq',
        icon: (props) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
        ),
    },
    {
        name: 'Yelp',
        href: 'https://www.yelp.com/biz/once-in-a-lifetime-quincea%C3%B1era-san-jose',
        icon: (props) => (
            <img 
                src="/assets/yelp-svgrepo-com.svg" 
                alt="Yelp"
                className="h-6 w-6 text-white hover:text-[#926AA5] transition-colors duration-200"
                {...props}
            />
        ),
    }
];

export default function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div className="relative bg-cover bg-center min-h-screen lg:bg-[url('https://onceinalifetime.s3.us-west-1.amazonaws.com/hero6.png')] bg-[url('https://onceinalifetime.s3.us-west-1.amazonaws.com/mobile-hero.png')]">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#home" className="-m-1.5 p-1.5">
                            <span className="sr-only">Once in a Lifetime Quinceañera</span>
                        </a>
                    </div>
                    
                    {/* Updated navigation and controls layout */}
                    <div className="hidden lg:flex lg:gap-x-12 lg:mr-8">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-md font-semibold text-white hover:text-[#926AA5]">
                                {t.navigation[item.name]}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <button
                            onClick={toggleLanguage}
                            className="text-white hover:text-[#926AA5] transition-colors duration-200 flex items-center gap-2 px-3 py-1 rounded-md border border-white/20"
                        >
                            <LanguageIcon className="h-5 w-5" />
                            <span>{language.toUpperCase()}</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                </nav>

                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0F1B26] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a 
                                href="#home" 
                                onClick={(e) => handleNavClick(e, '#home')}
                                className="-m-1.5 p-1.5"
                            >
                                <span className="sr-only">Once in a Lifetime Quinceañera</span>
                                <img alt="" src="https://onceinalifetime.s3.us-west-1.amazonaws.com/title-Quince2.svg" className="h-16 w-auto" />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-white hover:text-[#926AA5]"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e) => handleNavClick(e, item.href)}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-[#0C2C3B] transition-colors duration-200"
                                        >
                                            {t.navigation[item.name]}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                         {/* Social Media Links */}
                        <div className="mt-6 pt-6 border-t border-gray-500/10">
                            <div className="flex justify-center space-x-6">
                                {socials.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-[#926AA5] transition-colors duration-200"
                                    >
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative isolate px-6 pt-24 lg:px-8 flex flex-col justify-center items-center min-h-screen">
                <div className="text-center text-white p-10 rounded-lg">
                    <div className="flex justify-center">
                        <img 
                            alt="" 
                            src="/assets/title-Quince2.svg" 
                            className="w-full max-w-xl h-54"
                        />
                    </div>
                    <p className="text-lg leading-7 sm:text-xl max-w-2xl mx-auto">
                        {t.hero.description}
                    </p>
                    <div className="mt-10">
                        <a
                            href="#pricing"
                            className="rounded-md bg-gradient-to-r from-[#AE8625] to-[#D2AC47] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-r hover:from-[#4C0F30] hover:to-[#7F1D2A]"
                        >
                            {t.hero.cta}
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}

