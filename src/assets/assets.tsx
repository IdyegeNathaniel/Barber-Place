import scissors from "./Scissors.png"
import shave from "./Shaving-razor.png"
import styling from "./styling.png"
import trim from "./Trim.png"
import logo from "./Logo.png"
import profile_pic from "./profile_pic.png"
import about from "./about.jpg"
import about_us from "./About_us.jpg"

export interface ServiceType{
    type: string;
    service: string;
    image: string;
}

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

export const assets: assetsType = {
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
