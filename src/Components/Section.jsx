import React from 'react';

const Section = () => {
    const background = 'https://via.placeholder.com/1920x1080'; // Placeholder background URL

    // Smooth scrolling function
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            {/* Welcome Section */}
            <div
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    width: '100%',
                }}
                className="flex flex-col items-center justify-center text-center px-4"
            >
                <div className="text-white mb-8">
                    <h1 className="text-4xl font-bold">
                        Welcome to GCU-Geek Cinematic Universe
                    </h1>
                    <p className="mt-4">
                        Dive into a world where imagination meets innovation. Welcome to the
                        ultimate celebration of geek culture, cinematic brilliance, and everything
                        in between!
                    </p>

                    <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition">
                        Register!!
                    </button>
                </div>

                <div className="flex justify-center items-center gap-10">
                 
                    <img
                        src="https://png.pngtree.com/png-clipart/20240226/original/pngtree-white-question-mark-3d-sign-photo-png-image_14414350.png"
                        alt="KBC Theme"
                        className="w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-lg cursor-pointer"
                        onClick={() => scrollToSection('kbc-section')}
                    />

            
                    <img
                        src="https://i.ytimg.com/vi/i_gXpfesZZo/hqdefault.jpg"
                        alt="Jumanji Theme"
                        className="w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-lg cursor-pointer"
                        onClick={() => scrollToSection('jumanji-section')}
                    />

                    
                    <img
                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/13276.png"
                        alt="Squid Game Theme"
                        className="w-20 h-20 md:w-24 md:h-24 rounded-lg shadow-lg cursor-pointer"
                        onClick={() => scrollToSection('squid-game-section')}
                    />
                </div>
            </div>

        </div>
    );
};

export default Section;
