export function Footer() {
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

    return (
        <footer className="bg-[#0F1B26] text-white">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#home" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://onceinalifetime.s3.us-west-1.amazonaws.com/logo.png" 
                             className="h-20 w-auto" 
                             alt="OIALQ Logo" />
                    </a>
                    <ul className="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#services" className="hover:underline me-4 md:me-6">Services</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#pricing" className="hover:underline me-4 md:me-6">Pricing</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Social Media Icons - Moved above the divider */}
                {/* Social Media Icons */}
                <div className="flex justify-center mt-8 space-x-6">
                    {socials.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <hr className="my-8 border-gray-200 sm:mx-auto dark:border-gray-700" />

                {/* Copyright and Credits - Improved Layout */}
                <div className="sm:flex sm:items-center sm:justify-between flex-wrap gap-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400 block text-center sm:text-left">
                        © {new Date().getFullYear()} <a href="#home" className="hover:underline">Once in a Lifetime Quinceañera</a>
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 block text-center sm:text-right">
                        Developed by{' '}
                        <a 
                            href="https://almaalvarado.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:underline hover:text-[#926AA5]"
                        >
                            Alma Alvarado
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}