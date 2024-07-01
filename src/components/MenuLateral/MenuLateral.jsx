import image from "../../assets/images/logoExemplo.png";
import iconeDashboard from "../../assets/images/icons/Dashboard.png";
import iconePagamentos from "../../assets/images/icons/Pagamentos.png";
import iconeEntregadores from "../../assets/images/icons/Entregadores.png";
import iconeFaturamento from "../../assets/images/icons/Faturamento.png";
import iconeContrato from "../../assets/images/icons/Contrato.png";
import iconeCoordenadores from "../../assets/images/icons/Coordenadores.png";
import iconeConfiguração from "../../assets/images/icons/Configuração.png";
import iconeMenu from "../../assets/images/icons/Menu.png";
import LogoVEL from "../../assets/images/VEL2.png";
import { useNavigate } from "react-router-dom";
import { Container } from "./menulateralstyle.ts";

export default function MenuLateral({ pagina }) {
  function toggleMenu(event) {
    const toggler = event.target;
    const elementos = [
      document.querySelector("header"),
      document.querySelector("main .logoEmpresa h2"),
      document.querySelector("footer > h2"),
    ];
    const spaName = document.querySelectorAll(".spanName");
    const aside = document.querySelector(".MenuLateral");
    const ToggleButton = document.querySelector(".ToggleButton");
    const listas = document.querySelectorAll(".MenuLateral ul li");

    if (toggler.classList.contains("flip")) {
      toggler.classList.remove("flip");
      elementos.map((elemento) => elemento.classList.remove("desaparecer"));
      for (let c = 0; c <= spaName.length - 1; c++) {
        spaName[c].classList.remove("desaparecer");
      }
      aside.classList.remove("shrinkedAside");
      ToggleButton.style.left = "90%";
      for (let c = 0; c <= listas.length - 1; c++) {
        listas[c].style.left = "unset";
      }
    } else {
      toggler.classList.add("flip");
      elementos.map((elemento) => elemento.classList.add("desaparecer"));
      for (let c = 0; c <= spaName.length - 1; c++)
        spaName[c].classList.add("desaparecer");
      aside.classList.add("shrinkedAside");
      ToggleButton.style.left = "80%";
      console.log(listas.length);
      for (let c = 0; c <= listas.length - 1; c++) {
        listas[c].style.left = "40%";
      }
    }
  }

  const selecionado = (link) => (pagina === link ? "pageSelected" : "");
  const navigate = useNavigate();

  return (
    <Container>
      <aside className="MenuLateral">
        <header style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={LogoVEL}
            className="LogoVEL"
            alt="Logo VEl"
            style={{ width: "60%", margin: "30px 0" }}
          />
        </header>
        <div className="ToggleButton">
          <img
            src={iconeMenu}
            alt="Menu para fechar menu lateral"
            onClick={toggleMenu}
          />
        </div>
        <main>
          <div className="logoEmpresa">
            <div>
              <img
                src={image}
                alt="Logo de usuário"
                className="imgEmpresa"
                onClick={() => navigate("/perfilempresa")} style={{cursor: "pointer"}}
              />
            </div>
            <h2 className="nomeEmpresa">Nome Empresa</h2>
          </div>
          <ul>
            <li className={selecionado("Dashboard")}>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/dashboard")}
              >
                <img src={iconeDashboard} alt="Icone de Dashboard" />
                <span className="spanName">Dashboard</span>
              </a>
            </li>
            <li className={selecionado("Pagamentos")}>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/pagamentos")}
              >
                <img src={iconePagamentos} alt="Icone de pagamento" />
                <span className="spanName">Pagamentos</span>
              </a>
            </li>
            <li className={selecionado("Entregadores")}>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/entregadores")}
              >
                <img src={iconeEntregadores} alt="Icone de entregador" />
                <span className="spanName">Entregadores</span>
              </a>
            </li>
            <li className={selecionado("Faturamento")}>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/faturamento")}
              >
                <img src={iconeFaturamento} alt="Icone de faturamento" />
                <span className="spanName">Faturamento</span>
              </a>
            </li>
            <li className={selecionado("Contrato")}>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/contratoempregador")}
              >
                <img src={iconeContrato} alt="Icone de contrato" />
                <span className="spanName">Contrato</span>
              </a>
            </li>
            <li className={selecionado("Coordenadores")}>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/coordenador")}
              >
                <img src={iconeCoordenadores} alt="Icone de coordenador" />
                <span className="spanName">Coordenadores</span>
              </a>
            </li>
          </ul>
        </main>
        <footer>
          <h2>Suporte</h2>
          <ul>
            <li className={selecionado("Configuração")}>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/configuracao")}
              >
                <img src={iconeConfiguração} alt="Icone de Configuração" />
                <span className="spanName">Configuração</span>
              </a>
            </li>
          </ul>
        </footer>
      </aside>
    </Container>
  );
}
