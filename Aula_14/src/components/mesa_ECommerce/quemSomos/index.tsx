import linkedin from "../assets/icons/linkedin.svg"
import facebook from "../assets/icons/facebook.svg"

export default function QuemSomos(){

    return(
        <div className="flex h-screen w-full font-Poppins text">
            <div className="w-[70vh] h-full bg-primary flex justify-center items-center">
                <h1 className="text-3xl font-semibold">Quem somos</h1>
            </div>
            <div className="bg-white flex flex-col ml-[74px] mt-[59px] ">
                <h1 className="text-xl font-semibold mb-4">Quem somos</h1>
                <p className="text-xl font-light mb-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae enim hendrerit, accumsan dolor ac, 
                    tincidunt nunc. Nunc non commodo nisi. Pellentesque a rhoncus lorem. Nam ac convallis orci, posuere dictum est. 
                    Donec dapibus imperdiet pharetra. Nam eu odio at metus semper efficitur eu ac nisi. Vivamus cursus risus mauris, 
                    sed molestie mi hendrerit a. 
                </p>
                <p className="text-xl font-light mb-[139px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae enim hendrerit, accumsan dolor ac, 
                    tincidunt nunc. Nunc non commodo nisi. Pellentesque a rhoncus lorem. Nam ac convallis orci, posuere dictum est. 
                    Donec dapibus imperdiet pharetra. Nam eu odio at metus semper efficitur eu ac nisi. Vivamus cursus risus mauris, 
                    sed molestie mi hendrerit a. 
                </p>
                <div className="flex gap-[35px] justify-center">
                    <img className="w-[50px] h-[50px]" src={linkedin}/>
                    <img className="w-[50px] h-[50px]" src={facebook}/>
                </div>
            </div>
        </div>
    )
}