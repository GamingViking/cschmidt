'use client'

import { useSearchParams } from "next/navigation";

const WelcomeBack = () => {
    const searchParams = useSearchParams();
    const wasClicked = searchParams.get('clicked') === 'true';

    if (!wasClicked) return null;

    return(
        <div className="absolute md:text-5xl text-3xl top-24 text-transparent bg-gradient-radial bg-clip-text from-yellow-500 via-orange-500 to-red-500 animate-text-gradient bg-[length:200%]">Welcome back!</div>
    );
}

export default WelcomeBack;