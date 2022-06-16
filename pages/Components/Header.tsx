import Link from "next/link";

const Header = () => {
    return (
        <header>        
                <div>
                    
                    <div>
                        <div>
                            <Link href="../Home">
                                <a>Home</a>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div>
                            <Link href="../Projects">
                                <a>Projects</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="../Productivity">
                                <a>Productivity</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="../Contact">
                                <a>Contact</a>
                            </Link>
                        </div>
                    </div>

                </div>
        </header>
    )
}
export default Header;