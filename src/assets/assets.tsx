import scissors from "./Scissors.png"
import shave from "./Shaving-razor.png"
import styling from "./styling.png"
import trim from "./Trim.png"
import logo from "./Logo.png"
import profile_pic from "./profile_pic.png"
import about from "./about.jpg"

export const assets = {
    about,
    profile_pic,
    logo,
    scissors,
    shave,
    styling,
    trim
}

export const services = [
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
