import { LegacyRef, forwardRef } from 'react';

function ListItem(props: any) {
    return (
        <div className='list-item'>
            <img draggable='false' src='res/img/point_right.gif' />
            <div className='text'>{props.children}</div>
        </div>
    );
}

const Technologies = forwardRef((_props, ref: LegacyRef<HTMLDivElement>) => {
    return (
        <div id='technologies' ref={ref}>
            <img
                draggable='false'
                src='res/img/wordart.png'
                className='wordart'
            />
            <ListItem>React, Vite, Next.js</ListItem>
            <ListItem>TypeScript/JavaScript</ListItem>
            <ListItem>Vanilla front-end</ListItem>
            <ListItem>SQL-tietokannat, MariaDB/MySQL, SQL Server</ListItem>
            <ListItem>PHP, LAMP-stäkki</ListItem>
            <ListItem>Linux, Linux-pohjaiset palvelimet</ListItem>
            <ListItem>C#, .NET, ASP.NET, Unity</ListItem>
            <ListItem>Visual Basic .NET, Windows Forms</ListItem>
            <ListItem>C++, C, Dear ImGui</ListItem>
        </div>
    );
});

export default Technologies;
