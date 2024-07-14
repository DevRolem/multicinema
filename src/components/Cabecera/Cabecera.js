import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import CabeceraLink from "../CabeceraLink/CabeceraLink"

function Cabecera(){
    return(
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <span>Aluraflix</span>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="./">
                    Home
                </CabeceraLink>
                <CabeceraLink url="./Favoritos">
                   Favoritos
                </CabeceraLink>
                <CabeceraLink url="/new-video">
                    Nuevo VIdeo
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera