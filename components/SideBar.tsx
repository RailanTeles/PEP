
export const SideBar = () => {
    return (
        <div className="fixed flex flex-col h-full border-r-4 border-[#1E1E1E] w-[18%] pt-19 bg-white">
            <hr className="w-full my-3.5"/>
            <a href="/" className="flex w-full pl-3 gap-3 my-2 items-center cursor-pointer">
                <img src="/Images/home.png" alt="" />
                <p className="font-bold text-xl">Início</p>
            </a>
            <a href="/pacientes" className="flex w-full pl-3 gap-3 my-2 items-center cursor-pointer">
                <img src="/Images/paciente.png" alt="" />
                <p className="font-bold text-xl">Pacientes</p>
            </a>
        </div>
    )
}