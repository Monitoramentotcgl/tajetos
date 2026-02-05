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
  "38 - 107-HEMOCENTRO",
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
  "78 - 308-JARDIM BANDEIRANTES/GRACIOSA",
  "79 - 308-JARDIM BANDEIRANTES/ PARECIS",
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
  "134 - 407-AMAPA/ TERMINAL",
  "135 - 407-M TINTAS/ GAVETTI",
  "136 - 407- RECOLHE",
  "137 - 408-RECREIO",
  "138 - 408-RECREIO/ FABRICAS",
  "139 - 408- RECOLHE",
  "142 - 410-SANTUARIO",
  "143 - 412-MANDARINO/ IMAGAWA",
  "144 - 412-MANDARINO/ H MANDARINO",
  "145 - 412-RECOLHE",
  "146 - 413- RES DO CAFÉ",
  "147 - 413- RECOLHE",
  "148 - 414-NOVA OLINDA",
  "149 - 414-NOVA OLINDA/ ACACIA",
  "150 - 414- RECOLHE",
  "151 - 415- ITAPOA",
  "152 - 415- RECOLHE",
  "153 - 417-CATUAI",
  "154 - 417-JD DA SAUDADE",
  "155 - 417- RECOLHE",
  "156 - 418-CHACARAS",
  "157 - 418-RECOLHE",
  "158 - 419-TERMINAL GAVETTI VIVI",
  "159 - 419- RECOLHE",
  "160 - 420-SENTIDO NORTE SHOP",
  "161 - 420-SENTIDO T VIVI XAVIER",
  "162 - 420-NORTE SHOP/ T VIVI XAVIER",
  "163 - 420- ATE IFPR",
  "164 - 420- RECOLHE",
  "165 - 421-JD. ALPES",
  "166 - 421-RECOLHE",
  "167 - 422-MARIA CELINA",
  "168 - 422- RECOLHE",
  "169 - 423-SÃO JORGE",
  "170 - 423- RECOLHE",
  "171 - 424-MARISTELA",
  "172 - 424-RECOLHE",
  "173 - 425-CID. INDUSTRIAL/SAUL ELKIND",
  "174 - 425-CID. INDUSTRIAL",
  "175 - 425-RECOLHE",
  "176 - 426-PARIS",
  "177 - 426-RECOLHE",
  "178 - 427-VIVI - WARTA",
  "179 - 427-RECOLHE",
  "180 - 428-VISTA BELA",
  "181 - 428-RECOLHE",
  "182 - 430-FLOR DE LOTUS/TERM. OURO VER",
  "183 - 430-RECOLHE",
  "184 - 431-ESTADIO DO CAFÉ",
  "185 - 431-VGD",
  "186 - 431-RECOLHE",
  "187 - 444- WARTA",
  "188 - 444- RECOLHE",
  "189 - 445- FELICIDADE",
  "190 - 445- RECOLHE",
  "191 - 446-T GAVETTI/ NORTE SHOPPING",
  "192 - 446- RECOLHE",
  "193 - 447-F DO CAMPO",
  "194 - 447-F DO CAMPO | CHACARAS",
  "195 - 447-RECOLHE",
  "196 - 448-BRF",
  "197 - 448-RECOLHE",
  "198 - 449-LITUANIA",
  "199 - 449-RECOLHE",
  "200 - 501-PARADOR",
  "201 - 501-PARADOR/ A BOA VISTA",
  "202 - 501- RECOLHE",
  "203 - 502-PARADOR OURO VERDE",
  "204 - 502-ATE RES. DAS AMERICAS",
  "205 - 502-RECOLHE",
  "206 - 504-PARADOR MILTON GAVETTI",
  "207 - 504- RECOLHE",
  "208 - 505-EXPRESSO | T VIVI XAVIER",
  "209 - 505- RECOLHE",
  "210 - 512-T. O VERDE",
  "211 - 512- RECOLHE",
  "212 - 703-RAPIDO AQUILES-CENTRO",
  "213 - 703-RAPIDO/ ATE GAVETTI",
  "214 - 703-RECOLHE",
  "215 - 706-RAPIDO MARIA CECILIA",
  "216 - 706-RAPIDO/ ATE GAVETTI",
  "217 - 706- RECOLHE",
  "218 - 800-VIVI XAVIER/ ACAPULCO",
  "219 - 800-VIVI XAVIER/ ENC QUINTINO",
  "220 - 800-VIVI XAVIER/ E HIGIENOPOLIS",
  "221 - 800-VIVI XAVIER/ PIAUI",
  "222 - 800-CENTRO/ ACAPULCO",
  "223 - 800-ATE PIO XII",
  "224 - 800- RECOLHE",
  "225 - 801-VIVI XAVIER/ CENTRO CIVICO",
  "226 - 801- RECOLHE",
  "227 - 802-VIVI XAVIER/ BANDEIRANTES",
  "228 - 802- RECOLHE",
  "229 - 803-VIVI XAVIER/ SHOP CATUAI",
  "230 - 803- RECOLHE",
  "231 - 804- T OESTE/ G PALHANO",
  "232 - 804- SHOP CATUAI/ G PALHANO",
  "233 - 804- RECOLHE",
  "234 - 806-S ELKIND/ SHOP CATUAI",
  "235 - 806- RECOLHE",
  "236 - 825-LONDRINATAL|SENT. SAUL ELKIND",
  "237 - 825-LONDRINATAL|SENT. CATUAI",
  "238 - 825-RECOLHE",
  "239 - 835-UEL/ MILTON GAVETTI",
  "240 - 835- RECOLHE",
  "241 - 900-VIVI XAVIER/POUPATEMPO",
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
  "263 - 931-SHOP NORTE",
  "264 - 931-OURO VERDE",
  "265 - 931-T OESTE",
  "266 - 931- RECOLHE",
  "267 - 932-VIVI XAVIER/TOESTE/ATE UEL",
  "268 - 932- RECOLHE",
  "269 - 934-JUNHO VERMELHO | T. CENTR",
  "270 - 934-JUNHO VERMELHO | T. OESTE",
  "271 - 934-RECOLHE",
  "272 - ATE ACAPULCO",
  "273 - ATE T OESTE",
  "274 - ATE GAVETTI",
  "275 - ATE OURO VERDE",
  "276 - ATE VIVI XAVIER",
  "277 - ATE SHOP CATUAI",
  "278 - ATLAS",
  "279 - BRATAC",
  "280 - ESPECIAL",
  "281 - EXPO JAPAO",
  "282 - CENTRO DE EVENTOS",
  "283 - EXPOSIÇAO",
  "284 - CHACARA SINTVEST",
  "285 - EXPRESSO",
  "286 - HAKME",
  "287 - HEMOCENTRO",
  "288 - RESERVA TERMINAIS",
  "289 - MANUTENÇAO",
  "290 - VESTIBULAR",
  "291 - TREINAMEN7O",
  "292 - TESTE",
  "293 - TERMINAL CENTRAL",
  "294 - PREVENCAO CANCER DE MAMA",
  "995 - PARABENS LONDRINA"
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