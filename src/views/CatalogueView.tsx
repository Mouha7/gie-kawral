import { Link } from "react-router-dom";

export function CatalogueView() {
    return (
        <div className="flex flex-col h-screen">
            <h2 className="text-2xl font-bold mb-4">Bienvenue dans le Catalogue</h2>
            <p className="mb-4">Voici la liste de vos produits :</p>
            <Link to="/produit">Clicked Here ⬇️ !</Link>
            <Link to="/catalogue/gamme-jus">Gamme de jus ⬇️ !</Link>
        </div>
    );
}