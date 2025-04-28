export function CardBox() {
    return (
        <div className="flex flex-col gap-2.5 w-80">
            <div className="flex-grow flex justify-center p-4 bg-white dark:bg-bio-contraste/25 rounded-lg shadow-md hover:bg-bio-contraste/50 relative">
                <img 
                    className="w-64 object-contain"
                    src="/assets/Orange.png" 
                    alt="Orange Juice" 
                />
                <button className="w-full font-black bg-bio text-bio-contraste rounded-b-lg hover:dark:bg-bio-contraste p-2 absolute bottom-0 left-0 cursor-pointer">
                    AJOUTER AU PANIER
                </button>
            </div>
            <div>
                <h2 className="text-lg font-black">Boisson à bénéfices - Défenses</h2>
                <p>800 FCFA</p>
            </div>
        </div>
    );
}