import scissors from "./Scissors.png"
import shave from "./Shaving-razor.png"
import styling from "./styling.png"
import trim from "./Trim.png"
import logo from "./Logo.png"
import profile_pic from "./profile_pic.png"
import about from "./about.jpg"
import about_us from "./About_us.jpg"

import hairstyle1 from "./HS1.jpg"
import hairstyle2 from "./HS2.jpg"
import hairstyle3 from "./HS3.jpg"
import hairstyle4 from "./HS4.jpg"
import hairstyle5 from "./HS5.jpg"
import hairstyle6 from "./HS6.jpg"
import hairstyle7 from "./HS7.jpg"
import hairstyle8 from "./HS8.jpg"
import hairstyle9 from "./HS9.jpg"
import hairstyle10 from "./HS10.jpg"

export interface assetsType {
    about_us: string;
    about: string;
    profile_pic: string;
    logo: string;
    scissors: string;
    shave: string;
    styling: string;
    trim: string;
}

export interface ServiceType {
    type: string;
    service: string;
    image: string;
}

export interface galleryType{
    image: string;
    type: string;
    price: number;
}

export const assets: assetsType = {
    hairstyle1,
    hairstyle2,
    hairstyle3,
    hairstyle4,
    hairstyle5,
    hairstyle6,
    hairstyle7,
    hairstyle8,
    hairstyle9,
    hairstyle10,
    about_us,
    about,
    profile_pic,
    logo,
    scissors,
    shave,
    styling,
    trim
}

export const services: ServiceType[] = [
    {
        type: "HAIRCUT",
        service: "Always look your best with our professional barbers and stylist.",
        image: scissors
    },
    {
        type: "SHAVING",
        service: "Always look your best with our professional barbers and stylist.",
        image: shave
    },
    {
        type: "STYLING",
        service: "Always look your best with our professional barbers and stylist.",
        image: styling
    },
    {
        type: "TRIMMING",
        service: "Always look your best with our professional barbers and stylist.",
        image: trim
    }
]

export const gallery: galleryType[] = [
    { 
        image: "hairstyle1",
        type: "Low Fade", 
        price: "100" 
    },
    { 
        image: "hairstyle2",
        type: "Clean Cut", 
        price: "200" 
    },
    { 
        image: "hairstyle3",
        type: "Blend", 
        price: "150" 
    },
    { 
        image: "hairstyle4",
        type: "Blend", 
        price: "150" 
    },
    { 
        image: "hairstyle5",
        type: "Blend", 
        price: "150"
    },
    { 
        image: "hairstyle6",
        type: "Blend", 
        price: "150" 
    },
    { 
        image: "hairstyle7",
        type: "Blend", 
        price: "150" 
    },
    { 
        image: "hairstyle8",
        type: "Blend", 
        price: "150"
    },
    { 
        image: "hairstyle9",
        type: "Blend", 
        price: "150" 
    },
    { 
        image: "hairstyle10",
        type: "Blend", 
        price: "150"
    },
]
