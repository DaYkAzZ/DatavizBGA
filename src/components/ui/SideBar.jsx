export function SideBar() {
    return (
        <div className="bg-slate-200 flex flex-col w-64 h-screen">
            <div>
                <h1 className="m-10 text-3xl font-bold">
                    Editor
                </h1>
            </div>
            <div className="flex justify-between my-5">
                <button className="px-10">
                    Accueil
                </button>
                <div className="bg-blueBGA w-1 rounded-full"></div>
            </div>
            <div className="px-10">
                <div className="flex items-center justify-between w-full my-2 text-white bg-blueBGA rounded-lg">
                <i class="ri-search-line m-2"></i><input type="text" name="" id="" placeholder="Rechercher" className="bg-blueBGA placeholder: placeholder-white text-white w-full p-2 rounded-lg"/>
                </div>
                <div className="w-full my-2">
                    <select name="" id="" className="bg-blueBGA text-white w-full p-2 rounded-lg">
                        <option value="">Trier</option>
                    </select>
                </div>
            </div>
            <div className="my-5 px-10">
                <button className="p-3 rounded-lg bg-blueBGA text-white">
                    Game
                </button>
            </div>
            <div className="m-5 px-10">
                <button className="p-3 rounded-lg text-blueBGA bg-slate-100">
                    Game
                </button>
            </div>
            <div className="m-5 px-10">
                <button className="p-3 rounded-lg text-blueBGA bg-slate-100">
                    Game
                </button>
            </div>
            <div className="m-5 px-10">
                <button className="p-3 rounded-lg text-blueBGA bg-slate-100">
                    Game
                </button>
            </div>
            <div className="m-5 px-10">
                <button className="p-3 rounded-lg text-blueBGA bg-slate-100">
                    Game
                </button>
            </div>
            <div className="m-5 px-10">
                <button className="p-3 rounded-lg text-blueBGA bg-slate-100">
                    Game
                </button>
            </div>
        </div>
    )
}