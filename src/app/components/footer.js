export function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://onceinalifetime.s3.us-west-1.amazonaws.com/logo.png" className="h-16" alt="OIALQ Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
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
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © {new Date().getFullYear()} <a href="" className="hover:underline">Once in a Lifetime Quinceañera</a>
                    </span>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">By <a href="https://almaalvarado.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">Alma Alvarado</a></span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.04c-5.53 0-10 4.48-10 10 0 4.99 3.66 9.13 8.44 9.88v-6.97H8.6v-2.91h1.84v-2.11c0-1.81.55-3.05 2.05-3.05 1.12 0 1.88.08 1.88.08v2.06h-1.06c-1.05 0-1.37.65-1.37 1.32v1.59h2.35l-.37 2.91h-1.98v6.97C18.34 21.13 22 16.99 22 12c0-5.52-4.48-10-10-10z" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9.979 12.932c-2.123-.12-3.818-1.54-3.818-3.715 0-2.063 1.691-3.718 3.824-3.718s3.824 1.655 3.824 3.718c0 2.175-1.695 3.595-3.824 3.715zM12.057 2c-5.133 0-9.27 4.101-9.27 9.222 0 5.12 4.137 9.224 9.27 9.224s9.27-4.103 9.27-9.224c0-5.121-4.137-9.222-9.27-9.222zm0 16.433c-4.109 0-7.437-3.328-7.437-7.434 0-4.104 3.328-7.433 7.437-7.433 4.107 0 7.437 3.328 7.437 7.433 0 4.106-3.328 7.434-7.437 7.434z" />
                            </svg>
                            <span className="sr-only">Instagram account</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.248c-5.378 0-9.752 4.373-9.752 9.752 0 5.376 4.373 9.752 9.752 9.752s9.752-4.373 9.752-9.752c0-5.379-4.373-9.752-9.752-9.752zm5.329 13.388c-2.43 0-4.343-1.326-4.968-3.203-.128-.355-.284-.674-.469-.988-.155-.268-.302-.523-.432-.788-.057-.09-.089-.186-.139-.27-.212-.004-.426.016-.633.055-.092.019-.178.04-.267.04-.021 0-.048-.006-.069-.007-.186.163-.363.338-.53.516-.649.649-1.734 1.566-2.733 1.566-1.109 0-1.2-.728-1.2-1.72 0-.592.064-1.058.195-1.618.32-1.265 1.293-2.622 3.363-2.622 1.242 0 2.094.28 2.487.828.372.576.437 1.354.437 1.76 0 .304-.028.693-.069 1.042-.115.885-.493 1.511-.899 2.195-.322.559-.588 1.164-1.274 1.164zm.314-7.134c-.654.516-1.085.646-1.462.646-.12 0-.237-.008-.358-.026-.092-.015-.177-.045-.277-.085.194-.176.384-.392.568-.647.463-.682 1.054-.907 1.542-.807.109.017.212.043.318.075-.191.393-.516.668-.762.811z" />
                            </svg>
                            <span className="sr-only">YouTube page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.156 2.25h-12.312c-2.058 0-3.744 1.686-3.744 3.744v12.312c0 2.058 1.686 3.744 3.744 3.744h12.312c2.058 0 3.744-1.686 3.744-3.744v-12.312c0-2.058-1.686-3.744-3.744-3.744zm-5.481 15.413v-5.998h-2.51v5.998h-2.347v-8.067h2.347v1.065c.352-.55.966-1.115 2.091-1.115 1.524 0 2.673.952 2.673 2.688v5.429h-2.347z" />
                            </svg>
                            <span className="sr-only">TikTok page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 3h18v18H3V3zm3 16h12V5H6v14zm6-12h2v8h-2V7zm-4 0h2v8h-2V7zm4 12h-2v2h2v-2z" />
                            </svg>
                            <span className="sr-only">LinkedIn page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
