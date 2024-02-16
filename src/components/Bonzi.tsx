import { LegacyRef, forwardRef } from 'react';

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
        return (
            <div className='bonzi' ref={ref}>
                {!hideSpeechbubble && (
                    <div className='speech-bubble show' id='speech-bubble'>
                        <div className='content'>
                            <div className='default'>
                                <div className='top'>
                                    <div className='title'>{title}</div>
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
