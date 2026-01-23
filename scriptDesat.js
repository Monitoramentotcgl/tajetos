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
  "120 - 405-M CECILIA",
  "121 - 405-S EXPRESSO/ M CECILIA",
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
  "198 - 501-PARADOR",
  "199 - 501-PARADOR/ A BOA VISTA",
  "200 - 501- RECOLHE",
  "201 - 502-PARADOR OURO VERDE",
  "202 - 502-ATE RES. DAS AMERICAS",
  "203 - 502-RECOLHE",
  "204 - 504-PARADOR MILTON GAVETTI",
  "205 - 504- RECOLHE",
  "206 - 505-EXPRESSO | T VIVI XAVIER",
  "207 - 505- RECOLHE",
  "208 - 512-T. O VERDE",
  "209 - 512- RECOLHE",
  "210 - 703-RAPIDO AQUILES-CENTRO",
  "211 - 703-RAPIDO/ ATE GAVETTI",
  "212 - 703-RECOLHE",
  "213 - 706-RAPIDO MARIA CECILIA",
  "214 - 706-RAPIDO/ ATE GAVETTI",
  "215 - 706- RECOLHE",
  "216 - 800-VIVI XAVIER/ ACAPULCO",
  "217 - 800-VIVI XAVIER/ ENC QUINTINO",
  "218 - 800-VIVI XAVIER/ E HIGIENOPOLIS",
  "219 - 800-VIVI XAVIER/ PIAUI",
  "220 - 800-CENTRO/ ACAPULCO",
  "221 - 800-ATE PIO XII",
  "222 - 800- RECOLHE",
  "223 - 801-VIVI XAVIER/ CENTRO CIVICO",
  "224 - 801- RECOLHE",
  "225 - 802-VIVI XAVIER/ BANDEIRANTES",
  "226 - 802- RECOLHE",
  "227 - 803-VIVI XAVIER/ SHOP CATUAI",
  "228 - 803- RECOLHE",
  "229 - 804- T OESTE/ G PALHANO",
  "230 - 804- SHOP CATUAI/ G PALHANO",
  "231 - 804- RECOLHE",
  "232 - 806-S ELKIND/ SHOP CATUAI",
  "233 - 806- RECOLHE",
  "234 - 825-LONDRINATAL|SENT. SAUL ELKIND",
  "235 - 825-LONDRINATAL|SENT. CATUAI",
  "236 - 825-RECOLHE",
  "237 - 835-UEL/ MILTON GAVETTI",
  "238 - 835- RECOLHE",
  "239 - 900-VIVI XAVIER/POUPATEMPO",
  "240 - 900- RECOLHE",
  "241 - 901-SENTIDO 5 CONJUNTOS",
  "242 - 901-SENTIDO CACIQUE",
  "243 - 901-CACIQUE/ ENC VIVI XAVIER",
  "244 - 901- RECOLHE",
  "245 - 902-CID. INDUSTRIAL MARITACAS",
  "246 - 902-CID. INDUSTRIAL",
  "247 - 902- RECOLHE",
  "248 - 904-TERM ACAPULCO/ BAND",
  "249 - 904-TERM ACAPULCO/ ARTHUR T",
  "250 - 904-TERM VIVI XAVIER/ BAND",
  "251 - 904-TERM VIVI XAVIER/ARTHUR T",
  "252 - 904- ATE T OESTE",
  "253 - 904- ATE SHOP CATUAI",
  "254 - 904 - ATE BANDEIRANTES",
  "255 - 904- RECOLHE",
  "256 - 908-ACAPULCO EXPOSICAO",
  "257 - 908-RECOLHE",
  "258 - 913-G PALHANO/ ROBERT KOCH",
  "259 - 913-G PALHANO/ ATE UEL",
  "260 - 913- RECOLHE",
  "261 - 931-SHOP NORTE",
  "262 - 931-OURO VERDE",
  "263 - 931-T OESTE",
  "264 - 931- RECOLHE",
  "265 - 932-VIVI XAVIER/TOESTE/ATE UEL",
  "266 - 932- RECOLHE",
  "267 - 934-JUNHO VERMELHO | T. CENTR",
  "268 - 934-JUNHO VERMELHO | T. OESTE",
  "269 - 934-RECOLHE",
  "270 - ATE ACAPULCO",
  "271 - ATE T OESTE",
  "272 - ATE GAVETTI",
  "273 - ATE OURO VERDE",
  "274 - ATE VIVI XAVIER",
  "275 - ATE SHOP CATUAI",
  "276 - ATLAS",
  "277 - BRATAC",
  "278 - ESPECIAL",
  "279 - EXPO JAPAO",
  "280 - CENTRO DE EVENTOS",
  "281 - EXPOSIÇAO",
  "282 - CHACARA SINTVEST",
  "283 - EXPRESSO",
  "284 - HAKME",
  "285 - HEMOCENTRO",
  "286 - RESERVA TERMINAIS",
  "287 - MANUTENÇAO",
  "288 - VESTIBULAR",
  "289 - TREINAMEN7O",
  "290 - TESTE",
  "291 - TERMINAL CENTRAL",
  "292 - PREVENCAO CANCER DE MAMA",
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