import { useRef } from 'react';
import { deselectDesktopIcons } from '../helpers';

export default function DesktopIcon({
    icon,
    title,
    onClick,
}: {
    icon: string;
    title: string;
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) {
    const iconRef = useRef<HTMLDivElement>(null);

    
    function onIconClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        deselectDesktopIcons();
        iconRef.current!.classList.add('selected');
        onClick(e);
    }

    return (
        <div
            className='desktop-icon'
            onClick={onIconClick}
            ref={iconRef}
        >
            <img
                src={icon}
                alt={`Icon for ${title}`}
                draggable='false'
                className='pixelated'
            />
            <div className='title'>{title}</div>
        </div>
    );
}
