import { FaArrowLeft, FaExclamationTriangle } from "react-icons/fa"
import { Link } from "react-router-dom"


const NotFoundPage = () => {
    return (
        <section className="h-96 flex flex-col items-center justify-center text-center gap-4">

            <FaExclamationTriangle className="text-yellow-500 text-8xl" />
            <h1 className="text-3xl font-bold">Page Not Found</h1>
            <Link to={"/"} className="bg-yellow-500 px-8 py-2 rounded inline-flex items-center gap-2 text-white text-sm"><FaArrowLeft /> Return to Home</Link>

        </section>
    )
}

export default NotFoundPage