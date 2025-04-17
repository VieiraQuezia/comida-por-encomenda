import "./footer.css";
import logoinstagram from "../../assets/instagram (1).png";
import logofacebook from "../../assets/facebook.png";
import ImgGitHub from "../../assets/github.png";

function Footer () {
    return (
        <>
        <section className="bodyFooter">
            <section className="infoContatos">

                <section className="redes">

                    <section className="info"> {/*classe para deixar o nome do lado da logo */}
                        <img className="imgRedes" src={logoinstagram} />
                        <p>@pizzariamanoeloficial</p>
                    </section>

                    <section className="info"> 
                        <img className="imgRedes" src={logofacebook} />
                        <p>pizzariamanoeloficial</p>
                    </section>

                </section>

                <section className="contato"> 
                    <p> 📞 Contado para Vendas: (19) 99240-9993</p>
                    <p> 📩 Email para Contato: pizzariamanoel@gmail.com</p>
                </section>

            </section>

            <section className="informacoes"> 

               

                <section className="listas"> 
                    <h4> Influenciadores e Criadores de Conteúdo</h4>
                  <ul>
                    <li>Jacquin - Principal Patrocinador</li>

                    <li>Paola Carosella - Apreciadora de Pratos</li>

                    <li>Fogaça - Apreciador de Carnes</li>
                  </ul>
                </section>

                <section className="listas"> 
                    <h4>  Marcas Complementares </h4>
                        <ul>
                            <li>Catupiry (O original e mais usado pelas pizzarias)</li>

                           <li>Mutti (Polpa de tomate importada da Itália)</li>

                           <li>Perdigão (Presunto, peito de peru)</li>

                           <li>Ceratti (Pepperoni, copa, presunto parma)</li>

                           <li>Andorinha (Azeite português)</li>

                           <li>Tramontina (Marca de utensílios)</li>


                        </ul>
                </section>

                <section className="sobreNos"> 
                    <p> <h4> Sobre a Pizzaria  </h4> Na Pizzaria Manoel, cada pizza é mais do que uma refeição; é uma
              experiência cuidadosamente elaborada para encantar seus sentidos.
              Desde o início, nosso compromisso sempre foi oferecer mais do que
              sabor: oferecemos momentos de prazer, tradição e inovação em cada
              fatia. <br /> Nascemos de uma paixão pela arte de fazer pizzas,
              onde cada ingrediente é escolhido com o mais profundo respeito à
              qualidade e ao sabor. Nossa missão é simples: proporcionar a você
              o melhor que a culinária pode oferecer, honrando as receitas
              tradicionais que nos trouxeram até aqui, enquanto exploramos novas
              combinações que despertam o paladar. <br/> Não perca tempo, faça já
              o seu pedido e aproveite uma pizza deliciosa!</p>
                </section>

              

            </section>
<nav className="logos">

            <a href="https://github.com/VieiraQuezia/comida-por-encomenda.git" target="_blank" >
            <img className="imgGithub" src={ImgGitHub}/>
            </a>

            </nav>
            <hr/>

            <section className="integrantes"> 
                <section> 
                    <h4>Ana Beatriz F. Pereira<br /> Guilherme Gabriel Santana <br /> Hayeska L. A. Machado <br /> Juan M. O. Lopes <br /> Leonardo Mori Vicente <br /> Lucas Aguiar P. Marin <br /> Quezia Amaral Vieira </h4>
                  
                </section>

                
            </section>
        </section>
        </>
    )
}

export default Footer