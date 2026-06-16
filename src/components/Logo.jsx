import Image from "next/image";
import Link from "next/link";


const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-1">
           
           <Image 
            alt = "CourseHub Logo"
            src = {"/assets/logoc.png"}
            width = {100}
            height = {200}>
            
           </Image>
        </Link>
    );
};

export default Logo;