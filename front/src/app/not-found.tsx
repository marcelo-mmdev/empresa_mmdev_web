import Link from "next/link";

export default function NotFound(){
    return(
        <>
            <div>
                <h1>Pagina 404</h1>
                <p>Pagina não exitente</p>

                <Link href="/">
                    Voltar para Home
                </Link>
            </div>
        </>
    )
}