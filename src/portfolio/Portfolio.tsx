import { LegacyRef, forwardRef, useState } from 'react';
import DesktopIcon from './DesktopIcon';
import InspectWindow from './InspectWindow';
import { portfolioItems } from '../content';
import { TPortfolioItem } from '../types';

const Portfolio = forwardRef((_props, ref: LegacyRef<HTMLDivElement>) => {
    const [currentPortfolioItem, setCurrentPortfolioItem] =
        useState<TPortfolioItem | null>(null);

    return (
        <div id='portfolio' ref={ref}>
            <div className='desktop'>
                <div className='icons'>
                    {portfolioItems.map((item, index) => (
                        <DesktopIcon
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            onClick={() => setCurrentPortfolioItem(item)}
                        />
                    ))}
                </div>
                <InspectWindow portfolioItem={currentPortfolioItem} />
                <div className='bonzi'>
                    <div className='speech-bubble show' id='speech-bubble'>
                        <div className='content'>
                            <div className='default'>
                                <div className='top'>
                                    <div className='tj'>Vinkki!</div>
                                    <button
                                        className='close'
                                        onClick={() =>
                                            document
                                                .querySelector('#speech-bubble')
                                                ?.classList.remove('show')
                                        }
                                    >
                                        X
                                    </button>
                                </div>
                                <div className='ask'>
                                    Klikkaa työpöytäkuvakkeita.
                                </div>
                            </div>
                        </div>
                        <div className='arrow-down'></div>
                        <div className='arrow-down-double'></div>
                    </div>
                    <div className='bonzi-image reading'></div>
                </div>
            </div>
        </div>
    );
});

export default Portfolio;
