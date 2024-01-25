import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Links from "@/components/Links";

export default function layout ({children}){
    return(
        <div>
            <Header/>
            <Links/>
            <main>{children}</main>
            {/* <Footer/> */}
        </div>
    )
}