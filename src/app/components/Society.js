import Link from "next/link";

export default function Society() {
    return (
        <div className="fixed lg:flex hidden top-1/2 right-[20px] -translate-y-1/2 z-[99] flex-col justify-center gap-[20px]">
            <Link className="w-fit bg-white p-[10px] rounded-[360px]" href="https://www.instagram.com/astanaintlforum/#">
                <img  src="/societyInst.svg" className="w-[20px] h-[20px]"/>
            </Link>

            <Link className="w-fit bg-white p-[10px] rounded-[360px]" href="https://www.youtube.com/@astanainterforum">
                <img  src="/societyYT.svg" className="w-[20px] h-[20px]"/>
            </Link>

            <Link className="w-fit bg-white p-[10px] rounded-[360px]" href="https://x.com/AstanaIntlForum">
                <img  src="/societyX.svg" className="w-[20px] h-[20px]"/>
            </Link>

            <Link className="w-fit bg-[var(--customaccent)] p-[10px] rounded-[360px]" href="#header">
                <img  src="/chevron-up.svg" className="w-[20px] h-[20px]"/>
            </Link>
        </div>
    );
}
