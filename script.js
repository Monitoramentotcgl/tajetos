// Dados das linhas de ônibus (mantidos do original)
const mainBusLinesData = [
  "1 - 81-EPESMEL",
  "2 - 81-RECOLHE",
  "3 - 86-APAE",
  "4 - 86-RECOLHE",
  "5 - 87-GUARDA MIRIM",
  "6 - 87-RECOLHE",
  "7 - 91-CORUJÃO PARIGOT",
  "8 - 91 - RECOLHE",
  "9 - 92-CORUJAO W HAUER",
  "10 - 92 - RECOLHE",
  "11 - 93-CORUJAO A STENGHEL",
  "12 - 93- RECOLHE",
  "13 - 96-CORUJAO G PIRES",
  "14 - 96- RECOLHE",
  "15 - 97-CORUJAO AVELINO VIEIRA",
  "16 - 97- RECOLHE",
  "17 - 99-CORUJAO S FRANCISCO",
  "18 - 99- RECOLHE",
  "19 - 100-ALEMANHA",
  "20 - 100-ALEMANHA/ CEASA",
  "21 - 100-RECOLHE",
  "22 - 101-N AMPARO/ G. TAMIOZZO",
  "23 - 101-N AMPARO/ A. VEZOZZO",
  "24 - 101-RECOLHE",
  "25 - 102-IDEAL",
  "26 - 102-IDEAL / CEARA",
  "27 - 102-P ANCHIETA",
  "28 - 102-RECOLHE",
  "29 - 103-SANTA FE/ MONTE CRISTO",
  "30 - 103-SANTA FE/ MANGABA",
  "31 - 103-RECOLHE",
  "32 - 104-INTERLAGOS/ MORUMBI",
  "33 - 104-INTERLAGOS/ STA TEREZINHA",
  "34 - 104-RECOLHE",
  "35 - 106-G PIRES/ ANTARES",
  "36 - 106-G PIRES/ HU-HEMOCENTRO",
  "37 - 106-RECOLHE",
  "38 - 108-ALBATROZ",
  "39 - 108-RECOLHE",
  "40 - 109-RODOVIARIA / BOULEVARD",
  "41 - 109-RECOLHE",
  "42 - 110-MR THOMAS",
  "43 - 110-MR THOMAS/ EUCALIPTOS",
  "44 - 110-MR THOMAS/ AV LONDRINA",
  "45 - 110-RECOLHE",
  "46 - 111-EUCALIPTOS",
  "47 - 111-EUCALIPTOS/ ROMANA",
  "48 - 111-RECOLHE",
  "49 - 112-A URBANAS/ SAO JOAO",
  "50 - 112-A URBANAS/ LARANJEIRAS",
  "51 - 112-RECOLHE",
  "52 - 113-PIONEIROS",
  "53 - 113-PIONEIROS/ PARQUE TAUA",
  "54 - 113-PIONEIROS/ ACQUAVILLE",
  "55 - 113-ATE | BOULEVARD",
  "56 - 113-RECOLHE",
  "57 - 114-JD MAIRA",
  "58 - 114-RECOLHE",
  "59 - 121 - TRES FIGUEIRAS",
  "60 - 121- RECOLHE",
  "61 - 200- BRASIL",
  "62 - 200- RECOLHE",
  "63 - 301- PRESIDENTE",
  "64 - 301- RECOLHE",
  "65 - 302- HEDI",
  "66 - 302- RECOLHE",
  "67 - 303-TOKIO | SENT. CENTRAL",
  "68 - 303-TOKIO | SENT. OESTE",
  "69 - 303- RECOLHE",
  "70 - 305 - CAMPUS",
  "71 - 305-CAMPUS/ REITORIA",
  "72 - 305-EXPRESSO/ UEL-CAMPUS",
  "73 - 305-APLICAÇÃO",
  "74 - 305-RECOLHE",
  "75 - 306- CIDADE UNIVERSITARIA",
  "76 - 306- RECOLHE",
  "77 - 307-A VIEIRA",
  "78 - 307-RECOLHE",
  "79 - 308-JARDIM BANDEIRANTES/GRACIOSA",
  "80 - 308-JARDIM BANDEIRANTES/ PARECIS",
  "81 - 308- RECOLHE",
  "82 - 309-NEY BRAGA",
  "83 - 309-NEY BRAGA/ FAST FRIO",
  "84 - 309-NEY BRAGA/ PUC",
  "85 - 309-NEY BRAGA | ATE TREVO",
  "86 - 309-ALLAMANDAS",
  "87 - 309- RECOLHE",
  "88 - 310-JD DO SOL",
  "89 - 310-ATE CASTANHEIRAS",
  "90 - 310- RECOLHE",
  "91 - 311-SANTA RITA/ CARNASCIALLI",
  "92 - 311-SANTA RITA/ CAJARANA",
  "93 - 311-S EXPRESSO/ CARNASCIALLI",
  "94 - 311–S EXPRESSO /CAJARANA",
  "95 - 311- RECOLHE",
  "96 - 312-STO ANDRE",
  "97 - 312- RECOLHE",
  "98 - 313-MARIA LUCIA",
  "99 - 313- RECOLHE",
  "100 - 314-OLIMPICO",
  "101 - 314- OLIMPICO | ESCOLINHA",
  "102 - 314 - RECOLHE",
  "103 - 315-COLUMBIA/ SABARA 3/ PQ UNIVERSI.",
  "104 - 315- RECOLHE",
  "105 - 317-MARACANA",
  "106 - 317- RECOLHE",
  "107 - 319-PUCPR",
  "108 - 319-RECOLHE",
  "109 - 351-PARADOR / T. OESTE",
  "110 - 351-T. OESTE/ EXPOSIÇÃO",
  "111 - 351- LONDRINA MATSURI",
  "112 - 351-RECOLHE",
  "113 - 400-PARIGOT",
  "114 - 400-RECOLHE",
  "115 - 401-CH NEWTON",
  "116 - 401-CH NEWTON/ MARIA CELINA",
  "117 - 401- RECOLHE",
  "118 - 402-VIVI XAVIER",
  "119 - 402-RECOLHE",
  "120 - 404- HEIMTAL",
  "121 - 404- RECOLHE",
  "122 - 405-M CECILIA/ GINES PARRA",
  "123 - 405-M CECILIA/ A NOGUEIRA",
  "124 - 405-S EXPRESSO/ GINES PARRA",
  "125 - 405-S EXPRESSO/ A NOGUEIRA",
  "126 - 405- RECOLHE",
  "127 - 406-A STENGHEL/ AQUILES",
  "128 - 406-A STENGHEL/ LUIZ DE SA",
  "129 - 406-A STENGHEL/ AQUILES/ HAKME",
  "130 - 406-A STENGHEL/ LUIZ DE SA/ HAKME",
  "131 - 406-S EXPRESSO/ AQUILES",
  "132 - 406-S EXPRESSO/ LUIZ DE SA",
  "133 - 406- RECOLHE",
  "134 - 407-JOAO PAZ / BAIRRO",
  "135 - 407-JOAO PAZ/ TERMINAL",
  "136 - 407-SEMIRAMIS/ BAIRRO",
  "137 - 407-SEMIRAMIS/ TERMINAL",
  "138 - 407-AMAPA/ BAIRRO",
  "139 - 407-AMAPA/ TERMINAL",
  "140 - 407-M TINTAS/ GAVETTI",
  "141 - 407- RECOLHE",
  "142 - 408-RECREIO",
  "143 - 408-RECREIO/ FABRICAS",
  "144 - 408- RECOLHE",
  "147 - 410-SANTUARIO",
  "148 - 412-MANDARINO/ IMAGAWA",
  "149 - 412-MANDARINO/ H MANDARINO",
  "150 - 412-RECOLHE",
  "151 - 413- RES DO CAFÉ",
  "152 - 413- RECOLHE",
  "153 - 414-NOVA OLINDA",
  "154 - 414-NOVA OLINDA/ ACACIA",
  "155 - 414- RECOLHE",
  "156 - 415- ITAPOA",
  "157 - 415- RECOLHE",
  "158 - 417-CATUAI",
  "159 - 417-JD DA SAUDADE",
  "160 - 417- RECOLHE",
  "161 - 418-CHACARAS",
  "162 - 418-RECOLHE",
  "163 - 419-TERMINAL GAVETTI VIVI",
  "164 - 419- RECOLHE",
  "165 - 420-SENTIDO NORTE SHOP",
  "166 - 420-SENTIDO T VIVI XAVIER",
  "167 - 420-NORTE SHOP/ T VIVI XAVIER",
  "168 - 420- ATE IFPR",
  "169 - 420- RECOLHE",
  "170 - 421-JD. ALPES",
  "171 - 421-RECOLHE",
  "172 - 422-MARIA CELINA",
  "173 - 422- RECOLHE",
  "174 - 423-SÃO JORGE",
  "175 - 423- RECOLHE",
  "176 - 424-MARISTELA",
  "177 - 424-RECOLHE",
  "178 - 425-CID. INDUSTRIAL/SAUL ELKIND",
  "179 - 425-CID. INDUSTRIAL",
  "180 - 425-RECOLHE",
  "181 - 426-PARIS",
  "182 - 426-RECOLHE",
  "183 - 427-VIVI - WARTA",
  "184 - 427-RECOLHE",
  "185 - 428-VISTA BELA",
  "186 - 428-RECOLHE",
  "187 - 430-FLOR DE LOTUS/TERM. OURO VER",
  "188 - 430-RECOLHE",
  "189 - 431-ESTADIO DO CAFÉ",
  "190 - 431-VGD",
  "191 - 431-RECOLHE",
  "192 - 444- WARTA",
  "193 - 444- RECOLHE",
  "194 - 445- FELICIDADE",
  "195 - 445- RECOLHE",
  "196 - 446-T GAVETTI/ NORTE SHOPPING",
  "197 - 446- RECOLHE",
  "198 - 447-F DO CAMPO",
  "199 - 447-F DO CAMPO | CHACARAS",
  "200 - 447-RECOLHE",
  "201 - 448-BRF",
  "202 - 448-RECOLHE",
  "203 - 501-PARADOR VIVI XAVIER",
  "204 - 501-VIVI XAVIER/ A BOA VISTA",
  "205 - 501- RECOLHE",
  "206 - 502-PARADOR OURO VERDE",
  "207 - 502-ATE RES. DAS AMERICAS",
  "208 - 502-RECOLHE",
  "209 - 504-PARADOR MILTON GAVETTI",
  "210 - 504- RECOLHE",
  "211 - 505-EXPRESSO VIVI XAVIER",
  "212 - 505- RECOLHE",
  "213 - 512-TERMINAL OURO VERDE",
  "214 - 512- RECOLHE",
  "215 - 703-RAPIDO AQUILES-CENTRO",
  "216 - 703-RAPIDO/ ATE GAVETTI",
  "217 - 703-RECOLHE",
  "218 - 706-RAPIDO MARIA CECILIA",
  "219 - 706-RAPIDO/ ATE GAVETTI",
  "220 - 706- RECOLHE",
  "221 - 800-VIVI XAVIER/ ACAPULCO",
  "222 - 800-VIVI XAVIER/ ENC QUINTINO",
  "223 - 800-VIVI XAVIER/ E HIGIENOPOLIS",
  "224 - 800-VIVI XAVIER/ PIAUI",
  "225 - 800-CENTRO/ ACAPULCO",
  "226 - 800-ATE PIO XII",
  "227 - 800- RECOLHE",
  "228 - 801-VIVI XAVIER/ CENTRO CIVICO",
  "229 - 801- RECOLHE",
  "230 - 802-VIVI XAVIER/ BANDEIRANTES",
  "231 - 802- RECOLHE",
  "232 - 803-VIVI XAVIER/ SHOP CATUAI",
  "233 - 803- RECOLHE",
  "234 - 804- T OESTE/ G PALHANO",
  "235 - 804- SHOP CATUAI/ G PALHANO",
  "236 - 804- RECOLHE",
  "237 - 806-S ELKIND/ SHOP CATUAI",
  "238 - 806- RECOLHE",
  "239 - 835-UEL/ MILTON GAVETTI",
  "240 - 835- RECOLHE",
  "241 - 900-VIVI XAVIER/BOULEVARD-HU",
  "242 - 900- RECOLHE",
  "243 - 901-SENTIDO 5 CONJUNTOS",
  "244 - 901-SENTIDO CACIQUE",
  "245 - 901-CACIQUE/ ENC VIVI XAVIER",
  "246 - 901- RECOLHE",
  "247 - 902-CID. INDUSTRIAL MARITACAS",
  "248 - 902-CID. INDUSTRIAL",
  "249 - 902- RECOLHE",
  "250 - 904-TERM ACAPULCO/ BAND",
  "251 - 904-TERM ACAPULCO/ ARTHUR T",
  "252 - 904-TERM VIVI XAVIER/ BAND",
  "253 - 904-TERM VIVI XAVIER/ARTHUR T",
  "254 - 904- ATE T OESTE",
  "255 - 904- ATE SHOP CATUAI",
  "256 - 904 - ATE BANDEIRANTES",
  "257 - 904- RECOLHE",
  "258 - 908-ACAPULCO EXPOSICAO",
  "259 - 908-RECOLHE",
  "260 - 913-G PALHANO/ ROBERT KOCH",
  "261 - 913-G PALHANO/ ATE UEL",
  "262 - 913- RECOLHE",
  "263 - 931-SENTIDO T OURO VERDE",
  "264 - 931-SENTIDO T OESTE",
  "265 - 931- RECOLHE",
  "266 - 932-VIVI XAVIER/TOESTE/ATE UEL",
  "267 - 932- RECOLHE",
  "268 - 934-JUNHO VERMELHO | T. CENTR",
  "269 - 934-JUNHO VERMELHO | T. OESTE",
  "270 - 934-RECOLHE",
  "271 - ATE ACAPULCO",
  "272 - ATE T OESTE",
  "273 - ATE GAVETTI",
  "274 - ATE OURO VERDE",
  "275 - ATE VIVI XAVIER",
  "276 - ATE SHOP CATUAI",
  "277 - ATLAS",
  "278 - BRATAC",
  "279 - ESPECIAL",
  "280 - EXPO JAPAO",
  "281 - CENTRO DE EVENTOS",
  "282 - EXPOSIÇAO",
  "283 - CHACARA SINTVEST",
  "284 - EXPRESSO",
  "285 - HAKME",
  "286 - HEMOCENTRO",
  "287 - RESERVA TERMINAIS",
  "288 - MANUTENÇAO",
  "289 - VESTIBULAR",
  "290 - TREINAMEN7O",
  "291 - TESTE",
  "292 - TERMINAL CENTRAL",
  "293 - PREVENCAO CANCER DE MAMA",
  "294 - CENTRASIL",
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
  "16 - CENTRASIL",
  "17 - VIA OURO VERDE",
];

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

// Função para popular a tabela com os dados das linhas
function populateTable(tableId, data) {
  const tableBody = document.getElementById(tableId);
  data.forEach(item => {
    const [id, ...descriptionParts] = item.split(" - ");
    const description = descriptionParts.join(" - ");
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="px-6 py-4 whitespace-nowrap text-sm dark:bg-gray-500 font-medium text-gray-800 dark:text-gray-100">${id}</td>
      <td class="px-6 py-4 whitespace-nowrap text-sm dark:bg-gray-500 text-gray-800 dark:text-gray-100">${description}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Evento que carrega a função para popular as tabelas quando a página for carregada
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("busList")) {
    populateTable("busList", mainBusLinesData);
  }
  if (document.getElementById("extraBusList")) {
    populateTable("extraBusList", extraBusLinesData);
  }
});

// JavaScript para o menu mobile
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
      mainMenu.classList.remove("is-open");
      menuBtn.classList.remove("menu-open");
    }
  });

  // Adicionar a lógica para o novo menu de seleção
  const linkTrajetoOciosoInicio = document.getElementById('linkTrajetoOciosoInicio');
  const abrirTrajetoOciosoInicio = document.getElementById('abrirTrajetoOciosoInicio');

  linkTrajetoOciosoInicio.addEventListener('change', () => {
    const url = linkTrajetoOciosoInicio.value;
    if (url) {
      abrirTrajetoOciosoInicio.classList.remove('hidden');
    } else {
      abrirTrajetoOciosoInicio.classList.add('hidden');
    }
  });

  abrirTrajetoOciosoInicio.addEventListener('click', (e) => {
    e.preventDefault();
    const url = linkTrajetoOciosoInicio.value;
    if (url) {
      window.open(url, '_blank');
    }
  });

  const linkTrajetoOciosoRecolha = document.getElementById('linkTrajetoOciosoRecolha');
  const abrirTrajetoOciosoRecolha = document.getElementById('abrirTrajetoOciosoRecolha');

  linkTrajetoOciosoRecolha.addEventListener('change', () => {
    const url = linkTrajetoOciosoRecolha.value;
    if (url) {
      abrirTrajetoOciosoRecolha.classList.remove('hidden');
    } else {
      abrirTrajetoOciosoRecolha.classList.add('hidden');
    }
  });

  abrirTrajetoOciosoRecolha.addEventListener('click', (e) => {
    e.preventDefault();
    const url = linkTrajetoOciosoRecolha.value;
    if (url) {
      window.open(url, '_blank');
    }
  });
});





// if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//   document.documentElement.classList.add('dark');
// }