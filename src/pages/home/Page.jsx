//importação do modulo css
import style from "./home.module.css"

//importação das img
import heroImg from "../../assets/heroImg/hero1.jpg";

//importação das img da secção de filtros
import vegetal from "../../assets/sectionFiltersImg/vegetais.jpg";
import leite from "../../assets/sectionFiltersImg/leite3.jpg";
import fruta from "../../assets/sectionFiltersImg/frutas.jpg";
import mel from "../../assets/sectionFiltersImg/mel.jpg";
import carne from "../../assets/sectionFiltersImg/carne.jpg";

//importação das img da secção fav. da estação

import vegetal1 from "../../assets/sectionFiltersImg/vegetais2.jpg";
import farm from "../../assets/heroImg/hero.jpg";
import inscription1 from "../../assets/heroImg/inscription.jpg";
import mel1 from "../../assets/sectionFiltersImg/mel.jpg";
import carne1 from "../../assets/sectionFiltersImg/carne2.jpg";


//importação dos icons para a secção do aboutUs
import { PiMedal } from "react-icons/pi";
import { LuTruck } from "react-icons/lu";
import { LuLeaf } from "react-icons/lu";

//importação dos icons para a seacção das incrições
import { MdDone } from "react-icons/md";

//importação dos icons para a secção dos depoimentos
import { MdMoveToInbox } from "react-icons/md";

//importação dos icons para a secção dos favoritos da estação
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Home() {
    return(
        <>
            <section className={style.heroSection} 
                style={{
                    backgroundImage: `url(${heroImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh'
                }}
            >
                <div className={style.heroInfo}>
                    <h1>
                        Fresco da nossa fazenda para a sua mesa
                    </h1>
                    <p>
                        Produtos orgânicos cultivados localmente e entregues diretamente da fazenda da nossa família.
                    </p>
                    <div className={style.btns}>
                        <button className={style.btnBuy}>
                            comprar agora
                        </button>
                        <button className={style.btnOurHistory}>
                            nossa história
                        </button>
                    </div>
                </div>
            </section>
            <section className={style.ourVision}>
                <div>
                    <LuLeaf size={20} color="green" className={style.icon}/>
                    <h2>100% Orgânico</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum maiores porro </p>
                </div>
                <div>
                    <LuTruck size={20} color="green" className={style.icon}/>
                    <h2>Entrega de produtos frescos da fazenda </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab reprehenderit, pariatur sed 
                    </p>
                </div>
                <div>
                    <PiMedal size={20} color="green" className={style.icon}/>
                    <h2>Qualidade garantida </h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quidem iusto modi ab </p>
                </div>
            </section>
            <section className={style.categorySection}>
                <h1>
                    Comprar por categoria
                </h1>
                <div className={style.containerCategory}>
                    <div className={style.category}
                        style={{
                            backgroundImage: `url(${vegetal})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <span>
                            Vegetais
                        </span>
                        <div className={style.shadow}>
                        </div>
                    </div>
                    <div className={style.category}
                            style={{
                            backgroundImage: `url(${fruta})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        <span>
                            Frutas
                        </span>
                        <div className={style.shadow}>
                        </div>
                    </div>
                    <div className={style.category}
                        style={{
                            backgroundImage: `url(${leite})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <span>
                            Leitaria
                        </span>
                        <div className={style.shadow}>
                        </div>
                    </div>
                    <div className={style.category}
                        style={{
                            backgroundImage: `url(${carne})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <span>
                            Carne
                        </span>
                        <div className={style.shadow}>
                        </div>

                    </div>
                    <div className={style.category}
                        style={{
                            backgroundImage: `url(${mel})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <span>
                            Mel & Conservas
                        </span>
                        <div className={style.shadow}>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.FavSeason}>
                <h1>Os favoritos da estação</h1>
                <span className={style.seeMore}>Ver mais<MdOutlineKeyboardArrowRight/> </span>
                <div className={style.containerFavOfSeason}>
                    <div className= {style.favOfSeason}>
                        <span className={style.organic}>organic</span>
                        <img src={vegetal1} alt="fav" />
                        <div className={style.info}>
                            <span className={style.typeOfFood}>
                                Vegetais
                            </span>
                            <h3>
                                Tomates Frescos
                            </h3>
                            <p className={style.price} >
                                15.500Kz<span>/caixa</span>
                            </p>
                            <FiShoppingCart className={style.icon} />
                        </div>
                    </div>
                    <div className= {style.favOfSeason}>
                        <span className={style.organic}>organic</span>
                        <img src={carne1} alt="fav" />
                        <div className={style.info}>
                            <span className={style.typeOfFood}>
                                Carne
                            </span>
                            <h3>
                                Carnes Frescas
                            </h3>
                            <p className={style.price} >
                                1.500Kz<span>/Peso</span>
                            </p>
                            <FiShoppingCart className={style.icon} />
                        </div>
                    </div>
                    <div className= {style.favOfSeason}>
                        <span className={style.organic}>organic</span>
                        <img src={mel1} alt="fav" />
                        <div className={style.info}>
                            <span className={style.typeOfFood}>
                                Conservas
                            </span>
                            <h3>
                                Mel Fresco 
                            </h3>
                            <p className={style.price} >
                                5.500Kz<span>/Frasco</span>
                            </p>
                            <FiShoppingCart className={style.icon}  />
                        </div>
                    </div>
                    
                </div>
            </section>
            <section className={style.aboutUsSection}>
                <div className={style.info}>
                    <h1>
                        Nossa fazenda familiar
                    </h1>
                    <p>Por mais de três gerações, nossa família cultiva as terras férteis de Green Acres. O que começou como uma pequena horta se transformou em uma próspera fazenda de 50 acres dedicada a práticas agrícolas sustentáveis e orgânicas.</p>
                    <p>Acreditamos em trabalhar com a natureza, não contra ela. Nossos métodos agrícolas se concentram na saúde do solo, biodiversidade e gestão ambiental para produzir os alimentos mais nutritivos e saborosos possíveis.</p>
                    <button>Saiba mais sobre nós</button>
                </div>
                <img src={farm} alt="farm" />
            </section>
            <section className={style.inscription}>
                
                <img src={inscription1} alt="inscription" />
                
                <div className={style.inscriptionInfo}>
                        <h1>
                            Assinatura semanal da Farm Box
                        </h1>
                        <p>Receba uma caixa selecionada de produtos sazonais entregue à sua porta todas as semanas. Cada caixa contém uma variedade de vegetais frescos, frutas e produtos agrícolas colhidos no pico de maturação.</p>
                        <ul>
                            <li>
                                <MdDone/>
                                Personalizável com base em suas preferências
                            </li>
                            <li>
                                <MdDone/>
                                Pule ou pause as entregas a qualquer momento
                            </li>
                            <li>
                                <MdDone/>
                                Inclui receitas sazonais
                            </li>
                            <li>
                                <MdDone/>
                                Economize 15% em comparação com compras individuais~
                            </li>
                        </ul>
                        <div className={style.containerButtons}>
                            <button className={style.btn1}>Inscreva-se agora</button>
                            <button className={style.btn2}>Saiba mais</button>
                        </div>
                </div>
            </section>
            <section className={style.depoimentsSection}>
                <h1>O que dizem os nossos clintes </h1>
                <div className={style.containerInfo}>
                        <div className={style.depoiments}>
                                <MdMoveToInbox color="green" size={25} className={style.icon}/>
                                <div className={style.text}>
                                    <p>
                                        Os produtos da <strong>AgroConecta</strong> são incríveis! Tudo tem um gosto muito melhor do que o que encontro no supermercado. Minha família pode realmente sentir a diferença
                                    </p>
                                    <h3 className={style.nameClient}>Adão João</h3>
                                    <span className={style.typeClient} >Cliente Local</span>
                                </div>
                        </div>
                        <div className={style.depoiments}>
                                <MdMoveToInbox color="green" size={25} className={style.icon}/>
                                <div className={style.text}>
                                    <p>
                                       Estou recebendo a caixa semanal da fazenda há 6 meses e isso mudou a forma como comemos. Estamos experimentando novos vegetais e a qualidade é consistentemente excelente.
                                    </p>
                                    <h3 className={style.nameClient}>Michael Rodriguez</h3>
                                    <span className={style.typeClient} >Membro Assinante</span>
                                </div>
                        </div>
                        <div className={style.depoiments}>
                                <MdMoveToInbox color="green" size={25} className={style.icon}/>
                                <div className={style.text}>
                                    <p>
                                        Como chef, obtenho todos os meus produtos da <strong>AgroConecta</strong>. Seu compromisso com a qualidade e práticas agrícolas sustentáveis se alinha perfeitamente com os valores do meu restaurante.
                                    </p>
                                    <h3 className={style.nameClient}>Chef Emma Williams</h3>
                                    <span className={style.typeClient} >Dono de restaurante local</span>
                                </div>
                        </div>
                </div>
            </section>
        </>
    )
}