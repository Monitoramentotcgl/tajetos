// Dados das linhas de ônibus (mantidos do original)
const mainBusLinesData = [
  "1 - 91-CORUJÃO PARIGOT",
  "2 - 91-RECOLHE",
  "3 - 92-CORUJAO W HAUER",
  "4 - 92-RECOLHE",
  "5 - 93-CORUJAO A STENGHEL",
  "6 - 93-RECOLHE",
  "7 - 96-CORUJAO G PIRES",
  "8 - 96-RECOLHE",
  "9 - 97-CORUJAO AVELINO VIEIRA",
  "10 - 97-RECOLHE",
  "11 - 99-CORUJAO S FRANCISCO",
  "12 - 99-RECOLHE",
  "13 - 100-ALEMANHA",
  "14 - 100-ALEMANHA/ CEASA",
  "15 - 100-RECOLHE",
  "16 - 101-N AMPARO/ G. TAMIOZZO",
  "17 - 101-N AMPARO/ A. VEZOZZO",
  "18 - 101-RECOLHE",
  "19 - 102-IDEAL",
  "20 - 102-IDEAL / CEASA",
  "21 - 102-P ANCHIETA",
  "22 - 102-RECOLHE",
  "23 - 103-SANTA FE/ MONTE CRISTO",
  "24 - 103-SANTA FE/ MANGABA",
  "25 - 103-RECOLHE",
  "26 - 104-INTERLAGOS/ MORUMBI",
  "27 - 104-INTERLAGOS/ STA TEREZINHA",
  "28 - 104-RECOLHE",
  "29 - 106-G PIRES/ ANTARES",
  "30 - 106-G PIRES/ HU-HEMOCENTRO",
  "31 - 106-RECOLHE",
  "32 - 108-ALBATROZ",
  "33 - 108-RECOLHE",
  "34 - 109-RODOVIARIA / BOULEVARD",
  "35 - 109-RECOLHE",
  "36 - 110-MR THOMAS",
  "37 - 110-MR THOMAS/ EUCALIPTOS",
  "38 - 110-MR THOMAS/ AV LONDRINA",
  "39 - 110-RECOLHE",
  "40 - 111-EUCALIPTOS",
  "41 - 111-EUCALIPTOS/ ROMANA",
  "42 - 111-RECOLHE",
  "43 - 112-A URBANAS/ SAO JOAO",
  "44 - 112-A URBANAS/ LARANJEIRAS",
  "45 - 112-RECOLHE",
  "46 - 113-PIONEIROS",
  "47 - 113-PIONEIROS/ PARQUE TAUA",
  "48 - 113-PIONEIROS/ ACQUAVILLE",
  "49 - 113-ATE | BOULEVARD",
  "50 - 113-RECOLHE",
  "51 - 114-JD MAIRA",
  "52 - 114-RECOLHE",
  "53 - 121-TRES FIGUEIRAS",
  "54 - 121-RECOLHE",
  "55 - 200-BRASIL",
  "56 - 200-RECOLHE",
  "57 - 301-PRESIDENTE",
  "58 - 301-RECOLHE",
  "59 - 302-HEDI",
  "60 - 302-RECOLHE",
  "61 - 303-TOKIO | SENT. CENTRAL",
  "62 - 303-TOKIO | SENT. OESTE",
  "63 - 303-RECOLHE",
  "64 - 305-CAMPUS",
  "65 - 305-CAMPUS/ REITORIA",
  "66 - 305-EXPRESSO/ UEL-CAMPUS",
  "67 - 305-APLICAÇÃO",
  "68 - 305-RECOLHE",
  "69 - 306-CIDADE UNIVERSITARIA",
  "70 - 306-RECOLHE",
  "71 - 307-A VIEIRA",
  "72 - 307-RECOLHE",
  "73 - 308-JARDIM BANDEIRANTES/GRACIOSA",
  "74 - 308-JARDIM BANDEIRANTES/ PARECIS",
  "75 - 308-RECOLHE",
  "76 - 309-NEY BRAGA",
  "77 - 309-NEY BRAGA/ FAST FRIO",
  "78 - 309-NEY BRAGA/ PUC",
  "79 - 309-NEY BRAGA | ATE TREVO",
  "80 - 309-ALLAMANDAS",
  "81 - 309-RECOLHE",
  "82 - 310-JD DO SOL",
  "83 - 310-ATE CASTANHEIRAS",
  "84 - 310-RECOLHE",
  "85 - 311-SANTA RITA/ CARNASCIALLI",
  "86 - 311-SANTA RITA/ CAJARANA",
  "87 - 311-S EXPRESSO/ CARNASCIALLI",
  "88 - 311–S EXPRESSO /CAJARANA",
  "89 - 311-RECOLHE",
  "90 - 312-STO ANDRE",
  "91 - 312-RECOLHE",
  "92 - 313-MARIA LUCIA",
  "93 - 313-RECOLHE",
  "94 - 314-OLIMPICO",
  "95 - 314-OLIMPICO | ESCOLINHA",
  "96 - 314-RECOLHE",
  "97 - 315-COLUMBIA/ SABARA 3/ PQ UNIVERSI.",
  "98 - 315-RECOLHE",
  "99 - 317-MARACANA",
  "100 - 317-RECOLHE",
  "101 - 319-PUCPR",
  "102 - 319-RECOLHE",
  "103 - 351-PARADOR / T. OESTE",
  "104 - 351-T. OESTE/ EXPOSIÇÃO",
  "105 - 351-LONDRINA MATSURI",
  "106 - 351-RECOLHE",
  "107 - 400-PARIGOT",
  "108 - 400-RECOLHE",
  "109 - 401-CH NEWTON",
  "110 - 401-CH NEWTON/ MARIA CELINA",
  "111 - 401-RECOLHE",
  "112 - 402-VIVI XAVIER",
  "113 - 402-RECOLHE",
  "114 - 404-HEIMTAL",
  "115 - 404-RECOLHE",
  "116 - 405-M CECILIA/ GINES PARRA",
  "117 - 405-M CECILIA/ A NOGUEIRA",
  "118 - 405-S EXPRESSO/ GINES PARRA",
  "119 - 405-S EXPRESSO/ A NOGUEIRA",
  "120 - 405- RECOLHE",
  "121 - 406-A STENGHEL/ AQUILES",
  "122 - 406-A STENGHEL/ LUIZ DE SA",
  "123 - 406-A STENGHEL/ AQUILES/ HAKME",
  "124 - 406-A STENGHEL/ LUIZ DE SA/ HAKME",
  "125 - 406-S EXPRESSO/ AQUILES",
  "126 - 406-S EXPRESSO/ LUIZ DE SA",
  "127 - 406-RECOLHE",
  "128 - 407-JOAO PAZ / BAIRRO",
  "129 - 407-JOAO PAZ/ TERMINAL",
  "130 - 407-SEMIRAMIS/ BAIRRO",
  "131 - 407-SEMIRAMIS/ TERMINAL",
  "132 - 407-AMAPA/ BAIRRO",
  "133 - 407-AMAPA/ TERMINAL",
  "134 - 407-M TINTAS/ GAVETTI",
  "135 - 407-RECOLHE",
  "136 - 408-RECREIO",
  "137 - 408-RECREIO/ FABRICAS",
  "138 - 408-RECOLHE",
  "141 - 410-SANTUARIO",
  "142 - 412-MANDARINO/ IMAGAWA",
  "143 - 412-MANDARINO/ H MANDARINO",
  "144 - 412-RECOLHE",
  "145 - 413-RES DO CAFÉ",
  "146 - 413-RECOLHE",
  "147 - 414-NOVA OLINDA",
  "148 - 414-NOVA OLINDA/ ACACIA",
  "149 - 414-RECOLHE",
  "150 - 415-ITAPOA",
  "151 - 415-RECOLHE",
  "152 - 417-CATUAI",
  "153 - 417-JD DA SAUDADE",
  "154 - 417-RECOLHE",
  "155 - 418-CHACARAS",
  "156 - 418-RECOLHE",
  "157 - 419-TERMINAL GAVETTI VIVI",
  "158 - 419-RECOLHE",
  "159 - 420-SENTIDO NORTE SHOP",
  "160 - 420-SENTIDO T VIVI XAVIER",
  "161 - 420-NORTE SHOP/ T VIVI XAVIER",
  "162 - 420-ATE IFPR",
  "163 - 420-RECOLHE",
  "164 - 421-JD. ALPES",
  "165 - 421-RECOLHE",
  "166 - 422-MARIA CELINA",
  "167 - 422-RECOLHE",
  "168 - 423-SÃO JORGE",
  "169 - 423-RECOLHE",
  "170 - 424-MARISTELA",
  "171 - 424-RECOLHE",
  "172 - 425-CID. INDUSTRIAL/SAUL ELKIND",
  "173 - 425-CID. INDUSTRIAL",
  "174 - 425-RECOLHE",
  "175 - 426-PARIS",
  "176 - 426-RECOLHE",
  "177 - 427-VIVI - WARTA",
  "178 - 427-RECOLHE",
  "179 - 428-VISTA BELA",
  "180 - 428-RECOLHE",
  "181 - 430-FLOR DE LOTUS/TERM. OURO VER",
  "182 - 430-RECOLHE",
  "183 - 431-ESTADIO DO CAFÉ",
  "184 - 431-VGD",
  "185 - 431-RECOLHE",
  "186 - 444-WARTA",
  "187 - 444-RECOLHE",
  "188 - 445-FELICIDADE",
  "189 - 445-RECOLHE",
  "190 - 446-T GAVETTI/ NORTE SHOPPING",
  "191 - 446-RECOLHE",
  "192 - 447-F DO CAMPO",
  "193 - 447-F DO CAMPO | CHACARAS",
  "194 - 447-RECOLHE",
  "195 - 448-BRF",
  "196 - 448-RECOLHE",
  "197 - 501-PARADOR VIVI XAVIER",
  "198 - 501-VIVI XAVIER/ A BOA VISTA",
  "199 - 501-RECOLHE",
  "200 - 502-PARADOR OURO VERDE",
  "201 - 502-ATE RES. DAS AMERICAS",
  "202 - 502-RECOLHE",
  "203 - 504-PARADOR MILTON GAVETTI",
  "204 - 504-RECOLHE",
  "205 - 505-EXPRESSO VIVI XAVIER",
  "206 - 505-RECOLHE",
  "207 - 512-TERMINAL OURO VERDE",
  "208 - 512-RECOLHE",
  "209 - 703-RAPIDO AQUILES-CENTRO",
  "210 - 703-RAPIDO/ ATE GAVETTI",
  "211 - 703-RECOLHE",
  "212 - 706-RAPIDO MARIA CECILIA",
  "213 - 706-RAPIDO/ ATE GAVETTI",
  "214 - 706-RECOLHE",
  "215 - 800-VIVI XAVIER/ ACAPULCO",
  "216 - 800-VIVI XAVIER/ ENC QUINTINO",
  "217 - 800-VIVI XAVIER/ E HIGIENOPOLIS",
  "218 - 800-VIVI XAVIER/ PIAUI",
  "219 - 800-CENTRO/ ACAPULCO",
  "220 - 800-ATE PIO XII",
  "221 - 800-RECOLHE",
  "222 - 801-VIVI XAVIER/ CENTRO CIVICO",
  "223 - 801-RECOLHE",
  "224 - 802-VIVI XAVIER/ BANDEIRANTES",
  "225 - 802-RECOLHE",
  "226 - 803-VIVI XAVIER/ SHOP CATUAI",
  "227 - 803-RECOLHE",
  "228 - 804-T OESTE/ G PALHANO",
  "229 - 804-SHOP CATUAI/ G PALHANO",
  "230 - 804-RECOLHE",
  "231 - 806-S ELKIND/ SHOP CATUAI",
  "232 - 806-RECOLHE",
  "233 - 835-UEL/ MILTON GAVETTI",
  "234 - 835-RECOLHE",
  "235 - 900-VIVI XAVIER/HU-HEMOCENTR",
  "236 - 900-RECOLHE",
  "237 - 901-SENTIDO 5 CONJUNTOS",
  "238 - 901-SENTIDO CACIQUE",
  "239 - 901-CACIQUE/ ENC VIVI XAVIER",
  "240 - 901-RECOLHE",
  "241 - 902-CID. INDUSTRIAL MARITACAS",
  "242 - 902-CID. INDUSTRIAL",
  "243 - 902-RECOLHE",
  "244 - 904-TERM ACAPULCO/ BAND",
  "245 - 904-TERM ACAPULCO/ ARTHUR T",
  "246 - 904-TERM VIVI XAVIER/ BAND",
  "247 - 904-TERM VIVI XAVIER/ARTHUR T",
  "248 - 904-ATE T OESTE",
  "249 - 904-ATE SHOP CATUAI",
  "250 - 904-ATE BANDEIRANTES",
  "251 - 904-RECOLHE",
  "252 - 908-ACAPULCO EXPOSICAO",
  "253 - 908-RECOLHE",
  "254 - 913-G PALHANO/ ROBERT KOCH",
  "255 - 913-G PALHANO/ ATE UEL",
  "256 - 913- RECOLHE",
  "257 - 931-SENTIDO T OURO VERDE",
  "258 - 931-SENTIDO T OESTE",
  "259 - 931- RECOLHE",
  "260 - 932-VIVI XAVIER/TOESTE/ATE UEL",
  "261 - 932- RECOLHE",
  "262 - 934-JUNHO VERMELHO | T. CENTR",
  "263 - 934-JUNHO VERMELHO | T. OESTE",
  "264 - 934-RECOLHE",
  "265 - APAE",
  "266 - ATE ACAPULCO",
  "267 - ATE T OESTE",
  "268 - ATE GAVETTI",
  "269 - ATE OURO VERDE",
  "270 - ATE VIVI XAVIER",
  "271 - ATE SHOP CATUAI",
  "272 - ATLAS",
  "273 - BRATAC",
  "274 - ESPECIAL",
  "275 - EXPO JAPAO",
  "276 - CENTRO DE EVENTOS",
  "277 - EXPOSIÇAO",
  "278 - EPESMEL",
  "279 - CHACARA SINTVEST",
  "280 - EXPRESSO",
  "281 - HAKME",
  "282 - HEMOCENTRO",
  "283 - RESERVA TERMINAIS",
  "284 - MANUTENÇAO",
  "285 - VESTIBULAR",
  "286 - TREINAMEN7O",
  "287 - TESTE",
  "288 - TERMINAL CENTRAL",
  "289 - PREVENCAO CANCER DE MAMA",
  "290 - GUARDA MIRIM",
  "291 - CENTRASIL",
  "995 - PARABENS LONDRINA",
];

const extraBusLinesData = [
  "1 - GRANDE LONDRINA",
  "2 - BOM DIA",
  "3 - BOA TARDE",
  "4 - BOA NOITE",
  "5 - PARABENS LONDRINA",
  "6 - FELIZ NATAL",
  "7 - FELIZ ANO NOVO",
  "8 - FELIZ PASCOA",
  "9 - FELIZ DIA DOS PAIS",
  "10 - FELIZ DIA DAS MAES",
  "11 - FELIZ DIA DAS CRIANCAS",
  "12 - FELIZ DIA DOS PROFESSORES",
  "13 - FELIZ DIA DO PADROEIRO",
  "14 - FELIZ DIA DO TRABALHO",
  "15 - HEMOCENTRO",
];

// Função para análise da linha do ônibus
function parseBusLine(line) {
  line = line.trim();
  let code = "";
  let description = line;
  const separatorIndex = line.indexOf(" - ");
  if (separatorIndex !== -1) {
    code = line.substring(0, separatorIndex).trim();
    description = line.substring(separatorIndex + 3).trim();
  }
  return { code, description };
}

// Função para renderizar as linhas na tabela
function renderBusLines(data, tbodyElement) {
  tbodyElement.innerHTML = "";
  data.forEach((lineString) => {
    const { code, description } = parseBusLine(lineString);
    const row = document.createElement("tr");
    row.classList.add(
      "hover:bg-gray-50",
      "transition",
      "duration-200",
      "ease-in-out"
    );
    const codeCell = document.createElement("td");
    codeCell.classList.add(
      "p-4",
      "font-bold",
      "text-xl",
      "text-blue-700",
      "w-1/4",
      "overflow-hidden",
      "text-ellipsis",
      "whitespace-nowrap"
    );
    const descriptionCell = document.createElement("td");
    descriptionCell.classList.add(
      "p-4",
      "text-base",
      "text-gray-700",
      "w-3/4",
      "whitespace-nowrap"
    );

    codeCell.textContent = code;
    descriptionCell.textContent = description;

    row.appendChild(codeCell);
    row.appendChild(descriptionCell);
    tbodyElement.appendChild(row);
  });
}

// Função de filtro da tabela
function filterTable() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toUpperCase();
  const tables = document.querySelectorAll("table");
  tables.forEach((table) => {
    const rows = table.querySelectorAll("tbody tr");
    rows.forEach((row) => {
      const codeCell = row.querySelector("td:nth-child(1)");
      const descriptionCell = row.querySelector("td:nth-child(2)");
      const codeText = codeCell
        ? codeCell.textContent || codeCell.innerText
        : "";
      const descriptionText = descriptionCell
        ? descriptionCell.textContent || descriptionCell.innerText
        : "";

      if (
        codeText.toUpperCase().includes(filter) ||
        descriptionText.toUpperCase().includes(filter)
      ) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
}

// Evento para renderizar as tabelas quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
  renderBusLines(mainBusLinesData, document.getElementById("mainBusList"));
  renderBusLines(extraBusLinesData, document.getElementById("extraBusList")); // Lógica para o menu de navegação mobile

  const openMenuCheckbox = document.getElementById("open-menu-all");
  const listMenu = document.getElementById("main-menu");
  const hamburguerIcon = document.getElementById("hamburguer-icon");
  const closeIcon = document.getElementById("close-icon");
  openMenuCheckbox.addEventListener("change", () => {
    if (openMenuCheckbox.checked) {
      // Se o checkbox está marcado, o menu está aberto
      listMenu.classList.remove("hidden");
      listMenu.classList.add(
        "flex",
        "flex-col",
        "items-start",
        "text-left",
        "w-full",
        "fixed",
        "top-0",
        "left-0",
        "h-screen"
      );
      hamburguerIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    } else {
      // Se o checkbox não está marcado, o menu está fechado
      listMenu.classList.add("hidden");
      listMenu.classList.remove(
        "flex",
        "flex-col",
        "items-start",
        "text-left",
        "w-full",
        "fixed",
        "top-0",
        "left-0",
        "h-screen"
      );
      hamburguerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  }); // Adiciona um evento de clique para fechar o menu ao clicar no "X"

  closeIcon.addEventListener("click", () => {
    openMenuCheckbox.checked = false;
    openMenuCheckbox.dispatchEvent(new Event("change"));
  }); // Adiciona um evento de clique para fechar o menu ao clicar em qualquer item da lista

  const menuLinks = document.querySelectorAll("#main-menu a.link-menu");

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      openMenuCheckbox.checked = false;
      openMenuCheckbox.dispatchEvent(new Event("change"));
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mainMenu = document.getElementById("main-menu");

  menuBtn.addEventListener("click", () => {
    // Alternar a classe 'menu-open' diretamente no botão para a animação do ícone
    menuBtn.classList.toggle("menu-open");

    // Alternar a visibilidade do menu de navegação com a classe 'is-open'
    mainMenu.classList.toggle("is-open");
  });

  // Ocultar o menu em telas maiores
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      // Ponto de quebra 'lg' do Tailwind
      mainMenu.classList.remove("is-open");
      menuBtn.classList.remove("menu-open");
    }
  });
});
