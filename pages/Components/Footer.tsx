import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <Link href="">
                        <a>Linkedin</a>
                    </Link>
                </div>
                <div>
                    <Link href="">
                        <a>Github</a>
                    </Link>
                </div>
                <div>
                    <Link href="">
                        <a>Twitter</a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
export default Footer;