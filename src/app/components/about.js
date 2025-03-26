'use client'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../translations/content'

export default function About() {
    const { language } = useLanguage();
    const t = translations[language].videoComponent;
    const p = translations[language].pricing;

    return (
        <div id="about" className="relative min-h-screen w-full">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video 
                    className="absolute inset-0 w-full h-full object-cover blur-md -z-10" 
                    autoPlay 
                    loop 
                    muted
                    playsInline
                    controls={false}
                    preload="auto"
                    webkit-playsinline="true"
                >
                    <source src="https://onceinalifetime.s3.us-west-1.amazonaws.com/aboutVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-6 py-16 lg:px-16 space-y-6">
                <p className="text-base font-semibold text-yellow-600">Our Story</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                    The Heart of OIALQ
                </h1>
                <p className="mt-4 text-lg font-bold bg-gradient-to-r from-[#AE8625] to-[#D2AC47] bg-clip-text text-transparent italic">
                    "Empowering one Quinceañera at a time with dance, confidence, self-love, and teamwork."
                </p>
                <p>
                    <strong>Once in a Lifetime Quinceanera (OIALQ)</strong> is a company
                    owned by <strong>Lazaro Trinidad</strong>, which has been providing
                    families with beautiful choreographies and event coordinating for
                    the past 19 years. Working from beginning to end to create a magical
                    experience and memories. All while empowering one Quinceañera at a
                    time with dance, confidence, self-love, and teamwork; helping her
                    celebrate becoming a young, strong woman.
                </p>

                <p>
                    Lazaro Trinidad is a strong believer in responsibility, honesty,
                    hard work, and kindness. He has a true passion for our Latino
                    culture and the meaning of Quinceañera. While we celebrate the
                    dress, make-up, heels, and dance; we also focus on empowering the
                    Quinceañera to take ownership of her womanhood. Giving her a space
                    to be the best version of herself with her true beliefs in her Once
                    in a Lifetime Quinceañera.
                </p>

                <p >
                    OIALQ is designed to introduce and provide the court of honor with
                    the fundamental skills needed for the waltz and surprise dance.
                    Depending on their surprise dance, they will have the opportunity to
                    taste the different music genres such as cumbia, huapangos,
                    merengue, hip-hop, rock n roll, and more. All while highlighting the
                    essential balance between style and comfort in the dress, crinolina,
                    and shoes, ensuring the Quinceañera can move gracefully and dance
                    with effortless elegance throughout her special celebration.
                </p>

                <p >
                    Furthermore, we also provide public speaking skills to help the
                    Quinceañera sound and look her best during her “Brindis” in front of
                    her guests. Creating a safe space where dance will bring them into a
                    team of unity, respect, inclusiveness, and fun.
                </p>
            </div>
        </div>
    );
}