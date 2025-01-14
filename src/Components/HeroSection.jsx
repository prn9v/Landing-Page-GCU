import background from '../assets/background.png';
import jumanji from "../assets/jumanji.jpg";
import squid from "../assets/squid.png";
import qmark from "../assets/qmark.svg";

export default function HeroSection() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className="h-screen w-full text-white flex flex-col justify-center items-center text-center overflow-hidden"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-col items-center z-10 px-4">
                <h1
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
                    style={{ textShadow: '0 0 5px #fff, 0 0 10px #f39c12, 0 0 1px #f39c12' }}
                >
                    Welcome to GCU-Geek Cinematic Universe
                </h1>
                <p
                    className="text-base sm:text-lg max-w-3xl mb-8"
                    style={{ textShadow: '0 0 3px #fff, 0 0 6px #f39c12' }}
                >
                    Dive into a world where imagination meets innovation. Welcome to the ultimate
                    celebration of geek culture, cinematic brilliance, and everything in between!
                </p>
                <a
                    href="https://registration-polaris.vercel.app/"
                    className="relative bg-teal-800 text-white mt-8 px-8 py-4 font-bold text-sm sm:text-md shadow-lg hover:bg-teal-700 transition duration-300"
                >
                    REGISTER NOW
                </a>
                <div
                    className="w-0 h-[0.5px] bg-white mt-12"
                    style={{
                        animation: 'elongate 1s ease-out forwards',
                        boxShadow: '0 0 2px #fff, 0 0 5px #f39c12',
                        width: '20%',
                    }}
                />
            </div>

            <div className="flex flex-col items-center gap-10 sm:gap-14 mt-12">
                <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-32">
                    <div className="flex flex-col items-center">
                        <img
                            src={qmark}
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-transform duration-300"
                            onClick={() => scrollToSection('kbc-section')}
                        />
                        <span className="text-white mt-2">Round 1</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={jumanji}
                            alt="Jumanji Theme"
                            className="w-20 h-16 sm:w-24 sm:h-20 md:w-28 md:h-20 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-transform duration-300"
                            onClick={() => scrollToSection('jumanji-section')}
                        />
                        <span className="text-white mt-8">Round 2</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={squid}
                            alt="Squid Game Theme"
                            className="w-20 sm:w-24 md:w-28 rounded-lg shadow-md cursor-pointer hover:scale-110 transition-transform duration-300"
                            onClick={() => scrollToSection('squid-game-section')}
                        />
                        <span className="text-white mt-2">Round 3</span>
                    </div>
                </div>
            </div>
            <style>
                {`
                    @keyframes elongate {
                        0% {
                            width: 0%;
                        }
                        100% {
                            width: 30%;
                        }
                    }
                `}
            </style>
        </div>
    );
}
