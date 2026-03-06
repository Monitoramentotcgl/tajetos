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
  "38 - 107-ARAGARCA",
  "39 - 107-RECOLHE",
  "40 - 108-ALBATROZ",
  "41 - 108-RECOLHE",
  "42 - 109-RODOVIARIA / BOULEVARD",
  "43 - 109-RECOLHE",
  "44 - 110-MR THOMAS",
  "45 - 110-MR THOMAS/ EUCALIPTOS",
  "46 - 110-MR THOMAS/ AV LONDRINA",
  "47 - 110-RECOLHE",
  "48 - 111-EUCALIPTOS",
  "49 - 111-EUCALIPTOS/ ROMANA",
  "50 - 111-RECOLHE",
  "51 - 112-A URBANAS/ SAO JOAO",
  "52 - 112-A URBANAS/ LARANJEIRAS",
  "53 - 112-RECOLHE",
  "54 - 113-TAUA",
  "55 - 113-UTF-PR",
  "56 - 113-ATE | BOULEVARD",
  "57 - 113-RECOLHE",
  "58 - 121 - TRES FIGUEIRAS",
  "59 - 121- RECOLHE",
  "60 - 200- BRASIL",
  "61 - 200- RECOLHE",
  "62 - 301- PRESIDENTE",
  "63 - 301- RECOLHE",
  "64 - 302- HEDI",
  "65 - 302- RECOLHE",
  "66 - 303-TOKIO | SENT. CENTRAL",
  "67 - 303-TOKIO | SENT. OESTE",
  "68 - 303- RECOLHE",
  "69 - 305 - CAMPUS",
  "70 - 305-CAMPUS/ REITORIA",
  "71 - 305-EXPRESSO/ UEL-CAMPUS",
  "72 - 305-APLICAÇÃO",
  "73 - 305-RECOLHE",
  "74 - 306- CIDADE UNIVERSITARIA",
  "75 - 306- RECOLHE",
  "76 - 307-A VIEIRA",
  "77 - 307-RECOLHE",
  "78 - 308-BANDEIRANTES/GRACIOSA",
  "79 - 308-BANDEIRANTES/ PARECIS",
  "80 - 308- RECOLHE",
  "81 - 309-NEY BRAGA",
  "82 - 309-NEY BRAGA/ FAST FRIO",
  "83 - 309-NEY BRAGA/ PUC",
  "84 - 309-NEY BRAGA | ATE TREVO",
  "85 - 309-ALLAMANDAS",
  "86 - 309- RECOLHE",
  "87 - 310-JD DO SOL",
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
  "106 - 351- LONDRINA MATSURI",
  "107 - 351-RECOLHE",
  "108 - 360-EXPOSICAO",
  "109 - 360-RECOLHE",
  "110 - 400-PARIGOT",
  "111 - 400-RECOLHE",
  "112 - 401-CH NEWTON",
  "113 - 401-CH NEWTON/ MARIA CELINA",
  "114 - 401- RECOLHE",
  "115 - 402-VIVI XAVIER",
  "116 - 402-RECOLHE",
  "117 - 404- HEIMTAL",
  "118 - 404- RECOLHE",
  "119 - 405-M CECILIA/ GINES PARRA",
  "120 - 405-M CECILIA/ A NOGUEIRA",
  "121 - 405-S EXPRESSO/ GINES PARRA",
  "122 - 405-S EXPRESSO/ A NOGUEIRA",
  "123 - 405- RECOLHE",
  "124 - 406-A STENGHEL/ AQUILES",
  "125 - 406-A STENGHEL/ LUIZ DE SA",
  "126 - 406-A STENGHEL/ AQUILES/ HAKME",
  "127 - 406-A STENGHEL/ LUIZ DE SA/ HAKME",
  "128 - 406-S EXPRESSO/ AQUILES",
  "129 - 406-S EXPRESSO/ LUIZ DE SA",
  "130 - 406- RECOLHE",
  "131 - 407-JOAO PAZ / BAIRRO",
  "132 - 407-JOAO PAZ/ TERMINAL",
  "133 - 407-SEMIRAMIS/ BAIRRO",
  "134 - 407-SEMIRAMIS/ TERMINAL",
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
  "199 - 449-LITUANIA",
  "200 - 449-RECOLHE",
  "201 - 501-PARADOR",
  "202 - 501-PARADOR/ A BOA VISTA",
  "203 - 501- RECOLHE",
  "204 - 502-PARADOR OURO VERDE",
  "205 - 502-ATE RES. DAS AMERICAS",
  "206 - 502-RECOLHE",
  "207 - 504-PARADOR MILTON GAVETTI",
  "208 - 504- RECOLHE",
  "209 - 505-EXPRESSO | T VIVI XAVIER",
  "210 - 505- RECOLHE",
  "211 - 512-T. O VERDE",
  "212 - 512- RECOLHE",
  "213 - 703-RAPIDO AQUILES-CENTRO",
  "214 - 703-RAPIDO/ ATE GAVETTI",
  "215 - 703-RECOLHE",
  "216 - 706-RAPIDO MARIA CECILIA",
  "217 - 706-RAPIDO/ ATE GAVETTI",
  "218 - 706- RECOLHE",
  "219 - 800-VIVI XAVIER/ ACAPULCO",
  "220 - 800-VIVI XAVIER/ ENC QUINTINO",
  "221 - 800-VIVI XAVIER/ E HIGIENOPOLIS",
  "222 - 800-VIVI XAVIER/ PIAUI",
  "223 - 800-CENTRO/ ACAPULCO",
  "224 - 800-ATE PIO XII",
  "225 - 800- RECOLHE",
  "226 - 801-VIVI XAVIER/ CENTRO CIVICO",
  "227 - 801- RECOLHE",
  "228 - 802-VIVI XAVIER/ BANDEIRANTES",
  "229 - 802- RECOLHE",
  "230 - 803-VIVI XAVIER/ SHOP CATUAI",
  "231 - 803- RECOLHE",
  "232 - 804- T OESTE/ G PALHANO",
  "233 - 804- SHOP CATUAI/ G PALHANO",
  "234 - 804- RECOLHE",
  "235 - 806-S ELKIND/ SHOP CATUAI",
  "236 - 806- RECOLHE",
  "237 - 825-LONDRINATAL|SENT. SAUL ELKIND",
  "238 - 825-LONDRINATAL|SENT. CATUAI",
  "239 - 825-RECOLHE",
  "240 - 835-UEL/ MILTON GAVETTI",
  "241 - 835- RECOLHE",
  "242 - 900-VIVI XAVIER/POUPATEMPO",
  "243 - 900- RECOLHE",
  "244 - 901-SENTIDO 5 CONJUNTOS",
  "245 - 901-SENTIDO CACIQUE",
  "246 - 901-CACIQUE/ ENC VIVI XAVIER",
  "247 - 901- RECOLHE",
  "248 - 902-CID. INDUSTRIAL MARITACAS",
  "249 - 902-CID. INDUSTRIAL",
  "250 - 902- RECOLHE",
  "251 - 904-ACAPULCO/ BAND",
  "252 - 904-ACAPULCO/ ARTHUR T",
  "253 - 904-VIVI XAVIER/ BAND",
  "254 - 904-VIVI XAVIER/ARTHUR T",
  "255 - 904- ATE T OESTE",
  "256 - 904- ATE SHOP CATUAI",
  "257 - 904 - ATE BANDEIRANTES",
  "258 - 904- RECOLHE",
  "259 - 908-ACAPULCO EXPOSICAO",
  "260 - 908-RECOLHE",
  "261 - 913-G PALHANO/ ROBERT KOCH",
  "262 - 913-G PALHANO/ ATE UEL",
  "263 - 913- RECOLHE",
  "264 - 931-SHOP NORTE",
  "265 - 931-OURO VERDE",
  "266 - 931-T OESTE",
  "267 - 931- RECOLHE",
  "268 - 932-VIVI XAVIER/TOESTE/ATE UEL",
  "269 - 932- RECOLHE",
  "270 - 934-JUNHO VERMELHO | T. CENTR",
  "271 - 934-JUNHO VERMELHO | T. OESTE",
  "272 - 934-RECOLHE",
  "273 - ATE ACAPULCO",
  "274 - ATE T OESTE",
  "275 - ATE GAVETTI",
  "276 - ATE OURO VERDE",
  "277 - ATE VIVI XAVIER",
  "278 - ATE SHOP CATUAI",
  "279 - ATLAS",
  "280 - BRATAC",
  "281 - ESPECIAL",
  "282 - EXPO JAPAO",
  "283 - CENTRO DE EVENTOS",
  "284 - EXPOSIÇAO",
  "285 - CHACARA SINTVEST",
  "286 - EXPRESSO",
  "287 - HAKME",
  "288 - HEMOCENTRO",
  "289 - RESERVA TERMINAIS",
  "290 - MANUTENÇAO",
  "291 - VESTIBULAR",
  "292 - TREINAMEN7O",
  "293 - TESTE",
  "294 - TERMINAL CENTRAL",
  "295 - PREVENCAO CANCER DE MAMA",
  "995 - PARABENS LONDRINA",
  "996 - 826-CARNAVAL/ ZERAO"
];

const extraBusLinesData = [
  "1 - GRANDE LONDRINA",
  "2 - PARABENS LONDRINA",
  "3 - FELIZ NATAL",
  "4 - FELIZ ANO NOVO",
  "5 - FELIZ PASCOA",
  "6 - FELIZ DIA DOS PAIS",
  "7 - FELIZ DIA DAS MAES",
  "8 - FELIZ DIA DAS CRIANCAS",
  "9 - FELIZ DIA DOS PROFESSORES",
  "10 - FELIZ DIA DO PADROEIRO",
  "11 - FELIZ DIA DO TRABALHO",
  "12 - HEMOCENTRO",
  "13 - CENTRASIL",
  "14 - VIA OURO VERDE",
  "15 - CIOP",
  "16 - VAI TUBARAO",
  "17 - LEC CAMPEAO"
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