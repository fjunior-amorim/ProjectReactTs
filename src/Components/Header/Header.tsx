import { Conteiner, Content, ImageLogo } from "./Header.module";
import logoSvg from '..//..//assets/icons/logo.svg';

function Header() {
    return(
        <>
            <Conteiner>
                <Content>
                    <ImageLogo src={logoSvg} alt="image User"/>
                    <button>
                        <img src= "https://avatars.githubusercontent.com/u/86170296?v=4" alt="Logo do Projeto" />
                    </button>
                </Content>
            </Conteiner>
        </>
    )
}
export default Header;