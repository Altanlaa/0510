/*
 * @author Altanla <altan0225@gmail.com> 
 */
'use clien';
import Link from "next/link";
import { Navbar,
      NavbarBrand,
      NavbarCollapse,
      NavbarLink,
      NavbarToggle,
      Footer,
      FooterCopyright,
      FooterLink,
      FooterLinkGroup,
      Carousel,
      Card,
      Button,
      DarkThemeToggle } from "flowbite-react";

import Customcard from '@/app/components/Card';
import { useState,useEffect } from "react";

export default function Home() {
  const [items,setItems]=useState([]);
  
  const apiurl = 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty?%24top=30&%24format=JSON'
  useEffect(()=>{
    const gettoken=async()=>{}
    const clientId = process.env.TDX_CLIENT_ID;
    const clinesecret=rocess.env.TDX_CLIENT_SECRET;
    const tokenparams=new URLSearchParams();
    tokenparams.append('grant_type','client_credentails');
    tokenparams.append('client_id',clientId);
    tokenparams.append('client_secret',clinesecret);
    const tokenresponce= await fetch('https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',{
      method:'POST',
      headers:{
        'content_type':'application/x-www-form-urlencoded'
      },
      body:tokenparams.toString()
    });
  },[]);
  // const items = [
  //   // {
  //   //   cover:"/banner/ban-1.jpg",
  //   //   name:"toasts",
  //   //   description:"oh..burn",
  //   // },
  //   // {
  //   //   cover:"/banner/ban-2.jpg",
  //   //   name:"sad toast",
  //   //   description:"so sad :(",
  //   // }, 
  //   // {
  //   //   cover:"/banner/ban-3.jpg",
  //   //   name:"watching toast",
  //   //   description:"toast is watching u",
  //   // },
  //   {
  //     "ScenicSpotID": "C1_397000000A_000010",
  //     "ScenicSpotName": "中都愛河濕地公園",
  //     "DescriptionDetail": "串起高雄城市生態綠廊的中都愛河濕地公園座落於愛河南側的十全與九如路之間，全長約2.5公里，佔地達七千餘平方公尺。為了打造與市民生活融合的「水岸花香的永續生態城市」，愛河濕地公園以生態工法構築邊坡，重現早期溼地豐富生態棲息環境。園區設置原木建築為遊客解說中心，另有木造涼亭、吊橋、潮汐親水平台以及漂流木為設計主軸的燈具座椅等設施，質樸中深具原野氣息，而仿自然的複層林相植栽也使市區重現豐富林相。悠遊於綠油油曲折玲瓏的河岸可見各種水鳥飛翔駐留、紅樹林和濕地更使愛河重現盎然生機。由於中都濕地公園打造出兼具自然生態、教育解說及民眾休憩等眾多功能，又完整呈現愛河沿岸多樣性的風貌，2012年榮獲「全球卓越建設獎」殊榮，也因此有高雄都會桃花源的美稱。",
  //     "Description": "中都濕地公園打造出兼具自然生態、教育解說及民眾休憩等眾多功能，呈現愛河沿岸多樣性的風貌，也因此有高雄都會桃花源的美稱。",
  //     "Phone": "886-7-7995678",
  //     "Address": "高雄市807三民區同盟三路與十全三路交叉處",
  //     "ZipCode": "807",
  //     "OpenTime": "全天候開放",
  //     "Picture": {
  //       "PictureUrl1": "https://khh.travel/image/889/640x480",
  //       "PictureDescription1": "中都濕地公園07"
  //     },
  //     "Position": {
  //       "PositionLon": 120.28652954101562,
  //       "PositionLat": 22.646549224853516,
  //       "GeoHash": "wsj8c4tvx"
  //     },
  //     "ParkingPosition": {},
  //     "City": "高雄市",
  //     "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
  //     "UpdateTime": "2024-05-31T03:14:56+08:00"
  //   },
  //   {
  //     "ScenicSpotID": "C1_397000000A_000011",
  //     "ScenicSpotName": "檨仔林埤濕地公園",
  //     "DescriptionDetail": "狹長型的檨仔林埤濕地公園位於高雄市三民區，鼎金後路與鼎金系統交流道之間，是高雄市近年來整治成功，兼具滯洪、防洪、休閒教育與生態功能的埤塘濕地公園之一。園區北側有「生態密林區」，茂密的原生檨仔樹林如同都市之肺，可以阻隔、緩衝北側高速公路對生態與環境造成的干擾; 「生態維持區」則將原有地形疏浚深化，形成生態浮島與水域栽培育區，遍植野薑花、慈菇、香蒲等水生植物，利用生態池水體自淨機制淨化水質。清新的環境與自然的綠意，吸引水鳥與生物棲息，腳踏車道與林蔭綠意提供遊人休憩放鬆的清淨角落，也是高雄市美麗的後花園。",
  //     "Description": "狹長型的檨仔林埤濕地公園，是高雄市近年來整治成功，兼具滯洪、防洪、休閒教育與生態功能的埤塘濕地公園之一。",
  //     "Phone": "886-7-7995678",
  //     "Address": "高雄市807三民區鼎金後路461巷",
  //     "ZipCode": "807",
  //     "OpenTime": "全天候開放",
  //     "Picture": {
  //       "PictureUrl1": "https://khh.travel/image/193/640x480",
  //       "PictureDescription1": "檨仔林埤濕地公園01"
  //     },
  //     "Position": {
  //       "PositionLon": 120.32707214355469,
  //       "PositionLat": 22.672700881958008,
  //       "GeoHash": "wsj8fp7qp"
  //     },
  //     "ParkingPosition": {},
  //     "City": "高雄市",
  //     "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
  //     "UpdateTime": "2024-05-31T03:14:56+08:00"
  //   },
  //   {
  //     "ScenicSpotID": "C1_397000000A_000016",
  //     "ScenicSpotName": "愛河之心",
  //     "DescriptionDetail": "位於高雄市博愛一路和同盟一路的愛河中上游，愛河之心是由東湖與西湖構成，兩湖中間興建一座橋貫通，形狀好似一個心形。佔地1.4平方公里的愛河之心是二個人工蓄洪湖構成，較淺的東湖是生態池，打造的仿自然環境供魚蝦生物棲息生長，西湖因水位較深，除了滯洪及生態功能外還供愛河遊船行駛停靠，兩湖之間由空橋連繫，形成美麗的心型。每當夜幕低垂，彩色燈光投影在湖畔水景噴泉及橋面，白色縷空護欄也映照出朵朵美麗心花，猶如愛河上最閃爍燦爛的珠寶，浪漫情調總是吸引遊客情侶在湖畔漫遊、不捨離去。愛河之心交通便捷，除公路捷運外，尚有水路遊船及單車步道，是體會夜高雄之美的最佳去處。",
  //     "Description": "位於高雄市的愛河中上游，愛河之心是二個人工蓄洪湖東湖與西湖構成，兩湖中間興建一座橋貫通，形狀好似一個心形。",
  //     "Phone": "886-7-7995678",
  //     "Address": "高雄市807三民區博愛一路和同盟一路、二路",
  //     "ZipCode": "807",
  //     "TravelInfo": "搭高鐵至左營站下或搭臺鐵至高雄站下 → 轉搭高雄捷運至後驛站下。",
  //     "OpenTime": "全天候開放",
  //     "Picture": {
  //       "PictureUrl1": "https://khh.travel/content/images/Attractions/18372/640x480_attractions-image-bae0klru_u-qfd7nguvujw.jpg",
  //       "PictureDescription1": "愛河之心空拍照-白天"
  //     },
  //     "Position": {
  //       "PositionLon": 120.30387878417969,
  //       "PositionLat": 22.65131950378418,
  //       "GeoHash": "wsj8ced97"
  //     },
  //     "Class1": "遊憩類",
  //     "Class2": "體育健身類",
  //     "ParkingPosition": {},
  //     "City": "高雄市",
  //     "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
  //     "UpdateTime": "2024-05-31T03:14:56+08:00"
  //   },
  //   {
  //     "ScenicSpotID": "C1_397000000A_000021",
  //     "ScenicSpotName": "國定古蹟-竹仔門電廠",
  //     "DescriptionDetail": "竹仔門發電廠目前正式名稱為「高屏發電廠竹仔門分廠」，是日據(治)時代為提供南臺灣電力而興建，利用荖濃溪水力發電的川流式電廠。建於1908年的竹仔門電廠花木扶疏、綠樹蓊鬱，仿巴洛克式的三層磚造樓房去除了繁複的花飾、留下簡捷優雅的線條，弧形山牆、成列的拱形窗戶、牛眼窗，使電廠少了冰冷的工業風格而多了古典溫潤，在美濃紅磚瓦厝的四合院落中更顯得獨具特色。電廠內的發電設備當年均由德國進口，經過百年時光仍能運轉，猶如活古董般的發電機見證了百年來臺灣的發電史，也因此竹仔門電廠列為臺灣第一座「產業古蹟」，2003年更成為國定古蹟。竹仔門電廠的電力曾為南臺灣現代化奠定基礎，發電後的排水也為高屏農業灌溉出富裕繁盛，可在電廠上班日安排參觀，欣賞百年電廠環境及建築之美並實地了解水力發電，深具教育與觀光意義。",
  //     "Description": "竹仔門發電廠目前正式名稱為「高屏發電廠竹仔門分廠」，是日據時代為提供南台灣電力而興建，利用荖濃溪水力發電的川流式電廠。",
  //     "Phone": "886-7-6850579",
  //     "Address": "高雄市843美濃區獅山里竹門20號",
  //     "ZipCode": "843",
  //     "OpenTime": "平日：08:00–16:30",
  //     "Picture": {
  //       "PictureUrl1": "https://khh.travel/image/1444/640x480",
  //       "PictureDescription1": "竹子門發電廠 (5)"
  //     },
  //     "Position": {
  //       "PositionLon": 120.58638763427734,
  //       "PositionLat": 22.869400024414062,
  //       "GeoHash": "wsjf050rf"
  //     },
  //     "ParkingPosition": {},
  //     "City": "高雄市",
  //     "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
  //     "UpdateTime": "2024-05-31T03:14:56+08:00"
  //   },
  //   {
  //     "ScenicSpotID": "C1_397000000A_000026",
  //     "ScenicSpotName": "佛光山",
  //     "DescriptionDetail": "佛光山寺位於大樹區北端，由星雲法師於民國56年帶領弟子披荊斬棘一磚一瓦所建，佔地五十餘公頃，與2011年新建的佛陀紀念館綿延於高屏溪右岸，大大小小的佛殿依山勢羅列，莊嚴雄渾、氣勢宏偉，是臺灣重要的佛教勝地。佛光山有四座殿堂式主建築及上萬尊的神像，另有教育、醫療、美術館等等機構，是以推動人間佛教、建設人間淨土為宗旨，綜合了弘法、教育、慈善、文化、朝聖等並行發展之現代道場。佛光山提供信眾參拜及佛學清修教育等多元環境，同時也是遊人朝聖踏青的熱門景點，尤以夕陽西下時大佛與宮殿式寺廟沐浴在暮靄霞光中更顯莊嚴恢宏、見之忘卻塵世煩憂。農曆春節到元宵期間，滿山掛滿花燈，入夜後更是光華燦爛、美不勝收。",
  //     "Description": "佛光山寺由星雲法師於民國56年帶領弟子披荊斬棘一磚一瓦所建，大大小小的佛殿依山勢羅列，莊嚴雄渾、氣勢宏偉。",
  //     "Phone": "886-7-6561921",
  //     "Address": "高雄市840大樹區興田里興田路153號",
  //     "ZipCode": "840",
  //     "TravelInfo": "台鐵、飛機：在高雄火車站附近轉高雄客運往旗山、美濃、甲仙、六龜等(有經佛光山路線)皆可搭乘；或搭乘台鐵至九曲堂站，再轉搭高雄客運或計程車至佛光山。高鐵：於左營高鐵站轉乘台鐵至九曲堂站，再轉搭高雄客運或計程車至佛光山。搭乘義大客運直達佛光山。台灣好行-大樹祈福線：一日券優惠價50元。哈佛快線：搭乘高雄客運「哈佛快線」從高鐵左營站經國道10號往返佛陀紀念館、佛光山之間，行程約30分...",
  //     "OpenTime": "08:30–17:30",
  //     "Picture": {
  //       "PictureUrl1": "https://khh.travel/content/images/Attractions/18453/640x480_attractions-image-nklp00q7cu2yvhwwckcuga.jpg",
  //       "PictureDescription1": "佛光山-大佛照"
  //     },
  //     "Position": {
  //       "PositionLon": 120.44612121582031,
  //       "PositionLat": 22.747400283813477,
  //       "GeoHash": "wsj9kv41n"
  //     },
  //     "ParkingPosition": {},
  //     "City": "高雄市",
  //     "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
  //     "UpdateTime": "2024-05-31T03:14:56+08:00"
  //   },
  //   {
  //     "ScenicSpotID": "C1_397000000A_000028",
  //     "ScenicSpotName": "臺灣天壇",
  //     "DescriptionDetail": "臺灣天壇位於大樹行政區北端，前臨高屏溪及里嶺大橋、三面則有群山環繞，交通方便、景觀壯濶。天壇面積近三萬平方公尺，氣派的迎賓牌坊及九十九級台階引領遊客信眾進入莊嚴優雅的清修之地，精緻的九龍浮雕更增添磅礡氣勢。天壇為仿北平天壇而建的圓型建築體，樓高三層，以紅色樑柱、綠色拱頂覆以金黃色琉璃瓦，氣度圓融恢宏，內部陳設則質樸典雅，分層供奉清水祖師、關聖帝君及玉皇大帝，除了供信眾信仰朝拜、也是一覽高屏溪秀麗風光的絶佳地點。",
  //     "Description": "臺灣天壇位於大樹行政區北端，前臨高屏溪及里嶺大橋、三面則有群山環繞，交通方便、景觀壯濶。天壇面積近三萬平方公尺，氣派的迎賓牌坊及九十九級台階引領遊客信眾進入莊嚴優雅的清修之地，精緻的九龍浮雕更增添磅礡氣勢。天壇為仿北平天壇而建的圓型建築體，樓高三層，以紅色樑柱、綠色拱頂覆以金黃色琉璃瓦，氣度圓融恢宏，內部陳設則質樸典雅，分層供奉清水祖師、關聖帝君及玉皇大帝，除了供信眾信仰朝拜、也是一覽高屏溪秀麗風光的絶佳地點。",
  //     "Phone": "886-7-6565176",
  //     "Address": "高雄市840大樹區統嶺里7鄰統嶺路88號",
  //     "ZipCode": "840",
  //     "OpenTime": "09:00–17:00",
  //     "Picture": {
  //       "PictureUrl1": "https://khh.travel/image/260/640x480",
  //       "PictureDescription1": "臺灣天壇"
  //     },
  //     "Position": {
  //       "PositionLon": 120.44692993164062,
  //       "PositionLat": 22.771970748901367,
  //       "GeoHash": "wsj9scdb2"
  //     },
  //     "ParkingPosition": {},
  //     "City": "高雄市",
  //     "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
  //     "UpdateTime": "2024-05-31T03:14:56+08:00"
  //   },
  //   {
  //     "ScenicSpotID": "C1_397000000A_000031",
  //     "ScenicSpotName": "高雄市天文教育館",
  //     "DescriptionDetail": "在港都市民及天文迷引頸期盼，位於小港區港和國小內的天文教育館於2000年成立了。這座小而美的教育館以天文教學為主，推廣為輔，透過多媒體的展示廳、天文觀測台及各種設備及模型等等，館中尚有價值超過六百萬的300mm反射式天文望遠鏡，引領您進入天文科學的殿堂，利用觀賞、觀察及實地操作演練，一窺宇宙奧秘。天文教育館每年皆定期舉行兒童天文育樂營、特殊星象觀測等多項研習課程，透過活潑的營隊教學，增加小朋友對天文的興趣及認識，並開放團體租借「天文行動教室」，期望透過天文教育館推廣與向下紮根，引領更多人進入天文科學浩瀚的殿堂。",
  //     "Description": "在港都市民及天文迷引頸期盼，位於小港區港和國小內的天文教育館於2000年成立了。這座小而美的教育館以天文教學為主，推廣為輔，透過多媒體的展示廳、天文觀測台及各種設備及模型等等，館中尚有價值超過六百萬的300mm反射式天文望遠鏡，引領您進入天文科學的殿堂，利用觀賞、觀察及實地操作演練，一窺宇宙奧秘。天文教育館每年皆定期舉行兒童天文育樂營、特殊星象觀測等多項研習課程，透過活潑的營隊教學，增加小朋友對天文的興趣及認識，並開放團體租借「天文行動教室」，期望透過天文教育館推廣與向下紮根，引領更多人進入天文科學浩瀚的殿堂。",
  //     "Phone": "886-7-8131506#115",
  //     "Address": "高雄市812小港區平和南路300號(港和國小內)",
  //     "ZipCode": "812",
  //     "TravelInfo": "捷運紅線─草衙站1號出口 轉 公車─紅6 至「小港國中」站下車。",
  //     "OpenTime": "預約開放週二及週四09:30–11:30；13:30–15:30",
  //     "Picture": {
  //       "PictureUrl1": "https://khh.travel/image/891/640x480",
  //       "PictureDescription1": "高雄市天文教育館01"
  //     },
  //     "Position": {
  //       "PositionLon": 120.33746337890625,
  //       "PositionLat": 22.56800079345703,
  //       "GeoHash": "wsj86k7h4"
  //     },
  //     "ParkingPosition": {},
  //     "TicketInfo": "學生每人酌收水電清潔維護費50元，請於本館參觀當天辦理團體繳費手續。",
  //     "Remarks": "僅接受團體預約(15人以上)非學校團體僅開放寒暑假期間預約。",
  //     "City": "高雄市",
  //     "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
  //     "UpdateTime": "2024-05-31T03:14:56+08:00"
  //   },
  //   {
  //     "ScenicSpotID": "C1_397000000A_000033",
  //     "ScenicSpotName": "九番埤濕地公園",
  //     "DescriptionDetail": "九番埤原為提供農業水源的公有灌溉埤塘，農業蕭條及高速公路阻隔之後，一度荒廢遭到濫倒建棄土的命運。經過環保團體及地方有志之士的奔走爭取，整理疏濬原有水道，引進濕地自然公園的概念，規劃了散步道、親水區、教育區、水質沉澱區及自然林區等設施，不但提供自然生物棲息之地，也是滯洪防災及市民提供親近自然的桃花源。九番埤現存一座A字形RC構造物，為早期木業公司吊運原木至儲木池的重要工具，頗具歷史意義，也是此地的特色地標。如今如珠鍊般串連高雄南北的濕地公園己蔚然成型，天光雲影倒映青草水岸，蟲嗚鳥唱綠意盎然的景緻已經成為都市中最舒心自在的美麗角落。",
  //     "Description": "天光雲影倒映青草水岸，蟲嗚鳥唱綠意盎然的景緻，成為都市中舒心自在的美麗角落",
  //     "Phone": "886-7-7995678",
  //     "Address": "高雄市814仁武區東起自中山高速公路，西側與九番埤相連",
  //     "ZipCode": "814",
  //     "OpenTime": "全天候開放",
  //     "Picture": {
  //       "PictureUrl1": "https://khh.travel/image/273/640x480",
  //       "PictureDescription1": "九番埤濕地公園01"
  //     },
  //     "Position": {
  //       "PositionLon": 120.32643127441406,
  //       "PositionLat": 22.687149047851562,
  //       "GeoHash": "wsj944541"
  //     },
  //     "ParkingPosition": {},
  //     "City": "高雄市",
  //     "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
  //     "UpdateTime": "2024-05-31T03:14:56+08:00"
  //   },
  //   {
  //     "ScenicSpotID": "C1_397000000A_000047",
  //     "ScenicSpotName": "田寮冷泉區（田寮花季度假飯店）",
  //     "DescriptionDetail": "田寮冷泉的歷史相當悠久，早年田寮區土質貧瘠，水源缺乏，當地住民發現岩縫中湧出的冷泉，因此居民們臨水而居，利用冷泉生活與灌溉，使珍貴碳酸冷泉成為孕育田寮區的生命之泉。日軍來台至此駐地後，發現此為世界稀少的碳酸冷泉，還在冷泉區設立警察療養所，形成此地的泡湯文化。田寮冷泉屬於自然湧出的碳酸氫納泉，PH值為7、平均水溫為22，是水質透明無色略帶硫磺味的低溫溫泉。日據時期即有人利用溫泉加熱後沐浴，由於質純溫潤素有美人肌湯之稱，也是南臺灣唯一有冷泉的地區。開放時間：玉蘭軒湯屋   09：00～21：00（最後入場時間 19：00）出雲風呂大眾池 07：00～22：00（最後入場時間 21：00）覓堂西餐廳 07：00～21：00（最後入場時間 20：00）收費標準 : ■玉蘭軒湯屋 $1,500元/屋起■出雲風呂大眾池 $800元/人",
  //     "Description": "田寮冷泉的歷史相當悠久，早年田寮區土質貧瘠，水源缺乏，當地住民發現岩縫中湧出的冷泉，因此居民們臨水而居，利用冷泉生活與灌溉，使珍貴碳酸冷泉成為孕育田寮區的生命之泉。日軍來台至此駐地後，發現此為世界稀少的碳酸冷泉，還在冷泉區設立警察療養所，形成此地的泡湯文化。田寮冷泉屬於自然湧出的碳酸氫納泉，PH值為7、平均水溫為22，是水質透明無色略帶硫磺味的低溫溫泉。日據時期即有人利用溫泉加熱後沐浴，由於質純溫潤素有美人肌湯之稱，也是南台灣唯一有冷泉的地區。",
  //     "Phone": "886-7-6362288",
  //     "Address": "高雄市823田寮區南安里崗北路111號",
  //     "ZipCode": "823",
  //     "OpenTime": "依各家業者不同",
  //     "Picture": {
  //       "PictureUrl1": "https://khh.travel/image/902/640x480",
  //       "PictureDescription1": "田寮冷泉02"
  //     },
  //     "Position": {
  //       "PositionLon": 120.35730743408203,
  //       "PositionLat": 22.874679565429688,
  //       "GeoHash": "wsjd4u1w8"
  //     },
  //     "Class1": "溫泉類",
  //     "ParkingPosition": {},
  //     "City": "高雄市",
  //     "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
  //     "UpdateTime": "2024-05-31T03:14:56+08:00"
  //   },
  //   {
  //     "ScenicSpotID": "C1_397000000A_000049",
  //     "ScenicSpotName": "甲仙化石館",
  //     "DescriptionDetail": "位於高雄市東北方的甲仙區除了盛產芋頭與竹筍，在地質上全區幾乎皆為海底沉積岩，全區高達9個主要化石區，而臨近的楠梓仙溪，更是可直接體驗採集樂趣的化石樂園，特殊的地理背景也促成甲仙化石館的成立。甲仙化石館所展出的主要是臺灣內海的魚貝類生態遺跡，主要分成甲仙翁戎螺化石館、甲仙當地化石、依年代區分的臺灣各地化石及世界化石四個展示區，全館館藏六千餘件，已然成為指標性地方專業博物館，深具學術及觀光價值，對於喜愛欣賞及研究化石遺跡的朋友而言，甲仙化石館是一個不可錯過拜訪的景點。",
  //     "Description": "全館館藏六千餘件，已然成為指標性地方專業博物館，深具學術及觀光價值，對於喜愛欣賞及研究化石遺跡的朋友而言是一個不可錯過拜訪的景點。",
  //     "Phone": "886-7-6753180",
  //     "Address": "高雄市847甲仙區和安村四德巷10號之10",
  //     "ZipCode": "847",
  //     "OpenTime": "08:00–12:00；13:00–17:00(週一、二公休)",
  //     "Picture": {
  //       "PictureUrl1": "https://khh.travel/image/334/640x480",
  //       "PictureDescription1": "甲仙化石館-1"
  //     },
  //     "Position": {
  //       "PositionLon": 120.58827209472656,
  //       "PositionLat": 23.09218978881836,
  //       "GeoHash": "wsjg25c9y"
  //     },
  //     "ParkingPosition": {},
  //     "TicketInfo": "全票：NT$50半票：NT$30(持學生證、高雄市民)團體票：NT$10(各級學校戶外教學，20人以上)免費：甲仙區居民、65歲以上長者、持身心障礙證明及陪同者一名、持志願服務榮譽...",
  //     "City": "高雄市",
  //     "SrcUpdateTime": "2024-05-31T01:34:33+08:00",
  //     "UpdateTime": "2024-05-31T03:14:56+08:00"
  //   },
  // ];

  return (
    <>
    <div className="bg-cyan-400">{/*also-> bg-[#ff00ff] */}
    <div className="container mx-auto">{/* mx-auto = 置中 */}
    <Navbar fluid className="bg-cyan-400">

      <NavbarBrand as={Link} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <img src="https://www.yuntech.edu.tw/images/website_png/Group_638.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        {/* <img src="/vercel.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold text-red-400">Yuntech tail</span>
        {/* font-semibold 半粗? dark:text-red-400 黑暗模式 */}
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink disabled href="#" className="text-purple-900 hover:text-green-900 hover:border-b-2 ">
          <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500">point</span>
        </NavbarLink>
        <NavbarLink as={Link} href="#" className="text-purple-900">
        <span className="px-2 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2">about us</span>
        </NavbarLink>
        <NavbarLink href="#" className="px-2 py-2 text-purple-900 ">
          <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2">transpotation</span>
        </NavbarLink>
      </NavbarCollapse>
      <DarkThemeToggle></DarkThemeToggle>
    </Navbar>  
    </div> 
    </div>

    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="/banner/ban-1.jpg" alt="copyright of kim huynh" />
        <img src="/banner/ban-2.jpg" alt="copyright of Kenneth Lu" />
        <img src="/banner/ban-3.jpg" alt="copyright of Quinn Dombrowski" />
        <img src="/banner/ban-4.jpg" alt="copyright  of Quinn Dombrowski" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>

    <div className="bg-white py-16">
    <div className="container mx-auto grid grid-cols-4 gap-8">
    {items.map( items=>
    <Card className="max-w-sm"
      imgAlt={items.Picture.PictureDescription1}
      imgSrc={items.Picture.PictureUrl1}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {items.ScenicSpotName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {items.PictureDescription1 }
      </p>
      <Button>
        watch it
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
      )}
    </div>
    </div>

    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {items.map(items=>
          <Customcard items={items}/>
        )}
      </div> 
    </div>

      <Footer container>
        <FooterCopyright href="#" by="Flowbite™" year={2022} />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
      
    </>
  );
} 
