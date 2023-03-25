import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {

    const router = useRouter()

    return (
        <nav className="flex justify-start items-center h-16 mx-6">
            <div className="flex gap-3">
               <NavbarItem title="Home"
                    href="/"
                    currentPage={router.pathname} />
               <NavbarItem title="Blogs"
                    href="/blogs"
                    currentPage={router.pathname} />
            </div>
        </nav>
    )
}

interface NavbarItemProps {
    title: string,
    href: string,
    currentPage: string
}

function NavbarItem(props: NavbarItemProps) {
    return (
        <Link className={props.currentPage === props.href ? "underline" : ""} href={props.href}>{props.title}</Link>
    )
}