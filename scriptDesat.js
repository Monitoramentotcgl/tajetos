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
  "54 - 113-PIONEIROS",
  "55 - 113-PIONEIROS/ PARQUE TAUA",
  "56 - 113-PIONEIROS/ ACQUAVILLE",
  "57 - 113-UTF-PR",
  "58 - 113-ATE | BOULEVARD",
  "59 - 113-RECOLHE",
  "60 - 121 - TRES FIGUEIRAS",
  "61 - 121- RECOLHE",
  "62 - 200- BRASIL",
  "63 - 200- RECOLHE",
  "64 - 301- PRESIDENTE",
  "65 - 301- RECOLHE",
  "66 - 302- HEDI",
  "67 - 302- RECOLHE",
  "68 - 303-TOKIO | SENT. CENTRAL",
  "69 - 303-TOKIO | SENT. OESTE",
  "70 - 303- RECOLHE",
  "71 - 305 - CAMPUS",
  "72 - 305-CAMPUS/ REITORIA",
  "73 - 305-EXPRESSO/ UEL-CAMPUS",
  "74 - 305-APLICAÇÃO",
  "75 - 305-RECOLHE",
  "76 - 306- CIDADE UNIVERSITARIA",
  "77 - 306- RECOLHE",
  "78 - 307-A VIEIRA",
  "79 - 307-RECOLHE",
  "80 - 308-JARDIM BANDEIRANTES/GRACIOSA",
  "81 - 308-JARDIM BANDEIRANTES/ PARECIS",
  "82 - 308- RECOLHE",
  "83 - 309-NEY BRAGA",
  "84 - 309-NEY BRAGA/ FAST FRIO",
  "85 - 309-NEY BRAGA/ PUC",
  "86 - 309-NEY BRAGA | ATE TREVO",
  "87 - 309-ALLAMANDAS",
  "88 - 309- RECOLHE",
  "89 - 310-JD DO SOL",
  "90 - 310- RECOLHE",
  "91 - 311-SANTA RITA/ CARNASCIALLI",
  "92 - 311-SANTA RITA/ CAJARANA",
  "93 - 311-S EXPRESSO/ CARNASCIALLI",
  "94 - 311-S EXPRESSO /CAJARANA",
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
  "107 - 351-PARADOR / T. OESTE",
  "108 - 351-T. OESTE/ EXPOSIÇÃO",
  "109 - 351- LONDRINA MATSURI",
  "110 - 351-RECOLHE",
  "111 - 400-PARIGOT",
  "112 - 400-RECOLHE",
  "113 - 401-CH NEWTON",
  "114 - 401-CH NEWTON/ MARIA CELINA",
  "115 - 401- RECOLHE",
  "116 - 402-VIVI XAVIER",
  "117 - 402-RECOLHE",
  "118 - 404- HEIMTAL",
  "119 - 404- RECOLHE",
  "120 - 405-M CECILIA/ GINES PARRA",
  "121 - 405-M CECILIA/ A NOGUEIRA",
  "122 - 405-S EXPRESSO/ GINES PARRA",
  "123 - 405-S EXPRESSO/ A NOGUEIRA",
  "124 - 405- RECOLHE",
  "125 - 406-A STENGHEL/ AQUILES",
  "126 - 406-A STENGHEL/ LUIZ DE SA",
  "127 - 406-A STENGHEL/ AQUILES/ HAKME",
  "128 - 406-A STENGHEL/ LUIZ DE SA/ HAKME",
  "129 - 406-S EXPRESSO/ AQUILES",
  "130 - 406-S EXPRESSO/ LUIZ DE SA",
  "131 - 406- RECOLHE",
  "132 - 407-JOAO PAZ / BAIRRO",
  "133 - 407-JOAO PAZ/ TERMINAL",
  "134 - 407-SEMIRAMIS/ BAIRRO",
  "135 - 407-SEMIRAMIS/ TERMINAL",
  "136 - 407-AMAPA/ TERMINAL",
  "137 - 407-M TINTAS/ GAVETTI",
  "138 - 407- RECOLHE",
  "139 - 408-RECREIO",
  "140 - 408-RECREIO/ FABRICAS",
  "141 - 408- RECOLHE",
  "144 - 410-SANTUARIO",
  "145 - 412-MANDARINO/ IMAGAWA",
  "146 - 412-MANDARINO/ H MANDARINO",
  "147 - 412-RECOLHE",
  "148 - 413- RES DO CAFÉ",
  "149 - 413- RECOLHE",
  "150 - 414-NOVA OLINDA",
  "151 - 414-NOVA OLINDA/ ACACIA",
  "152 - 414- RECOLHE",
  "153 - 415- ITAPOA",
  "154 - 415- RECOLHE",
  "155 - 417-CATUAI",
  "156 - 417-JD DA SAUDADE",
  "157 - 417- RECOLHE",
  "158 - 418-CHACARAS",
  "159 - 418-RECOLHE",
  "160 - 419-TERMINAL GAVETTI VIVI",
  "161 - 419- RECOLHE",
  "162 - 420-SENTIDO NORTE SHOP",
  "163 - 420-SENTIDO T VIVI XAVIER",
  "164 - 420-NORTE SHOP/ T VIVI XAVIER",
  "165 - 420- ATE IFPR",
  "166 - 420- RECOLHE",
  "167 - 421-JD. ALPES",
  "168 - 421-RECOLHE",
  "169 - 422-MARIA CELINA",
  "170 - 422- RECOLHE",
  "171 - 423-SÃO JORGE",
  "172 - 423- RECOLHE",
  "173 - 424-MARISTELA",
  "174 - 424-RECOLHE",
  "175 - 425-CID. INDUSTRIAL/SAUL ELKIND",
  "176 - 425-CID. INDUSTRIAL",
  "177 - 425-RECOLHE",
  "178 - 426-PARIS",
  "179 - 426-RECOLHE",
  "180 - 427-VIVI - WARTA",
  "181 - 427-RECOLHE",
  "182 - 428-VISTA BELA",
  "183 - 428-RECOLHE",
  "184 - 430-FLOR DE LOTUS/TERM. OURO VER",
  "185 - 430-RECOLHE",
  "186 - 431-ESTADIO DO CAFÉ",
  "187 - 431-VGD",
  "188 - 431-RECOLHE",
  "189 - 444- WARTA",
  "190 - 444- RECOLHE",
  "191 - 445- FELICIDADE",
  "192 - 445- RECOLHE",
  "193 - 446-T GAVETTI/ NORTE SHOPPING",
  "194 - 446- RECOLHE",
  "195 - 447-F DO CAMPO",
  "196 - 447-F DO CAMPO | CHACARAS",
  "197 - 447-RECOLHE",
  "198 - 448-BRF",
  "199 - 448-RECOLHE",
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