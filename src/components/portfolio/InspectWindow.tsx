import { useEffect, useRef } from 'react';
import { TPortfolioItem } from '../../types';
import { deselectDesktopIcons } from '../../helpers';

export default function InspectWindow({
    portfolioItem,
    onCloseInspectWindow,
}: {
    portfolioItem: TPortfolioItem | null;
    onCloseInspectWindow: () => void;
}) {
    const windowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!portfolioItem) return;
        windowRef.current?.classList.add('visible');
    }, [portfolioItem]);

    function closeWindow() {
        windowRef.current?.classList.remove('visible');
        deselectDesktopIcons();
        onCloseInspectWindow();
    }

    if (!portfolioItem)
        return (
            <div className='window' id='portfolio-window' ref={windowRef}></div>
        );

    return (
        <div className='window' id='portfolio-window' ref={windowRef}>
            <div className='header'>
                <div className='start'>
                    <img
                        draggable='false'
                        src={portfolioItem.icon}
                        className='icon'
                    />
                    <span className='title'>{portfolioItem.title}</span>
                </div>
                <div className='button close-button' onClick={closeWindow}>
                    X
                </div>
            </div>
            <div className='body'>
                <div className='text'>{portfolioItem.content}</div>
            </div>
        </div>
    );
}
