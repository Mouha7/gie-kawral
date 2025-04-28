import { Link } from "react-router-dom";

export function NotFoundView() {
    return (
        <div className="flex flex-col h-screen">
            <h2 className="text-2xl font-bold mb-4">404 Not Found</h2>
            <p className="text-gray-600">La page que vous recherchez n'existe pas.</p>
            <Link to="/">Home</Link>
        </div>
    );
}