import { useEffect, useRef, useState } from 'react';
import CV from './components/CV';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Technologies from './components/Technologies';
import FloatingWindow from './components/FloatingWindow';
import Taskbar from './components/taskbar/Taskbar';
import Bonzi from './components/Bonzi';
import { floatingWindowContent } from './content';

type TStage = 'initial' | 'technologies' | 'cv' | 'portfolio' | 'contact';

export default function App() {
    const [stage, setStage] = useState<TStage>('initial');
    const [floatingWindowText, setFloatingWindowText] =
        useState<JSX.Element | string>(<></>);

    const floatingWindowRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    const taskbarRef = useRef<HTMLDivElement>(null);
    const technologiesRef = useRef<HTMLDivElement>(null);
    const cvRef = useRef<HTMLDivElement>(null);
    const portfolioRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const hasScrolledPast = (elm: HTMLDivElement, offset = 0) => {
        return window.scrollY + offset >= elm.offsetTop + elm.offsetHeight;
    };

    const showTaskbar = () => {
        taskbarRef.current?.classList.remove('hide');
    };

    const hideTaskbar = () => {
        taskbarRef.current?.classList.add('hide');
    };

    useEffect(() => {
        stage != 'initial' ? showTaskbar() : hideTaskbar();

        if (!floatingWindowRef.current) return;

        const content = floatingWindowContent(stage);
        content && setFloatingWindowText(content);

        switch (stage) {
            case 'technologies':
                floatingWindowRef.current.className = 'window';
                floatingWindowRef.current.classList.add('p1');
                break;

            case 'cv':
                floatingWindowRef.current.className = 'window';
                floatingWindowRef.current.classList.add('p2');
                portfolioRef.current?.classList.remove('current');
                break;

            case 'portfolio':
                floatingWindowRef.current.className = 'window';
                portfolioRef.current?.classList.add('current');
                break;

            case 'contact':
                portfolioRef.current?.classList.remove('current');
                floatingWindowRef.current.className = 'window';
                floatingWindowRef.current.classList.add('p1');
                break;

            default:
                floatingWindowRef.current.className = 'window';
                break;
        }
    }, [stage]);

    const checkScroll = () => {
        if (!hasScrolledPast(heroRef.current!)) {
            setStage('initial');
            return;
        }

        if (hasScrolledPast(portfolioRef.current!, 260)) {
            setStage('contact');
            return;
        }

        if (hasScrolledPast(cvRef.current!)) {
            setStage('portfolio');
            return;
        }

        if (hasScrolledPast(technologiesRef.current!, 150)) {
            setStage('cv');
            return;
        }

        setStage('technologies');
    };

    useEffect(() => {
        window.onscroll = checkScroll;
        window.onresize = checkScroll;
    }, []);

    return (
        <>
            <div id='screenspace'>
                <FloatingWindow
                    ref={floatingWindowRef}
                    text={floatingWindowText}
                />
                <Taskbar ref={taskbarRef} stage={stage} />
            </div>

            <div id='wrapper'>
                <div className='bg'></div>
                <Hero ref={heroRef} disableBonzi={stage !== 'initial'} />

                <div id='showcase-scrollable-region'>
                    <Technologies ref={technologiesRef} />
                    <CV ref={cvRef} />
                    <Portfolio ref={portfolioRef} />
                    <Contact ref={contactRef} />

                    <Bonzi
                        hideSpeechbubble={false}
                        title='Ota yhteyttä!'
                        type=''
                    >
                        Yläpuoleltani löydät yhteystiedot.
                    </Bonzi>
                </div>
            </div>
        </>
    );
}
