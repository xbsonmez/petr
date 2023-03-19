import React from 'react';
import Image from 'next/image';



export default function Whatsapp() {
    const ref = React.useRef();
    return (
        <div className="whatsapp">
            <a href="https://api.whatsapp.com/send?phone=905542157765&text=Merhaba%2C%21">
            <Image src="/whatsapp.png" width="44" height="44" objectFit="cover"  alt="Petra Hair Transplant"/>
            </a>
        </div>
    );
}