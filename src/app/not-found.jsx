import Image from "next/image";
import notFoundImg from "@/assets/notfoundimage.png" 

const NotFound = () => {
    return (
        <div className=" mx-auto">
            <Image src={notFoundImg} width={500} height={1000} alt="not found"/>
        </div>
    );
};

export default NotFound;