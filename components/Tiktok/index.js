
import React from 'react';
import Image from 'next/image';


export default function Tiktok() {
    const ref = React.useRef();
    return (
        <div>
            <a href="https://www.tiktok.com/@petra.hair.transplant">
            <Image src="/tiktok.png" width="44" height="44" objectFit="cover"  alt="Petra Hair Transplant Tiktok"/>
            </a>
        </div>
    );
}