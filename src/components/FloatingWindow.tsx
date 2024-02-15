import { LegacyRef, forwardRef } from 'react';

const FloatingWindow = forwardRef(({ text }: {text: string}, ref:LegacyRef<HTMLDivElement>) => {
    return (
        <div id='floating-window' className='window' ref={ref}>
            <div className='header'>
                <div className='start'>
                    <img
                        draggable='false'
                        src='res/img/icons/msg_information-2.png'
                        className='icon pixelated'
                    />
                    <span className='title'>Info</span>
                </div>
                <div className='button'>X</div>
            </div>
            <div className='body'>
                <div className='text'>{text}</div>
            </div>
        </div>
    );
});

export default FloatingWindow;