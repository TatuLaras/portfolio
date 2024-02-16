import { LegacyRef, forwardRef, useState } from 'react';
import DesktopIcon from './DesktopIcon';
import InspectWindow from './InspectWindow';
import { portfolioItems } from '../../content';
import { TPortfolioItem } from '../../types';
import Bonzi from '../Bonzi';

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
                            onClick={() => {
                                setCurrentPortfolioItem(null);
                                setCurrentPortfolioItem(item)
                            }}
                        />
                    ))}
                </div>
                <InspectWindow
                    portfolioItem={currentPortfolioItem}
                    onCloseInspectWindow={() => setCurrentPortfolioItem(null)}
                />
                <Bonzi title='Vinkki!' type='reading' hideSpeechbubble={false}>
                    Klikkaa työpöytäkuvakkeita.
                </Bonzi>
            </div>
        </div>
    );
});

export default Portfolio;
