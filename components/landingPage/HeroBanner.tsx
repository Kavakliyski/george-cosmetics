
import Link from 'next/link';

import { urlFor } from '../../library/sanity-client';
import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';


export interface IheroBanner {
    heroBanner: IheroBanner;
    smallText: string;
    midText: string;
    largeText1: string;
    image: any;
    product: string;
    buttonText: string;
    desc: string;
}

export default function HeroBanner({ heroBanner }: IheroBanner) {

    return (
        <>
            <div className="hero-banner-container">
                <div>
                    <p className="beats-solo">{heroBanner.smallText}</p>
                    <h3>{heroBanner.midText}</h3>
                    <h1>{heroBanner.largeText1}</h1>
                    <img src={urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image" />

                    <div>
                        <Link href={`/product/${heroBanner.product}`}>
                            <button type="button">{heroBanner.buttonText}</button>
                        </Link>
                        <div className="desc">
                            <h5>Description</h5>
                            <p>{heroBanner.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}