export function FilterBar() {
    return (
        <div className="flex justify-between items-center">
            <div className="m-5">
                <button className="bg-blueBGA text-white p-2 rounded-lg w-full">
                <i class="ri-home-2-fill m-1"></i>Général
                </button>
            </div>
            <div className="m-5">
                <button className="bg-slate-100 text-blueBGA p-2 rounded-lg w-full">
                <i class="ri-money-euro-box-line m-1"></i>Analyse Financière
                </button>
            </div>
            <div className="m-5">
                <button className="bg-slate-100 text-blueBGA p-2 rounded-lg w-full">
                <i class="ri-community-line m-1"></i>Analyse Communautaire
                </button>
            </div>
            <div className="m-5">
                <button className="bg-slate-100 text-blueBGA p-2 rounded-lg w-full">
                <i class="ri-gamepad-line m-1"></i>Analyse Tournois
                </button>
            </div>
            <div className="m-5">
                <button className="bg-slate-100 text-blueBGA p-2 rounded-lg w-full">
                <i class="ri-equalizer-line m-1"></i>Comparaison
                </button>
            </div>
        </div>
    )
}