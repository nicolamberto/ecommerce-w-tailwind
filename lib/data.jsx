import { FaInstagram, FaLinkedinIn  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import ssdadata from '@/public/DISCO SOLIDO SSD ADATA 1TB M2 NVME GAMMIX S70 7400MBS.png'
import ssdcorsair from '@/public/SSDCORSAIR.png'
import ssdpny from '@/public/SSDPNY.png'
import ssdpnyportatil from '@/public/SSDPNYPORTATIL.png'
import ssdwestern from '@/public/SSDWESTERN.png'
import ssdportatillexar from '@/public/SSDPORTATILLEXAR.png'

import ramadata from '@/public/ramadata.png'
import ramkingston from '@/public/ramkingston.jpg'
import ramlexar from '@/public/ramlexar.png'
import rampnygamingwhite from '@/public/rampnygamingwhite.png'
import rampnysilver from '@/public/rampnysilver.jpg'
import rampnyxlr8 from '@/public/rampnyxlr8.png'

import microi3 from '@/public/microi3.jpg'
import microi7 from '@/public/microi7.png'
import microi9 from '@/public/microi9.jpg'
import microryzen5 from '@/public/microryzen5.jpg'
import microryzen7 from '@/public/microryzen7.png'
import microryzen9 from '@/public/microryzen9.jpg'

import mbbiostar from '@/public/mbbiostar.png'
import mbgigabyte from '@/public/mbgigabyte.png'
import mbmsi from '@/public/mbmsi.png'
import mbasrock from '@/public/mbasrock.png'
import mbasusrog from '@/public/mbasusrog.png'
import mbasusprime from '@/public/mbasusprime.png'

import gpasus from '@/public/gpuasus.png'
import gpugigabyte4060 from '@/public/gpugigabyte4060.png'
import gpugigabyte4070 from '@/public/gpugigabyte4070.png'
import gpumsi from '@/public/gpumsi.png'
import gpupny from '@/public/gpupny.png'
import gpupowercolor from '@/public/gpupowercolor.jpg'

import gabadata from '@/public/gabadata.png'
import gabcoolermaster from '@/public/gabcoolermaster.png'
import gabcorsair from '@/public/gabcorsair.png'
import gabgamemax from '@/public/gabgamemax.png'
import gabgigabyte from '@/public/gabgigabyte.png'
import gabthermaltake from '@/public/gabthermaltake.jpg'

import carimg1 from '@/public/carousel1.jpg'
import carimg2 from '@/public/carousel2.jpg'
import carimg3 from '@/public/carousel3.jpg'

export const links = [
    {
        name: 'instagram',
        icon: <FaInstagram/>
    },
    {
        name: 'twitter',
        icon: <FaXTwitter/>
    },
    {
        name: 'linkedin',
        icon: <FaLinkedinIn />
    }

]


export const products = [
    {
        name:'DISCO SOLIDO SSD WESTERN DIGITAL WD 1TB M.2 NVME SN770 BLACK 5150MB/S',
        img:ssdwestern,
        price:119990,
        descrption:'MODELO: WDS100T3X0E | GTIN: 718037887333',
        category:'SSD',
        mark:'WESTERN'
    },
    {
        name:'DISCO SOLIDO SSD PORTATIL USB 1TB LEXAR SL200 TIPO C',
        img: ssdportatillexar,
        price: 136990,
        descrption:'MODELO: LSL200X001T-RNNNG | GTIN: 843367121007',
        category:'SSD',
        mark:'LEXAR'
    },
    {
        name:'DISCO SOLIDO SSD ADATA 1TB M.2 NVME GAMMIX S70 7400MB/S',
        img:ssdadata,
        price:129990,
        descrption:'MODELO: AGAMMIXS70B-1T-CS | GTIN: 4711085933065',
        category:'SSD',
        mark:'ADATA'
    },
    {
        name:'DISCO SOLIDO SSD PORTATIL USB 1TB PNY ELITE-X USB TIPO C',
        img:ssdpnyportatil,
        price:129990,
        descrption:'MODELO: PSD0CS2360-1TB-RB | GTIN: 4718006454937',
        category:'SSD',
        mark:'PNY'
    },
    {
        name:'DISCO SOLIDO SSD PNY 1TB XLR8 M2 NVME CS3140 7500 MB/S',
        img:ssdpny,
        price:149990,
        descrption:'MODELO: M280CS3140-1TB-CL | GTIN: 4718006453893',
        category:'SSD',
        mark:'PNY'
    },
    {
        name:'DISCO SOLIDO SSD CORSAIR 1TB MP600 PRO LPX M2 2280 *PS5 COMPATIBLE',
        img:ssdcorsair,
        price:159990,
        descrption:'MODELO: CSSD-F1000GBMP600PLP | GTIN: 840006657781',
        category:'SSD',
        mark:'CORSAIR'
    },



    {
        name:'MEMORIA RAM DDR4 16GB 3200MHZ PNY XLR8 RGB GAMING',
        img:rampnyxlr8,
        price:59990,
        descrption:'MODELO: MD16GD4320016XRGB | GTIN: 4712847099555',
        category:'RAM',
        mark:'PNY'
    },
    {
        name:'MEMORIA RAM PNY DDR4 16GB 3200MHZ SILVER RGB',
        img:rampnysilver,
        price:65990,
        descrption:'MODELO: MD16GSD4320016XSRGB | GTIN: 4718006453503',
        category:'RAM',
        mark:'PNY'
    },
    {
        name:'MEMORIA RAM PNY DDR4 16GB 3200MHZ XLR8 RGB GAMING WHITE',
        img:rampnygamingwhite,
        price:43990,
        descrption:'MODELO: MD16GD4320016XRGBW | GTIN: 4718006450229',
        category:'RAM',
        mark:'PNY'
    },
    {
        name:'MEMORIA RAM ADATA 16GB 3200MHZ XPG GAMMIX D45 2X8',
        img:ramadata,
        price:76990,
        descrption:'MODELO: AX4U32008G16A-DCBKD45 | GTIN: 4711085934819',
        category:'RAM',
        mark:'ADATA'
    },
    {
        name:'MEMORIA RAM LEXAR 16GB 3600MHZ HADES OC 2X8GB DDR4',
        img:ramlexar,
        price:39990,
        descrption:'MODELO: LD4BU008G-R3600UDLH | GTIN: 843367125005',
        category:'RAM',
        mark:'LEXAR'
    },
    {
        name:'MEMORIA RAM KINGSTON FURY BEAST DDR4 16GB 3200MHZ RGB CL16',
        img:ramkingston,
        price:80990,
        descrption:'MODELO: KF432C16BBA/16 | GTIN: 740617319378',
        category:'RAM',
        mark:'KINGSTON'
    },



    {
        name:'MICROPROCESADOR AMD RYZEN 7 7700X 8/16 5.4GHZ RAPHAEL ZEN4 AM5',
        img:microryzen7,
        price:479990,
        descrption:'MODELO: 100-100000591WOF | GTIN: 730143314428',
        category:'MICRO',
        mark:'AMD'
    },
    {
        name:'MICROPROCESADOR AMD RYZEN 9 5900X 12/24 4.8GHZ S/G S/C ZEN3',
        img:microryzen9,
        price:479990,
        descrption:'MODELO: 100-100000061WOF | GTIN: 730143312738',
        category:'MICRO',
        mark:'AMD'
    },
    {
        name:'MICROPROCESADOR INTEL CORE I9 12900KF ALDERLAKE S1700 12VA',
        img:microi9,
        price:579990,
        descrption:'MODELO: BX8071512900KF | GTIN: 735858499163',
        category:'MICRO',
        mark:'INTEL'
    },
    {
        name:'MICROPROCESADOR CPU INTEL CORE I7 13700 RAPTORLAKE S1700 13VA',
        img:microi7,
        price:579990,
        descrption:'MODELO: BX8071513700 | GTIN: 5032037260213',
        category:'MICRO',
        mark:'INTEL'
    },
    {
        name:'MICROPROCESADOR CPU INTEL CORE I3 13100 RAPTORLAKE S1700 13VA',
        img:microi3,
        price:197990,
        descrption:'MODELO: BX8071513100 | GTIN: 5032037260312',
        category:'MICRO',
        mark:'INTEL'
    },
    {
        name:'MICROPROCESADOR AMD RYZEN 5600G 4.4 GHZ AM4',
        img:microryzen5,
        price:179989,
        descrption:'MODELO: 100-100000252BOX | GTIN: 730143313414',
        category:'MICRO',
        mark:'AMD'
    },



    {
        name:'MOTHERBOARD GIGABYTE B650 AORUS ELITE AX BOX AM5 DDR5',
        img:mbgigabyte,
        price:424999,
        descrption:'MODELO: B650M AORUS ELITE AX | GTIN: 4719331849399',
        category:'MB',
        mark:'GIGABYTE'
    },
    {
        name:'MOTHERBOARD MSI MAG B650M MORTAR WIFI AM5',
        img:mbmsi,
        price:359999,
        descrption:'MODELO: MAG B650M MORTAR WIFI | GTIN: 4711377010207',
        category:'MB',
        mark:'MSI'
    },
    {
        name:'MOTHERBOARD BIOSTAR H510MHP 2.0',
        img:mbbiostar,
        price:73999,
        descrption:'MODELO: H510MHP 2.0 | GTIN: 4712960687011',
        category:'MB',
        mark:'BIOSTAR'
    },
    {
        name:'OUTLET MOTHERBOARD ASROCK H510 PRO BTC+ MINING S1200 DDR4',
        img:mbasrock,
        price:87499,
        descrption:'MODELO: 90 MXBGL0 A0UAYZ | GTIN: 4710483935220',
        category:'MB',
        mark:'ASROCK'
    },
    {
        name:'MOTHERBOARD ASUS ROG CROSSHAIR X670E HERO AM5',
        img:mbasusrog,
        price:929999,
        descrption:'MODELO: 90MB1BC0 M0EAY0 | GTIN: 195553862424',
        category:'MB',
        mark:'ASUS'
    },
    {
        name:'MOTHERBOARS ASUS PRIME Z790-P LGA1700 DDR5',
        img:mbasusprime,
        price:389999,
        descrption:'MODELO: 90MB1CK0 M0EAY0 | GTIN: 4711081937449',
        category:'MB',
        mark:'ASUS'
    },



    {
        name:'PLACA DE VIDEO PNY NVIDIA GEFORCE RTX 4080 XLR8 GAMING VERTO EPIC X 16GB GDDR6X',
        img:gpupny,
        price:1649999,
        descrption:'MODELO: VCG408016TFXXPB1 | GTIN: 4718006453930',
        category:'PV',
        mark:'PNY'
    },
    {
        name:'PLACA DE VIDEO POWERCOLOR AMD RADEON RX 6700 10GB GDDR6 2235 OEM',
        img:gpupowercolor,
        price:479999,
        descrption:'MODELO: 1A1-G00368500B | GTIN: 4713436174042',
        category:'PV',
        mark:'POWERCOLOR'
    },
    {
        name:'PLACA DE VIDEO MSI NVIDIA GEFORCE RTX 4060TI VENTUS 2X BLACK 8GB OC GDDR6',
        img:gpumsi,
        price:579999,
        descrption:'MODELO: GEFORCE RTX 4060 TI VENTUS 2X BL | GTIN: 4711377102582',
        category:'PV',
        mark:'MSI'
    },
    {
        name:'PLACA DE VIDEO ASUS NVIDIA GEFORCE RTX 4060TI OC DUAL',
        img:gpasus,
        price:629999,
        descrption:'MODELO: 90YV0J40 M0AA00 | GTIN: 197105207264',
        category:'PV',
        mark:'ASUS'
    },
    {
        name:'PLACA DE VIDEO GPU GIGABYTE NVIDIA GEFORCE RTX 4070 TI EAGLE OC 12GB',
        img:gpugigabyte4070,
        price:1154999,
        descrption:'MODELO: GVN407TEAGLE OC12GD | GTIN: 4719331312978',
        category:'PV',
        mark:'GIGABYTE'
    },
    {
        name:'PLACA DE VIDEO GIGABYTE NVIDIA GEFORCE RTX 4060 WINDFORCE OC 8GB',
        img:gpugigabyte4060,
        price:499999,
        descrption:'MODELO: GEFORCE RTX 4060 WINDFORCE OC 8G | GTIN: 4719331313685',
        category:'PV',
        mark:'GIGABYTE'
    },




    {
        name:'GABINETE ADATA XPG INVADER TG CON COOLERS X2 BLANCO',
        img:gabadata,
        price:98990,
        descrption:'MODELO: 15260045 | GTIN: 4710273773056',
        category:'GAB',
        mark:'ADATA'
    },
    {
        name:'GABINETE CORSAIR 5000T TG RGB BLACK',
        img:gabcorsair,
        price:469990,
        descrption:'MODELO: CC-9011230-WW | GTIN: 840006645160',
        category:'GAB',
        mark:'CORSAIR'
    },
    {
        name:'GABINETE THERMALTAKE H550 TG BLACK ARGB',
        img:gabthermaltake,
        price:199990,
        descrption:'MODELO: CA-1P4-00M1WN-00 | GTIN: 841163072929',
        category:'GAB',
        mark:'THERMALTAKE'
    },
    {
        name:'GABINETE GIGABYTE C300 RGB AORUS BLACK',
        img:gabgigabyte,
        price:194990,
        descrption:'MODELO: GB AC300G | GTIN: 813567026617',
        category:'GAB',
        mark:'GIGABYTE'
    },
    {
        name:'GABINETE COOLER MASTER C700M 30TH L.E C/CHAPA NUMERADA',
        img:gabcoolermaster,
        price:999990,
        descrption:'MODELO: MCC-C700M-KHNN-S30 | GTIN: 4719512127704',
        category:'GAB',
        mark:'COOLERMASTER'
    },
    {
        name:'GABINETE GAMEMAX NOVA N6 MID TOWER ATX ARGB',
        img:gabgamemax,
        price:49990,
        descrption:'MODELO: NOVA N6 | GTIN: 6931858771696',
        category:'GAB',
        mark:'GAMEMAX'
    },
    
    
    
]


export const carouselImgs = [
    {
        url: carimg1
    },
    {
        url: carimg2
    },
    {
        url: carimg3
    }
]

