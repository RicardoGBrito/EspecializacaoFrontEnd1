export default function Navbar(){

    return(
        <nav className="bg-primary flex w-full justify-between h-[70px] items-center px-12 font-Poppins text-xl">
            <h1 className="font-bold">DHProducts</h1>
            <div className="flex gap-11 font-light">
                <p>Produtos</p>
                <p>Quem somos</p>
                <p>Sair</p>
            </div>
        </nav>
    )
}