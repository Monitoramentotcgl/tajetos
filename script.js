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
  "29 - 103-SANTA FE/ NOEL ROSA",
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
  "57 - 121 - TRES FIGUEIRAS",
  "58 - 121- RECOLHE",
  "59 - 200- BRASIL",
  "60 - 200- RECOLHE",
  "61 - 301- PRESIDENTE",
  "62 - 301- RECOLHE",
  "63 - 302- HEDI",
  "64 - 302- RECOLHE",
  "65 - 303-TOKIO | SENT. CENTRAL",
  "66 - 303-TOKIO | SENT. OESTE",
  "67 - 303- RECOLHE",
  "68 - 305 - CAMPUS",
  "69 - 305-CAMPUS/ REITORIA",
  "70 - 305-EXPRESSO/ UEL-CAMPUS",
  "71 - 305-APLICAÇÃO",
  "72 - 305-RECOLHE",
  "73 - 306- CIDADE UNIVERSITARIA",
  "74 - 306- RECOLHE",
  "75 - 307-A VIEIRA",
  "76 - 307-RECOLHE",
  "77 - 308-JARDIM BANDEIRANTES/GRACIOSA",
  "78 - 308-JARDIM BANDEIRANTES/ PARECIS",
  "79 - 308- RECOLHE",
  "80 - 309-NEY BRAGA",
  "81 - 309-NEY BRAGA/ FAST FRIO",
  "82 - 309-NEY BRAGA/ PUC",
  "83 - 309-NEY BRAGA | ATE TREVO",
  "84 - 309-ALLAMANDAS",
  "85 - 309- RECOLHE",
  "86 - 310-JD DO SOL",
  "87 - 310-ATE CASTANHEIRAS",
  "88 - 310- RECOLHE",
  "89 - 311-SANTA RITA/ CARNASCIALLI",
  "90 - 311-SANTA RITA/ CAJARANA",
  "91 - 311-S EXPRESSO/ CARNASCIALLI",
  "92 - 311–S EXPRESSO /CAJARANA",
  "93 - 311- RECOLHE",
  "94 - 312-STO ANDRE",
  "95 - 312- RECOLHE",
  "96 - 313-MARIA LUCIA",
  "97 - 313- RECOLHE",
  "98 - 314-OLIMPICO",
  "99 - 314- OLIMPICO | ESCOLINHA",
  "100 - 314 - RECOLHE",
  "101 - 315-COLUMBIA/ SABARA 3/ PQ UNIVERSI.",
  "102 - 315- RECOLHE",
  "103 - 317-MARACANA",
  "104 - 317- RECOLHE",
  "105 - 351-PARADOR / T. OESTE",
  "106 - 351-T. OESTE/ EXPOSIÇÃO",
  "107 - 351- LONDRINA MATSURI",
  "108 - 351-RECOLHE",
  "109 - 400-PARIGOT",
  "110 - 400-RECOLHE",
  "111 - 401-CH NEWTON",
  "112 - 401-CH NEWTON/ MARIA CELINA",
  "113 - 401- RECOLHE",
  "114 - 402-VIVI XAVIER",
  "115 - 402-RECOLHE",
  "116 - 404- HEIMTAL",
  "117 - 404- RECOLHE",
  "118 - 405-M CECILIA/ GINES PARRA",
  "119 - 405-M CECILIA/ A NOGUEIRA",
  "120 - 405-S EXPRESSO/ GINES PARRA",
  "121 - 405-S EXPRESSO/ A NOGUEIRA",
  "122 - 405- RECOLHE",
  "123 - 406-A STENGHEL/ AQUILES",
  "124 - 406-A STENGHEL/ LUIZ DE SA",
  "125 - 406-A STENGHEL/ AQUILES/ HAKME",
  "126 - 406-A STENGHEL/ LUIZ DE SA/ HAKME",
  "127 - 406-S EXPRESSO/ AQUILES",
  "128 - 406-S EXPRESSO/ LUIZ DE SA",
  "129 - 406- RECOLHE",
  "130 - 407-JOAO PAZ / BAIRRO",
  "131 - 407-JOAO PAZ/ TERMINAL",
  "132 - 407-SEMIRAMIS/ BAIRRO",
  "133 - 407-SEMIRAMIS/ TERMINAL",
  "134 - 407-AMAPA/ BAIRRO",
  "135 - 407-AMAPA/ TERMINAL",
  "136 - 407-M TINTAS/ GAVETTI",
  "137 - 407- RECOLHE",
  "138 - 408-RECREIO",
  "139 - 408-RECREIO/ FABRICAS",
  "140 - 408- RECOLHE",
  "143 - 410-SANTUARIO",
  "144 - 412-MANDARINO/ IMAGAWA",
  "145 - 412-MANDARINO/ H MANDARINO",
  "146 - 412-RECOLHE",
  "147 - 413- RES DO CAFÉ",
  "148 - 413- RECOLHE",
  "149 - 414-NOVA OLINDA",
  "150 - 414-NOVA OLINDA/ ACACIA",
  "151 - 414- RECOLHE",
  "152 - 415- ITAPOA",
  "153 - 415- RECOLHE",
  "154 - 417-CATUAI",
  "155 - 417-JD DA SAUDADE",
  "156 - 417- RECOLHE",
  "157 - 418-CHACARAS",
  "158 - 418-RECOLHE",
  "159 - 419-TERMINAL GAVETTI VIVI",
  "160 - 419- RECOLHE",
  "161 - 420-SENTIDO NORTE SHOP",
  "162 - 420-SENTIDO T VIVI XAVIER",
  "163 - 420-NORTE SHOP/ T VIVI XAVIER",
  "164 - 420- ATE IFPR",
  "165 - 420- RECOLHE",
  "166 - 421-JD. ALPES",
  "167 - 421-RECOLHE",
  "168 - 422-MARIA CELINA",
  "169 - 422- RECOLHE",
  "170 - 423-SÃO JORGE",
  "171 - 423- RECOLHE",
  "172 - 424-MARISTELA",
  "173 - 424-RECOLHE",
  "174 - 425-CID. INDUSTRIAL/SAUL ELKIND",
  "175 - 425-CID. INDUSTRIAL",
  "176 - 425-RECOLHE",
  "177 - 426-PARIS",
  "178 - 426-RECOLHE",
  "179 - 427-VIVI - WARTA",
  "180 - 427-RECOLHE",
  "181 - 428-VISTA BELA",
  "182 - 428-RECOLHE",
  "183 - 430-FLOR DE LOTUS/TERM. OURO VER",
  "184 - 430-RECOLHE",
  "185 - 431-ESTADIO DO CAFÉ",
  "186 - 431-VGD",
  "187 - 431-RECOLHE",
  "188 - 444- WARTA",
  "189 - 444- RECOLHE",
  "190 - 445- FELICIDADE",
  "191 - 445- RECOLHE",
  "192 - 446-T GAVETTI/ NORTE SHOPPING",
  "193 - 446- RECOLHE",
  "194 - 447-F DO CAMPO",
  "195 - 447-F DO CAMPO | CHACARAS",
  "196 - 447-RECOLHE",
  "197 - 448-BRF",
  "198 - 448-RECOLHE",
  "199 - 501-PARADOR",
  "200 - 501-PARADOR/ A BOA VISTA",
  "201 - 501- RECOLHE",
  "202 - 502-PARADOR OURO VERDE",
  "203 - 502-ATE RES. DAS AMERICAS",
  "204 - 502-RECOLHE",
  "205 - 504-PARADOR MILTON GAVETTI",
  "206 - 504- RECOLHE",
  "207 - 505-EXPRESSO | T VIVI XAVIER",
  "208 - 505- RECOLHE",
  "209 - 512-T. O VERDE",
  "210 - 512- RECOLHE",
  "211 - 703-RAPIDO AQUILES-CENTRO",
  "212 - 703-RAPIDO/ ATE GAVETTI",
  "213 - 703-RECOLHE",
  "214 - 706-RAPIDO MARIA CECILIA",
  "215 - 706-RAPIDO/ ATE GAVETTI",
  "216 - 706- RECOLHE",
  "217 - 800-VIVI XAVIER/ ACAPULCO",
  "218 - 800-VIVI XAVIER/ ENC QUINTINO",
  "219 - 800-VIVI XAVIER/ E HIGIENOPOLIS",
  "220 - 800-VIVI XAVIER/ PIAUI",
  "221 - 800-CENTRO/ ACAPULCO",
  "222 - 800-ATE PIO XII",
  "223 - 800- RECOLHE",
  "224 - 801-VIVI XAVIER/ CENTRO CIVICO",
  "225 - 801- RECOLHE",
  "226 - 802-VIVI XAVIER/ BANDEIRANTES",
  "227 - 802- RECOLHE",
  "228 - 803-VIVI XAVIER/ SHOP CATUAI",
  "229 - 803- RECOLHE",
  "230 - 804- T OESTE/ G PALHANO",
  "231 - 804- SHOP CATUAI/ G PALHANO",
  "232 - 804- RECOLHE",
  "233 - 806-S ELKIND/ SHOP CATUAI",
  "234 - 806- RECOLHE",
  "235 - 835-UEL/ MILTON GAVETTI",
  "236 - 835- RECOLHE",
  "237 - 900-VIVI XAVIER/POUPATEMPO",
  "238 - 900- RECOLHE",
  "239 - 901-SENTIDO 5 CONJUNTOS",
  "240 - 901-SENTIDO CACIQUE",
  "241 - 901-CACIQUE/ ENC VIVI XAVIER",
  "242 - 901- RECOLHE",
  "243 - 902-CID. INDUSTRIAL MARITACAS",
  "244 - 902-CID. INDUSTRIAL",
  "245 - 902- RECOLHE",
  "246 - 904-TERM ACAPULCO/ BAND",
  "247 - 904-TERM ACAPULCO/ ARTHUR T",
  "248 - 904-TERM VIVI XAVIER/ BAND",
  "249 - 904-TERM VIVI XAVIER/ARTHUR T",
  "250 - 904- ATE T OESTE",
  "251 - 904- ATE SHOP CATUAI",
  "252 - 904 - ATE BANDEIRANTES",
  "253 - 904- RECOLHE",
  "254 - 908-ACAPULCO EXPOSICAO",
  "255 - 908-RECOLHE",
  "256 - 913-G PALHANO/ ROBERT KOCH",
  "257 - 913-G PALHANO/ ATE UEL",
  "258 - 913- RECOLHE",
  "259 - 931-SENTIDO T OURO VERDE",
  "260 - 931-SENTIDO T OESTE",
  "261 - 931- RECOLHE",
  "262 - 932-VIVI XAVIER/TOESTE/ATE UEL",
  "263 - 932- RECOLHE",
  "264 - 934-JUNHO VERMELHO | T. CENTR",
  "265 - 934-JUNHO VERMELHO | T. OESTE",
  "266 - 934-RECOLHE",
  "267 - ATE ACAPULCO",
  "268 - ATE T OESTE",
  "269 - ATE GAVETTI",
  "270 - ATE OURO VERDE",
  "271 - ATE VIVI XAVIER",
  "272 - ATE SHOP CATUAI",
  "273 - ATLAS",
  "274 - BRATAC",
  "275 - ESPECIAL",
  "276 - EXPO JAPAO",
  "277 - CENTRO DE EVENTOS",
  "278 - EXPOSIÇAO",
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
  "290 - 825-LONDRINATAL|SENT. SAUL ELKIND",
  "291 - 825-LONDRINATAL|SENT. CATUAI",
  "292 - 825-RECOLHE",
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
  "18 - CIOP",
  "19 - LEC NA SERIE B",
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