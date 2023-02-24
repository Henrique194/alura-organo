import "./Footer.scss";

export function Footer() {
    return (
        <footer className="footer-component">
            <section>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <img src="/images/fb.png" alt="Icone Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                            <img src="/images/tw.png" alt="Icone Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <img src="/images/ig.png" alt="Icone Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="Logo Organo" />
            </section>
            <section>
                <p>Desenvolvido para curso no Alura.</p>
            </section>
        </footer>
    );
}
