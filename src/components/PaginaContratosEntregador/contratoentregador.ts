import styled from "styled-components";
export const Container = styled.div.attrs({ className: "container" })`

.Container {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 83vw;
  width: -webkit-fill-available !important;
  min-height: 100vh;
}

.titulo {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #005A8D;
  color: #fff;
  width: 80%;
  height: 5em;
  border-radius: 15px;
  margin: 2em 0 1em 0;
  font-size: 1.3em;
  box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
}

.Quadro {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 90%;
  padding: 1.5em 2.5em;
  border-radius: 10px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  height: 75%;
}

.Superior {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1em 1em;
}

.Superior h2 {
  font-size: 1.9em;
  color: #222222;
}

.Botao-NovoContrato {
  width: 200px;
  height: 2.2em;
  border: 2px solid #005A8D;
  border-radius: 17px;
  transition: all 0.3s;
  cursor: pointer;
  background: white;
  font-size: 1.2em;
  font-weight: 700;
  padding: 0.1em;
  color: #005A8D;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;
}

.Botao-NovoContrato:hover, 
.Botao-Empresa:hover {
  background: #005A8D;
  color: white;
}

.Botao-NovoContrato svg {
  font-size: 0.6em;
}

.Botao-NovoContrato p {
  display: flex;
  align-items: center;
}

.Botoes {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.Botoes a {
  text-decoration: none;
}

.Botao-Entregador {
  width: 200px;
  border: 2px solid #005A8D;
  background-color: #005A8D;
  border-radius: 20px;
  color: #ffffff;
  font-size: 1.2em;
  font-weight: 700;
  display: flex;
  justify-content: center;
}

.Botao-Empresa {
  width: 200px;
  border: 2px solid #005A8D;
  border-radius: 20px;
  transition: all 0.3s;
  cursor: pointer;
  background: white;
  font-size: 1.2em;
  font-weight: 700;
  padding: 0.1em;
  color: #005A8D;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.Titulo-Tabela {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: v#ECF3FB;
  border-radius: 10px;
  padding: 0 2.5em;
  margin: 1em 0;
}

.Titulo-Tabela h3 {
  padding: 0.4em;
}

.Tabela {
  padding: 0 1em;
}

.Dados {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #CADBDE;
  padding: 0 1.1em;
}

.Dados p {
  padding: 0.5em;
  font-weight: 600;
}

.Icones {
  color: #005A8D;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.ID {
  width: 10%;
}

.ID-Empresa {
  width: 20%;
  display: flex;
  justify-content: center;
  text-align: center;
}

.Cliente {
  width: 40%;
  display: flex;
}
`;
