const Footer = () => {
    return (
        <footer className="bg-transparent text-amber-50 py-6 mt-10 border-t border-zinc-700 flex flex-col items-center gap-4">
            <p className="text-sm md:text-base">
                Derechos Reservados © {new Date().getFullYear()} - <span className="text-blue-600 font-semibold">+Tech</span>.
            </p>

            <div className="flex gap-6 footer-items-container">
                <a
                href="https://wwww.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                >
                    <img
                        src="https://imgs.search.brave.com/GvVrn9RNyVklcZAML_4LwazOSKbKs5mzz948o-n6Qfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8w/Ni8xNS8xMi81MS9m/YWNlYm9vay02MzM4/NTA4XzEyODAucG5n"
                        alt="logo-facebook"
                        className="w-6 h-6 md:w-7 md:h-7"
                    />
                </a>

                <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                >
                    <img
                        src="https://imgs.search.brave.com/ROHr6e0iyH6gd7JLzKMu0Inmabq20L30hGawDmf4_NE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTc0LzE3NDg1/NS5wbmc"
                        alt="logo-instagram"
                        className="w-6 h-6 md:w-7 md:h-7"
                    />
                </a>

                <a
                href="https://www.whatsapp.com/?lang=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                >
                    <img
                        src="https://imgs.search.brave.com/Iu45jx--QtoXb3xq4qlJ1BhrViuwvg00rWxmrVP1hjo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTc0LzE3NDg3/OS5wbmc"
                        alt="logo-whatsapp"
                        className="w-6 h-6 md:w-7 md:h-7"
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
