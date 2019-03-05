import React from 'react';

import ColumnResizing from '../components/demos/ColumnResizing';
import Pagination from '../components/demos/Pagination';
import CustomCell from '../components/demos/CustomCell';
import ChangeRowHeight from '../components/demos/ChangeRowHeight';
import AutoFit from '../components/demos/AutoFit';
import Sorting from '../components/demos/Sorting';

const rows = [
    {
        "name": "Stewart",
        "email": "nec@auctorMaurisvel.edu",
        "company": "Amet Diam Eu PC",
        "phone": "1675071109899",
        "city": "San Marcello",
        "country": "Iceland",
        "postal": "14778"
    },
    {
        "name": "Ulric",
        "email": "metus.In@atlacus.co.uk",
        "company": "Ut Nisi Inc.",
        "phone": "1665091581699",
        "city": "Bonlez",
        "country": "Philippines",
        "postal": "873475"
    },
    {
        "name": "Zachary",
        "email": "vel.vulputate.eu@Inatpede.co.uk",
        "company": "In Institute",
        "phone": "1668072351299",
        "city": "Placanica",
        "country": "Uganda",
        "postal": "645038"
    },
    {
        "name": "Caleb",
        "email": "massa.Vestibulum.accumsan@vitaesodales.edu",
        "company": "Eleifend Nunc PC",
        "phone": "1648021749099",
        "city": "Rimbey",
        "country": "Sao Tome and Principe",
        "postal": "GQ2B 1CD"
    },
    {
        "name": "Colin",
        "email": "sollicitudin.commodo.ipsum@etultricesposuere.net",
        "company": "Vel Nisl Quisque LLC",
        "phone": "1692011905699",
        "city": "Norfolk County",
        "country": "Grenada",
        "postal": "4460 EX"
    },
    {
        "name": "Grant",
        "email": "et@massa.co.uk",
        "company": "Eget Venenatis Corporation",
        "phone": "1646071908199",
        "city": "Midnapore",
        "country": "Guernsey",
        "postal": "75231-031"
    },
    {
        "name": "Zahir",
        "email": "fringilla@acturpisegestas.com",
        "company": "Fringilla Cursus LLP",
        "phone": "1644090804199",
        "city": "Matamata",
        "country": "Togo",
        "postal": "30850"
    },
    {
        "name": "Emery",
        "email": "nunc.ac@euultricessit.com",
        "company": "Aliquam Nec Enim Corp.",
        "phone": "1619081960799",
        "city": "Municipal District",
        "country": "Grenada",
        "postal": "5768"
    },
    {
        "name": "Kadeem",
        "email": "purus.Nullam.scelerisque@euultricessit.edu",
        "company": "Ligula Aenean Inc.",
        "phone": "1666052981499",
        "city": "Adrano",
        "country": "Antarctica",
        "postal": "6327"
    },
    {
        "name": "Fletcher",
        "email": "in.consequat@Classaptenttaciti.com",
        "company": "Penatibus Corp.",
        "phone": "1670071604999",
        "city": "Colina",
        "country": "Namibia",
        "postal": "A1A 7N7"
    },
    {
        "name": "Tanner",
        "email": "ac.tellus@loremauctor.ca",
        "company": "Augue Industries",
        "phone": "1667090409299",
        "city": "Atlanta",
        "country": "Chile",
        "postal": "2201"
    },
    {
        "name": "Nathaniel",
        "email": "Quisque.fringilla@feugiatmetus.org",
        "company": "Neque Incorporated",
        "phone": "1665050335699",
        "city": "Gouvy",
        "country": "Qatar",
        "postal": "50205"
    },
    {
        "name": "Channing",
        "email": "volutpat.Nulla.dignissim@faucibusorci.com",
        "company": "Amet Corp.",
        "phone": "1699082365099",
        "city": "Wattrelos",
        "country": "Congo, the Democratic Republic of the",
        "postal": "177282"
    },
    {
        "name": "Kaseem",
        "email": "orci@noncursusnon.ca",
        "company": "Egestas Nunc Limited",
        "phone": "1694012078899",
        "city": "Kanpur",
        "country": "Faroe Islands",
        "postal": "64813-684"
    },
    {
        "name": "Amos",
        "email": "fringilla.euismod@Intincidunt.com",
        "company": "Elit Aliquam LLP",
        "phone": "1610022679799",
        "city": "Panketal",
        "country": "Saint Pierre and Miquelon",
        "postal": "1155"
    },
    {
        "name": "Richard",
        "email": "orci@aliquameuaccumsan.net",
        "company": "Semper Erat LLP",
        "phone": "1628071414499",
        "city": "Osorno",
        "country": "Kenya",
        "postal": "800459"
    },
    {
        "name": "Owen",
        "email": "diam.nunc@semPellentesque.co.uk",
        "company": "Pede Suspendisse Dui Corp.",
        "phone": "1619111243099",
        "city": "Kington",
        "country": "Poland",
        "postal": "09555"
    },
    {
        "name": "Caleb",
        "email": "rhoncus@Ut.net",
        "company": "Commodo Associates",
        "phone": "1663042919699",
        "city": "Thionville",
        "country": "Uruguay",
        "postal": "11803"
    },
    {
        "name": "Merrill",
        "email": "ut@Proin.ca",
        "company": "Nunc Incorporated",
        "phone": "1619051449999",
        "city": "Picton",
        "country": "China",
        "postal": "39207"
    },
    {
        "name": "Gavin",
        "email": "pede@Proinsed.edu",
        "company": "Eget Ipsum LLC",
        "phone": "1609032166699",
        "city": "Alès",
        "country": "Isle of Man",
        "postal": "417238"
    },
    {
        "name": "Marvin",
        "email": "eget@intempuseu.org",
        "company": "Sit Amet LLC",
        "phone": "1688070784599",
        "city": "Fermont",
        "country": "Congo (Brazzaville)",
        "postal": "3026"
    },
    {
        "name": "Knox",
        "email": "Integer@interdumenim.org",
        "company": "Nunc Inc.",
        "phone": "1689082777799",
        "city": "Cwmbran",
        "country": "Holy See (Vatican City State)",
        "postal": "8546 VD"
    },
    {
        "name": "Jared",
        "email": "vulputate@est.edu",
        "company": "Ipsum Nunc Foundation",
        "phone": "1602032292099",
        "city": "Fourbechies",
        "country": "Estonia",
        "postal": "59174"
    },
    {
        "name": "Hammett",
        "email": "egestas@malesuadafames.edu",
        "company": "Taciti Sociosqu Ad Consulting",
        "phone": "1658111793999",
        "city": "Marbaix",
        "country": "Turkey",
        "postal": "637136"
    },
    {
        "name": "Cade",
        "email": "a.malesuada@at.com",
        "company": "Sed Dictum Inc.",
        "phone": "1648052780999",
        "city": "Ancaster Town",
        "country": "Qatar",
        "postal": "82771"
    },
    {
        "name": "James",
        "email": "ullamcorper@placeratvelitQuisque.ca",
        "company": "Dictum Phasellus Ltd",
        "phone": "1635082503399",
        "city": "Verdun",
        "country": "Czech Republic",
        "postal": "46961"
    },
    {
        "name": "Stone",
        "email": "enim@Integer.net",
        "company": "Lorem Ipsum Foundation",
        "phone": "1650061718999",
        "city": "Cromer",
        "country": "Hong Kong",
        "postal": "1966"
    },
    {
        "name": "Keefe",
        "email": "elementum.dui.quis@pharetra.net",
        "company": "Orci Phasellus Ltd",
        "phone": "1691090772699",
        "city": "Alingsås",
        "country": "Kyrgyzstan",
        "postal": "207847"
    },
    {
        "name": "Zeus",
        "email": "varius.orci.in@nisinibhlacinia.co.uk",
        "company": "Velit Quisque LLC",
        "phone": "1689041434699",
        "city": "Balclutha",
        "country": "Greece",
        "postal": "325315"
    },
    {
        "name": "Magee",
        "email": "vulputate@lobortis.edu",
        "company": "Vitae Posuere At LLP",
        "phone": "1607070718299",
        "city": "Waiuku",
        "country": "Falkland Islands",
        "postal": "A5G 0B4"
    },
    {
        "name": "Sebastian",
        "email": "Aliquam.gravida.mauris@ascelerisquesed.com",
        "company": "Curabitur Corp.",
        "phone": "1650021700799",
        "city": "Romeral",
        "country": "Bouvet Island",
        "postal": "89708"
    },
    {
        "name": "Declan",
        "email": "dis.parturient@mattisInteger.ca",
        "company": "Aliquam Nec Enim LLC",
        "phone": "1601062324899",
        "city": "Malgesso",
        "country": "Virgin Islands, British",
        "postal": "56883-957"
    },
    {
        "name": "Wyatt",
        "email": "fringilla@mollisvitae.org",
        "company": "Non Arcu Company",
        "phone": "1650032982699",
        "city": "Puerto Varas",
        "country": "Grenada",
        "postal": "0727 CB"
    },
    {
        "name": "Uriah",
        "email": "eu.euismod.ac@non.co.uk",
        "company": "Sed Sapien Nunc Consulting",
        "phone": "1645080905899",
        "city": "Ramara",
        "country": "Germany",
        "postal": "V0T 8H4"
    },
    {
        "name": "Tucker",
        "email": "dapibus.gravida.Aliquam@accumsannequeet.net",
        "company": "Pretium Neque Morbi Company",
        "phone": "1696120759499",
        "city": "Pallavaram",
        "country": "Malta",
        "postal": "80341"
    },
    {
        "name": "Hiram",
        "email": "sed.orci@disparturient.ca",
        "company": "Eget Dictum Placerat Industries",
        "phone": "1638061666899",
        "city": "Cagli",
        "country": "Bermuda",
        "postal": "35901"
    },
    {
        "name": "Galvin",
        "email": "vel.quam.dignissim@eu.net",
        "company": "Nonummy Incorporated",
        "phone": "1620111840899",
        "city": "Morena",
        "country": "Singapore",
        "postal": "59843-573"
    },
    {
        "name": "Nathaniel",
        "email": "non.enim.Mauris@cubiliaCuraePhasellus.edu",
        "company": "Ornare Corporation",
        "phone": "1672061991499",
        "city": "Merritt",
        "country": "Estonia",
        "postal": "16550"
    },
    {
        "name": "Edan",
        "email": "purus.ac.tellus@atvelitPellentesque.com",
        "company": "Dolor Fusce Mi LLP",
        "phone": "1655063000499",
        "city": "Tuticorin",
        "country": "Trinidad and Tobago",
        "postal": "5942"
    },
    {
        "name": "Tiger",
        "email": "mauris@ategestas.edu",
        "company": "Enim Mauris Corp.",
        "phone": "1688030868599",
        "city": "Amberloup",
        "country": "Gibraltar",
        "postal": "977163"
    },
    {
        "name": "Matthew",
        "email": "rutrum@loremvitaeodio.edu",
        "company": "Egestas Limited",
        "phone": "1672120954799",
        "city": "Bhubaneswar",
        "country": "Oman",
        "postal": "S9G 0M4"
    },
    {
        "name": "Honorato",
        "email": "sed@sagittisNullam.edu",
        "company": "Eget Institute",
        "phone": "1643022609799",
        "city": "Minto",
        "country": "Sao Tome and Principe",
        "postal": "31946"
    },
    {
        "name": "Akeem",
        "email": "convallis.dolor.Quisque@ipsumdolorsit.net",
        "company": "Dictum Eu Ltd",
        "phone": "1633031803899",
        "city": "Bastogne",
        "country": "Bermuda",
        "postal": "S0X 5Y0"
    },
    {
        "name": "Salvador",
        "email": "risus.at.fringilla@Quisquevarius.co.uk",
        "company": "Pede Corporation",
        "phone": "1617112238499",
        "city": "Stintino",
        "country": "Mali",
        "postal": "23269"
    },
    {
        "name": "Owen",
        "email": "Quisque.fringilla.euismod@fringillaestMauris.edu",
        "company": "Enim Gravida Associates",
        "phone": "1633082559099",
        "city": "Houston",
        "country": "Moldova",
        "postal": "5842"
    },
    {
        "name": "Ryan",
        "email": "In.lorem@orciluctus.edu",
        "company": "Lectus Limited",
        "phone": "1628021602499",
        "city": "Lenna",
        "country": "Turks and Caicos Islands",
        "postal": "40650-738"
    },
    {
        "name": "Cameron",
        "email": "Aliquam.fringilla.cursus@pharetra.com",
        "company": "Mollis Lectus Pede Incorporated",
        "phone": "1690071948699",
        "city": "Coreglia Antelminelli",
        "country": "Czech Republic",
        "postal": "21394"
    },
    {
        "name": "Finn",
        "email": "Vestibulum@FuscemollisDuis.com",
        "company": "Cursus Institute",
        "phone": "1665082990299",
        "city": "Tillicoultry",
        "country": "Netherlands",
        "postal": "18518"
    },
    {
        "name": "Barclay",
        "email": "vel.nisl@blanditcongueIn.com",
        "company": "Ut Ltd",
        "phone": "1647120257499",
        "city": "Vierzon",
        "country": "Åland Islands",
        "postal": "893592"
    },
    {
        "name": "Benjamin",
        "email": "Sed.nec.metus@ac.ca",
        "company": "At Associates",
        "phone": "1651111115899",
        "city": "Cossignano",
        "country": "Djibouti",
        "postal": "2087"
    },
    {
        "name": "Keane",
        "email": "vel.faucibus.id@orcilacusvestibulum.org",
        "company": "Velit Incorporated",
        "phone": "1613091030999",
        "city": "South Burlington",
        "country": "Lesotho",
        "postal": "96650"
    },
    {
        "name": "Jamal",
        "email": "vulputate.nisi.sem@ornaresagittisfelis.net",
        "company": "Non Enim Corp.",
        "phone": "1633030165999",
        "city": "Viña del Mar",
        "country": "Montenegro",
        "postal": "24799"
    },
    {
        "name": "Graiden",
        "email": "ante.iaculis@enimsit.co.uk",
        "company": "Orci Tincidunt Limited",
        "phone": "1619030938799",
        "city": "Mackay",
        "country": "Peru",
        "postal": "NI06 5HY"
    },
    {
        "name": "Cullen",
        "email": "lacus.Aliquam@molestiearcuSed.ca",
        "company": "Ipsum Donec Associates",
        "phone": "1686070841699",
        "city": "Masullas",
        "country": "Botswana",
        "postal": "3076"
    },
    {
        "name": "Cade",
        "email": "augue.eu@sedfacilisisvitae.ca",
        "company": "Turpis LLC",
        "phone": "1630032583599",
        "city": "Castelbaldo",
        "country": "Cuba",
        "postal": "3335"
    },
    {
        "name": "Reuben",
        "email": "mi.lacinia@duiaugue.com",
        "company": "Enim Mi Company",
        "phone": "1622070887499",
        "city": "Épernay",
        "country": "Lithuania",
        "postal": "52456"
    },
    {
        "name": "Finn",
        "email": "varius@CurabiturdictumPhasellus.net",
        "company": "Vestibulum Corporation",
        "phone": "1661092986299",
        "city": "Okotoks",
        "country": "Rwanda",
        "postal": "08344"
    },
    {
        "name": "Tiger",
        "email": "mattis@maurisid.co.uk",
        "company": "Phasellus Institute",
        "phone": "1679030167099",
        "city": "Villar Pellice",
        "country": "South Sudan",
        "postal": "82292-747"
    },
    {
        "name": "Odysseus",
        "email": "ullamcorper.Duis@Phasellus.net",
        "company": "A Institute",
        "phone": "1655011157499",
        "city": "Licantén",
        "country": "Tunisia",
        "postal": "5088"
    },
    {
        "name": "Victor",
        "email": "magna.a@pulvinararcuet.edu",
        "company": "Pellentesque A PC",
        "phone": "1661120274999",
        "city": "Houtvenne",
        "country": "Japan",
        "postal": "145470"
    },
    {
        "name": "Dorian",
        "email": "tristique.ac@Nuncsed.net",
        "company": "Eleifend Egestas Sed Corp.",
        "phone": "1691060545099",
        "city": "Sudbury",
        "country": "Papua New Guinea",
        "postal": "5675 ZD"
    },
    {
        "name": "Wallace",
        "email": "ac.feugiat.non@sitamet.com",
        "company": "Et Risus Institute",
        "phone": "1605102702199",
        "city": "Sotteville-lès-Rouen",
        "country": "Tokelau",
        "postal": "13299"
    },
    {
        "name": "Xander",
        "email": "lacus.vestibulum@purus.org",
        "company": "Consequat Auctor Institute",
        "phone": "1663110306599",
        "city": "Davenport",
        "country": "Denmark",
        "postal": "81595"
    },
    {
        "name": "Kuame",
        "email": "sapien@auctor.com",
        "company": "Morbi Metus Vivamus Industries",
        "phone": "1633013016599",
        "city": "Bellefontaine",
        "country": "Papua New Guinea",
        "postal": "817047"
    },
    {
        "name": "Dexter",
        "email": "quam.elementum@adipiscingligula.com",
        "company": "Rutrum Associates",
        "phone": "1643030204499",
        "city": "Rio Saliceto",
        "country": "Curaçao",
        "postal": "80-433"
    },
    {
        "name": "Sean",
        "email": "Duis.volutpat.nunc@eratin.net",
        "company": "Vestibulum Incorporated",
        "phone": "1600091271299",
        "city": "San Calogero",
        "country": "Canada",
        "postal": "86465"
    },
    {
        "name": "Plato",
        "email": "facilisis.facilisis.magna@Nunc.com",
        "company": "Cras Vehicula Limited",
        "phone": "1612111828799",
        "city": "Flensburg",
        "country": "Christmas Island",
        "postal": "166807"
    },
    {
        "name": "Lionel",
        "email": "montes.nascetur@eutemporerat.org",
        "company": "Tortor Nunc Commodo Inc.",
        "phone": "1615091621999",
        "city": "Portland",
        "country": "Heard Island and Mcdonald Islands",
        "postal": "54818-340"
    },
    {
        "name": "Caesar",
        "email": "eget.massa@inlobortis.ca",
        "company": "Arcu Ac Limited",
        "phone": "1672011182499",
        "city": "Lakeland County",
        "country": "Gibraltar",
        "postal": "352274"
    },
    {
        "name": "Hiram",
        "email": "ac@disparturientmontes.org",
        "company": "Ac Mattis Velit Limited",
        "phone": "1651100283699",
        "city": "Delta",
        "country": "Dominica",
        "postal": "73017"
    },
    {
        "name": "Travis",
        "email": "Donec.nibh.Quisque@nulla.net",
        "company": "Feugiat Inc.",
        "phone": "1658032958499",
        "city": "Teruel",
        "country": "Gambia",
        "postal": "708740"
    },
    {
        "name": "Ciaran",
        "email": "Donec@Phasellusliberomauris.org",
        "company": "Et Netus Institute",
        "phone": "1678120330799",
        "city": "Zaffelare",
        "country": "Japan",
        "postal": "0305"
    },
    {
        "name": "Marshall",
        "email": "In.ornare.sagittis@dolorvitae.ca",
        "company": "Fusce Inc.",
        "phone": "1604070697699",
        "city": "Orp-le-Grand",
        "country": "Cape Verde",
        "postal": "10897"
    },
    {
        "name": "Logan",
        "email": "in.consequat.enim@convallisconvallisdolor.net",
        "company": "Elit LLP",
        "phone": "1621061810999",
        "city": "Barcelona",
        "country": "Sri Lanka",
        "postal": "6056 GM"
    },
    {
        "name": "Kareem",
        "email": "Cras@vestibulummassarutrum.com",
        "company": "Volutpat LLP",
        "phone": "1620051100399",
        "city": "Lummen",
        "country": "Liechtenstein",
        "postal": "1493"
    },
    {
        "name": "Warren",
        "email": "laoreet.lectus.quis@eleifendnon.org",
        "company": "Porttitor Vulputate Posuere Foundation",
        "phone": "1650022832899",
        "city": "Ribeirão Preto",
        "country": "Luxembourg",
        "postal": "9566"
    },
    {
        "name": "Macaulay",
        "email": "at@lobortisrisusIn.edu",
        "company": "Faucibus Morbi Company",
        "phone": "1633010826399",
        "city": "Trento",
        "country": "Cyprus",
        "postal": "0205"
    },
    {
        "name": "Aaron",
        "email": "natoque.penatibus@Sedeget.edu",
        "company": "Tempus Scelerisque Foundation",
        "phone": "1668090184399",
        "city": "Iqaluit",
        "country": "United Arab Emirates",
        "postal": "55562"
    },
    {
        "name": "Kieran",
        "email": "Integer.sem@purus.edu",
        "company": "Consectetuer Institute",
        "phone": "1660092718299",
        "city": "Zandvoorde",
        "country": "Myanmar",
        "postal": "333860"
    },
    {
        "name": "Garrett",
        "email": "id.risus.quis@in.ca",
        "company": "Ut Incorporated",
        "phone": "1664072237899",
        "city": "Gwalior",
        "country": "Kenya",
        "postal": "3139"
    },
    {
        "name": "Dolan",
        "email": "Vestibulum.accumsan.neque@egetvolutpatornare.edu",
        "company": "Lectus A Corp.",
        "phone": "1636082646899",
        "city": "Thuin",
        "country": "Saudi Arabia",
        "postal": "20210"
    },
    {
        "name": "Mannix",
        "email": "sed.pede@eget.co.uk",
        "company": "Nibh Corp.",
        "phone": "1658073072999",
        "city": "Flawinne",
        "country": "Bahamas",
        "postal": "A1B 9Z7"
    },
    {
        "name": "Tate",
        "email": "non@urnajusto.net",
        "company": "Nisl Incorporated",
        "phone": "1660070981499",
        "city": "St. Veit an der Glan",
        "country": "China",
        "postal": "181687"
    },
    {
        "name": "Beau",
        "email": "tristique.ac@semperpretiumneque.edu",
        "company": "Cum Sociis PC",
        "phone": "1653040191299",
        "city": "Golspie",
        "country": "Bahrain",
        "postal": "OH8V 0ZP"
    },
    {
        "name": "Sawyer",
        "email": "justo@sit.net",
        "company": "Egestas Industries",
        "phone": "1696090650999",
        "city": "Bellingen",
        "country": "Estonia",
        "postal": "4864 LN"
    },
    {
        "name": "Brandon",
        "email": "libero.Proin.mi@vitae.co.uk",
        "company": "Aenean Sed LLC",
        "phone": "1625102924399",
        "city": "San Ramón",
        "country": "Paraguay",
        "postal": "9561"
    },
    {
        "name": "Stewart",
        "email": "nunc.sit.amet@placeratCrasdictum.ca",
        "company": "Metus LLC",
        "phone": "1636072882599",
        "city": "Quirihue",
        "country": "Korea, South",
        "postal": "1201"
    },
    {
        "name": "Wade",
        "email": "Praesent@aliquam.edu",
        "company": "Felis Eget Varius Corporation",
        "phone": "1629031316299",
        "city": "Alanya",
        "country": "France",
        "postal": "86810"
    },
    {
        "name": "Luke",
        "email": "vel@dapibus.ca",
        "company": "Elit Elit Fermentum LLC",
        "phone": "1697093065499",
        "city": "Wabamun",
        "country": "Tokelau",
        "postal": "92018"
    },
    {
        "name": "Zeus",
        "email": "Donec.non@odioAliquamvulputate.edu",
        "company": "Ipsum Incorporated",
        "phone": "1628101342099",
        "city": "Fahler",
        "country": "Panama",
        "postal": "12471"
    },
    {
        "name": "Brandon",
        "email": "tempor.bibendum.Donec@luctusfelis.org",
        "company": "Parturient Montes Nascetur Corporation",
        "phone": "1641112834199",
        "city": "Tewkesbury",
        "country": "Germany",
        "postal": "1895"
    },
    {
        "name": "Colorado",
        "email": "magna.Phasellus.dolor@aliquamiaculis.co.uk",
        "company": "Pede LLP",
        "phone": "1670110598499",
        "city": "Heusweiler",
        "country": "Angola",
        "postal": "888192"
    },
    {
        "name": "Jelani",
        "email": "ac.turpis@veliteusem.org",
        "company": "Euismod Enim Etiam Ltd",
        "phone": "1674031903299",
        "city": "Weyburn",
        "country": "Guyana",
        "postal": "0809 UD"
    },
    {
        "name": "Coby",
        "email": "Aliquam.gravida.mauris@volutpatornare.co.uk",
        "company": "Pede Ultrices A PC",
        "phone": "1647080592499",
        "city": "Reading",
        "country": "Burkina Faso",
        "postal": "V4 2PC"
    },
    {
        "name": "Paki",
        "email": "eu.euismod@nibhvulputate.ca",
        "company": "Aliquam Rutrum Lorem Foundation",
        "phone": "1649032334899",
        "city": "Whangarei",
        "country": "Denmark",
        "postal": "72551"
    },
    {
        "name": "Francis",
        "email": "tellus@Aliquamauctorvelit.edu",
        "company": "Vitae Corp.",
        "phone": "1659072636699",
        "city": "Darwin",
        "country": "Oman",
        "postal": "2194 YP"
    },
    {
        "name": "Phillip",
        "email": "torquent.per.conubia@eget.net",
        "company": "Lacus Mauris LLP",
        "phone": "1619010144099",
        "city": "Hertford",
        "country": "Tuvalu",
        "postal": "B8W 8T6"
    },
    {
        "name": "Aquila",
        "email": "odio.auctor.vitae@Integeraliquamadipiscing.com",
        "company": "Pede Nunc Incorporated",
        "phone": "1692032213799",
        "city": "Cuenca",
        "country": "British Indian Ocean Territory",
        "postal": "17750"
    },
    {
        "name": "Xander",
        "email": "orci.lacus@duisemper.org",
        "company": "Consequat Lectus Sit Corporation",
        "phone": "1600101823699",
        "city": "Baton Rouge",
        "country": "Nigeria",
        "postal": "5514"
    },
    {
        "name": "Adrian",
        "email": "egestas.urna.justo@mienim.edu",
        "company": "Tincidunt Aliquam LLC",
        "phone": "1687120184599",
        "city": "Saint-Urbain",
        "country": "Palau",
        "postal": "12220"
    }
];

export const demos = [{
    Name: 'Columns Resizing',
    Icon: 'mdi mdi-arrow-split-vertical',
    CGrid: <ColumnResizing.CGrid rows={rows} />,
    Code: ColumnResizing.Code,
},
{
    Name: 'Custom Cell',
    Icon: 'mdi mdi-table-edit',
    CGrid: <CustomCell.CGrid rows={rows} />,
    Code: CustomCell.Code,
},
{
    Name: 'Change Row Height',
    Icon: 'mdi mdi-table-row-height',
    CGrid: <ChangeRowHeight.CGrid rows={rows} />,
    Code: ChangeRowHeight.Code,
},
{
    Name: 'Auto Fit',
    Icon: 'mdi mdi-arrow-expand-horizontal',
    CGrid: <AutoFit.CGrid rows={rows} />,
    Code: AutoFit.Code,
},
{
    Name: 'Sorting',
    Icon: 'mdi mdi-sort',
    CGrid: <Sorting.CGrid rows={rows} />,
    Code: Sorting.Code,
},
{
    Name: 'Pagination',
    Icon: 'mdi mdi-dots-horizontal',
    CGrid: <Pagination.CGrid rows={rows} />,
    Code: Pagination.Code,
}];