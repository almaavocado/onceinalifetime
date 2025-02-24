export function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#home" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://onceinalifetime.s3.us-west-1.amazonaws.com/logo.png" 
                             className="h-20 w-auto" 
                             alt="OIALQ Logo" />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
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
                <div className="flex justify-center mt-8 space-x-6">
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.04c-5.53 0-10 4.48-10 10 0 4.99 3.66 9.13 8.44 9.88v-6.97H8.6v-2.91h1.84v-2.11c0-1.81.55-3.05 2.05-3.05 1.12 0 1.88.08 1.88.08v2.06h-1.06c-1.05 0-1.37.65-1.37 1.32v1.59h2.35l-.37 2.91h-1.98v6.97C18.34 21.13 22 16.99 22 12c0-5.52-4.48-10-10-10z" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/>
                        </svg>
                    </a>
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