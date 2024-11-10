import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>Opps!!</h2>
            <button ><Link to="/">Return Home</Link></button>
        </div>
    );
};

export default ErrorPage;