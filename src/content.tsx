import { TPortfolioItem } from './types';

export const portfolioItems: TPortfolioItem[] = [
    {
        title: 'Merge Your Music',
        icon: 'res/img/icons/mixer_keyboard_musical-0.png',
        content: (
            <>
                <img src='res/img/portfolio/mym.png' />
                <p>
                    "Merge your music taste with someone else's! Login with
                    Spotify and send a link to your friend to start generating
                    playlists from music you both enjoy."
                </p>
                <a href='http://mergeyourmusic.laras.cc/' target='_blank'>
                    Merge Your Music
                </a>
            </>
        ),
    },
    {
        title: 'MediaManager',
        icon: 'res/img/icons/multimedia-3.png',
        content: (
            <>
                <img src='res/img/portfolio/mediamanager.png' />
                <p>
                    "A cross-platform entertainment hub for managing your local
                    collection of movies and TV shows."
                </p>
                <a
                    href='https://github.com/TatuLaras/MediaManager'
                    target='_blank'
                >
                    MediaManager GitHubissa
                </a>
            </>
        ),
    },
    {
        title: 'Submerge (old version)',
        icon: 'res/img/icons/world_address_book-0.png',
        content: (
            <>
                <img src='res/img/portfolio/submergeold.jpg' />
                <p>
                    "Language immersion aka. consuming content that's in a
                    foreign language for language learning purposes is{' '}
                    <b>by far</b> the most effective language learning method
                    according to current research.{' '}
                </p>
                <p>
                    <b>Submerge Immersion Tracker</b> is a tracker of your
                    immersion: the time you spend immersing, what kind of
                    immersion you do (reading, listening, active, passive), and
                    the content you choose to do it with. This app gives you an
                    intuitive interface to add that data to the current day or
                    edit previous days. Afterward, you can look at aggregate
                    data graphs and statistics of that data or get a more
                    detailed view of it in a spreadsheet-like form. The app also
                    includes some social features, letting you add friends and
                    see their recent immersion data."
                </p>
                <p>
                    Projekti ei ole tällä hetkellä hostattuna missään koska
                    uudempi työpöytäpohjainen offline-versio on tekeillä. Vanhan
                    etusivun löydät{' '}
                    <a
                        href='https://tatularas.github.io/submerge-landing/'
                        target='_blank'
                    >
                        täältä
                    </a>
                    .
                </p>
            </>
        ),
    },
    {
        title: 'Muut projektit',
        icon: 'res/img/icons/globe_map-2.png',
        content: (
            <>
                <p>
                    Muut pienemmät projektit löydät
                    <a href='https://github.com/TatuLaras/' target='_blank'>
                        GitHubistani
                    </a>
                    .
                </p>
                <ul>
                    <li>
                        <a
                            href='https://tatularas.github.io/win98clone/'
                            target='_blank'
                        >
                            Windows 98 -klooni
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://tatularas.github.io/Sand-simulation-on-the-web/'
                            target='_blank'
                        >
                            Hiekkasimulaatio
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://github.com/TatuLaras/nes-platformer/tree/master'
                            target='_blank'
                        >
                            NES-projekti
                        </a>
                    </li>
                </ul>
            </>
        ),
    },
];
