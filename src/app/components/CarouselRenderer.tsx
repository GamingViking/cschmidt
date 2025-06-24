'use client'

import { useState, useEffect } from 'react';
import CarouselWrapper from './CarouselWrapper';
import Carousel from './Carousel';
import Card from './Card';
import FellSealCoverImage_compressed from "../../../public/images/FellSealCoverImage_compressed.jpeg";
import SuperheroWebsiteImage from "../../../public/images/SuperheroWebsiteImage_compressed.png";
import BattleshipGame from "../../../public/images/BattleshipGame.png";
import WebsiteFirstIterationPicture_compressed from "../../../public/images/WebsiteFirstIterationPicture_compressed.png";
import MobileCarouselWrapper from './MoboleCarouselWrapper';

const CarouselRenderer = () => {
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);
        const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
    }

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

    if (!mounted) {
        return(
            <div className='h-40 text-white text-center text-4xl z-50'>Loading...</div>
        );
    }

    return(
        isMobile ? (
            <MobileCarouselWrapper>
                <Card text="Fell Seal is an isometric turn-based RPG that channels the spirit of Final Fantasy Tactics in the modern era. It is a game full of possibilities, and my latest passion project has been modding new classes, portraits, and items into the game to creatively expand those exciting possibilities - soon to be a published mod on the nexus!" link="https://github.com/GamingViking/FellSealClasses" linkText="Repo" alt="Fell Seal: Arbiter's Mark Cover Image" image={FellSealCoverImage_compressed.src} link2="https://www.6eyesstudio.com/fell-seal-arbiter-s-mark" link2Text="Game" />
                <Card text="I really enjoy working in the front end and wanted to gain some practice calling on a publicaly accessible API. To that end, I created a website which lets you fetch data on superheroes and villains from a database. It was built with Next.js, Typescript and Tailwind and is hosted on Vercel." link="https://github.com/GamingViking/superheroes?tab=readme-ov-file" linkText="Repo" alt="Superhero Website Image" image={SuperheroWebsiteImage.src} link2="https://superherosearch.vercel.app/" link2Text="Website" />
                <Card text="I wanted to practice implementing functions and classes while having a little fun, and so I made battleship in C#! This modular game comes with many tweakable settings including grid size, enableing cheats, and different voices for your opponent! Download the game from my github and play in your own terminal!" link="https://github.com/GamingViking/CSharpBattleship" linkText="Repo" alt="C# Battleship game in the terminal" image={BattleshipGame.src} link2="" link2Text="" />
                <Card text="You're already here! This website was made to house a few of my projects and share some of my interests. Beyond that, I have used it as a place to try new techniques and experiment with things that interest me. Fun fact - the picture is of an older iteration! It was built with Next.js, Typescript and Tailwind and is hosted on Vercel." link="https://github.com/GamingViking/cschmidt" linkText="Repo" alt="Screen shot earlier iteration of this website" image={WebsiteFirstIterationPicture_compressed.src} link2="https://cschmidt.vercel.app/?clicked=true" link2Text="Website" />
            </MobileCarouselWrapper>
    ) : (
        <CarouselWrapper>
            <Carousel speed="60">
                <Card text="Fell Seal is an isometric turn-based RPG that channels the spirit of Final Fantasy Tactics in the modern era. It is a game full of possibilities, and my latest passion project has been modding new classes, portraits, and items into the game to creatively expand those exciting possibilities - soon to be a published mod on the nexus!" link="https://github.com/GamingViking/FellSealClasses" linkText="Repo" alt="Fell Seal: Arbiter's Mark Cover Image" image={FellSealCoverImage_compressed.src} link2="https://www.6eyesstudio.com/fell-seal-arbiter-s-mark" link2Text="Game" />
                <Card text="I really enjoy working in the front end and wanted to gain some practice calling on a publicaly accessible API. To that end, I created a website which lets you fetch data on superheroes and villains from a database. It was built with Next.js, Typescript and Tailwind and is hosted on Vercel." link="https://github.com/GamingViking/superheroes?tab=readme-ov-file" linkText="Repo" alt="Superhero Website Image" image={SuperheroWebsiteImage.src} link2="https://superherosearch.vercel.app/" link2Text="Website" />
                <Card text="I wanted to practice implementing functions and classes while having a little fun, and so I made battleship in C#! This modular game comes with many tweakable settings including grid size, enableing cheats, and different voices for your opponent! Download the game from my github and play in your own terminal!" link="https://github.com/GamingViking/CSharpBattleship" linkText="Repo" alt="C# Battleship game in the terminal" image={BattleshipGame.src} link2="" link2Text="" />
                <Card text="You're already here! This website was made to house a few of my projects and share some of my interests. Beyond that, I have used it as a place to try new techniques and experiment with things that interest me. Fun fact - the picture is of an older iteration! It was built with Next.js, Typescript and Tailwind and is hosted on Vercel." link="https://github.com/GamingViking/cschmidt" linkText="Repo" alt="Screen shot earlier iteration of this website" image={WebsiteFirstIterationPicture_compressed.src} link2="https://cschmidt.vercel.app/?clicked=true" link2Text="Website" />
            </Carousel>
        </CarouselWrapper>
    )
    );
}

export default CarouselRenderer;