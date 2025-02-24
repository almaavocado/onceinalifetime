'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
];

export default function tempHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-md font-semibold text-white hover:text-[#926AA5]">
                                {item.name}
                            </a>
                        ))}
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
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
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
                        Empowering young girls by creating extraordinary, personalized experiences that honor their heritage, build confidence, and celebrate their transition into womanhood through the art of waltz and surprise dance.
                    </p>
                    <div className="mt-10">
                        <a
                            href="#pricing"
                            className="rounded-md bg-gradient-to-r from-[#AE8625] to-[#D2AC47] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-r hover:from-[#4C0F30] hover:to-[#7F1D2A]"
                        >
                            Plan Your Dream Quinceañera
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
}
