import { LegacyRef, forwardRef, useRef } from 'react';

const Bonzi = forwardRef(
    (
        {
            children,
            title,
            type,
            hideSpeechbubble,
        }: {
            children: JSX.Element | string | undefined;
            title: string;
            type: '' | 'reading' | 'explaining1' | 'explaining2';
            hideSpeechbubble: boolean;
        },
        ref: LegacyRef<HTMLDivElement>,
    ) => {
        const speechbubbleRef = useRef<HTMLDivElement>(null);
        return (
            <div className='bonzi' ref={ref}>
                {!hideSpeechbubble && (
                    <div className='speech-bubble show' ref={speechbubbleRef}>
                        <div className='content'>
                            <div className='default'>
                                <div className='top'>
                                    <div className='title'>{title}</div>
                                    <button
                                        className='close'
                                        onClick={() =>
                                            speechbubbleRef.current?.classList.remove(
                                                'show',
                                            )
                                        }
                                    >
                                        X
                                    </button>
                                </div>
                                <div className='ask'>{children}</div>
                            </div>
                        </div>
                        <div className='arrow-down'></div>
                        <div className='arrow-down-double'></div>
                    </div>
                )}
                <div className={`bonzi-image ${type}`}></div>
            </div>
        );
    },
);

export default Bonzi;
