import React from 'react';
import Image from 'next/image';



export default function Instagram() {
    const ref = React.useRef();
    return (
        <div className="instagram">
            <a href="https://www.instagram.com/petrahairtransplant">
            <Image src="/instagram.png" width="44" height="44" objectFit="cover"  alt="Petra Hair Transplant Instagram"/>
            </a>
        </div>
    );
}