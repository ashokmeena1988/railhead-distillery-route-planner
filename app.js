
function syncMapLayout(){
  setTimeout(()=>{try{refreshMapLayout();}catch(e){}},80);
  setTimeout(()=>{try{refreshMapLayout();}catch(e){}},300);
}
window.addEventListener('resize',syncMapLayout);
if(window.ResizeObserver){
  const layoutObserver=new ResizeObserver(syncMapLayout);
  const ws=document.querySelector('.workspace'); if(ws)layoutObserver.observe(ws);
  const mainEl=document.querySelector('.main'); if(mainEl)layoutObserver.observe(mainEl);
}



const FCI_DEPOTS = [{"id":"F-WD16001","name":"BALAGHAT FSD","type":"Depot","code":"WD16001","capacity":5742,"railhead":"BTC","lat":21.8015616,"lng":80.2066363},{"id":"F-WD16002","name":"KATANGI FSD","type":"Depot","code":"WD16002","capacity":17400,"railhead":"TRDI","lat":21.7842603,"lng":79.7992191},{"id":"F-WD16003","name":"WARASEONI FSD","type":"Depot","code":"WD16003","capacity":12528,"railhead":"BTC","lat":21.7586447,"lng":80.0567759},{"id":"F-WD16004","name":"RAMPUR FSD","type":"Depot","code":"WD16004","capacity":12528,"railhead":"GGGS","lat":23.1419281,"lng":79.9238172},{"id":"F-WD16005","name":"KATNI FSD","type":"Depot","code":"WD16005","capacity":11136,"railhead":"JKE","lat":23.8674602,"lng":80.3849583},{"id":"F-WD16006","name":"SEONI FSD","type":"Depot","code":"WD16006","capacity":10440,"railhead":"SEY","lat":22.0778766,"lng":79.5403233},{"id":"F-WD16035","name":"FSD NAVEGAON","type":"Depot","code":"WD16035","capacity":18270,"railhead":"BTC","lat":21.7904946,"lng":80.2119194},{"id":"F-WD16038","name":"MPWLC BADKHERA","type":"Depot","code":"WD16038","capacity":7740,"railhead":"GSPR","lat":23.339453,"lng":80.0524073},{"id":"F-WD16044","name":"RUCHI TOMAR WAREHOUSE","type":"Depot","code":"WD16044","capacity":6325,"railhead":"SEY","lat":22.0715125,"lng":79.6260128},{"id":"F-WD16045","name":"STATE WAREHOUSE SEMARKHAPA","type":"Depot","code":"WD16045","capacity":20152,"railhead":"MFR","lat":22.656345,"lng":80.3836953},{"id":"F-WD16046","name":"SANDHYA TOMAR WAREHOUSE","type":"Depot","code":"WD16046","capacity":6325,"railhead":"SEY","lat":22.0715079,"lng":79.6263286},{"id":"F-WD16047","name":"HIND ENERGY WAREHOUSE","type":"Depot","code":"WD16047","capacity":22018,"railhead":"JKE","lat":23.85061,"lng":80.3444495},{"id":"F-WD16048","name":"D R AGRO MARKETING WARE HOUSE","type":"Depot","code":"WD16048","capacity":13280,"railhead":"GGGS","lat":23.2175136,"lng":79.852865},{"id":"F-WD16049","name":"MADHUR SHIVA WAREHOUSE","type":"Depot","code":"WD16049","capacity":8700,"railhead":"GGGS","lat":23.2094532,"lng":79.8818382},{"id":"F-WD16050","name":"MATHURA DEVI WAREHOUSE","type":"Depot","code":"WD16050","capacity":5739,"railhead":"SEY","lat":21.9672078,"lng":79.5412295},{"id":"F-WD16051","name":"AASHA WAREHOUSE","type":"Depot","code":"WD16051","capacity":5806,"railhead":"SEY","lat":21.967224,"lng":79.5412191},{"id":"F-WD16052","name":"BAJAJ WAREHOUSE","type":"Depot","code":"WD16052","capacity":5718,"railhead":"JKE","lat":23.8167044,"lng":80.4936957},{"id":"F-WD16053","name":"JAIN WH WARASEONI","type":"Depot","code":"WD16053","capacity":5325,"railhead":"SEY","lat":21.8280041,"lng":80.0413371},{"id":"F-WD16054","name":"SHWETA WH WARASEONI","type":"Depot","code":"WD16054","capacity":4230,"railhead":"SEY","lat":21.8280262,"lng":80.0412996},{"id":"F-WD16055","name":"MADHUR SHIVAM AGRO PARK","type":"Depot","code":"WD16055","capacity":6500,"railhead":"GGGS","lat":23.2068493,"lng":79.875359},{"id":"F-WD16057","name":"NARAYAN WH","type":"Depot","code":"WD16057","capacity":4969,"railhead":"JKE","lat":23.8166882,"lng":80.4937101},{"id":"F-WD16058","name":"SACHCHA PANCHMUKHI HANUMAN MANDIR WH","type":"Depot","code":"WD16058","capacity":4180,"railhead":"MFR","lat":22.7072421,"lng":80.3695956},{"id":"F-WD16059","name":"CHITRA DEVI WH","type":"Depot","code":"WD16059","capacity":4180,"railhead":"MFR","lat":22.7074889,"lng":80.369154},{"id":"F-WD16060","name":"SHRI SHRI WH DONGARIYA BALAGHAT","type":"Depot","code":"WD16060","capacity":5000,"railhead":"BTC","lat":21.8042742,"lng":80.1179125},{"id":"F-WD16061","name":"DK WH","type":"Depot","code":"WD16061","capacity":7000,"railhead":"GSPR","lat":23.573215,"lng":80.1282746},{"id":"F-WD16062","name":"PHOOLVATI WH","type":"Depot","code":"WD16062","capacity":7000,"railhead":"GSPR","lat":23.573258,"lng":80.1282565},{"id":"F-WD16063","name":"BAPU WH","type":"Depot","code":"WD16063","capacity":7000,"railhead":"GSPR","lat":23.5731262,"lng":80.12823},{"id":"F-WD16064","name":"DHEER WH","type":"Depot","code":"WD16064","capacity":7000,"railhead":"GSPR","lat":23.5731458,"lng":80.1282199},{"id":"F-WD16066","name":"RAMKRISHNA WH & AGRO MARKETING","type":"Depot","code":"WD16066","capacity":5250,"railhead":"JKE","lat":23.9852074,"lng":80.4307687},{"id":"F-WD16068","name":"PANDEY WH 51","type":"Depot","code":"WD16068","capacity":10268,"railhead":"JKE","lat":23.9035931,"lng":80.3205242},{"id":"F-WD16073","name":"SHRI RAJ WH RICHAI","type":"Depot","code":"WD16073","capacity":13410,"railhead":"GGGS","lat":23.2402263,"lng":79.9495134},{"id":"F-WD16074","name":"SARTHI WH, NO.65","type":"Depot","code":"WD16074","capacity":10000,"railhead":"NWR","lat":23.6051138,"lng":80.2521896},{"id":"F-WD16075","name":"SWASTIK WH, NO.32","type":"Depot","code":"WD16075","capacity":5000,"railhead":"NWR","lat":23.6590236,"lng":80.1962585},{"id":"F-WD16076","name":"SURAKSHIT WH 58","type":"Depot","code":"WD16076","capacity":6090,"railhead":"MFR","lat":22.6555387,"lng":80.3918187},{"id":"F-WD16077","name":"ARYAVEER AGRO 12, BHERAGHAT","type":"Depot","code":"WD16077","capacity":6440,"railhead":"BRGT","lat":23.1868937,"lng":79.7849404},{"id":"F-WD16079","name":"HS GREWAL WH MANDLA","type":"Depot","code":"WD16079","capacity":6264,"railhead":"MFR","lat":22.5433899,"lng":80.3291516},{"id":"F-WD16080","name":"MPWLC BAHORIBAND KATNI","type":"Depot","code":"WD16080","capacity":8242,"railhead":"NWR","lat":23.6545485,"lng":80.0396805},{"id":"F-WD16081","name":"L AND D FOODS BHEDAGHAT JABALPUR","type":"Depot","code":"WD16081","capacity":4524,"railhead":"BRGT","lat":23.1870084,"lng":79.7846028},{"id":"F-WD16082","name":"ROHAN WAREHOUSE MANDLA","type":"Depot","code":"WD16082","capacity":6264,"railhead":"MFR","lat":22.689197,"lng":80.3498686},{"id":"F-WD16083","name":"SHRI MAA ANNUPRNA WH PATAN JABALPUR","type":"Depot","code":"WD16083","capacity":6950,"railhead":"GGGS","lat":23.2891821,"lng":79.8233506},{"id":"F-WD16084","name":"SEEMA WH LAWADA BALAGHAT","type":"Depot","code":"WD16084","capacity":3900,"railhead":"BTC","lat":21.8499512,"lng":80.1131285},{"id":"F-WD16086","name":"SHRI RAM WAREHOUSE MANDLA","type":"Depot","code":"WD16086","capacity":4176,"railhead":"MFR","lat":22.6993076,"lng":80.3582267},{"id":"F-WD16088","name":"SHRI BALAJI WAREHOUSE KATNI","type":"Depot","code":"WD16088","capacity":6500,"railhead":"NWR","lat":23.6755692,"lng":80.254565},{"id":"F-WD16089","name":"MEKAL WAREHOUSE MANDLA","type":"Depot","code":"WD16089","capacity":5833,"railhead":"MFR","lat":22.6845641,"lng":80.3434561},{"id":"F-WD16090","name":"SRISHTI WH BALAGHAT","type":"Depot","code":"WD16090","capacity":6300,"railhead":"SEY","lat":21.8628955,"lng":80.0058817},{"id":"F-WD16091","name":"RADHESHYAM WH PATAN JABALPUR","type":"Depot","code":"WD16091","capacity":7310,"railhead":"GGGS","lat":23.2891988,"lng":79.823815},{"id":"F-WD16092","name":"SHRI LAXMI NARAYAN WH JABALPUR","type":"Depot","code":"WD16092","capacity":3700,"railhead":"GGGS","lat":23.0840869,"lng":80.0405046},{"id":"F-WD16094","name":"UNION WAREHOUSE DUNGARIYA SEONI","type":"Depot","code":"WD16094","capacity":11310,"railhead":"SEY","lat":22.1092091,"lng":79.6274371},{"id":"F-WD16096","name":"PRAKHAR AGRO PARK TWO JABALPUR","type":"Depot","code":"WD16096","capacity":4790,"railhead":"NWR","lat":23.574092,"lng":80.1911864},{"id":"F-WD16098","name":"PRAKHAR WH JABALPUR","type":"Depot","code":"WD16098","capacity":5000,"railhead":"NWR","lat":23.5741799,"lng":80.1909279},{"id":"F-WD16099","name":"JAI MAHAKAL LOGISTICS WH KATNI","type":"Depot","code":"WD16099","capacity":5718,"railhead":"JKE","lat":23.8489642,"lng":80.3449116},{"id":"F-WD16100","name":"ENBEE LOGISTICS WH KATNI","type":"Depot","code":"WD16100","capacity":5718,"railhead":"JKE","lat":23.8489706,"lng":80.3449806},{"id":"F-WD16101","name":"KRISHNA AGRO MARKETING JBP","type":"Depot","code":"WD16101","capacity":4275,"railhead":"GGGS","lat":23.2186414,"lng":79.8524989},{"id":"F-WD16103","name":"KHILONA WAREHOUSE 25/34, PANAGAR ,JABALPUR[WD16103]","type":"Depot","code":"WD16103","capacity":8640,"railhead":"GGGS","lat":23.2966253,"lng":79.8550279},{"id":"F-WD16105","name":"JALPA AGRO STORAGE KATNI","type":"Depot","code":"WD16105","capacity":9744,"railhead":"NWR","lat":23.7144918,"lng":80.3244248},{"id":"F-WD16106","name":"PRAKHAR WH KATNI","type":"Depot","code":"WD16106","capacity":4002,"railhead":"NWR","lat":23.7272192,"lng":80.2606352},{"id":"F-WD16107","name":"AMAN WH KATNI","type":"Depot","code":"WD16107","capacity":5046,"railhead":"NWR","lat":23.7272779,"lng":80.2605749},{"id":"F-WD16108","name":"MPWLC A B MAJHGAWAN KATNI","type":"Depot","code":"WD16108","capacity":10800,"railhead":"JKE","lat":23.8182856,"lng":80.5007449},{"id":"F-WD16109","name":"HEERA DEVI WAREHOUSING AND LOGISTICS KATNI","type":"Depot","code":"WD16109","capacity":5625,"railhead":"JKE","lat":23.7739958,"lng":80.5459924},{"id":"F-WD16110","name":"SHREE GURU KRIPA WAREHOUSE KATNI","type":"Depot","code":"WD16110","capacity":10000,"railhead":"NWR","lat":23.6505699,"lng":80.1564572},{"id":"F-WD16111","name":"NARMADA ENTERPRISES GODOWN A","type":"Depot","code":"WD16111","capacity":5663,"railhead":"GSPR","lat":23.527567,"lng":80.0738965},{"id":"F-WD16112","name":"PWS KUSHAGRA WH JABALPUR","type":"Depot","code":"WD16112","capacity":3640,"railhead":"GGGS","lat":23.3030094,"lng":79.7896906},{"id":"F-WD16113","name":"CWC GARRA BALAGHAT","type":"Depot","code":"WD16113","capacity":21000,"railhead":"BTC","lat":21.8100482,"lng":80.1360308},{"id":"F-WD16114","name":"BRIGHU WAREHOUSE SEONI","type":"Depot","code":"WD16114","capacity":5400,"railhead":"SEY","lat":22.2637764,"lng":79.4718244},{"id":"F-WD16116","name":"MAA NARMADA WAREHOUSE MANDLA","type":"Depot","code":"WD16116","capacity":5265,"railhead":"MFR","lat":22.5754033,"lng":80.47347},{"id":"F-WD16117","name":"MEKAL STORAGE WAREHOUSE MANDLA","type":"Depot","code":"WD16117","capacity":3150,"railhead":"MFR","lat":22.6853682,"lng":80.3439799},{"id":"F-WD16118","name":"MOHAN WAREHOUSE KATNI","type":"Depot","code":"WD16118","capacity":5625,"railhead":"JKE","lat":23.8234734,"lng":80.5086913},{"id":"F-WD16119","name":"OM SAI AGRO MARKETING WAREHOUSE PATAN JABALPUR","type":"Depot","code":"WD16119","capacity":5500,"railhead":"GGGS","lat":23.2897309,"lng":79.8203547},{"id":"F-WD16121","name":"ABHA JAIN WAREHOUSE SEONI","type":"Depot","code":"WD16121","capacity":6325,"railhead":"SEY","lat":22.0678477,"lng":79.6355846},{"id":"F-WD16122","name":"UNNATI WAREHOUSE SEONI","type":"Depot","code":"WD16122","capacity":18504,"railhead":"SEY","lat":22.1087317,"lng":79.6272255},{"id":"F-WD16123","name":"SUVIDHA WAREHOUSE SEONI","type":"Depot","code":"WD16123","capacity":20311,"railhead":"SEY","lat":22.1087482,"lng":79.6268111},{"id":"F-WD16124","name":"SURAKSHA WAREHOUSE SEONI","type":"Depot","code":"WD16124","capacity":15062,"railhead":"SEY","lat":22.1087009,"lng":79.6272299},{"id":"F-WD16125","name":"VIVEK AWASTHI WH JABALPUR","type":"Depot","code":"WD16125","capacity":4000,"railhead":"GGGS","lat":22.8806901,"lng":79.8223859},{"id":"F-WD16126","name":"CHOUDHARY LAXMAN SINGH WAREHOUSE JABALPUR","type":"Depot","code":"WD16126","capacity":5719,"railhead":"GGGS","lat":23.2456698,"lng":79.8027207},{"id":"F-WD16127","name":"SHIV SHAKTI WH PATAN JABALPUR","type":"Depot","code":"WD16127","capacity":9650,"railhead":"GGGS","lat":23.2906583,"lng":79.7817933},{"id":"F-WD16128","name":"MAA YASHODA WH SHAHPURA JABALPUR","type":"Depot","code":"WD16128","capacity":5400,"railhead":"BRGT","lat":23.1452379,"lng":79.6704435},{"id":"F-WD16129","name":"SHRI SAI AGRO WAREHOUSE JABALPUR","type":"Depot","code":"WD16129","capacity":4800,"railhead":"BRGT","lat":23.1468167,"lng":79.7143232},{"id":"F-WD16130","name":"SHRI GURU KRIPA WAREHOUSE JABALPUR","type":"Depot","code":"WD16130","capacity":3800,"railhead":"BRGT","lat":23.1468167,"lng":79.7143232},{"id":"F-WD16131","name":"RADHE KRISHNA WAREHOUSE PATAN JABALPUR","type":"Depot","code":"WD16131","capacity":5843,"railhead":"GGGS","lat":23.3782033,"lng":79.8514448},{"id":"F-WD16132","name":"RADHESHYAM WAREHOUSE KATANGI JABALPUR","type":"Depot","code":"WD16132","capacity":2493,"railhead":"GGGS","lat":23.3792335,"lng":79.8503529},{"id":"F-WD16133","name":"SWARNA WAREHOUSE PANAGAR JABALPUR","type":"Depot","code":"WD16133","capacity":5544,"railhead":"GSPR","lat":23.2934965,"lng":79.966212},{"id":"F-WD16134","name":"SRG ANSH WAREHOUSE NARSINGHPUR","type":"Depot","code":"WD16134","capacity":11084,"railhead":"GAR","lat":22.9856316,"lng":79.1770379},{"id":"F-WD16136","name":"SARGAM WAREHOUSE KATNI","type":"Depot","code":"WD16136","capacity":5813,"railhead":"JKE","lat":23.9120794,"lng":80.5633993},{"id":"F-WD16137","name":"KANHA WAREHOUSE MANDLA","type":"Depot","code":"WD16137","capacity":5040,"railhead":"MFR","lat":22.656431,"lng":80.3976812},{"id":"F-WD16138","name":"SANGAM WAREHOUSE MANDLA","type":"Depot","code":"WD16138","capacity":15562,"railhead":"MFR","lat":22.658498,"lng":80.3983135},{"id":"F-WD16139","name":"DUBEY BROTHERS & WAREHOUSE MANDLA","type":"Depot","code":"WD16139","capacity":5869,"railhead":"MFR","lat":22.5491297,"lng":80.3689275},{"id":"F-WD16140","name":"DEEP AGRO PARK JABALPUR","type":"Depot","code":"WD16140","capacity":4000,"railhead":"GGGS","lat":23.0438749,"lng":79.8374547},{"id":"F-WD16141","name":"CHHABRA WAREHOUSE GOHGAWARI NARSINGHPUR","type":"Depot","code":"WD16141","capacity":3000,"railhead":"GAR","lat":22.94571,"lng":79.0423966},{"id":"F-WD16142","name":"SHUBHAM WAREHOUSE JABALPUR","type":"Depot","code":"WD16142","capacity":3780,"railhead":"GSPR","lat":23.5396148,"lng":80.0870108},{"id":"F-WD16143","name":"VIDIT AGRO PARK JABALPUR","type":"Depot","code":"WD16143","capacity":3746,"railhead":"GSPR","lat":23.5395942,"lng":80.0882431},{"id":"F-WD16144","name":"BHAGYA SHRI WAREHOUSE JABALPUR","type":"Depot","code":"WD16144","capacity":5625,"railhead":"GSPR","lat":23.530903,"lng":80.0840151},{"id":"F-WD16148","name":"PARV WAREHOUSE SEONI","type":"Depot","code":"WD16148","capacity":5500,"railhead":"SEY","lat":21.7894229,"lng":79.4846953},{"id":"F-WD16153","name":"RAKHI TOMAR WAREHOUSE SEONI","type":"Depot","code":"WD16153","capacity":6325,"railhead":"SEY","lat":22.0722858,"lng":79.626272},{"id":"F-WD16157","name":"BAL KRISHNA WAREHOUSE MANDLA","type":"Depot","code":"WD16157","capacity":5000,"railhead":"MFR","lat":22.5430788,"lng":80.3397554},{"id":"F-WD16158","name":"UMA WAREHOUSING AND LOGISTICS MANDLA","type":"Depot","code":"WD16158","capacity":5400,"railhead":"MFR","lat":22.6667367,"lng":80.460985},{"id":"F-WD16159","name":"MAA NARMADA WAREHOUSE BICHHIYA MANDLA","type":"Depot","code":"WD16159","capacity":2500,"railhead":"MFR","lat":22.523625,"lng":80.42325},{"id":"F-WD16160","name":"SHRI RAM WAREHOUSE TIKARIYA MANDLA","type":"Depot","code":"WD16160","capacity":4443,"railhead":"MFR","lat":22.65454,"lng":80.3970933},{"id":"F-WD16161","name":"SANGAMITRA WAREHOUSE MANDLA","type":"Depot","code":"WD16161","capacity":5000,"railhead":"MFR","lat":22.6581401,"lng":80.3967184},{"id":"F-WD16162","name":"SASHI WH JABALPUR","type":"Depot","code":"WD16162","capacity":5062,"railhead":"GSPR","lat":23.5755207,"lng":80.1267319},{"id":"F-WD16164","name":"MAA VIDYA WAREHOUSE MAJHOLI JABALPUR","type":"Depot","code":"WD16164","capacity":5010,"railhead":"NWR","lat":23.5720482,"lng":80.1877204},{"id":"F-WD16166","name":"SHIV SHAKTI WAREHOUSE SIHORA JABALPUR","type":"Depot","code":"WD16166","capacity":3918,"railhead":"GSPR","lat":23.3736455,"lng":80.0662602},{"id":"F-WD16167","name":"SHIV KRIPA WAREHOUSE SIHORA JABALPUR","type":"Depot","code":"WD16167","capacity":4915,"railhead":"GSPR","lat":23.3747842,"lng":80.0655384},{"id":"F-WD16168","name":"MAA PITAMBARA WAREHOUSE SIHORA JABALPUR","type":"Depot","code":"WD16168","capacity":5542,"railhead":"GSPR","lat":23.4339784,"lng":80.0838226},{"id":"F-WD16169","name":"JAI MAA PITAMBARA JABALPUR","type":"Depot","code":"WD16169","capacity":5542,"railhead":"GSPR","lat":23.4332807,"lng":80.0837506},{"id":"F-WD16171","name":"NARMADA ENTERPRISES 159 B JABALPUR","type":"Depot","code":"WD16171","capacity":5663,"railhead":"GSPR","lat":23.5275012,"lng":80.0739109},{"id":"F-WD16173","name":"KISAAN WAREHOUSE 39 SEONI","type":"Depot","code":"WD16173","capacity":4687,"railhead":"SEY","lat":22.1093299,"lng":79.6268748},{"id":"F-WD16174","name":"KISAAN WAREHOUSE 39A SEONI","type":"Depot","code":"WD16174","capacity":4687,"railhead":"SEY","lat":22.1091192,"lng":79.6270094},{"id":"F-WD16175","name":"ANMOL AGRO SERVICES SEONI","type":"Depot","code":"WD16175","capacity":8786,"railhead":"SEY","lat":22.1105465,"lng":79.6286296},{"id":"F-WD16178","name":"KALAHASTI WH KARARI JABALPUR","type":"Depot","code":"WD16178","capacity":3475,"railhead":"GGGS","lat":23.2659569,"lng":79.8271276},{"id":"F-WD16179","name":"SHRI KUMAR WH BALAGHAT","type":"Depot","code":"WD16179","capacity":6300,"railhead":"SEY","lat":21.8625097,"lng":80.0057573},{"id":"F-WD16180","name":"NAYAK WAREHOUSE NARSINGHPUR","type":"Depot","code":"WD16180","capacity":4280,"railhead":"GAR","lat":23.0020771,"lng":79.0172993},{"id":"F-WD16181","name":"RUDRA SHRI AGRO PARK WH JABALPUR","type":"Depot","code":"WD16181","capacity":2080,"railhead":"GGGS","lat":23.0351059,"lng":79.822342},{"id":"F-WD16182","name":"PWS MAA SARASWATI WH SEONI","type":"Depot","code":"WD16182","capacity":5000,"railhead":"SEY","lat":22.4473406,"lng":79.5448254},{"id":"F-WD16183","name":"NEW CHOUKSEY WAREHOUSE NARSINGHPUR","type":"Depot","code":"WD16183","capacity":4000,"railhead":"GAR","lat":22.8934828,"lng":79.1911241},{"id":"F-WD16184","name":"ANNPURNA WAREHOUSE KATNI","type":"Depot","code":"WD16184","capacity":5737,"railhead":"JKE","lat":23.9303996,"lng":80.7552617},{"id":"F-WD16185","name":"KRISHNAM WAREHOUSE KATNI","type":"Depot","code":"WD16185","capacity":4726,"railhead":"JKE","lat":23.9125663,"lng":80.8327292},{"id":"F-WD16186","name":"POOJA WAREHOUSE KATNI","type":"Depot","code":"WD16186","capacity":5132,"railhead":"JKE","lat":23.9037098,"lng":80.3202552},{"id":"F-WD16187","name":"ADITYA AGRO WH CHHINDWARA","type":"Depot","code":"WD16187","capacity":9673,"railhead":"SEY","lat":22.0791218,"lng":79.0211311},{"id":"F-WD16188","name":"SANGEETA WH KATNI","type":"Depot","code":"WD16188","capacity":6264,"railhead":"NWR","lat":23.7048191,"lng":80.3983195},{"id":"F-WD16190","name":"AMBIKA WH 52 MANDLA","type":"Depot","code":"WD16190","capacity":5004,"railhead":"MFR","lat":22.5124928,"lng":80.364916},{"id":"F-WD16191","name":"SADBHAV WAREHOUSE DUNGARIYA 25,27,28 SEONI","type":"Depot","code":"WD16191","capacity":7000,"railhead":"SEY","lat":22.1093462,"lng":79.6268815},{"id":"F-WD16041","name":"ADITYA AGRO PEG","type":"Depot","code":"WD16041","capacity":6264,"railhead":"PAR","lat":22.0783994,"lng":79.0229976},{"id":"F-WD16042","name":"MAA ANNAPURNA WAREHOUSE","type":"Depot","code":"WD16042","capacity":2200,"railhead":"PAR","lat":22.5723559,"lng":80.3885947},{"id":"F-WD16043","name":"SMDR WAREHOUSE","type":"Depot","code":"WD16043","capacity":5000,"railhead":"PAR","lat":22.1483136,"lng":79.5263211},{"id":"F-WD16056","name":"NAVKAAR WH 17A, 17B","type":"Depot","code":"WD16056","capacity":6000,"railhead":"PAR","lat":22.1305914,"lng":79.5264831},{"id":"F-WD16065","name":"CWC GARRA BALAGHAT","type":"Depot","code":"WD16065","capacity":10000,"railhead":"PAR","lat":21.810108,"lng":80.1360365},{"id":"F-WD16067","name":"MPWLC NARELA 8","type":"Depot","code":"WD16067","capacity":6264,"railhead":"PAR","lat":22.1455178,"lng":79.5212581},{"id":"F-WD16069","name":"CHOUDHARY WAREHOUSE","type":"Depot","code":"WD16069","capacity":4805,"railhead":"PAR","lat":22.3580337,"lng":79.9221954},{"id":"F-WD16070","name":"SARTAJ WH 30 KEOLARI","type":"Depot","code":"WD16070","capacity":12055,"railhead":"PAR","lat":22.3580111,"lng":79.9223047},{"id":"F-WD16071","name":"SHRIJI WH HARHARPUR","type":"Depot","code":"WD16071","capacity":5739,"railhead":"PAR","lat":21.9671385,"lng":79.5413083},{"id":"F-WD16072","name":"ALOK TOMAR WH SELUA, SEONI","type":"Depot","code":"WD16072","capacity":2331,"railhead":"PAR","lat":22.0719848,"lng":79.6264433},{"id":"F-WD16078","name":"PANDEY WH UNIT 1","type":"Depot","code":"WD16078","capacity":4350,"railhead":"PAR","lat":23.9035848,"lng":80.3205651},{"id":"F-WD16085","name":"SHREE JI WH KATNI","type":"Depot","code":"WD16085","capacity":5600,"railhead":"PAR","lat":23.9042172,"lng":80.2918326},{"id":"F-WD16087","name":"RAJ CHOUDHARY WH SEONI","type":"Depot","code":"WD16087","capacity":6339,"railhead":"PAR","lat":22.3614671,"lng":79.9224177},{"id":"F-WD16093","name":"RAI BHANDAR GRAH JABALPUR","type":"Depot","code":"WD16093","capacity":3200,"railhead":"PAR","lat":23.0845233,"lng":80.0406951},{"id":"F-WD16095","name":"SHRI SITARAM CAP & STORAGE A AND B WH SEONI","type":"Depot","code":"WD16095","capacity":6200,"railhead":"PAR","lat":22.3900688,"lng":79.9730786},{"id":"F-WD16097","name":"SHRI SITARAM STORAGE WH SEONI","type":"Depot","code":"WD16097","capacity":6200,"railhead":"PAR","lat":22.3903692,"lng":79.9733049},{"id":"F-WD16102","name":"SAMRAT WH SEONI","type":"Depot","code":"WD16102","capacity":21750,"railhead":"PAR","lat":22.3600609,"lng":79.9230836},{"id":"F-WD16104","name":"RAGHUVEER SHREE WH JBP","type":"Depot","code":"WD16104","capacity":9807,"railhead":"PAR","lat":23.1275988,"lng":79.6464865},{"id":"F-WD16115","name":"VIKRAMADITYA WAREHOUSE SEONI","type":"Depot","code":"WD16115","capacity":5400,"railhead":"PAR","lat":22.2637832,"lng":79.4718555},{"id":"F-WD16120","name":"PRATISHTHA WAREHOUSE KATNI","type":"Depot","code":"WD16120","capacity":5758,"railhead":"PAR","lat":23.8671818,"lng":80.7121261},{"id":"F-WD16135","name":"SHIVANYA WAREHOUSE AND AGRO SERVICES KATNI","type":"Depot","code":"WD16135","capacity":9000,"railhead":"PAR","lat":23.4862571,"lng":80.4199976},{"id":"F-WD16145","name":"SHIVSHAKTI WH TILSANI JABALPUR","type":"Depot","code":"WD16145","capacity":2685,"railhead":"PAR","lat":23.2071831,"lng":80.1407721},{"id":"F-WD16146","name":"NAVKAR WAREHOUSE SIMARIYA NARELA SEONI","type":"Depot","code":"WD16146","capacity":5900,"railhead":"PAR","lat":22.1289457,"lng":79.5255741},{"id":"F-WD16147","name":"MPWLC BRANCH BOT NARELA SEONI","type":"Depot","code":"WD16147","capacity":3600,"railhead":"PAR","lat":22.1450088,"lng":79.52051},{"id":"F-WD16149","name":"MAA NARMADA WAREHOUSE SEONI","type":"Depot","code":"WD16149","capacity":5600,"railhead":"PAR","lat":22.4474086,"lng":79.5446857},{"id":"F-WD16150","name":"MAA SARASWATI WAREHOUSE SEONI","type":"Depot","code":"WD16150","capacity":3700,"railhead":"PAR","lat":22.4483997,"lng":79.5446576},{"id":"F-WD16151","name":"MAA PARVATI WAREHOUSE SEONI","type":"Depot","code":"WD16151","capacity":3000,"railhead":"PAR","lat":22.4473502,"lng":79.5444869},{"id":"F-WD16152","name":"MAA LAXMI WAREHOUSE SEONI","type":"Depot","code":"WD16152","capacity":3000,"railhead":"PAR","lat":22.4482365,"lng":79.5446124},{"id":"F-WD16154","name":"MPWLC NARELA 5A/5B SEONI","type":"Depot","code":"WD16154","capacity":2800,"railhead":"PAR","lat":22.1442869,"lng":79.5215406},{"id":"F-WD16155","name":"MPWLC BRANCH 6A/6B NARELA SEONI","type":"Depot","code":"WD16155","capacity":3300,"railhead":"PAR","lat":22.1454554,"lng":79.5207713},{"id":"F-WD16156","name":"DEEPIKA WAREHOUSE MANDLA","type":"Depot","code":"WD16156","capacity":5665,"railhead":"PAR","lat":22.8422983,"lng":80.24445},{"id":"F-WD16163","name":"SHREE SARASWATI AGRO WARESHOUSE JABALPUR","type":"Depot","code":"WD16163","capacity":6547,"railhead":"PAR","lat":23.5275989,"lng":80.0844945},{"id":"F-WD16165","name":"AGRAWAL WAREHOUSE PATAN JABALPUR","type":"Depot","code":"WD16165","capacity":5295,"railhead":"PAR","lat":23.3011987,"lng":79.7531391},{"id":"F-WD16170","name":"MAA LAXMI WAREHOUSE BARGI JABALPUR","type":"Depot","code":"WD16170","capacity":6265,"railhead":"PAR","lat":23.0757783,"lng":79.908015},{"id":"F-WD16172","name":"RADHEY WAREHOUSE SEONI","type":"Depot","code":"WD16172","capacity":5000,"railhead":"PAR","lat":22.3107897,"lng":79.548152},{"id":"F-WD16176","name":"RIYA WAREHOUSE C23 SEONI","type":"Depot","code":"WD16176","capacity":4000,"railhead":"PAR","lat":22.4464666,"lng":79.5431617},{"id":"F-WD16177","name":"KANHA WAREHOUSE C25 SEONI","type":"Depot","code":"WD16177","capacity":4000,"railhead":"PAR","lat":22.4470076,"lng":79.5455127},{"id":"F-WD16189","name":"CHOUKSEY WH 49 NARSINGHPUR","type":"Depot","code":"WD16189","capacity":2071,"railhead":"PAR","lat":22.8930693,"lng":79.1907941}];
const ORIGINAL_LOCATIONS = [{"id":"R-balaghat","name":"Balaghat","type":"Railhead","lat":21.811528,"lng":80.199917},{"id":"R-bhedaghat","name":"Bhedaghat","type":"Railhead","lat":23.169972,"lng":79.797778},{"id":"R-gadarwara","name":"Gadarwara","type":"Railhead","lat":22.899806,"lng":78.791361},{"id":"R-garha","name":"Garha","type":"Railhead","lat":23.1385,"lng":79.865194},{"id":"R-jhukai","name":"Jhukai","type":"Railhead","lat":23.98575,"lng":80.431556},{"id":"R-mandla-fort","name":"Mandla Fort","type":"Railhead","lat":22.5845,"lng":80.355472},{"id":"R-niwar","name":"Niwar","type":"Railhead","lat":23.718722,"lng":80.368806},{"id":"R-seoni","name":"Seoni","type":"Railhead","lat":22.075556,"lng":79.54825},{"id":"R-tirodi","name":"Tirodi","type":"Railhead","lat":21.682917,"lng":79.717472},{"id":"D-9","name":"ASSOCIATED ALCOHOLS & BREWERIES LIMITED","type":"Distillery","lat":22.301194,"lng":75.99475},{"id":"D-10","name":"AVJ Agrico Pvt. Ltd.","type":"Distillery","lat":21.553472,"lng":78.802194},{"id":"D-11","name":"BETUL BIOFUELS PRIVATE LIMITED","type":"Distillery","lat":21.886528,"lng":77.694139},{"id":"D-12","name":"GREAT GALLEON VENTURES LIMITED","type":"Distillery","lat":22.670361,"lng":75.477583},{"id":"D-13","name":"GULSHAN POLYOLS LTD","type":"Distillery","lat":21.549194,"lng":78.817528},{"id":"D-14","name":"GULSHAN POLYOLS LTD DEP MP","type":"Distillery","lat":21.549194,"lng":78.817528},{"id":"D-15","name":"JAKSON BIOFUELS PVT. LTD (ETHAN NATURAL BIO-FUEL PRIVATE LIMITED.)","type":"Distillery","lat":21.738167,"lng":79.98},{"id":"D-16","name":"K P BIOFUELS PRIVATE LIMITED","type":"Distillery","lat":22.945861,"lng":78.353111},{"id":"D-17","name":"LOHIYA GREEN ENERGY PRIVATE LIMITED","type":"Distillery","lat":21.739639,"lng":78.79575},{"id":"D-18","name":"NARMADA SUGAR PVT LTD","type":"Distillery","lat":22.852667,"lng":78.651111},{"id":"D-19","name":"ORIENT ETHANOL INDUSTRIES PRIVATE LIMTED","type":"Distillery","lat":23.102778,"lng":80.194639},{"id":"D-20","name":"SHREE BALAJI BIOSOLUTIONS FUELS LLP","type":"Distillery","lat":23.156972,"lng":79.664694},{"id":"D-21","name":"SMS BIOFUEL PRIVATE LIMITED","type":"Distillery","lat":22.390528,"lng":77.294389},{"id":"D-22","name":"VISAG BIOFUELS PRIVATE LIMITED","type":"Distillery","lat":21.769444,"lng":80.0},{"id":"F-WD16001","name":"BALAGHAT FSD","type":"Depot","code":"WD16001","capacity":5742,"railhead":"BTC","lat":21.8015616,"lng":80.2066363},{"id":"F-WD16002","name":"KATANGI FSD","type":"Depot","code":"WD16002","capacity":17400,"railhead":"TRDI","lat":21.7842603,"lng":79.7992191},{"id":"F-WD16003","name":"WARASEONI FSD","type":"Depot","code":"WD16003","capacity":12528,"railhead":"BTC","lat":21.7586447,"lng":80.0567759},{"id":"F-WD16004","name":"RAMPUR FSD","type":"Depot","code":"WD16004","capacity":12528,"railhead":"GGGS","lat":23.1419281,"lng":79.9238172},{"id":"F-WD16005","name":"KATNI FSD","type":"Depot","code":"WD16005","capacity":11136,"railhead":"JKE","lat":23.8674602,"lng":80.3849583},{"id":"F-WD16006","name":"SEONI FSD","type":"Depot","code":"WD16006","capacity":10440,"railhead":"SEY","lat":22.0778766,"lng":79.5403233},{"id":"F-WD16035","name":"FSD NAVEGAON","type":"Depot","code":"WD16035","capacity":18270,"railhead":"BTC","lat":21.7904946,"lng":80.2119194},{"id":"F-WD16038","name":"MPWLC BADKHERA","type":"Depot","code":"WD16038","capacity":7740,"railhead":"GSPR","lat":23.339453,"lng":80.0524073},{"id":"F-WD16044","name":"RUCHI TOMAR WAREHOUSE","type":"Depot","code":"WD16044","capacity":6325,"railhead":"SEY","lat":22.0715125,"lng":79.6260128},{"id":"F-WD16045","name":"STATE WAREHOUSE SEMARKHAPA","type":"Depot","code":"WD16045","capacity":20152,"railhead":"MFR","lat":22.656345,"lng":80.3836953},{"id":"F-WD16046","name":"SANDHYA TOMAR WAREHOUSE","type":"Depot","code":"WD16046","capacity":6325,"railhead":"SEY","lat":22.0715079,"lng":79.6263286},{"id":"F-WD16047","name":"HIND ENERGY WAREHOUSE","type":"Depot","code":"WD16047","capacity":22018,"railhead":"JKE","lat":23.85061,"lng":80.3444495},{"id":"F-WD16048","name":"D R AGRO MARKETING WARE HOUSE","type":"Depot","code":"WD16048","capacity":13280,"railhead":"GGGS","lat":23.2175136,"lng":79.852865},{"id":"F-WD16049","name":"MADHUR SHIVA WAREHOUSE","type":"Depot","code":"WD16049","capacity":8700,"railhead":"GGGS","lat":23.2094532,"lng":79.8818382},{"id":"F-WD16050","name":"MATHURA DEVI WAREHOUSE","type":"Depot","code":"WD16050","capacity":5739,"railhead":"SEY","lat":21.9672078,"lng":79.5412295},{"id":"F-WD16051","name":"AASHA WAREHOUSE","type":"Depot","code":"WD16051","capacity":5806,"railhead":"SEY","lat":21.967224,"lng":79.5412191},{"id":"F-WD16052","name":"BAJAJ WAREHOUSE","type":"Depot","code":"WD16052","capacity":5718,"railhead":"JKE","lat":23.8167044,"lng":80.4936957},{"id":"F-WD16053","name":"JAIN WH WARASEONI","type":"Depot","code":"WD16053","capacity":5325,"railhead":"SEY","lat":21.8280041,"lng":80.0413371},{"id":"F-WD16054","name":"SHWETA WH WARASEONI","type":"Depot","code":"WD16054","capacity":4230,"railhead":"SEY","lat":21.8280262,"lng":80.0412996},{"id":"F-WD16055","name":"MADHUR SHIVAM AGRO PARK","type":"Depot","code":"WD16055","capacity":6500,"railhead":"GGGS","lat":23.2068493,"lng":79.875359},{"id":"F-WD16057","name":"NARAYAN WH","type":"Depot","code":"WD16057","capacity":4969,"railhead":"JKE","lat":23.8166882,"lng":80.4937101},{"id":"F-WD16058","name":"SACHCHA PANCHMUKHI HANUMAN MANDIR WH","type":"Depot","code":"WD16058","capacity":4180,"railhead":"MFR","lat":22.7072421,"lng":80.3695956},{"id":"F-WD16059","name":"CHITRA DEVI WH","type":"Depot","code":"WD16059","capacity":4180,"railhead":"MFR","lat":22.7074889,"lng":80.369154},{"id":"F-WD16060","name":"SHRI SHRI WH DONGARIYA BALAGHAT","type":"Depot","code":"WD16060","capacity":5000,"railhead":"BTC","lat":21.8042742,"lng":80.1179125},{"id":"F-WD16061","name":"DK WH","type":"Depot","code":"WD16061","capacity":7000,"railhead":"GSPR","lat":23.573215,"lng":80.1282746},{"id":"F-WD16062","name":"PHOOLVATI WH","type":"Depot","code":"WD16062","capacity":7000,"railhead":"GSPR","lat":23.573258,"lng":80.1282565},{"id":"F-WD16063","name":"BAPU WH","type":"Depot","code":"WD16063","capacity":7000,"railhead":"GSPR","lat":23.5731262,"lng":80.12823},{"id":"F-WD16064","name":"DHEER WH","type":"Depot","code":"WD16064","capacity":7000,"railhead":"GSPR","lat":23.5731458,"lng":80.1282199},{"id":"F-WD16066","name":"RAMKRISHNA WH & AGRO MARKETING","type":"Depot","code":"WD16066","capacity":5250,"railhead":"JKE","lat":23.9852074,"lng":80.4307687},{"id":"F-WD16068","name":"PANDEY WH 51","type":"Depot","code":"WD16068","capacity":10268,"railhead":"JKE","lat":23.9035931,"lng":80.3205242},{"id":"F-WD16073","name":"SHRI RAJ WH RICHAI","type":"Depot","code":"WD16073","capacity":13410,"railhead":"GGGS","lat":23.2402263,"lng":79.9495134},{"id":"F-WD16074","name":"SARTHI WH, NO.65","type":"Depot","code":"WD16074","capacity":10000,"railhead":"NWR","lat":23.6051138,"lng":80.2521896},{"id":"F-WD16075","name":"SWASTIK WH, NO.32","type":"Depot","code":"WD16075","capacity":5000,"railhead":"NWR","lat":23.6590236,"lng":80.1962585},{"id":"F-WD16076","name":"SURAKSHIT WH 58","type":"Depot","code":"WD16076","capacity":6090,"railhead":"MFR","lat":22.6555387,"lng":80.3918187},{"id":"F-WD16077","name":"ARYAVEER AGRO 12, BHERAGHAT","type":"Depot","code":"WD16077","capacity":6440,"railhead":"BRGT","lat":23.1868937,"lng":79.7849404},{"id":"F-WD16079","name":"HS GREWAL WH MANDLA","type":"Depot","code":"WD16079","capacity":6264,"railhead":"MFR","lat":22.5433899,"lng":80.3291516},{"id":"F-WD16080","name":"MPWLC BAHORIBAND KATNI","type":"Depot","code":"WD16080","capacity":8242,"railhead":"NWR","lat":23.6545485,"lng":80.0396805},{"id":"F-WD16081","name":"L AND D FOODS BHEDAGHAT JABALPUR","type":"Depot","code":"WD16081","capacity":4524,"railhead":"BRGT","lat":23.1870084,"lng":79.7846028},{"id":"F-WD16082","name":"ROHAN WAREHOUSE MANDLA","type":"Depot","code":"WD16082","capacity":6264,"railhead":"MFR","lat":22.689197,"lng":80.3498686},{"id":"F-WD16083","name":"SHRI MAA ANNUPRNA WH PATAN JABALPUR","type":"Depot","code":"WD16083","capacity":6950,"railhead":"GGGS","lat":23.2891821,"lng":79.8233506},{"id":"F-WD16084","name":"SEEMA WH LAWADA BALAGHAT","type":"Depot","code":"WD16084","capacity":3900,"railhead":"BTC","lat":21.8499512,"lng":80.1131285},{"id":"F-WD16086","name":"SHRI RAM WAREHOUSE MANDLA","type":"Depot","code":"WD16086","capacity":4176,"railhead":"MFR","lat":22.6993076,"lng":80.3582267},{"id":"F-WD16088","name":"SHRI BALAJI WAREHOUSE KATNI","type":"Depot","code":"WD16088","capacity":6500,"railhead":"NWR","lat":23.6755692,"lng":80.254565},{"id":"F-WD16089","name":"MEKAL WAREHOUSE MANDLA","type":"Depot","code":"WD16089","capacity":5833,"railhead":"MFR","lat":22.6845641,"lng":80.3434561},{"id":"F-WD16090","name":"SRISHTI WH BALAGHAT","type":"Depot","code":"WD16090","capacity":6300,"railhead":"SEY","lat":21.8628955,"lng":80.0058817},{"id":"F-WD16091","name":"RADHESHYAM WH PATAN JABALPUR","type":"Depot","code":"WD16091","capacity":7310,"railhead":"GGGS","lat":23.2891988,"lng":79.823815},{"id":"F-WD16092","name":"SHRI LAXMI NARAYAN WH JABALPUR","type":"Depot","code":"WD16092","capacity":3700,"railhead":"GGGS","lat":23.0840869,"lng":80.0405046},{"id":"F-WD16094","name":"UNION WAREHOUSE DUNGARIYA SEONI","type":"Depot","code":"WD16094","capacity":11310,"railhead":"SEY","lat":22.1092091,"lng":79.6274371},{"id":"F-WD16096","name":"PRAKHAR AGRO PARK TWO JABALPUR","type":"Depot","code":"WD16096","capacity":4790,"railhead":"NWR","lat":23.574092,"lng":80.1911864},{"id":"F-WD16098","name":"PRAKHAR WH JABALPUR","type":"Depot","code":"WD16098","capacity":5000,"railhead":"NWR","lat":23.5741799,"lng":80.1909279},{"id":"F-WD16099","name":"JAI MAHAKAL LOGISTICS WH KATNI","type":"Depot","code":"WD16099","capacity":5718,"railhead":"JKE","lat":23.8489642,"lng":80.3449116},{"id":"F-WD16100","name":"ENBEE LOGISTICS WH KATNI","type":"Depot","code":"WD16100","capacity":5718,"railhead":"JKE","lat":23.8489706,"lng":80.3449806},{"id":"F-WD16101","name":"KRISHNA AGRO MARKETING JBP","type":"Depot","code":"WD16101","capacity":4275,"railhead":"GGGS","lat":23.2186414,"lng":79.8524989},{"id":"F-WD16103","name":"KHILONA WAREHOUSE 25/34, PANAGAR ,JABALPUR[WD16103]","type":"Depot","code":"WD16103","capacity":8640,"railhead":"GGGS","lat":23.2966253,"lng":79.8550279},{"id":"F-WD16105","name":"JALPA AGRO STORAGE KATNI","type":"Depot","code":"WD16105","capacity":9744,"railhead":"NWR","lat":23.7144918,"lng":80.3244248},{"id":"F-WD16106","name":"PRAKHAR WH KATNI","type":"Depot","code":"WD16106","capacity":4002,"railhead":"NWR","lat":23.7272192,"lng":80.2606352},{"id":"F-WD16107","name":"AMAN WH KATNI","type":"Depot","code":"WD16107","capacity":5046,"railhead":"NWR","lat":23.7272779,"lng":80.2605749},{"id":"F-WD16108","name":"MPWLC A B MAJHGAWAN KATNI","type":"Depot","code":"WD16108","capacity":10800,"railhead":"JKE","lat":23.8182856,"lng":80.5007449},{"id":"F-WD16109","name":"HEERA DEVI WAREHOUSING AND LOGISTICS KATNI","type":"Depot","code":"WD16109","capacity":5625,"railhead":"JKE","lat":23.7739958,"lng":80.5459924},{"id":"F-WD16110","name":"SHREE GURU KRIPA WAREHOUSE KATNI","type":"Depot","code":"WD16110","capacity":10000,"railhead":"NWR","lat":23.6505699,"lng":80.1564572},{"id":"F-WD16111","name":"NARMADA ENTERPRISES GODOWN A","type":"Depot","code":"WD16111","capacity":5663,"railhead":"GSPR","lat":23.527567,"lng":80.0738965},{"id":"F-WD16112","name":"PWS KUSHAGRA WH JABALPUR","type":"Depot","code":"WD16112","capacity":3640,"railhead":"GGGS","lat":23.3030094,"lng":79.7896906},{"id":"F-WD16113","name":"CWC GARRA BALAGHAT","type":"Depot","code":"WD16113","capacity":21000,"railhead":"BTC","lat":21.8100482,"lng":80.1360308},{"id":"F-WD16114","name":"BRIGHU WAREHOUSE SEONI","type":"Depot","code":"WD16114","capacity":5400,"railhead":"SEY","lat":22.2637764,"lng":79.4718244},{"id":"F-WD16116","name":"MAA NARMADA WAREHOUSE MANDLA","type":"Depot","code":"WD16116","capacity":5265,"railhead":"MFR","lat":22.5754033,"lng":80.47347},{"id":"F-WD16117","name":"MEKAL STORAGE WAREHOUSE MANDLA","type":"Depot","code":"WD16117","capacity":3150,"railhead":"MFR","lat":22.6853682,"lng":80.3439799},{"id":"F-WD16118","name":"MOHAN WAREHOUSE KATNI","type":"Depot","code":"WD16118","capacity":5625,"railhead":"JKE","lat":23.8234734,"lng":80.5086913},{"id":"F-WD16119","name":"OM SAI AGRO MARKETING WAREHOUSE PATAN JABALPUR","type":"Depot","code":"WD16119","capacity":5500,"railhead":"GGGS","lat":23.2897309,"lng":79.8203547},{"id":"F-WD16121","name":"ABHA JAIN WAREHOUSE SEONI","type":"Depot","code":"WD16121","capacity":6325,"railhead":"SEY","lat":22.0678477,"lng":79.6355846},{"id":"F-WD16122","name":"UNNATI WAREHOUSE SEONI","type":"Depot","code":"WD16122","capacity":18504,"railhead":"SEY","lat":22.1087317,"lng":79.6272255},{"id":"F-WD16123","name":"SUVIDHA WAREHOUSE SEONI","type":"Depot","code":"WD16123","capacity":20311,"railhead":"SEY","lat":22.1087482,"lng":79.6268111},{"id":"F-WD16124","name":"SURAKSHA WAREHOUSE SEONI","type":"Depot","code":"WD16124","capacity":15062,"railhead":"SEY","lat":22.1087009,"lng":79.6272299},{"id":"F-WD16125","name":"VIVEK AWASTHI WH JABALPUR","type":"Depot","code":"WD16125","capacity":4000,"railhead":"GGGS","lat":22.8806901,"lng":79.8223859},{"id":"F-WD16126","name":"CHOUDHARY LAXMAN SINGH WAREHOUSE JABALPUR","type":"Depot","code":"WD16126","capacity":5719,"railhead":"GGGS","lat":23.2456698,"lng":79.8027207},{"id":"F-WD16127","name":"SHIV SHAKTI WH PATAN JABALPUR","type":"Depot","code":"WD16127","capacity":9650,"railhead":"GGGS","lat":23.2906583,"lng":79.7817933},{"id":"F-WD16128","name":"MAA YASHODA WH SHAHPURA JABALPUR","type":"Depot","code":"WD16128","capacity":5400,"railhead":"BRGT","lat":23.1452379,"lng":79.6704435},{"id":"F-WD16129","name":"SHRI SAI AGRO WAREHOUSE JABALPUR","type":"Depot","code":"WD16129","capacity":4800,"railhead":"BRGT","lat":23.1468167,"lng":79.7143232},{"id":"F-WD16130","name":"SHRI GURU KRIPA WAREHOUSE JABALPUR","type":"Depot","code":"WD16130","capacity":3800,"railhead":"BRGT","lat":23.1468167,"lng":79.7143232},{"id":"F-WD16131","name":"RADHE KRISHNA WAREHOUSE PATAN JABALPUR","type":"Depot","code":"WD16131","capacity":5843,"railhead":"GGGS","lat":23.3782033,"lng":79.8514448},{"id":"F-WD16132","name":"RADHESHYAM WAREHOUSE KATANGI JABALPUR","type":"Depot","code":"WD16132","capacity":2493,"railhead":"GGGS","lat":23.3792335,"lng":79.8503529},{"id":"F-WD16133","name":"SWARNA WAREHOUSE PANAGAR JABALPUR","type":"Depot","code":"WD16133","capacity":5544,"railhead":"GSPR","lat":23.2934965,"lng":79.966212},{"id":"F-WD16134","name":"SRG ANSH WAREHOUSE NARSINGHPUR","type":"Depot","code":"WD16134","capacity":11084,"railhead":"GAR","lat":22.9856316,"lng":79.1770379},{"id":"F-WD16136","name":"SARGAM WAREHOUSE KATNI","type":"Depot","code":"WD16136","capacity":5813,"railhead":"JKE","lat":23.9120794,"lng":80.5633993},{"id":"F-WD16137","name":"KANHA WAREHOUSE MANDLA","type":"Depot","code":"WD16137","capacity":5040,"railhead":"MFR","lat":22.656431,"lng":80.3976812},{"id":"F-WD16138","name":"SANGAM WAREHOUSE MANDLA","type":"Depot","code":"WD16138","capacity":15562,"railhead":"MFR","lat":22.658498,"lng":80.3983135},{"id":"F-WD16139","name":"DUBEY BROTHERS & WAREHOUSE MANDLA","type":"Depot","code":"WD16139","capacity":5869,"railhead":"MFR","lat":22.5491297,"lng":80.3689275},{"id":"F-WD16140","name":"DEEP AGRO PARK JABALPUR","type":"Depot","code":"WD16140","capacity":4000,"railhead":"GGGS","lat":23.0438749,"lng":79.8374547},{"id":"F-WD16141","name":"CHHABRA WAREHOUSE GOHGAWARI NARSINGHPUR","type":"Depot","code":"WD16141","capacity":3000,"railhead":"GAR","lat":22.94571,"lng":79.0423966},{"id":"F-WD16142","name":"SHUBHAM WAREHOUSE JABALPUR","type":"Depot","code":"WD16142","capacity":3780,"railhead":"GSPR","lat":23.5396148,"lng":80.0870108},{"id":"F-WD16143","name":"VIDIT AGRO PARK JABALPUR","type":"Depot","code":"WD16143","capacity":3746,"railhead":"GSPR","lat":23.5395942,"lng":80.0882431},{"id":"F-WD16144","name":"BHAGYA SHRI WAREHOUSE JABALPUR","type":"Depot","code":"WD16144","capacity":5625,"railhead":"GSPR","lat":23.530903,"lng":80.0840151},{"id":"F-WD16148","name":"PARV WAREHOUSE SEONI","type":"Depot","code":"WD16148","capacity":5500,"railhead":"SEY","lat":21.7894229,"lng":79.4846953},{"id":"F-WD16153","name":"RAKHI TOMAR WAREHOUSE SEONI","type":"Depot","code":"WD16153","capacity":6325,"railhead":"SEY","lat":22.0722858,"lng":79.626272},{"id":"F-WD16157","name":"BAL KRISHNA WAREHOUSE MANDLA","type":"Depot","code":"WD16157","capacity":5000,"railhead":"MFR","lat":22.5430788,"lng":80.3397554},{"id":"F-WD16158","name":"UMA WAREHOUSING AND LOGISTICS MANDLA","type":"Depot","code":"WD16158","capacity":5400,"railhead":"MFR","lat":22.6667367,"lng":80.460985},{"id":"F-WD16159","name":"MAA NARMADA WAREHOUSE BICHHIYA MANDLA","type":"Depot","code":"WD16159","capacity":2500,"railhead":"MFR","lat":22.523625,"lng":80.42325},{"id":"F-WD16160","name":"SHRI RAM WAREHOUSE TIKARIYA MANDLA","type":"Depot","code":"WD16160","capacity":4443,"railhead":"MFR","lat":22.65454,"lng":80.3970933},{"id":"F-WD16161","name":"SANGAMITRA WAREHOUSE MANDLA","type":"Depot","code":"WD16161","capacity":5000,"railhead":"MFR","lat":22.6581401,"lng":80.3967184},{"id":"F-WD16162","name":"SASHI WH JABALPUR","type":"Depot","code":"WD16162","capacity":5062,"railhead":"GSPR","lat":23.5755207,"lng":80.1267319},{"id":"F-WD16164","name":"MAA VIDYA WAREHOUSE MAJHOLI JABALPUR","type":"Depot","code":"WD16164","capacity":5010,"railhead":"NWR","lat":23.5720482,"lng":80.1877204},{"id":"F-WD16166","name":"SHIV SHAKTI WAREHOUSE SIHORA JABALPUR","type":"Depot","code":"WD16166","capacity":3918,"railhead":"GSPR","lat":23.3736455,"lng":80.0662602},{"id":"F-WD16167","name":"SHIV KRIPA WAREHOUSE SIHORA JABALPUR","type":"Depot","code":"WD16167","capacity":4915,"railhead":"GSPR","lat":23.3747842,"lng":80.0655384},{"id":"F-WD16168","name":"MAA PITAMBARA WAREHOUSE SIHORA JABALPUR","type":"Depot","code":"WD16168","capacity":5542,"railhead":"GSPR","lat":23.4339784,"lng":80.0838226},{"id":"F-WD16169","name":"JAI MAA PITAMBARA JABALPUR","type":"Depot","code":"WD16169","capacity":5542,"railhead":"GSPR","lat":23.4332807,"lng":80.0837506},{"id":"F-WD16171","name":"NARMADA ENTERPRISES 159 B JABALPUR","type":"Depot","code":"WD16171","capacity":5663,"railhead":"GSPR","lat":23.5275012,"lng":80.0739109},{"id":"F-WD16173","name":"KISAAN WAREHOUSE 39 SEONI","type":"Depot","code":"WD16173","capacity":4687,"railhead":"SEY","lat":22.1093299,"lng":79.6268748},{"id":"F-WD16174","name":"KISAAN WAREHOUSE 39A SEONI","type":"Depot","code":"WD16174","capacity":4687,"railhead":"SEY","lat":22.1091192,"lng":79.6270094},{"id":"F-WD16175","name":"ANMOL AGRO SERVICES SEONI","type":"Depot","code":"WD16175","capacity":8786,"railhead":"SEY","lat":22.1105465,"lng":79.6286296},{"id":"F-WD16178","name":"KALAHASTI WH KARARI JABALPUR","type":"Depot","code":"WD16178","capacity":3475,"railhead":"GGGS","lat":23.2659569,"lng":79.8271276},{"id":"F-WD16179","name":"SHRI KUMAR WH BALAGHAT","type":"Depot","code":"WD16179","capacity":6300,"railhead":"SEY","lat":21.8625097,"lng":80.0057573},{"id":"F-WD16180","name":"NAYAK WAREHOUSE NARSINGHPUR","type":"Depot","code":"WD16180","capacity":4280,"railhead":"GAR","lat":23.0020771,"lng":79.0172993},{"id":"F-WD16181","name":"RUDRA SHRI AGRO PARK WH JABALPUR","type":"Depot","code":"WD16181","capacity":2080,"railhead":"GGGS","lat":23.0351059,"lng":79.822342},{"id":"F-WD16182","name":"PWS MAA SARASWATI WH SEONI","type":"Depot","code":"WD16182","capacity":5000,"railhead":"SEY","lat":22.4473406,"lng":79.5448254},{"id":"F-WD16183","name":"NEW CHOUKSEY WAREHOUSE NARSINGHPUR","type":"Depot","code":"WD16183","capacity":4000,"railhead":"GAR","lat":22.8934828,"lng":79.1911241},{"id":"F-WD16184","name":"ANNPURNA WAREHOUSE KATNI","type":"Depot","code":"WD16184","capacity":5737,"railhead":"JKE","lat":23.9303996,"lng":80.7552617},{"id":"F-WD16185","name":"KRISHNAM WAREHOUSE KATNI","type":"Depot","code":"WD16185","capacity":4726,"railhead":"JKE","lat":23.9125663,"lng":80.8327292},{"id":"F-WD16186","name":"POOJA WAREHOUSE KATNI","type":"Depot","code":"WD16186","capacity":5132,"railhead":"JKE","lat":23.9037098,"lng":80.3202552},{"id":"F-WD16187","name":"ADITYA AGRO WH CHHINDWARA","type":"Depot","code":"WD16187","capacity":9673,"railhead":"SEY","lat":22.0791218,"lng":79.0211311},{"id":"F-WD16188","name":"SANGEETA WH KATNI","type":"Depot","code":"WD16188","capacity":6264,"railhead":"NWR","lat":23.7048191,"lng":80.3983195},{"id":"F-WD16190","name":"AMBIKA WH 52 MANDLA","type":"Depot","code":"WD16190","capacity":5004,"railhead":"MFR","lat":22.5124928,"lng":80.364916},{"id":"F-WD16191","name":"SADBHAV WAREHOUSE DUNGARIYA 25,27,28 SEONI","type":"Depot","code":"WD16191","capacity":7000,"railhead":"SEY","lat":22.1093462,"lng":79.6268815},{"id":"F-WD16041","name":"ADITYA AGRO PEG","type":"Depot","code":"WD16041","capacity":6264,"railhead":"PAR","lat":22.0783994,"lng":79.0229976},{"id":"F-WD16042","name":"MAA ANNAPURNA WAREHOUSE","type":"Depot","code":"WD16042","capacity":2200,"railhead":"PAR","lat":22.5723559,"lng":80.3885947},{"id":"F-WD16043","name":"SMDR WAREHOUSE","type":"Depot","code":"WD16043","capacity":5000,"railhead":"PAR","lat":22.1483136,"lng":79.5263211},{"id":"F-WD16056","name":"NAVKAAR WH 17A, 17B","type":"Depot","code":"WD16056","capacity":6000,"railhead":"PAR","lat":22.1305914,"lng":79.5264831},{"id":"F-WD16065","name":"CWC GARRA BALAGHAT","type":"Depot","code":"WD16065","capacity":10000,"railhead":"PAR","lat":21.810108,"lng":80.1360365},{"id":"F-WD16067","name":"MPWLC NARELA 8","type":"Depot","code":"WD16067","capacity":6264,"railhead":"PAR","lat":22.1455178,"lng":79.5212581},{"id":"F-WD16069","name":"CHOUDHARY WAREHOUSE","type":"Depot","code":"WD16069","capacity":4805,"railhead":"PAR","lat":22.3580337,"lng":79.9221954},{"id":"F-WD16070","name":"SARTAJ WH 30 KEOLARI","type":"Depot","code":"WD16070","capacity":12055,"railhead":"PAR","lat":22.3580111,"lng":79.9223047},{"id":"F-WD16071","name":"SHRIJI WH HARHARPUR","type":"Depot","code":"WD16071","capacity":5739,"railhead":"PAR","lat":21.9671385,"lng":79.5413083},{"id":"F-WD16072","name":"ALOK TOMAR WH SELUA, SEONI","type":"Depot","code":"WD16072","capacity":2331,"railhead":"PAR","lat":22.0719848,"lng":79.6264433},{"id":"F-WD16078","name":"PANDEY WH UNIT 1","type":"Depot","code":"WD16078","capacity":4350,"railhead":"PAR","lat":23.9035848,"lng":80.3205651},{"id":"F-WD16085","name":"SHREE JI WH KATNI","type":"Depot","code":"WD16085","capacity":5600,"railhead":"PAR","lat":23.9042172,"lng":80.2918326},{"id":"F-WD16087","name":"RAJ CHOUDHARY WH SEONI","type":"Depot","code":"WD16087","capacity":6339,"railhead":"PAR","lat":22.3614671,"lng":79.9224177},{"id":"F-WD16093","name":"RAI BHANDAR GRAH JABALPUR","type":"Depot","code":"WD16093","capacity":3200,"railhead":"PAR","lat":23.0845233,"lng":80.0406951},{"id":"F-WD16095","name":"SHRI SITARAM CAP & STORAGE A AND B WH SEONI","type":"Depot","code":"WD16095","capacity":6200,"railhead":"PAR","lat":22.3900688,"lng":79.9730786},{"id":"F-WD16097","name":"SHRI SITARAM STORAGE WH SEONI","type":"Depot","code":"WD16097","capacity":6200,"railhead":"PAR","lat":22.3903692,"lng":79.9733049},{"id":"F-WD16102","name":"SAMRAT WH SEONI","type":"Depot","code":"WD16102","capacity":21750,"railhead":"PAR","lat":22.3600609,"lng":79.9230836},{"id":"F-WD16104","name":"RAGHUVEER SHREE WH JBP","type":"Depot","code":"WD16104","capacity":9807,"railhead":"PAR","lat":23.1275988,"lng":79.6464865},{"id":"F-WD16115","name":"VIKRAMADITYA WAREHOUSE SEONI","type":"Depot","code":"WD16115","capacity":5400,"railhead":"PAR","lat":22.2637832,"lng":79.4718555},{"id":"F-WD16120","name":"PRATISHTHA WAREHOUSE KATNI","type":"Depot","code":"WD16120","capacity":5758,"railhead":"PAR","lat":23.8671818,"lng":80.7121261},{"id":"F-WD16135","name":"SHIVANYA WAREHOUSE AND AGRO SERVICES KATNI","type":"Depot","code":"WD16135","capacity":9000,"railhead":"PAR","lat":23.4862571,"lng":80.4199976},{"id":"F-WD16145","name":"SHIVSHAKTI WH TILSANI JABALPUR","type":"Depot","code":"WD16145","capacity":2685,"railhead":"PAR","lat":23.2071831,"lng":80.1407721},{"id":"F-WD16146","name":"NAVKAR WAREHOUSE SIMARIYA NARELA SEONI","type":"Depot","code":"WD16146","capacity":5900,"railhead":"PAR","lat":22.1289457,"lng":79.5255741},{"id":"F-WD16147","name":"MPWLC BRANCH BOT NARELA SEONI","type":"Depot","code":"WD16147","capacity":3600,"railhead":"PAR","lat":22.1450088,"lng":79.52051},{"id":"F-WD16149","name":"MAA NARMADA WAREHOUSE SEONI","type":"Depot","code":"WD16149","capacity":5600,"railhead":"PAR","lat":22.4474086,"lng":79.5446857},{"id":"F-WD16150","name":"MAA SARASWATI WAREHOUSE SEONI","type":"Depot","code":"WD16150","capacity":3700,"railhead":"PAR","lat":22.4483997,"lng":79.5446576},{"id":"F-WD16151","name":"MAA PARVATI WAREHOUSE SEONI","type":"Depot","code":"WD16151","capacity":3000,"railhead":"PAR","lat":22.4473502,"lng":79.5444869},{"id":"F-WD16152","name":"MAA LAXMI WAREHOUSE SEONI","type":"Depot","code":"WD16152","capacity":3000,"railhead":"PAR","lat":22.4482365,"lng":79.5446124},{"id":"F-WD16154","name":"MPWLC NARELA 5A/5B SEONI","type":"Depot","code":"WD16154","capacity":2800,"railhead":"PAR","lat":22.1442869,"lng":79.5215406},{"id":"F-WD16155","name":"MPWLC BRANCH 6A/6B NARELA SEONI","type":"Depot","code":"WD16155","capacity":3300,"railhead":"PAR","lat":22.1454554,"lng":79.5207713},{"id":"F-WD16156","name":"DEEPIKA WAREHOUSE MANDLA","type":"Depot","code":"WD16156","capacity":5665,"railhead":"PAR","lat":22.8422983,"lng":80.24445},{"id":"F-WD16163","name":"SHREE SARASWATI AGRO WARESHOUSE JABALPUR","type":"Depot","code":"WD16163","capacity":6547,"railhead":"PAR","lat":23.5275989,"lng":80.0844945},{"id":"F-WD16165","name":"AGRAWAL WAREHOUSE PATAN JABALPUR","type":"Depot","code":"WD16165","capacity":5295,"railhead":"PAR","lat":23.3011987,"lng":79.7531391},{"id":"F-WD16170","name":"MAA LAXMI WAREHOUSE BARGI JABALPUR","type":"Depot","code":"WD16170","capacity":6265,"railhead":"PAR","lat":23.0757783,"lng":79.908015},{"id":"F-WD16172","name":"RADHEY WAREHOUSE SEONI","type":"Depot","code":"WD16172","capacity":5000,"railhead":"PAR","lat":22.3107897,"lng":79.548152},{"id":"F-WD16176","name":"RIYA WAREHOUSE C23 SEONI","type":"Depot","code":"WD16176","capacity":4000,"railhead":"PAR","lat":22.4464666,"lng":79.5431617},{"id":"F-WD16177","name":"KANHA WAREHOUSE C25 SEONI","type":"Depot","code":"WD16177","capacity":4000,"railhead":"PAR","lat":22.4470076,"lng":79.5455127},{"id":"F-WD16189","name":"CHOUKSEY WH 49 NARSINGHPUR","type":"Depot","code":"WD16189","capacity":2071,"railhead":"PAR","lat":22.8930693,"lng":79.1907941}];
const COLORS={Railhead:'#2388ff',Distillery:'#ff9f2f',Depot:'#22d3b8',Plant:'#ef6a6a',Warehouse:'#c792ea',Other:'#8ea0c2'};
let locations=loadLocations(), map=null, markers=[], routeLayer=null, directionPlugin=null, lastRoute=null, editingId=null, viaIds=[];
let routeAlternatives=[], directionPanelCollapsed=false, selectedRouteIndex=0;
let availableMapStyles=[];
let satelliteLayer=null;
const $=id=>document.getElementById(id);

const UI_STATE_KEY='ethanol_ui_state_v32';
const ROUTE_HISTORY_KEY='ethanol_route_history_v32';
const LANG_KEY='ethanol_lang_v32';
const THEME_KEY='ethanol_theme_v32';
function saveUiState(patch={}){try{const old=JSON.parse(localStorage.getItem(UI_STATE_KEY)||'{}');localStorage.setItem(UI_STATE_KEY,JSON.stringify({...old,...patch}));}catch(e){}}
function loadUiState(){try{return JSON.parse(localStorage.getItem(UI_STATE_KEY)||'{}')||{}}catch(e){return {}}}
function animateNumber(el,target,suffix=''){if(!el)return;const txt=String(target??'');const n=parseFloat(txt.replace(/[^0-9.\-]/g,''));if(!Number.isFinite(n)){el.textContent=txt;return}const decimals=String(target).includes('.')?1:0;const start=0;const t0=performance.now();el.classList.remove('counting');void el.offsetWidth;el.classList.add('counting');function step(t){const p=Math.min(1,(t-t0)/550);const v=start+(n-start)*(1-Math.pow(1-p,3));el.textContent=(decimals?v.toFixed(decimals):Math.round(v).toLocaleString('en-IN'))+suffix;if(p<1)requestAnimationFrame(step)}requestAnimationFrame(step)}
function refreshKpis(){if(!$('kpiLocations'))return;const depots=locations.filter(x=>x.type==='Depot').length, rails=locations.filter(x=>x.type==='Railhead').length, dist=locations.filter(x=>x.type==='Distillery').length;animateNumber($('kpiLocations'),locations.length);animateNumber($('kpiRailheads'),rails);animateNumber($('kpiDistilleries'),dist);animateNumber($('kpiDepots'),depots);updateAlerts()}
function getAlerts(){const low=locations.filter(x=>x.type==='Depot'&&Number(x.capacity)>0&&Number(x.capacity)<5000);return {low,stale:locations.filter(x=>x.type==='Railhead'&&x.lastLiftDate&&((Date.now()-new Date(x.lastLiftDate).getTime())/86400000)>7)}}
function updateAlerts(){const a=getAlerts(),n=a.low.length+a.stale.length;if($('alertBadge')){$('alertBadge').textContent=n>99?'99+':n;$('alertBadge').style.display=n?'grid':'none'}if($('kpiAlerts'))animateNumber($('kpiAlerts'),n);if($('alertList')){$('alertList').innerHTML=n?([...a.low.map(x=>`<div class="alert-item"><b>Low capacity:</b> ${esc(x.name)} — ${Number(x.capacity).toLocaleString('en-IN')} MT</div>`),...a.stale.map(x=>`<div class="alert-item"><b>Lift pending:</b> ${esc(x.name)} — last lifting ${esc(x.lastLiftDate)}</div>`)]).join(''):'<div class="alert-empty">No configured alerts. Railhead lifting alerts appear when <b>lastLiftDate</b> is available in the location data.</div>'}}
function renderRouteHistory(){const box=$('routeHistory');if(!box)return;let arr=[];try{arr=JSON.parse(localStorage.getItem(ROUTE_HISTORY_KEY)||'[]')}catch(e){}if(!arr.length){box.innerHTML='<div class="history-empty">No calculated routes yet.</div>';return}box.innerHTML=arr.slice(0,8).map((r,i)=>`<div class="history-item"><div><div class="history-route">${esc(r.origin)} → ${esc(r.destination)}</div><div class="history-meta">${r.km!=null?esc(r.km.toFixed(1))+' KM':'—'} · ${esc(r.vehicle||'HCV')} · ${esc(r.when||'')}</div></div><div class="history-actions"><button class="btn" data-history-index="${i}" title="Load route">↻</button><button class="btn danger" data-history-delete="${i}" title="Delete">×</button></div></div>`).join('');box.querySelectorAll('[data-history-index]').forEach(b=>b.onclick=()=>loadRouteHistory(Number(b.dataset.historyIndex)));box.querySelectorAll('[data-history-delete]').forEach(b=>b.onclick=()=>deleteRouteHistory(Number(b.dataset.historyDelete)))}
function saveRouteHistory(points,km,time){if(!points||points.length<2)return;let arr=[];try{arr=JSON.parse(localStorage.getItem(ROUTE_HISTORY_KEY)||'[]')}catch(e){}const item={origin:points[0].name,destination:points[points.length-1].name,via:points.slice(1,-1).map(x=>x.name),originId:points[0].id,destinationId:points[points.length-1].id,viaIds:points.slice(1,-1).map(x=>x.id),km,time,vehicle:$('profile')?.value==='trucking'?'HCV':'LMV',when:new Date().toLocaleString('en-IN',{dateStyle:'short',timeStyle:'short'})};arr=[item,...arr.filter(x=>!(x.originId===item.originId&&x.destinationId===item.destinationId&&JSON.stringify(x.viaIds)===JSON.stringify(item.viaIds)))].slice(0,8);try{localStorage.setItem(ROUTE_HISTORY_KEY,JSON.stringify(arr))}catch(e){}renderRouteHistory()}
function loadRouteHistory(i){let arr=[];try{arr=JSON.parse(localStorage.getItem(ROUTE_HISTORY_KEY)||'[]')}catch(e){}const r=arr[i];if(!r)return;$('origin').value=r.originId;$('destination').value=r.destinationId;viaIds=(r.viaIds||[]).filter(id=>id!==r.originId&&id!==r.destinationId&&getLoc(id));renderVia();$('profile').value=r.vehicle==='LMV'?'driving':'trucking';toast('Route loaded. Click Calculate Route to recalculate road distance.');showRoutePlannerView()}
function deleteRouteHistory(i){let arr=[];try{arr=JSON.parse(localStorage.getItem(ROUTE_HISTORY_KEY)||'[]')}catch(e){}arr.splice(i,1);try{localStorage.setItem(ROUTE_HISTORY_KEY,JSON.stringify(arr))}catch(e){}renderRouteHistory()}
function clearRouteHistory(){try{localStorage.removeItem(ROUTE_HISTORY_KEY)}catch(e){}renderRouteHistory();toast('Route history cleared.')}
const I18N={
 en:{},
 hi:{'LOGISTICS INTELLIGENCE SYSTEM':'लॉजिस्टिक्स इंटेलिजेंस सिस्टम','Integrated Logistics, Route & Transport Network Management':'एकीकृत लॉजिस्टिक्स, रूट एवं परिवहन नेटवर्क प्रबंधन','Dashboard / Map View':'डैशबोर्ड / मैप व्यू','Route Planner':'रूट प्लानर','Locations':'स्थान','Distance Matrix':'दूरी मैट्रिक्स','Reports':'रिपोर्ट्स','Settings':'सेटिंग्स','Map View':'मैप व्यू','Satellite':'सैटेलाइट','Refresh':'रिफ्रेश','Search location (Railhead / Distillery / City)…':'स्थान खोजें (रेलहेड / डिस्टिलरी / शहर)…','Select Origin':'प्रारंभिक स्थान चुनें','Select Destination':'गंतव्य चुनें','Via Stops (Optional)':'मध्यवर्ती स्थान (वैकल्पिक)','Vehicle Type':'वाहन प्रकार','Route Type':'रूट प्रकार','Calculate Route':'रूट की गणना करें','Fit Route':'रूट फिट करें','View on Map':'मैप पर देखें','Clear All':'सब साफ करें','Route Summary':'रूट सारांश','Total Distance':'कुल दूरी','Estimated Time':'अनुमानित समय','Route Legs':'रूट लेग','Route Sequence':'रूट क्रम','Leg-wise Details':'लेग-वार विवरण','Route History':'रूट इतिहास','Saved on this browser':'इस ब्राउज़र में सेव','Clear History':'इतिहास साफ करें','No calculated routes yet.':'अभी कोई गणना किया गया रूट नहीं है।','Reports':'रिपोर्ट्स','Print / PDF':'प्रिंट / PDF','Operational Alerts':'परिचालन अलर्ट','Low capacity:':'कम क्षमता:','Lift pending:':'लिफ्टिंग लंबित:','No configured alerts.':'कोई कॉन्फ़िगर अलर्ट नहीं है।','Locations':'स्थान','Railheads':'रेलहेड','Distilleries':'डिस्टिलरी','Depots':'डिपो','Alerts':'अलर्ट'}
};
function applyLanguage(lang){document.documentElement.lang=lang==='hi'?'hi':'en';const dict=I18N[lang]||{};document.querySelectorAll('button, h1,h3,h4,label,span,small,p').forEach(el=>{if(el.children.length)return;const raw=(el.dataset.i18n||el.textContent||'').trim();if(!el.dataset.i18n)el.dataset.i18n=raw;const key=el.dataset.i18n;if(lang==='hi'&&dict[key])el.textContent=dict[key];else if(lang==='en')el.textContent=key});$('langToggle').textContent=lang==='hi'?'EN / हिं':'हिं / EN';try{localStorage.setItem(LANG_KEY,lang)}catch(e){}}
function setTheme(mode){const app=document.querySelector('.app');app.classList.toggle('dark-mode',mode==='dark');if($('darkToggle'))$('darkToggle').textContent=mode==='dark'?'☀':'☾';try{localStorage.setItem(THEME_KEY,mode)}catch(e){}setTimeout(()=>{try{refreshMapLayout()}catch(e){}},120)}
function printReports(){const old=loadUiState();saveUiState({tab:'reports'});const active=document.querySelector('.section.active');document.querySelectorAll('.section').forEach(x=>x.classList.remove('active'));$('sec-reports')?.classList.add('active');document.querySelector('.print-header')?.style.setProperty('display','block');$('printDate').textContent='Generated: '+new Date().toLocaleString('en-IN');window.print();setTimeout(()=>{document.querySelector('.print-header')?.style.removeProperty('display');document.querySelectorAll('.section').forEach(x=>x.classList.remove('active'));active?.classList.add('active');},500)}
function toggleReportAccordion(id){
  const el=$(id); if(!el)return;
  const open=!el.classList.contains('open');
  el.classList.toggle('open',open);
  const head=el.querySelector('.report-accordion-head');
  if(head)head.setAttribute('aria-expanded',String(open));
  try{localStorage.setItem('reportAccordion:'+id,open?'open':'closed')}catch(e){}
  if(open){
    setTimeout(()=>{ if(map&&typeof map.resize==='function'){try{map.resize()}catch(e){}} },80);
  }
}
function restoreReportAccordions(){
  ['distilleryAnalysisAccordion','depotDistilleryAccordion'].forEach(id=>{
    const el=$(id); if(!el)return;
    let state=null; try{state=localStorage.getItem('reportAccordion:'+id)}catch(e){}
    const open=state?state==='open':id==='distilleryAnalysisAccordion';
    el.classList.toggle('open',open);
    const head=el.querySelector('.report-accordion-head');
    if(head)head.setAttribute('aria-expanded',String(open));
  });
}

function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function toast(msg,err=false){const t=$('toast');t.textContent=msg;t.className='toast show'+(err?' err':'');clearTimeout(window._tt);window._tt=setTimeout(()=>t.className='toast',3500)}
function loadLocations(){
  try{
    const raw=localStorage.getItem('ethanol_locations_v7')||localStorage.getItem('ethanol_locations_v6');
    if(Array.isArray(JSON.parse(raw))){
      const x=JSON.parse(raw);
      const ids=new Set(x.map(l=>l.id));
      FCI_DEPOTS.forEach(d=>{if(!ids.has(d.id))x.push({...d})});
      return x;
    }
  }catch(e){}
  return ORIGINAL_LOCATIONS.map(x=>({...x}));
}
function saveLocations(){localStorage.setItem('ethanol_locations_v7',JSON.stringify(locations));try{refreshKpis()}catch(e){}}
function getLoc(id){return locations.find(x=>x.id===id)}
function fillSelects(){
  const opts=locations.map(l=>`<option value="${esc(l.id)}">${esc(l.name)}${l.code?' — '+esc(l.code):''} — ${esc(l.type)}</option>`).join('');
  const prevOrigin=$('origin').value;
  const prevDestination=$('destination').value;
  $('origin').innerHTML='<option value="">Select Origin</option>'+opts;
  $('destination').innerHTML='<option value="">Select Destination</option>'+opts;
  $('viaSelect').innerHTML='<option value="">+ Add intermediate stop</option>'+opts;
  if(prevOrigin && locations.some(x=>x.id===prevOrigin)) $('origin').value=prevOrigin;
  if(prevDestination && locations.some(x=>x.id===prevDestination)) $('destination').value=prevDestination;
  renderVia(); renderTable(); renderMatrixPicker(); fillDistilleryReportSelect();
fillDepotReportSelect();
  if($('kpiLocations')){
    $('kpiLocations').textContent=locations.length;
    $('kpiRailheads').textContent=locations.filter(x=>x.type==='Railhead').length;
    $('kpiDistilleries').textContent=locations.filter(x=>x.type==='Distillery').length;
    if($('kpiDepots'))$('kpiDepots').textContent=locations.filter(x=>x.type==='Depot').length;
    $('sideLocations').textContent=locations.length;
    $('sideRailheads').textContent=locations.filter(x=>x.type==='Railhead').length;
    $('sideDistilleries').textContent=locations.filter(x=>x.type==='Distillery').length;$('sideDepots').textContent=locations.filter(x=>x.type==='Depot').length;
  }
}
function renderVia(){ $('viaList').innerHTML=viaIds.map((id,i)=>{const l=getLoc(id);return l?`<div class="stop"><span class="dot" style="background:${COLORS[l.type]||COLORS.Other}"></span><span style="flex:1">${esc(l.name)}</span><button class="btn small" data-action="removeVia" data-index="${i}">×</button></div>`:''}).join('');}
window.removeVia=i=>{viaIds.splice(i,1);renderVia()};
function pinHtml(l){return `<div class="pin" style="background:${COLORS[l.type]||COLORS.Other}" title="${esc(l.name)}">${l.type==='Railhead'?'R':l.type==='Distillery'?'D':'F'}</div>`}

function loadScriptOnce(src,id){
  return new Promise((resolve,reject)=>{
    if(id){
      const old=document.getElementById(id);
      if(old && old.dataset.loaded==='1'){resolve();return;}
      if(old)old.remove();
    }
    const s=document.createElement('script');
    if(id)s.id=id;
    s.async=true;s.src=src;
    s.onload=()=>{s.dataset.loaded='1';resolve();};
    s.onerror=()=>{s.remove();reject(new Error('Failed to load Mappls Web Maps SDK. Check the Web Map key and domain whitelist.'));};
    document.head.appendChild(s);
  });
}

async function loadMappls(key){
  if(!key)throw new Error('Mappls Web Map Key is required.');
  if(typeof mappls==='undefined' || typeof mappls.Map!=='function'){
    await loadScriptOnce(
      'https://sdk.mappls.com/map/sdk/web?v=3.0&access_token='+encodeURIComponent(key)+'&layer=vector',
      'mappls-web-sdk-v38'
    );
  }
  if(typeof mappls==='undefined' || typeof mappls.Map!=='function')
    throw new Error('Mappls Web Maps SDK did not initialize. Check Web Maps access and domain whitelist.');
  return true;
}

function mapplsFitBounds(points,padding=60){
  const pts=(points||[]).map(p=>{
    if(Array.isArray(p))return [Number(p[1]),Number(p[0])];
    return [Number(p.lat),Number(p.lng)];
  }).filter(p=>Number.isFinite(p[0])&&Number.isFinite(p[1]));
  if(pts.length<2)return;
  const bounds=pts.map(p=>[p[1],p[0]]);
  try{
    new mappls.fitBounds({
      map:map,
      cType:0,
      bounds,
      options:{padding,duration:700}
    });
  }catch(e){
    try{map.setCenter({lat:pts[0][0],lng:pts[0][1]})}catch(_){}
  }
}

function removeMapplsLayer(layer){
  if(!layer||!map||typeof mappls==='undefined')return;
  try{mappls.remove({map:map,layer})}catch(e){
    try{layer.setMap(null)}catch(_){}
  }
}

function addMapplsMarker(l,opts={}){
  const marker=new mappls.Marker({
    map,
    position:{lat:Number(l.lat),lng:Number(l.lng)},
    html:opts.html||pinHtml(l),
    width:opts.width||32,
    height:opts.height||32,
    offset:[0,0],
    popupOptions:opts.popupHtml?true:false,
    popupHtml:opts.popupHtml||undefined,
    draggable:false
  });
  return marker;
}

async function getMapplsWebKey(){
  const data=await fetchWorkerJson('/webkey',{});
  const key=data?.key||data?.web_key||data?.data?.key;
  if(!key)throw new Error('Secure Worker did not return the Mappls Web Map credential.');
  return String(key);
}

function installMapCompatibility(){
  if(!map)return;
  if(typeof map.removeLayer!=='function'){
    map.removeLayer=(layer)=>removeMapplsLayer(layer);
  }
  if(typeof map.fitBounds!=='function'){
    map.fitBounds=(bounds,options={})=>{
      const pts=(bounds||[]).map(p=>Array.isArray(p)?{lat:Number(p[0]),lng:Number(p[1])}:p);
      mapplsFitBounds(pts,Number(options.padding?.[0]||options.padding||60));
    };
  }
  if(typeof map.setView!=='function'){
    map.setView=(latlng,zoom)=>{
      map.setCenter({lat:Number(latlng[0]),lng:Number(latlng[1])});
      if(zoom!=null)map.setZoom(Number(zoom));
    };
  }
  if(typeof map.flyTo!=='function'){
    map.flyTo=(latlng,zoom)=>{
      map.setCenter({lat:Number(latlng[0]),lng:Number(latlng[1])});
      if(zoom!=null)map.setZoom(Number(zoom));
    };
  }
  if(typeof map.closePopup!=='function')map.closePopup=()=>{};
  if(typeof map.invalidateSize!=='function')map.invalidateSize=()=>{};
}

async function refreshMapLayout(){
  if(!map)return;
  const el=document.getElementById('map');
  if(el){
    el.style.width='100%';
    el.style.height='100%';
  }
  // Mappls redraws on viewport/center changes. Reapply the current center/zoom
  // after a tab/size transition rather than replacing SDK internals with a fake resize().
  try{
    const c=map.getCenter?.();
    const z=map.getZoom?.();
    if(c&&Number.isFinite(Number(c.lat))&&Number.isFinite(Number(c.lng))){
      map.setCenter({lat:Number(c.lat),lng:Number(c.lng)});
      if(Number.isFinite(Number(z)))map.setZoom(Number(z));
    }
  }catch(_){}
}

async function initMap(){
  if(map){await refreshMapLayout();return true;}

  try{
    $('sdkStatus').className='status';
    $('sdkStatus').textContent='Loading Mappls Web Map securely…';

    const key=await getMapplsWebKey();
    await loadMappls(key);

    map=new mappls.Map('map',{
      center:{lat:22.9,lng:79.2},
      zoom:6.5
    });

    installMapCompatibility();

    map.addListener('load',()=>{
      renderMarkers();
      $('sdkStatus').className='status ok';
      $('sdkStatus').textContent='✓ Mappls Map ready · Mappls Routing / Matrix Worker connected.';
      setTimeout(refreshMapLayout,100);
      setTimeout(refreshMapLayout,500);
    });

    renderMarkers();
    return true;
  }catch(e){
    $('sdkStatus').className='status err';
    $('sdkStatus').textContent='Mappls map initialization failed: '+e.message;
    toast(e.message,true);
    return false;
  }
}

function renderMarkers(filterType=null){
  if(!map)return;
  markers.forEach(removeMapplsLayer);
  markers=[];

  locations.filter(l=>!filterType||l.type===filterType).forEach(l=>{
    try{
      const popup=`<div style="font-family:Arial;padding:10px;min-width:250px">
        <b>${esc(l.name)}</b><br>
        <span style="color:#777">${esc(l.type)}${l.code?' · '+esc(l.code):''}</span>
        ${l.capacity?`<br><small>Capacity: ${esc(l.capacity)} MT</small>`:''}
        ${l.railhead?`<br><small>Rail Head / Cluster: ${esc(l.railhead)}</small>`:''}
        <br><small>${Number(l.lat).toFixed(6)}, ${Number(l.lng).toFixed(6)}</small>
        <br><br>
        <button data-action="setEndpoint" data-id="${esc(l.id)}" data-which="origin">Route From</button>
        <button data-action="setEndpoint" data-id="${esc(l.id)}" data-which="destination">Route To</button>
        <button data-action="goToLocationOnMap" data-id="${esc(l.id)}">📍 Focus Map</button>
      </div>`;

      markers.push(addMapplsMarker(l,{popupHtml:popup}));
    }catch(e){console.warn(e)}
  });
}

window.setEndpoint=(id,which)=>{$(which).value=id;toast(`${which==='origin'?'Origin':'Destination'} set.`)};

function fitAll(){
  if(!map||!locations.length)return;
  mapplsFitBounds(locations.map(l=>({lat:Number(l.lat),lng:Number(l.lng)})),50);
}

function clearRoute(){
  try{if(routeLayer){removeMapplsLayer(routeLayer);routeLayer=null}}catch(e){}
  try{clearRouteOverlays()}catch(e){}
  try{removeDirectionLayer()}catch(e){}
  routeAlternatives=[];selectedRouteIndex=0;lastRoute=null;viaIds=[];
  if($('origin'))$('origin').value='';
  if($('destination'))$('destination').value='';
  if($('viaSelect'))$('viaSelect').value='';
  renderVia();
  $('km').textContent='—';$('time').textContent='—';$('legs').textContent='—';
  $('routeSequence').innerHTML='<div class="empty">No route calculated.</div>';
  $('routeDetails').innerHTML='<div class="empty">Calculate a route to see details.</div>';
  if($('routeSummaryLegs'))$('routeSummaryLegs').innerHTML='<div class="empty">No route calculated.</div>';
  if($('routeAlternativeSummary'))$('routeAlternativeSummary').innerHTML='<div class="empty">No alternative routes calculated.</div>';
  if($('routeAltCount'))$('routeAltCount').textContent='—';
  $('mapSummary').classList.remove('show');$('mapRouteDetailsOverlay')?.classList.remove('show');
  $('routeStatus').className='status';$('routeStatus').textContent='Ready — select origin and destination.';
  if($('kpiDistance'))$('kpiDistance').textContent='—';
  if(map)fitAll();
  toast('Route cleared.');
}
function hav(a,b){const R=6371000,p=Math.PI/180,dLat=(b.lat-a.lat)*p,dLon=(b.lng-a.lng)*p;const x=Math.sin(dLat/2)**2+Math.cos(a.lat*p)*Math.cos(b.lat*p)*Math.sin(dLon/2)**2;return 2*R*Math.asin(Math.sqrt(x));}
function parseNum(v){if(typeof v==='number')return v;if(typeof v==='string'){const m=v.replace(/,/g,'').match(/[-+]?\d+(?:\.\d+)?/);return m?Number(m[0]):null}return null}
function findMetric(obj,keys,seen=new Set(),depth=0){
  if(!obj||depth>8||seen.has(obj)||typeof obj!=='object')return null;
  seen.add(obj);
  // Prefer exact key matches before broader matches. This prevents an instruction-level
  // "distance" from being mistaken for the route total.
  for(const k of Object.keys(obj)){
    const lk=k.toLowerCase();
    if(keys.some(x=>lk===x)){
      const n=parseNum(obj[k]);
      if(n!==null)return {key:k,val:n,raw:obj[k],depth};
    }
  }
  for(const k of Object.keys(obj)){
    const r=findMetric(obj[k],keys,seen,depth+1);
    if(r)return r;
  }
  return null;
}
function routeMetricCandidates(obj){
  const out=[];
  const seen=new Set();
  function walk(v,path=[],depth=0){
    if(!v||depth>8||seen.has(v)||typeof v!=='object')return;
    seen.add(v);
    if(Array.isArray(v)){v.forEach((x,i)=>walk(x,path.concat(i),depth+1));return}
    const keys=Object.keys(v);
    for(const k of keys){
      const lk=k.toLowerCase(), val=v[k], n=parseNum(val);
      if(n!==null && (lk==='distance'||lk==='duration'||lk==='time'||lk==='traveltime'||lk==='totaldistance'||lk==='totalduration')){
        out.push({key:lk,val:n,raw:val,path:path.concat(k),depth});
      }
      walk(val,path.concat(k),depth+1);
    }
  }
  walk(obj);
  return out;
}
function extractDistanceMeters(data){
  const d = data?.results?.distances ?? data?.results?.[0]?.distances ?? data?.distances;
  if(Array.isArray(d)){
    const flat=[];
    (function walk(v){
      if(Array.isArray(v)) v.forEach(walk);
      else { const n=parseNum(v); if(n!==null && n>=0) flat.push(n); }
    })(d);
    if(flat.length>1) return flat[1];
    if(flat.length===1) return flat[0];
  }
  const c=routeMetricCandidates(data).filter(x=>x.key==='distance'||x.key==='totaldistance');
  return c.length ? c.sort((a,b)=>a.depth-b.depth)[0].val : null;
}
function extractDurationSeconds(data){
  const d = data?.results?.durations ?? data?.results?.[0]?.durations ?? data?.durations;
  if(Array.isArray(d)){
    const flat=[];
    (function walk(v){
      if(Array.isArray(v)) v.forEach(walk);
      else { const n=parseNum(v); if(n!==null && n>=0) flat.push(n); }
    })(d);
    if(flat.length>1) return flat[1];
    if(flat.length===1) return flat[0];
  }
  const c=routeMetricCandidates(data).filter(x=>['duration','time','traveltime','totalduration'].includes(x.key));
  return c.length ? c.sort((a,b)=>a.depth-b.depth)[0].val : null;
}
const MAPPLS_WORKER_URL='https://ethanol-mappls-proxy.jrms2122.workers.dev';

async function fetchWorkerJson(path,params={}){
  const url=new URL(MAPPLS_WORKER_URL+path);
  Object.entries(params).forEach(([k,v])=>{if(v!==undefined&&v!==null&&v!=='')url.searchParams.set(k,String(v))});
  const res=await fetch(url.toString(),{method:'GET',headers:{Accept:'application/json'}});
  let data=null;
  try{data=await res.json()}catch(e){throw new Error(`Secure proxy returned invalid JSON (HTTP ${res.status}).`)}
  if(!res.ok || data?.ok===false) throw new Error(data?.error||data?.message||`Secure proxy request failed (HTTP ${res.status}).`);
  return data;
}

function normalizeDistanceKm(v){
  if(v==null||!Number.isFinite(Number(v)))return null;
  const n=Number(v);
  // Mappls distance matrix returns routable distance; normalize common meter output.
  return n>1000?n/1000:n;
}
function formatDurationSeconds(sec){
  if(sec==null)return null;
  const n=Number(sec); if(!Number.isFinite(n))return null;
  if(n>100000)return Math.round(n/60)+' min';
  if(n>=3600)return Math.floor(n/3600)+' hr '+Math.round((n%3600)/60)+' min';
  if(n>=60)return Math.floor(n/60)+' min';
  return Math.round(n)+' sec';
}
async function mapplsDistance(a,b,profile,resource){
  const matrixResource=(resource==='distance_matrix_eta'||resource==='distance_matrix_traffic')?resource:'distance_matrix';
  const data=await fetchWorkerJson('/matrix',{profile:profile||'driving',resource:matrixResource,coordinates:`${Number(a.lng)},${Number(a.lat)};${Number(b.lng)},${Number(b.lat)}`,sources:'0',destinations:'1'});
  const meters=parseNum(data?.distances?.[0]?.[0] ?? data?.data?.results?.distances?.[0]?.[0]);
  const seconds=parseNum(data?.durations?.[0]?.[0] ?? data?.data?.results?.durations?.[0]?.[0]);
  if(meters==null) throw new Error('Secure Mappls Matrix returned no routable distance.');
  return {km:normalizeDistanceKm(meters),seconds,time:formatDurationSeconds(seconds),raw:data};
}
async function calculateLegMetrics(points,profile,resource){
  let totalKm=0,totalSeconds=0,hasTime=true,legs=[];
  for(let i=0;i<points.length-1;i++){
    const m=await mapplsDistance(points[i],points[i+1],profile,resource);
    totalKm+=m.km;
    if(m.seconds!=null)totalSeconds+=m.seconds; else hasTime=false;
    legs.push({from:points[i],to:points[i+1],km:m.km,time:m.time});
  }
  return {km:totalKm,time:hasTime?formatDurationSeconds(totalSeconds):null,legs};
}
function durationText(v){if(v==null)return null;let s=String(v).toLowerCase();if(/hour|hr|min|sec/.test(s))return s.replace(/seconds?/g,'sec').replace(/minutes?/g,'min').replace(/hours?/g,'hr');let n=Number(v);if(!Number.isFinite(n))return null;if(n>100000)return Math.round(n/60)+' min';if(n>3600)return Math.floor(n/3600)+' hr '+Math.round((n%3600)/60)+' min';if(n>180)return Math.floor(n/60)+' min';return Math.round(n)+' sec'}
function renderRouteMetrics(km,time,source){$('km').textContent=km!=null?km.toFixed(1)+' KM':'—';$('time').textContent=time||'—';$('legs').textContent=String(1+viaIds.length);$('vehicleLabel').textContent=$('profile').value==='trucking'?'HCV':'LMV';$('mapKm').textContent=km!=null?km.toFixed(1)+' KM':'—';$('mapTime').textContent=time||'Time unavailable';$('mapSummary').classList.add('show');$('mapRouteName').textContent=source||'Active Road Route';$('mapRouteSub').textContent=source?`Road route · ${1+viaIds.length} leg${1+viaIds.length===1?'':'s'}`:'Calculated route.'; updateMapRouteOverlay()}
function showSequence(){const ids=[$('origin').value,...viaIds,$('destination').value];$('routeSequence').innerHTML=`<div class="route-list">${ids.map((id,i)=>{const l=getLoc(id);return `<div class="stop"><span class="dot" style="background:${i===0?'#35a7ff':i===ids.length-1?'#ff5d6c':COLORS[l?.type]||'#ffb84d'}"></span><span style="flex:1"><b>${i===0?'ORIGIN':i===ids.length-1?'DESTINATION':'VIA '+i}</b><br>${esc(l?.name||'Unknown')}</span></div>`}).join('')}</div>`}
function renderLegMetrics(legs){
  const el=$('routeDetails');
  if(!legs?.length)return;
  let h='<table class="table"><thead><tr><th>#</th><th>From</th><th>To</th><th>Road Distance</th><th>Travel Time</th></tr></thead><tbody>';
  legs.forEach((x,i)=>{h+=`<tr><td>${i+1}</td><td>${esc(x.from.name)}</td><td>${esc(x.to.name)}</td><td><b>${x.km.toFixed(1)} KM</b></td><td>${esc(x.time||'—')}</td></tr>`});
  h+='</tbody></table>';
  if(el)el.innerHTML=h;
  const summary=$('routeSummaryLegs');
  if(summary)summary.innerHTML=h;
}

async function goToLocationOnMap(id){
  const loc=getLoc(id);
  if(!loc)return toast('Location not found.',true);

  const lat=Number(loc.lat),lng=Number(loc.lng);
  if(!Number.isFinite(lat)||!Number.isFinite(lng))return toast('Invalid location coordinates.',true);

  try{
    locationFocusActive=true;
    const ok=await showMapView({preserveViewport:true});
    if(!ok){locationFocusActive=false;toast('Map is not initialized.',true);return false;}

    if(window.__locationFocusMarker)removeMapplsLayer(window.__locationFocusMarker);
    window.__locationFocusMarker=addMapplsMarker(loc,{
      html:'<div class="location-focus-pin"></div>',
      width:28,
      height:28,
      popupHtml:`<div style="font-family:Arial;padding:10px;min-width:230px">
        <b>${esc(loc.name)}</b><br>
        <span style="color:#777">${esc(loc.type)}${loc.code?' · '+esc(loc.code):''}</span>
        ${loc.capacity?`<br><small>Capacity: ${esc(loc.capacity)} MT</small>`:''}
        ${loc.railhead?`<br><small>Rail Head / Cluster: ${esc(loc.railhead)}</small>`:''}
        <br><small>${lat.toFixed(6)}, ${lng.toFixed(6)}</small>
      </div>`
    });

    const focus=()=>{
      if(!map)return;
      try{map.setCenter({lat,lng});}catch(_){ }
      try{map.setZoom(15);}catch(_){ }
    };

    // Wait for the map panel to finish its layout transition. We deliberately
    // do NOT call fitBounds here because that can move the map to a different
    // extent after the exact location was selected.
    requestAnimationFrame(focus);
    setTimeout(focus,120);
    setTimeout(focus,350);
    setTimeout(focus,800);
    setTimeout(()=>{
      try{window.__locationFocusMarker?.openPopup?.();}catch(_){ }
      locationFocusActive=false;
    },900);

    toast(`Map focused on ${loc.name}.`);
    return true;
  }catch(e){
    locationFocusActive=false;
    console.error('Location focus failed',e);
    toast('Could not focus location on Mappls map.',true);
    return false;
  }
}

function renderTable(){
  const body=$('locationTable');
  if(!body)return;
  const q=($('locationSearch')?.value||'').trim().toLowerCase();
  const rows=locations.filter(l=>!q||l.name.toLowerCase().includes(q)||l.type.toLowerCase().includes(q)||(l.code||'').toLowerCase().includes(q)||(l.railhead||'').toLowerCase().includes(q));
  body.innerHTML=rows.map(l=>`<tr>
    <td><b>${esc(l.name)}</b>${l.code?`<br><small class="hint">${esc(l.code)}</small>`:''}</td>
    <td><span class="badge">${esc(l.type)}</span></td>
    <td>${l.capacity?esc(l.capacity)+' MT':'—'}</td>
    <td>${esc(l.railhead||'—')}</td>
    <td>${Number(l.lat).toFixed(6)}, ${Number(l.lng).toFixed(6)}</td>
    <td><button class="btn small primary" data-goto-location="${esc(l.id)}">📍 Map</button>
        <button class="btn small" data-edit-location="${esc(l.id)}">Edit</button>
        <button class="btn small danger" data-delete-location="${esc(l.id)}">Delete</button></td>
  </tr>`).join('') || '<tr><td colspan="6" class="empty">No locations found.</td></tr>';
  body.querySelectorAll('[data-goto-location]').forEach(b=>b.onclick=()=>goToLocationOnMap(b.dataset.gotoLocation));
  body.querySelectorAll('[data-edit-location]').forEach(b=>b.onclick=()=>openLocationModal(b.dataset.editLocation));
  body.querySelectorAll('[data-delete-location]').forEach(b=>b.onclick=()=>deleteLocationById(b.dataset.deleteLocation));
}

function openLocationModal(id=null){
  editingId=id;
  const l=id?getLoc(id):null;
  $('modalTitle').textContent=l?'Edit Location':'Add Location';
  $('fName').value=l?.name||'';
  $('fType').value=l?.type||'Railhead';
  $('fLat').value=l?.lat??'';
  $('fLng').value=l?.lng??'';
  $('deleteLocation').style.display=l?'inline-block':'none';
  $('modal').classList.add('show');
}

function closeLocationModal(){editingId=null;$('modal').classList.remove('show')}
function deleteLocationById(id){
  const l=getLoc(id); if(!l)return;
  if(!confirm(`Delete "${l.name}"?`))return;
  locations=locations.filter(x=>x.id!==id); saveLocations(); fillSelects();
  if(map)renderMarkers(); toast('Location deleted.');
}

function saveLocationForm(){
  const name=$('fName').value.trim(), type=$('fType').value;
  const lat=Number($('fLat').value), lng=Number($('fLng').value);
  if(!name||!Number.isFinite(lat)||!Number.isFinite(lng)||lat<-90||lat>90||lng<-180||lng>180)
    return toast('Enter a valid name, latitude and longitude.',true);
  if(editingId){
    const l=getLoc(editingId); Object.assign(l,{name,type,lat,lng});
  }else{
    locations.push({id:'U-'+Date.now(),name,type,lat,lng});
  }
  saveLocations(); fillSelects(); if(map)renderMarkers(); closeLocationModal(); toast('Location saved.');
}

function routePoints(){
  const ids=[$('origin').value,...viaIds,$('destination').value];
  return ids.map(getLoc).filter(Boolean);
}

function removeDirectionLayer(){
  if(routeLayer&&map){try{map.removeLayer(routeLayer)}catch(_){}}
  routeLayer=null; directionPlugin=null;
}
function getStoredMapKey(){return ''}
function decodePolyline(str,precision=5){
  if(!str||typeof str!=='string')return [];
  let index=0,lat=0,lng=0,out=[],factor=Math.pow(10,precision);
  while(index<str.length){
    let b,shift=0,result=0;
    do{if(index>=str.length)return out;b=str.charCodeAt(index++)-63;result|=(b&31)<<shift;shift+=5}while(b>=32);
    const dlat=(result&1)?~(result>>1):(result>>1);lat+=dlat;
    shift=0;result=0;
    do{if(index>=str.length)return out;b=str.charCodeAt(index++)-63;result|=(b&31)<<shift;shift+=5}while(b>=32);
    const dlng=(result&1)?~(result>>1):(result>>1);lng+=dlng;
    out.push([lat/factor,lng/factor]);
  }
  return out;
}
function geometryToLatLngs(geometry,precision=5){
  if(!geometry)return [];
  if(typeof geometry==='string'){
    try{const j=JSON.parse(geometry);return geometryToLatLngs(j,precision)}catch(e){return decodePolyline(geometry,precision)}
  }
  if(geometry.type==='Feature')return geometryToLatLngs(geometry.geometry,precision);
  if(geometry.type==='FeatureCollection')return geometry.features.flatMap(f=>geometryToLatLngs(f,precision));
  if(geometry.type==='LineString' && Array.isArray(geometry.coordinates))return geometry.coordinates.map(p=>[Number(p[1]),Number(p[0])]).filter(p=>p.every(Number.isFinite));
  if(geometry.type==='MultiLineString' && Array.isArray(geometry.coordinates))return geometry.coordinates.flatMap(line=>geometryToLatLngs({type:'LineString',coordinates:line},precision));
  if(Array.isArray(geometry))return geometry.flatMap(p=>{
    if(Array.isArray(p) && p.length>=2 && Number.isFinite(Number(p[0])) && Number.isFinite(Number(p[1])))return [[Number(p[1]),Number(p[0])]];
    return geometryToLatLngs(p,precision);
  });
  if(Array.isArray(geometry.coordinates))return geometryToLatLngs({type:geometry.type||'LineString',coordinates:geometry.coordinates},precision);
  if(Number.isFinite(Number(geometry.lat))&&Number.isFinite(Number(geometry.lng)))return [[Number(geometry.lat),Number(geometry.lng)]];
  return [];
}
function routeGeometryToLatLngs(route){
  const direct=geometryToLatLngs(route?.geometry);
  if(direct.length>=2)return direct;
  for(const key of ['route_geometry','polyline','overview_polyline']){
    const pts=geometryToLatLngs(route?.[key]);
    if(pts.length>=2)return pts;
  }
  const parts=[];
  for(const leg of (Array.isArray(route?.legs)?route.legs:[])){
    const legPts=geometryToLatLngs(leg?.geometry);
    if(legPts.length>=2)parts.push(legPts);
    else for(const step of (Array.isArray(leg?.steps)?leg.steps:[])){
      const stepPts=geometryToLatLngs(step?.geometry);
      if(stepPts.length>=2)parts.push(stepPts);
    }
  }
  if(!parts.length)return [];
  const out=[];
  for(const part of parts){
    part.forEach((p,i)=>{const last=out[out.length-1];if(!last||last[0]!==p[0]||last[1]!==p[1])out.push(p)});
  }
  return out;
}
function renderRouteEndpointMarkers(points){
  clearRouteEndpointMarkersOnly();
  window.__routeEndpointMarkers=[];
  (points||[]).forEach((p,i)=>{
    const label=i===0?'A':i===points.length-1?'B':String(i);
    const cls=i===0?'origin':i===points.length-1?'destination':'via';
    const html=`<div class="route-endpoint-pin ${cls}">${label}</div>`;
    const marker=addMapplsMarker(p,{
      html,
      width:30,
      height:30,
      popupHtml:`<b>${i===0?'ORIGIN':i===points.length-1?'DESTINATION':'VIA '+i}</b><br>${esc(p.name)}`
    });
    window.__routeEndpointMarkers.push(marker);
  });
}

function clearRouteOverlays(){
  clearRouteEndpointMarkersOnly();
  if(window.__allRouteLayers){
    window.__allRouteLayers.forEach(removeMapplsLayer);
    window.__allRouteLayers=[];
  }
  if(window.__selectedAltLayer){
    removeMapplsLayer(window.__selectedAltLayer);
    window.__selectedAltLayer=null;
  }
}

function clearRouteEndpointMarkersOnly(){
  if(window.__routeEndpointMarkers){
    window.__routeEndpointMarkers.forEach(removeMapplsLayer);
    window.__routeEndpointMarkers=[];
  }
}

function drawAllMapplsRoutes(routes,selectedIndex=0){
  if(window.__allRouteLayers)window.__allRouteLayers.forEach(removeMapplsLayer);
  window.__allRouteLayers=[];
  const valid=[];
  (routes||[]).forEach((r,i)=>{
    const ll=routeGeometryToLatLngs(r);
    if(!ll.length)return;
    const path=ll.map(([lat,lng])=>({lat:Number(lat),lng:Number(lng)}));
    const selected=i===selectedIndex;
    const layer=new mappls.Polyline({
      map,
      path,
      strokeColor:selected?(i===0?'#078b4e':'#ff8a00'):'#3b82f6',
      strokeOpacity:selected?0.18:0.22,
      strokeWeight:selected?6:3,
      fitbounds:false,
      zIndex:selected?20:10,
      popupHtml:`${i===0?'Mappls Primary Route':'Mappls Alternative '+i}`
    });
    window.__allRouteLayers.push(layer);
    valid.push({index:i,latlngs:ll,layer});
  });
  return valid;
}

function routeApiLegDetails(route,points){
  const legs=Array.isArray(route?.legs)?route.legs:[];
  if(!legs.length)return [];
  return legs.map((leg,i)=>({
    from:points[i]||points[0],
    to:points[i+1]||points[points.length-1],
    km:Number.isFinite(Number(leg.distance))?Number(leg.distance)/1000:null,
    time:Number.isFinite(Number(leg.duration))?formatDurationSeconds(Number(leg.duration)):'—'
  }));
}

function routeDistanceKm(route){
  const n=Number(route?.distance);
  return Number.isFinite(n)?n/1000:null;
}
function routeTimeText(route){
  const n=Number(route?.duration);
  return Number.isFinite(n)?formatDurationSeconds(n):'—';
}
function routeManeuverText(step, index){
  const m=step?.maneuver||step?.maneuverDetails||{};
  const type=String(m.type||step?.type||'').toLowerCase();
  const mod=String(m.modifier||step?.modifier||'').toLowerCase().replace(/_/g,' ');
  const road=String(step?.name||step?.ref||'').trim();
  const dist=Number(step?.distance);
  const d=Number.isFinite(dist)?(dist>=1000?(dist/1000).toFixed(1)+' km':Math.round(dist)+' m'):'';
  let action='Continue';
  if(type==='depart') action='Start';
  else if(type==='arrive') action='Arrive at destination';
  else if(type==='turn') action=mod?`Turn ${mod}`:'Turn';
  else if(type==='new name') action='Continue';
  else if(type==='merge') action=mod?`Merge ${mod}`:'Merge';
  else if(type==='fork') action=mod?`Take the ${mod} fork`:'Take the fork';
  else if(type==='on ramp') action='Take the ramp';
  else if(type==='off ramp') action='Take the exit ramp';
  else if(type==='roundabout' || type==='rotary') action=mod?`At roundabout, take ${mod}`:'Enter roundabout';
  else if(type==='uturn') action='Make a U-turn';
  else if(type==='continue') action='Continue';
  else if(type) action=mod?`${type} ${mod}`:type;
  if(road && !/^arrive/i.test(action)) action += ` on ${road}`;
  if(d) action += ` · ${d}`;
  return action;
}

function routeStepRows(route, points){
  const out=[];
  const legs=Array.isArray(route?.legs)?route.legs:[];
  legs.forEach((leg,li)=>{
    const steps=Array.isArray(leg?.steps)?leg.steps:[];
    steps.forEach((step,si)=>{
      out.push({
        leg:li+1,
        index:si+1,
        text:routeManeuverText(step,si),
        km:Number.isFinite(Number(step?.distance))?Number(step.distance)/1000:null,
        time:Number.isFinite(Number(step?.duration))?formatDurationSeconds(Number(step.duration)):'—',
        geometry:step?.geometry
      });
    });
  });
  return out;
}

function routeLegRows(route,points){
  const legs=Array.isArray(route?.legs)?route.legs:[];
  if(legs.length) return legs.map((leg,i)=>({
    from:points[i]||points[0],
    to:points[i+1]||points[points.length-1],
    km:Number.isFinite(Number(leg?.distance))?Number(leg.distance)/1000:null,
    time:Number.isFinite(Number(leg?.duration))?formatDurationSeconds(Number(leg.duration)):'—',
    steps:Array.isArray(leg?.steps)?leg.steps:[]
  }));
  return [{from:points[0],to:points[points.length-1],km:routeDistanceKm(route),time:routeTimeText(route),steps:[]}];
}

function updateMapRouteOverlay(){
  const mapCard=document.querySelector('.mapcard');
  if(!mapCard)return;
  let box=$('mapRouteDetailsOverlay');
  if(!box){
    box=document.createElement('div');
    box.id='mapRouteDetailsOverlay';
    box.className='map-route-details-overlay';
    mapCard.appendChild(box);
  }
  const routes=Array.isArray(routeAlternatives)?routeAlternatives:[];
  if(!routes.length){box.classList.remove('show');box.innerHTML='';return;}
  const idx=Math.max(0,Math.min(selectedRouteIndex,routes.length-1));
  const r=routes[idx];
  const km=routeDistanceKm(r),tm=routeTimeText(r),points=routePoints();
  const legs=routeLegRows(r,points),steps=routeStepRows(r,points);
  const stepHtml=steps.length?`<div class="map-route-step-list">${steps.slice(0,80).map((st,i)=>`<div class="map-route-step"><span class="step-no">${i+1}</span><div><b>${esc(st.text)}</b><small>${st.time&&st.time!=='—'?esc(st.time)+' · ':''}${st.km==null?'':st.km.toFixed(1)+' km'}${st.leg>1?' · Leg '+st.leg:''}</small></div></div>`).join('')}</div>`:'<div class="map-route-empty">Turn-by-turn steps were not returned for this route.</div>';
  box.innerHTML=`
    <div class="map-route-overlay-head"><div><b>${idx===0?'Primary Route':'Alternative '+idx}</b><span>Selected route · ${steps.length?steps.length+' directions':'route details'}</span></div><button class="map-route-overlay-close" type="button" aria-label="Close route details">×</button></div>
    <div class="map-route-overlay-metrics"><div><strong>${km==null?'—':km.toFixed(1)+' KM'}</strong><span>Road distance</span></div><div><strong>${esc(tm)}</strong><span>Travel time</span></div><div><strong>${legs.length}</strong><span>Route legs</span></div></div>
    <div class="map-route-overlay-routes">${routes.map((x,i)=>{const xkm=routeDistanceKm(x);return `<button type="button" class="map-route-option ${i===idx?'active':''}" data-map-route-index="${i}"><span>${i===0?'Primary Route':'Alternative '+i}</span><small>${xkm==null?'—':xkm.toFixed(1)+' KM'} · ${esc(routeTimeText(x))}</small></button>`}).join('')}</div>
    <div class="map-route-overlay-section-title">Turn-by-turn details</div>${stepHtml}`;
  box.classList.add('show');
  box.querySelector('.map-route-overlay-close')?.addEventListener('click',()=>box.classList.remove('show'));
  box.querySelectorAll('[data-map-route-index]').forEach(b=>b.addEventListener('click',()=>selectMapplsRoute(Number(b.dataset.mapRouteIndex))));
}

function renderSelectedRouteDetails(route,index){
  const points=routePoints(),el=$('routeDetails'),summary=$('routeSummaryLegs');
  if(!el)return;
  const legs=routeLegRows(route,points),steps=routeStepRows(route,points);
  let h=`<div class="hint selected-route-note"><b>${index===0?'Primary Route':'Alternative '+index}</b> selected. Distance: <b>${routeDistanceKm(route)==null?'—':routeDistanceKm(route).toFixed(1)+' KM'}</b> · Travel time: <b>${esc(routeTimeText(route))}</b></div>`;
  h+='<div class="route-details-section-title">Leg-wise summary</div>';
  h+='<table class="table route-details-table"><thead><tr><th>#</th><th>From</th><th>To</th><th>Road Distance</th><th>Travel Time</th></tr></thead><tbody>';
  legs.forEach((x,i)=>{h+=`<tr><td>${i+1}</td><td>${esc(x.from?.name||'—')}</td><td>${esc(x.to?.name||'—')}</td><td><b>${x.km==null?'—':x.km.toFixed(1)+' KM'}</b></td><td>${esc(x.time||'—')}</td></tr>`});
  h+='</tbody></table>';
  h+='<div class="route-details-section-title">Turn-by-turn directions</div>';
  if(steps.length){
    h+='<div class="route-step-list">';
    steps.forEach((st,i)=>{h+=`<div class="route-step"><span class="step-no">${i+1}</span><div><b>${esc(st.text)}</b><small>${st.time&&st.time!=='—'?esc(st.time)+' · ':''}${st.km==null?'':st.km.toFixed(1)+' km'}${st.leg>1?' · Leg '+st.leg:''}</small></div></div>`});
    h+='</div>';
  }else h+='<div class="empty">Mappls did not return turn-by-turn steps for this route.</div>';
  el.classList.remove('empty');el.innerHTML=h;
  if(summary)summary.innerHTML=h;
}

function selectMapplsRoute(index){
  const r=routeAlternatives[index];
  if(!r)return;
  selectedRouteIndex=index;
  if(window.__allRouteLayers)window.__allRouteLayers.forEach(removeMapplsLayer);
  window.__allRouteLayers=[];
  if(window.__selectedAltLayer){removeMapplsLayer(window.__selectedAltLayer);window.__selectedAltLayer=null;}

  const valid=drawAllMapplsRoutes(routeAlternatives,index);
  const selected=valid.find(x=>x.index===index);
  if(!selected){toast('Selected route geometry is unavailable.',true);return;}

  window.__selectedAltLayer=new mappls.Polyline({
    map,
    path:selected.latlngs.map(([lat,lng])=>({lat:Number(lat),lng:Number(lng)})),
    strokeColor:index===0?'#078b4e':'#ff8a00',
    strokeOpacity:0.98,
    strokeWeight:9,
    fitbounds:false,
    zIndex:30,
    popupHtml:`${index===0?'Mappls Primary Route':'Mappls Alternative '+index}`
  });

  mapplsFitBounds(selected.latlngs,70);
  document.querySelectorAll('[data-alt-route]').forEach(el=>{
    const i=Number(el.dataset.altRoute);
    el.classList.toggle('active',i===index);
    const badge=el.querySelector('.badge');
    if(badge)badge.textContent=i===index?'SELECTED':'VIEW';
  });

  const km=routeDistanceKm(r),tm=routeTimeText(r);
  renderRouteMetrics(km,tm,`Mappls ${index===0?'Primary':'Alternative '+index} Route`);
  renderSelectedRouteDetails(r,index);
  $('routeStatus').className='status ok';
  $('routeStatus').textContent=`✓ ${index===0?'Primary':'Alternative '+index} route selected — ${km==null?'—':km.toFixed(1)+' KM'} · ${tm}`;
  if($('kpiDistance')&&km!=null)$('kpiDistance').textContent=km.toFixed(1)+' km';
  updateMapRouteOverlay();
  if(!directionPanelCollapsed)setDirectionPanelCollapsed(false);
  toast(`Mappls ${index===0?'primary':`alternative ${index}`} route selected and shown.`);
}

function renderAlternativeRoutes(routes){
  routeAlternatives=Array.isArray(routes)?routes:[];
  selectedRouteIndex=0;
  const box=$('routeAlternativeSummary'),count=$('routeAltCount');
  if(count)count.textContent=routeAlternatives.length?String(routeAlternatives.length):'—';
  if(!box){updateMapRouteOverlay();return;}
  if(!routeAlternatives.length){box.innerHTML='<div class="empty">No routes returned by Mappls.</div>';updateMapRouteOverlay();return;}

  const routeNote=routeAlternatives.length===1
    ?'<div class="hint" style="margin:6px 0 9px;padding:8px;border-radius:8px;border:1px solid #ead9b5;background:#fffaf0">Mappls returned 1 route. Alternative routes are not guaranteed for every request.</div>'
    :`<div class="hint" style="margin:6px 0 9px;padding:8px;border-radius:8px;border:1px solid #d9e7e1;background:#f7fbf9">Mappls returned ${routeAlternatives.length} routes. Click a route to show only that route strongly on the map and update all details.</div>`;

  box.innerHTML=routeNote+routeAlternatives.map((r,i)=>{
    const km=routeDistanceKm(r),tm=routeTimeText(r);
    return `<div class="history-item route-alt-card ${i===0?'active':''}" style="cursor:pointer" data-alt-route="${i}">
      <div><b>${i===0?'Primary Route':'Alternative '+i}</b><div class="history-meta">${km==null?'—':km.toFixed(1)+' KM'} · ${esc(tm)}</div></div>
      <span class="badge">${i===0?'SELECTED':'VIEW'}</span>
    </div>`;
  }).join('');

  box.querySelectorAll('[data-alt-route]').forEach(el=>el.addEventListener('click',()=>selectMapplsRoute(Number(el.dataset.altRoute))));
  updateMapRouteOverlay();
}

async function renderMapplsRoute(points,profile,resource){
  if(!map)throw new Error('Mappls map is not initialized.');

  clearRouteOverlays();

  const coords=points.map(p=>`${Number(p.lng)},${Number(p.lat)}`).join(';');
  const data=await fetchWorkerJson('/route',{
    profile:profile||'driving',
    resource:resource||'route_adv',
    coordinates:coords,
    steps:'true',
    alternatives:'2',
    overview:'full',
    geometries:'polyline'
  });

  const routes=data?.data?.routes||data?.routes||[];
  if(!routes.length)throw new Error('Secure Mappls routing proxy returned no route.');

  selectedRouteIndex=0;
  const plotted=drawAllMapplsRoutes(routes,0);
  if(!plotted.length)throw new Error('Mappls returned route data but no usable route geometry.');

  routeLayer=plotted[0].layer;
  renderRouteEndpointMarkers(points);
  renderAlternativeRoutes(routes);

  const primary=plotted.find(x=>x.index===0)||plotted[0];
  if(primary)mapplsFitBounds(primary.latlngs,70);
  selectMapplsRoute(0);

  $('routeStatus').className='status ok';
  $('routeStatus').textContent=`✓ Mappls routing connected — ${routes.length} route${routes.length===1?'':'s'} returned.`;
  return {layer:routeLayer,routes};
}

function setDirectionPanelCollapsed(collapsed){
  directionPanelCollapsed=!!collapsed;
  const el=$('routeDetails');
  if(el)el.style.display=directionPanelCollapsed?'none':'';
  const btn=$('toggleRouteDetails');
  if(btn)btn.textContent=directionPanelCollapsed?'☰ Show Route Details':'☰ Hide Route Details';
  const overlay=$('mapRouteDetailsOverlay');
  if(overlay){if(directionPanelCollapsed)overlay.classList.remove('show');else if(routeAlternatives.length)overlay.classList.add('show');}
}
function attachDirectionPanel(){setDirectionPanelCollapsed(directionPanelCollapsed)}
async function calculateRoute(){
  const points=routePoints();
  if(points.length<2)return toast('Select a valid origin and destination.',true);
  if(!(await initMap()))return;
  const profile=$('profile').value;
  const resource=$('resource').value==='route_eta' && profile==='trucking'?'route_adv':$('resource').value;
  $('routeStatus').className='status';$('routeStatus').textContent='Calculating Mappls road route…';$('calc').disabled=true;
  try{
    const result=await calculateLegMetrics(points,profile,resource);
    const plotted=await renderMapplsRoute(points,profile,resource);
    const routes=plotted.routes||[];
    selectedRouteIndex=0;
    lastRoute={km:result.km,time:result.time,legs:result.legs,coords:points.map(p=>[p.lng,p.lat]),geometry:routeGeometryToLatLngs(routes[0])};
    renderRouteMetrics(result.km,result.time,'Mappls Primary Route');
    renderSelectedRouteDetails(routes[0],0);
    updateMapRouteOverlay();
    saveRouteHistory(points,result.km,result.time);
    showSequence();renderLegMetrics(result.legs);
    $('routeStatus').className='status ok';$('routeStatus').textContent=`✓ Mappls route calculated — ${routes.length} route${routes.length===1?'':'s'} returned · ${result.km.toFixed(1)} KM · ${result.time||'time unavailable'}`;
    if($('kpiDistance'))$('kpiDistance').textContent=result.km.toFixed(1)+' km';
    toast('Mappls road route plotted successfully.');
  }catch(e){
    console.error('Route calculation error',e);$('routeStatus').className='status err';$('routeStatus').textContent='Route calculation failed: '+e.message;toast(e.message,true);
  }finally{$('calc').disabled=false;}
}

function renderDetails(res,coords,km,time,legs){
  if(legs?.length){renderLegMetrics(legs);return}
  $('routeDetails').innerHTML=`<div class="small">Road distance: <b>${km!=null?km.toFixed(1)+' KM':'—'}</b> · Estimated time: <b>${esc(time||'—')}</b></div>`;
}

function updateMatrixCount(){
  const n=document.querySelectorAll('.mcheck:checked').length;
  $('matrixCount').textContent=n+' selected';
}
function matrixTypes(){
  const c=$('matrixCombination')?.value||'railhead_distillery';
  if(c==='depot_distillery')return {a:'Depot',b:'Distillery',labelA:'Depots',labelB:'Distilleries'};
  if(c==='depot_railhead')return {a:'Depot',b:'Railhead',labelA:'Depots',labelB:'Railheads'};
  if(c==='depot_depot')return {a:'Depot',b:'Depot',labelA:'Depots',labelB:'Depots'};
  return {a:'Railhead',b:'Distillery',labelA:'Railheads',labelB:'Distilleries'};
}
function matrixEligible(){
  const t=matrixTypes();
  const types=new Set([t.a,t.b]);
  return locations.filter(x=>types.has(x.type));
}
function renderMatrixPicker(selectedIds=null){
  const eligible=matrixEligible();
  const chosen=new Set(selectedIds===null?eligible.map(x=>x.id):selectedIds);
  $('matrixPicker').innerHTML=eligible.map(l=>`<label><input type="checkbox" class="mcheck" value="${esc(l.id)}" ${chosen.has(l.id)?'checked':''}><span><b>${esc(l.name)}</b>${l.code?` <small class="hint">(${esc(l.code)})</small>`:''}<br><span class="hint">${esc(l.type)}</span></span></label>`).join('');
  document.querySelectorAll('.mcheck').forEach(x=>x.addEventListener('change',updateMatrixCount));
  updateMatrixCount();
  const t=matrixTypes();
  $('matrixSourceA').textContent=t.labelA;
  $('matrixSourceB').textContent=t.labelB;
  $('matrixAll').textContent='All '+eligible.length;
}

async function getMatrixRow(source,destinations,profile,resource){
  if(!destinations.length)return {distances:[],durations:[],raw:null,diagnostic:{type:'empty',keys:[],preview:'No destinations supplied.'}};
  const MAX_DESTINATIONS=99, allDistances=[], allDurations=[]; let lastRaw=null;
  for(let offset=0;offset<destinations.length;offset+=MAX_DESTINATIONS){
    const batch=destinations.slice(offset,offset+MAX_DESTINATIONS), points=[source,...batch];
    const coordinates=points.map(p=>`${Number(p.lng)},${Number(p.lat)}`).join(';');
    const destinationIndexes=batch.map((_,i)=>String(i+1)).join(';');
    const matrixResource=(resource==='distance_matrix_eta'||resource==='distance_matrix_traffic')?resource:'distance_matrix';
    const data=await fetchWorkerJson('/matrix',{profile:profile||'driving',resource:matrixResource,coordinates,sources:'0',destinations:destinationIndexes});
    lastRaw=data;
    const rawDistances=data?.distances||data?.data?.results?.distances||[], rawDurations=data?.durations||data?.data?.results?.durations||[];
    const drow=Array.isArray(rawDistances?.[0])?rawDistances[0]:[], trow=Array.isArray(rawDurations?.[0])?rawDurations[0]:[];
    if(drow.length!==batch.length)throw new Error(`Secure Mappls Matrix returned ${drow.length}/${batch.length} destination distances.`);
    if(trow.length && trow.length!==batch.length)throw new Error(`Secure Mappls Matrix returned ${trow.length}/${batch.length} destination durations.`);
    allDistances.push(...drow); allDurations.push(...trow);
  }
  return {distances:allDistances,durations:allDurations,raw:lastRaw,diagnostic:{type:'worker',keys:[],preview:'Distance Matrix served through Cloudflare Worker.'}};
}

function mapplsDiagnostic(d){
  if(d==null)return {type:'null',keys:[],preview:'null'};
  let preview='';
  try{ preview=JSON.stringify(d,(k,v)=>k==='staticKey'||k==='access_token'||k==='token'||k==='key'?'[REDACTED]':v).slice(0,5000); }
  catch(e){ preview=String(d); }
  return {type:Array.isArray(d)?'array':typeof d,keys:(d&&typeof d==='object')?Object.keys(d):[],preview};
}
function matrixErrorHtml(title,detail,diag,request){
  const safeDiag=diag||{type:'unknown',keys:[],preview:''};
  return `<div class="status err" style="margin:12px">
    <b>${esc(title)}</b><br><span>${esc(detail||'Unknown Mappls error')}</span>
    <details style="margin-top:10px" open><summary><b>Matrix diagnostic</b></summary>
      <div style="margin-top:8px;font-size:12px;line-height:1.55">
        <div><b>Selected Points:</b> ${request?.points||'-'} · <b>Max/request:</b> ${request?.maxPointsPerRequest||100} · <b>Profile:</b> ${esc(request?.profile||'-')} · <b>Resource:</b> ${esc(request?.resource||'-')}</div>
        <div><b>Callback type:</b> ${esc(safeDiag.type)} · <b>Top-level keys:</b> ${esc(safeDiag.keys.join(', ')||'(none)')}</div>
        <pre style="white-space:pre-wrap;max-height:260px;overflow:auto;background:#f7f7f7;padding:10px;border-radius:8px;margin-top:8px">${esc(safeDiag.preview||'(empty response)')}</pre>
      </div>
    </details>
    <small>If the response is empty/blocked, this panel shows the actual callback shape so the next fix can target the Mappls response instead of guessing.</small>
  </div>`;
}

async function runMapplsMatrixRows(points,profile,resource){
  const n=points.length, distances=Array(n), durations=Array(n);
  let cursor=0;
  let lastDiagnostic=null;
  const worker=async()=>{
    while(true){
      const i=cursor++;
      if(i>=n)return;
      let row;
      let lastErr=null;
      for(let attempt=1;attempt<=2;attempt++){
        try{ row=await getMatrixRow(points[i],points,profile,resource); break; }
        catch(e){ lastErr=e; lastDiagnostic=e.diagnostic||lastDiagnostic; if(attempt<2) await new Promise(r=>setTimeout(r,700)); }
      }
      if(!row) throw Object.assign(new Error(`Row ${i+1} failed: ${lastErr?.message||'unknown Mappls error'}`),{diagnostic:lastErr?.diagnostic||lastDiagnostic});
      if(!Array.isArray(row.distances)||row.distances.length!==n) throw Object.assign(new Error(`Row ${i+1} returned ${row.distances?.length||0}/${n} distances.`),{diagnostic:row.diagnostic});
      distances[i]=row.distances;
      durations[i]=row.durations;
    }
  };
  // Lower concurrency is intentional for trucking: it avoids overloading the
  // Mappls routing backend when a full many-to-many truck matrix times out.
  const workers=Math.min(profile==='trucking'?2:4,n);
  await Promise.all(Array.from({length:workers},worker));
  return {distances,durations,diagnostic:lastDiagnostic};
}

async function runCrossMatrix(sources,destinations,profile,resource,label){
  if(!sources.length||!destinations.length) throw new Error(label+': source and destination must contain at least one location.');
  const n=sources.length, m=destinations.length;
  const distances=Array(n), durations=Array(n);
  let cursor=0, lastDiagnostic=null;
  const worker=async()=>{
    while(true){
      const i=cursor++;
      if(i>=n)return;
      let row=null, lastErr=null;
      for(let attempt=1;attempt<=2;attempt++){
        try{
          row=await getMatrixRow(sources[i],destinations,profile,resource);
          break;
        }catch(e){
          lastErr=e; lastDiagnostic=e.diagnostic||lastDiagnostic;
          if(attempt<2) await new Promise(r=>setTimeout(r,800));
        }
      }
      if(!row) throw Object.assign(new Error(`${label}: ${sources[i].name} failed — ${lastErr?.message||'Mappls error'}`),{diagnostic:lastErr?.diagnostic||lastDiagnostic});
      if(!Array.isArray(row.distances)||row.distances.length!==m){
        throw Object.assign(new Error(`${label}: ${sources[i].name} returned ${row.distances?.length||0}/${m} destination distances.`),{diagnostic:row.diagnostic||lastDiagnostic});
      }
      distances[i]=row.distances;
      durations[i]=Array.isArray(row.durations)?row.durations:[];
    }
  };
  const workers=Math.min(profile==='trucking'?2:3,n);
  await Promise.all(Array.from({length:workers},worker));
  return {distances,durations,diagnostic:lastDiagnostic};
}

function renderCrossMatrixTable(title,sources,destinations,result){
  const n=sources.length,m=destinations.length;
  let h=`<div class="matrix-section-title"><b>${esc(title)}</b><span>${n} × ${m} = ${n*m} route cells</span></div>`;
  h+='<div class="scrollx"><table class="matrix cross-matrix"><thead><tr><th>FROM \\ TO</th>';
  destinations.forEach(l=>{h+=`<th title="${esc(l.name)}"><span class="mh">${esc(l.name)}</span><span class="sub">${esc(l.type)}</span></th>`});
  h+='</tr></thead><tbody>';
  for(let i=0;i<n;i++){
    const src=sources[i];
    h+=`<tr><th title="${esc(src.name)}"><span class="mh">${esc(src.name)}</span><span class="sub">${esc(src.type)}</span></th>`;
    for(let j=0;j<m;j++){
      const meters=parseNum(result.distances?.[i]?.[j]);
      const seconds=parseNum(result.durations?.[i]?.[j]);
      const km=meters==null?null:normalizeDistanceKm(meters);
      const tm=seconds==null?null:formatDurationSeconds(seconds);
      const clickable=km!=null;
      h+=`<td title="${esc(src.name)} → ${esc(destinations[j].name)}" ${clickable?`data-action="openMatrixRoute" data-source="${esc(src.id)}" data-destination="${esc(destinations[j].id)}"`:''}><span class="matrix-cell-link"><span class="dist">${km!=null?km.toFixed(1)+' KM':'—'}</span><span class="dur">${esc(tm||'—')}</span></span></td>`;
    }
    h+='</tr>';
  }
  h+='</tbody></table></div>';
  return h;
}

let lastMatrixData=null;

function matrixResultToRows(title,sources,destinations,result){
  const rows=[];
  for(let i=0;i<sources.length;i++){
    for(let j=0;j<destinations.length;j++){
      const meters=parseNum(result?.distances?.[i]?.[j]);
      const seconds=parseNum(result?.durations?.[i]?.[j]);
      const km=meters==null?null:normalizeDistanceKm(meters);
      const tm=seconds==null?null:formatDurationSeconds(seconds);
      rows.push({Direction:title,From:sources[i].name,From_Type:sources[i].type,To:destinations[j].name,To_Type:destinations[j].type,Distance_KM:km==null?'':Number(km.toFixed(1)),Travel_Time:tm||'',From_Latitude:sources[i].lat,From_Longitude:sources[i].lng,To_Latitude:destinations[j].lat,To_Longitude:destinations[j].lng});
    }
  }
  return rows;
}

function exportMatrixExcel(){
  if(!lastMatrixData?.results?.length)return toast('Calculate the matrix first.',true);
  if(typeof XLSX==='undefined')return toast('Excel library could not be loaded. Check internet connection and reload the page.',true);
  try{
    const wb=XLSX.utils.book_new();
    const vehicle=lastMatrixData.profile==='trucking'?'Truck / HCV':'Car / LMV';
    const directionLabel=lastMatrixData.direction==='both'?'Both directions':lastMatrixData.direction==='forward'?'Source A → Source B':'Source B → Source A';
    const total=lastMatrixData.results.reduce((a,x)=>a+x.sources.length*x.destinations.length,0);
    const summary=[
      ['LOGISTICS INTELLIGENCE SYSTEM — INTEGRATED LOGISTICS, ROUTE & TRANSPORT NETWORK MANAGEMENT'],
      ['Distance Matrix Export'],
      [],
      ['Vehicle',vehicle],
      ['Matrix Combination',lastMatrixData.combination||'Railhead ↔ Distillery'],
      ['Matrix Direction',directionLabel],
      ['Generated',new Date().toLocaleString('en-IN')],
      ['Total Route Cells',total],
      [],
      ['Note','Distance values are Mappls road-distance results. Clickable matrix cells in the web app open the selected route on Map View.']
    ];
    const ws0=XLSX.utils.aoa_to_sheet(summary);
    ws0['!cols']=[{wch:28},{wch:70}];
    XLSX.utils.book_append_sheet(wb,ws0,'Summary');

    lastMatrixData.results.forEach((item,idx)=>{
      // Professional cross matrix sheet: each cell contains distance and travel time.
      const aoa=[];
      aoa.push([item.title]);
      aoa.push(['FROM / TO',...item.destinations.map(x=>x.name)]);
      for(let i=0;i<item.sources.length;i++){
        const row=[item.sources[i].name];
        for(let j=0;j<item.destinations.length;j++){
          const meters=parseNum(item.result?.distances?.[i]?.[j]);
          const seconds=parseNum(item.result?.durations?.[i]?.[j]);
          const km=meters==null?null:normalizeDistanceKm(meters);
          const tm=seconds==null?null:formatDurationSeconds(seconds);
          row.push(km==null?'':`${km.toFixed(1)} KM${tm?' | '+tm:''}`);
        }
        aoa.push(row);
      }
      const ws=XLSX.utils.aoa_to_sheet(aoa);
      ws['!freeze']={xSplit:1,ySplit:2};
      ws['!cols']=[{wch:38},...item.destinations.map(()=>({wch:20}))];
      const sheetName=(item.title.replace(/[\\/:?*\[\]]/g,'_').replace(/→/g,'to').replace(/↔/g,'_').slice(0,31)||('Matrix_'+(idx+1))); XLSX.utils.book_append_sheet(wb,ws,sheetName);

      // Detailed route sheet for filtering/sorting in Excel.
      const rows=matrixResultToRows(item.title,item.sources,item.destinations,item.result);
      const detail=XLSX.utils.json_to_sheet(rows);
      detail['!freeze']={xSplit:0,ySplit:1};
      detail['!autofilter']={ref:detail['!ref']};
      detail['!cols']=[{wch:27},{wch:35},{wch:14},{wch:35},{wch:14},{wch:14},{wch:14},{wch:14},{wch:14},{wch:14},{wch:14},{wch:14}];
      XLSX.utils.book_append_sheet(wb,detail,(sheetName+'_Details').slice(0,31));
    });
    const stamp=new Date().toISOString().slice(0,10);
    XLSX.writeFile(wb,`Ethanol_Distance_Matrix_${stamp}.xlsx`);
    toast('Excel workbook downloaded successfully.');
  }catch(e){console.error(e);toast('Excel export failed: '+e.message,true)}
}

window.openMatrixRoute=async function(sourceId,destinationId){
  const src=getLoc(sourceId),dst=getLoc(destinationId);
  if(!src||!dst)return toast('Route locations not found.',true);
  if(!(await initMap()))return;
  $('origin').value=src.id;$('destination').value=dst.id;viaIds=[];renderVia();
  await showMapView();
  $('mapRouteName').textContent=`${src.name} → ${dst.name}`;$('mapRouteSub').textContent='Selected from Distance Matrix';
  try{map.fitBounds([[Number(src.lat),Number(src.lng)],[Number(dst.lat),Number(dst.lng)]],{padding:[90,90]})}catch(e){}
  $('routeStatus').className='status';$('routeStatus').textContent=`Matrix route selected: ${src.name} → ${dst.name}`;
  try{await calculateRoute()}catch(e){console.warn('Route draw after matrix click failed',e)}
};

let lastDistilleryReport=null;
let reportSort='asc';

function fillDistilleryReportSelect(){
  const sel=$('reportDistillery');
  if(!sel)return;
  const previous=sel.value;
  const ds=locations.filter(x=>x.type==='Distillery');
  sel.innerHTML=ds.map(d=>`<option value="${esc(d.id)}">${esc(d.name)}</option>`).join('');
  if(previous && ds.some(d=>d.id===previous)) sel.value=previous;
}

function reportCellData(source,dest,result,index){
  const meters=parseNum(result?.distances?.[index]?.[0]);
  const seconds=parseNum(result?.durations?.[index]?.[0]);
  const km=meters==null?null:normalizeDistanceKm(meters);
  return {source,dest,km,seconds,time:seconds==null?'—':formatDurationSeconds(seconds)};
}

function renderRankTable(elId, rows, label){
  const el=$(elId);
  if(!el)return;
  if(!rows.length){el.innerHTML='<div class="empty">No data available.</div>';return}
  const sorted=[...rows].sort((a,b)=>{
    const av=a.km==null?Infinity:a.km, bv=b.km==null?Infinity:b.km;
    return reportSort==='asc'?av-bv:bv-av;
  });
  const directionText=lastDistilleryReport?.dir==='distillery_to_source'?'Distillery → Source':'Source → Distillery';
  let h=`<div class="report-direction-banner"><b>Distance Direction:</b> ${esc(directionText)} <span>· Results below follow this selected direction.</span></div>`;
  h+=`<table class="report-table"><thead><tr><th class="rank">Rank</th><th>${esc(label)}</th><th>Code</th><th>Rail Head / Cluster</th><th>Road Distance</th><th>Travel Time</th><th>Map</th></tr></thead><tbody>`;
  sorted.forEach((r,i)=>{
    const from=r.from||r.source, to=r.to||r.dest;
    const routeTitle=`${from.name} → ${to.name}`;
    h+=`<tr><td class="rank">${i+1}</td><td><b>${esc(r.source.name)}</b></td><td class="code">${esc(r.source.code||'—')}</td><td>${esc(r.source.railhead||'—')}</td><td class="km">${r.km==null?'—':r.km.toFixed(1)+' KM'}</td><td class="time">${esc(r.time)}</td><td>${r.km!=null?`<button class="btn small" title="${esc(routeTitle)}" data-action="openMatrixRoute" data-source="${esc(from.id)}" data-destination="${esc(to.id)}">View Route</button>`:'—'}</td></tr>`;
  });
  h+='</tbody></table>';
  el.innerHTML=h;
}

async function generateDistilleryReport(){
  const dist=getLoc($('reportDistillery')?.value);
  if(!dist)return toast('Select a distillery.',true);
  if(!(await initMap()))return;
  const profile=$('profile').value;
  let resource=$('resource').value;
  if(profile==='trucking' && resource!=='route_adv')resource='route_adv';
  resource=resource==='route_eta'?'distance_matrix_eta':resource==='route_traffic'?'distance_matrix_traffic':'distance_matrix';
  const dir=$('reportDirection').value;
  const depots=locations.filter(x=>x.type==='Depot');
  const railheads=locations.filter(x=>x.type==='Railhead');
  $('reportStatus').className='status';
  $('reportStatus').textContent=`Calculating ${depots.length} godowns and ${railheads.length} railheads for ${dist.name}…`;
  $('depotReport').innerHTML='<div class="empty">Calculating godown-wise distances…</div>';
  $('railheadReport').innerHTML='<div class="empty">Calculating railhead-wise distances…</div>';
  $('exportDistilleryReport').disabled=true;

  try{
    let depotResult,railResult;
    if(dir==='source_to_distillery'){
      depotResult=await runCrossMatrix(depots,[dist],profile,resource,'Depot → Distillery');
      railResult=await runCrossMatrix(railheads,[dist],profile,resource,'Railhead → Distillery');
    }else{
      depotResult=await runCrossMatrix([dist],depots,profile,resource,'Distillery → Depot');
      railResult=await runCrossMatrix([dist],railheads,profile,resource,'Distillery → Railhead');
    }

    const depotRows=depots.map((s,i)=>{
      let km=null, seconds=null;
      if(dir==='source_to_distillery'){
        km=depotResult.distances?.[i]?.[0]!=null?normalizeDistanceKm(parseNum(depotResult.distances[i][0])):null;
        seconds=depotResult.durations?.[i]?.[0]!=null?parseNum(depotResult.durations[i][0]):null;
        return {source:s,dest:dist,from:s,to:dist,km,seconds,time:seconds==null?'—':formatDurationSeconds(seconds)};
      }
      km=depotResult.distances?.[0]?.[i]!=null?normalizeDistanceKm(parseNum(depotResult.distances[0][i])):null;
      seconds=depotResult.durations?.[0]?.[i]!=null?parseNum(depotResult.durations[0][i]):null;
      return {source:s,dest:dist,from:dist,to:s,km,seconds,time:seconds==null?'—':formatDurationSeconds(seconds)};
    });
    const railRows=railheads.map((s,i)=>{
      let km=null, seconds=null;
      if(dir==='source_to_distillery'){
        km=railResult.distances?.[i]?.[0]!=null?normalizeDistanceKm(parseNum(railResult.distances[i][0])):null;
        seconds=railResult.durations?.[i]?.[0]!=null?parseNum(railResult.durations[i][0]):null;
        return {source:s,dest:dist,from:s,to:dist,km,seconds,time:seconds==null?'—':formatDurationSeconds(seconds)};
      }
      km=railResult.distances?.[0]?.[i]!=null?normalizeDistanceKm(parseNum(railResult.distances[0][i])):null;
      seconds=railResult.durations?.[0]?.[i]!=null?parseNum(railResult.durations[0][i]):null;
      return {source:s,dest:dist,from:dist,to:s,km,seconds,time:seconds==null?'—':formatDurationSeconds(seconds)};
    });

    lastDistilleryReport={dist,dir,profile,resource,depotRows,railRows};
    const validDep=depotRows.filter(x=>x.km!=null).sort((a,b)=>a.km-b.km);
    const validRail=railRows.filter(x=>x.km!=null).sort((a,b)=>a.km-b.km);
    $('reportDepotCount').textContent=String(depotRows.length);
    $('reportRailheadCount').textContent=String(railRows.length);
    $('reportNearestKm').textContent=validDep.length?validDep[0].km.toFixed(1)+' KM':'—';
    $('reportFarthestKm').textContent=validDep.length?validDep[validDep.length-1].km.toFixed(1)+' KM':'—';
    renderRankTable('depotReport',depotRows,'Godown');
    renderRankTable('railheadReport',railRows,'Railhead');
    $('reportStatus').className='status ok';
    $('reportStatus').textContent=`Report ready: ${dist.name} · ${dir==='source_to_distillery'?'Source → Distillery':'Distillery → Source'} · ${profile==='trucking'?'Truck / HCV':'Car / LMV'}.`;
    $('exportDistilleryReport').disabled=false;
    toast('Distillery distance report generated.');
  }catch(e){
    console.error(e);
    $('reportStatus').className='status err';
    $('reportStatus').textContent='Report failed: '+e.message;
    toast('Distillery report failed: '+e.message,true);
  }
}

let lastDepotDistilleryReport=null;
let depotReportSort='asc';

function fillDepotReportSelect(){
  const sel=$('reportDepot');
  if(!sel)return;
  const previous=sel.value;
  const depots=locations.filter(x=>x.type==='Depot');
  sel.innerHTML=depots.map(d=>`<option value="${esc(d.id)}">${esc(d.name)}${d.code?' · '+esc(d.code):''}</option>`).join('');
  if(previous && depots.some(d=>d.id===previous))sel.value=previous;
}

function renderDepotDistilleryTable(){
  const el=$('depotDistilleryReportTable');
  if(!el)return;
  const rows=lastDepotDistilleryReport?.rows||[];
  if(!rows.length){el.innerHTML='<div class="empty">No distillery distance data available.</div>';return}
  const sorted=[...rows].sort((a,b)=>{
    const av=a.km==null?Infinity:a.km,bv=b.km==null?Infinity:b.km;
    return depotReportSort==='asc'?av-bv:bv-av;
  });
  const directionText=lastDepotDistilleryReport.dir==='distillery_to_depot'?'Distillery → Depot':'Depot → Distillery';
  let h=`<div class="report-direction-banner"><b>Distance Direction:</b> ${esc(directionText)} <span>· Selected Depot: ${esc(lastDepotDistilleryReport.depot.name)}</span></div>`;
  h+=`<table class="report-table"><thead><tr><th class="rank">Rank</th><th>Distillery</th><th>Code</th><th>Road Distance</th><th>Travel Time</th><th>Latitude</th><th>Longitude</th><th>Map</th></tr></thead><tbody>`;
  sorted.forEach((r,i)=>{
    const from=r.from,to=r.to;
    const title=`${from.name} → ${to.name}`;
    h+=`<tr><td class="rank">${i+1}</td><td><b>${esc(r.distillery.name)}</b></td><td class="code">${esc(r.distillery.code||'—')}</td><td class="km">${r.km==null?'—':r.km.toFixed(1)+' KM'}</td><td class="time">${esc(r.time)}</td><td>${Number(r.distillery.lat).toFixed(6)}</td><td>${Number(r.distillery.lng).toFixed(6)}</td><td>${r.km!=null?`<button class="btn small" title="${esc(title)}" data-action="openMatrixRoute" data-source="${esc(from.id)}" data-destination="${esc(to.id)}">View Route</button>`:'—'}</td></tr>`;
  });
  h+='</tbody></table>';
  el.innerHTML=h;
}

async function generateDepotDistilleryReport(){
  const depot=getLoc($('reportDepot')?.value);
  if(!depot)return toast('Select a depot/godown.',true);
  if(!(await initMap()))return;
  const profile=$('profile').value;
  let resource=$('resource').value;
  if(profile==='trucking' && resource!=='route_adv')resource='route_adv';
  resource=resource==='route_eta'?'distance_matrix_eta':resource==='route_traffic'?'distance_matrix_traffic':'distance_matrix';
  const dir=$('depotReportDirection').value;
  const distilleries=locations.filter(x=>x.type==='Distillery');
  $('depotReportStatus').className='status';
  $('depotReportStatus').textContent=`Calculating ${distilleries.length} distilleries for ${depot.name}…`;
  $('depotDistilleryReportTable').innerHTML='<div class="empty">Calculating distillery-wise distances…</div>';
  $('exportDepotDistilleryReport').disabled=true;
  try{
    let result;
    if(dir==='depot_to_distillery'){
      result=await runCrossMatrix([depot],distilleries,profile,resource,'Depot → Distillery');
    }else{
      result=await runCrossMatrix(distilleries,[depot],profile,resource,'Distillery → Depot');
    }
    const rows=distilleries.map((d,i)=>{
      let meters,seconds,from,to;
      if(dir==='depot_to_distillery'){
        meters=result.distances?.[0]?.[i]; seconds=result.durations?.[0]?.[i]; from=depot; to=d;
      }else{
        meters=result.distances?.[i]?.[0]; seconds=result.durations?.[i]?.[0]; from=d; to=depot;
      }
      const km=meters==null?null:normalizeDistanceKm(parseNum(meters));
      const sec=seconds==null?null:parseNum(seconds);
      return {depot,distillery:d,from,to,km,seconds:sec,time:sec==null?'—':formatDurationSeconds(sec)};
    });
    lastDepotDistilleryReport={depot,dir,profile,resource,rows};
    const valid=rows.filter(x=>x.km!=null).sort((a,b)=>a.km-b.km);
    $('depotReportDistilleryCount').textContent=String(rows.length);
    $('depotReportNearestKm').textContent=valid.length?valid[0].km.toFixed(1)+' KM':'—';
    $('depotReportFarthestKm').textContent=valid.length?valid[valid.length-1].km.toFixed(1)+' KM':'—';
    $('depotReportAverageKm').textContent=valid.length?(valid.reduce((a,x)=>a+x.km,0)/valid.length).toFixed(1)+' KM':'—';
    renderDepotDistilleryTable();
    $('depotReportStatus').className='status ok';
    $('depotReportStatus').textContent=`Report ready: ${depot.name} · ${dir==='depot_to_distillery'?'Depot → Distillery':'Distillery → Depot'} · ${profile==='trucking'?'Truck / HCV':'Car / LMV'}.`;
    $('exportDepotDistilleryReport').disabled=false;
    toast('Depot-wise distillery report generated.');
  }catch(e){
    console.error(e);
    $('depotReportStatus').className='status err';
    $('depotReportStatus').textContent='Report failed: '+e.message;
    toast('Depot-wise report failed: '+e.message,true);
  }
}

function exportDepotDistilleryReport(){
  if(!lastDepotDistilleryReport||typeof XLSX==='undefined')return toast('Generate the depot-wise report first.',true);
  const d=lastDepotDistilleryReport.depot;
  const dir=lastDepotDistilleryReport.dir==='depot_to_distillery'?'Depot → Distillery':'Distillery → Depot';
  const wb=XLSX.utils.book_new();
  const summary=[['DEPOT-WISE DISTILLERY DISTANCE ANALYSIS'],['Depot / Godown',d.name],['Code',d.code||''],['Railhead / Cluster',d.railhead||''],['Direction',dir],['Vehicle',lastDepotDistilleryReport.profile==='trucking'?'Truck / HCV':'Car / LMV'],['Generated',new Date().toLocaleString('en-IN')],[]];
  XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(summary),'Summary');
  const data=[...lastDepotDistilleryReport.rows].sort((a,b)=>(a.km??Infinity)-(b.km??Infinity)).map((r,i)=>({
    Rank:i+1,Distillery:r.distillery.name,Code:r.distillery.code||'',Direction:dir,Distance_KM:r.km==null?'':Number(r.km.toFixed(1)),Travel_Time:r.time||'',Latitude:r.distillery.lat,Longitude:r.distillery.lng
  }));
  const ws=XLSX.utils.json_to_sheet(data);
  ws['!autofilter']={ref:ws['!ref']};ws['!freeze']={xSplit:0,ySplit:1};
  XLSX.utils.book_append_sheet(wb,ws,'Distillery Ranking');
  XLSX.writeFile(wb,`Depot_Wise_Distillery_Report_${d.name.replace(/[^a-z0-9]+/gi,'_').slice(0,45)}.xlsx`);
  toast('Depot-wise distillery Excel downloaded.');
}

function exportDistilleryReport(){
  if(!lastDistilleryReport||typeof XLSX==='undefined')return toast('Generate the report first.',true);
  const d=lastDistilleryReport.dist;
  const dir=lastDistilleryReport.dir==='source_to_distillery'?'Source → Distillery':'Distillery → Source';
  const wb=XLSX.utils.book_new();
  const summary=[['DISTILLERY DISTANCE ANALYSIS'],['Distillery',d.name],['Direction',dir],['Vehicle',lastDistilleryReport.profile==='trucking'?'Truck / HCV':'Car / LMV'],['Generated',new Date().toLocaleString('en-IN')],[]];
  XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(summary),'Summary');
  const makeRows=(rows,type)=>[...rows].sort((a,b)=>(a.km??Infinity)-(b.km??Infinity)).map((r,i)=>({
    Rank:i+1,Type:type,Name:r.source.name,Code:r.source.code||'',Railhead:r.source.railhead||'',
    Distance_KM:r.km==null?'':Number(r.km.toFixed(1)),Travel_Time:r.time||'',
    Latitude:r.source.lat,Longitude:r.source.lng
  }));
  const dep=XLSX.utils.json_to_sheet(makeRows(lastDistilleryReport.depotRows,'Godown'));
  const rail=XLSX.utils.json_to_sheet(makeRows(lastDistilleryReport.railRows,'Railhead'));
  dep['!autofilter']={ref:dep['!ref']};rail['!autofilter']={ref:rail['!ref']};
  dep['!freeze']={xSplit:0,ySplit:1};rail['!freeze']={xSplit:0,ySplit:1};
  XLSX.utils.book_append_sheet(wb,dep,'Godown Ranking');
  XLSX.utils.book_append_sheet(wb,rail,'Railhead Ranking');
  XLSX.writeFile(wb,`Distillery_Distance_Report_${d.name.replace(/[^a-z0-9]+/gi,'_').slice(0,45)}.xlsx`);
  toast('Distillery report Excel downloaded.');
}

async function runMatrix(){
  const ids=[...document.querySelectorAll('.mcheck:checked')].map(x=>x.value);
  if(ids.length<2)return toast('Select at least 2 locations.',true);
  if(!(await initMap()))return;
  const selected=ids.map(getLoc).filter(Boolean);
  const types=matrixTypes();
  const direction=$('matrixDirection').value;
  const sources=selected.filter(x=>x.type===types.a);
  const destinations=selected.filter(x=>x.type===types.b);
  if(!sources.length||!destinations.length)return toast(`Select at least one ${types.labelA} and one ${types.labelB}.`,true);
  if(types.a===types.b && sources.length<2)return toast('Select at least 2 Depots for a Depot ↔ Depot matrix.',true);
  const profile=$('profile').value;
  let resource=$('resource').value;
  if(profile==='trucking' && resource!=='route_adv')resource='route_adv';
  resource=resource==='route_eta'?'distance_matrix_eta':resource==='route_traffic'?'distance_matrix_traffic':'distance_matrix';

  const comboLabel=types.a==='Railhead'&&types.b==='Distillery'?'Railhead ↔ Distillery':
    types.a==='Depot'&&types.b==='Distillery'?'Depot ↔ Distillery':
    types.a==='Depot'&&types.b==='Railhead'?'Depot ↔ Railhead':'Depot ↔ Depot';

  $('matrixResult').innerHTML=`<div class="empty">Preparing <b>${esc(comboLabel)}</b> matrix…<br><span class="hint">Large matrices are automatically split into Mappls-compatible batches of up to 100 points per request.</span></div>`;
  try{
    const results=[];
    const addResult=async(src,dst,title)=>{
      const cells=src.length*dst.length;
      $('matrixResult').innerHTML=`<div class="empty">Calculating <b>${esc(title)}</b>: ${src.length} × ${dst.length} = ${cells.toLocaleString('en-IN')} route cells…</div>`;
      const result=await runCrossMatrix(src,dst,profile,resource,title);
      results.push({title,sources:src,destinations:dst,result});
    };

    if(direction==='forward'||direction==='both'){
      await addResult(sources,destinations,`${types.a} → ${types.b}`);
    }
    if(direction==='reverse'||direction==='both'){
      await addResult(destinations,sources,`${types.b} → ${types.a}`);
    }

    lastMatrixData={profile,resource,direction,combination:comboLabel,results};
    const sections=results.map(x=>renderCrossMatrixTable(x.title,x.sources,x.destinations,x.result));
    const total=results.reduce((a,x)=>a+x.sources.length*x.destinations.length,0);
    const head=`<div class="matrix-head-note"><b>${esc(comboLabel)} Matrix</b> · ${esc(profile==='trucking'?'Truck / HCV':'Car / LMV')} · ${esc(resource)} · ${total.toLocaleString('en-IN')} route cells</div>`;
    const exportbar=`<div class="matrix-exportbar"><button class="btn primary" id="exportMatrixExcel">▣ Download Excel</button><span class="matrix-export-info">Click any distance cell to open that route on Map View</span></div>`;
    $('matrixResult').innerHTML=head+exportbar+sections.join('<div class="matrix-divider"></div>');
    $('exportMatrixExcel').onclick=exportMatrixExcel;
    toast(`${comboLabel} matrix calculated successfully.`);
  }catch(e){
    console.error('Cross matrix error',e);
    $('matrixResult').innerHTML=matrixErrorHtml('Matrix calculation failed',e.message,e.diagnostic||null,{points:selected.length, maxPointsPerRequest:100, profile, resource, combination:comboLabel});
    toast(e.message,true);
  }
}

$('locationSearch').oninput=renderTable;
$('addLocation').onclick=()=>openLocationModal();
$('closeModal').onclick=closeLocationModal;
$('saveLocation').onclick=saveLocationForm;
$('deleteLocation').onclick=()=>{if(editingId)deleteLocationById(editingId);closeLocationModal()};
$('modal').addEventListener('click',e=>{if(e.target===$('modal'))closeLocationModal()});
$('runMatrix').onclick=runMatrix;
$('runDistilleryReport').onclick=generateDistilleryReport;
$('exportDistilleryReport').onclick=exportDistilleryReport;
$('runDepotDistilleryReport').onclick=generateDepotDistilleryReport;
$('exportDepotDistilleryReport').onclick=exportDepotDistilleryReport;
$('depotReportNearest').onclick=()=>{depotReportSort='asc';if(lastDepotDistilleryReport)renderDepotDistilleryTable()};
$('depotReportFarthest').onclick=()=>{depotReportSort='desc';if(lastDepotDistilleryReport)renderDepotDistilleryTable()};
$('reportNearest').onclick=()=>{reportSort='asc';if(lastDistilleryReport){renderRankTable('depotReport',lastDistilleryReport.depotRows,'Godown');renderRankTable('railheadReport',lastDistilleryReport.railRows,'Railhead')}};
$('reportFarthest').onclick=()=>{reportSort='desc';if(lastDistilleryReport){renderRankTable('depotReport',lastDistilleryReport.depotRows,'Godown');renderRankTable('railheadReport',lastDistilleryReport.railRows,'Railhead')}};
$('calc').onclick=calculateRoute;
$('clearRoute').onclick=clearRoute;
$('fit').onclick=()=>{
  if(lastRoute?.coords){
    try{mapplsFitBounds(lastRoute.coords,60)}catch(e){fitAll()}
  }else fitAll()
};
$('showAll').onclick=()=>{if(!map)return toast('Please open Map View first.',true);renderMarkers();fitAll()};
function styleNameMatches(style, terms){
  const text=[style?.name,style?.displayName,style?.description].filter(Boolean).join(' ').toLowerCase();
  return terms.some(t=>text.includes(t));
}
function removeSatelliteLayer(){satelliteLayer=null}
function addSatelliteLayer(){
  if(!map)throw new Error('Mappls map is not initialized.');
  if(typeof mappls?.setStyle==='function'){
    mappls.setStyle('standard-hybrid');
    satelliteLayer=true;
    return true;
  }
  if(typeof map.setStyle==='function'){
    map.setStyle('standard-hybrid');
    satelliteLayer=true;
    return true;
  }
  throw new Error('Mappls style switching is not enabled for this Web Map account.');
}

$('mapModeRoad').onclick=()=>{
  if(!map)return toast('Please open Map View first.',true);
  try{
    if(typeof mappls?.setStyle==='function')mappls.setStyle('standard');
    else if(typeof map.setStyle==='function')map.setStyle('standard');
    $('mapModeRoad').classList.add('active');
    $('mapModeSatellite').classList.remove('active');
    toast('Mappls road map enabled.');
  }catch(e){toast(e.message,true)}
};
$('mapModeSatellite').onclick=()=>{
  if(!map)return toast('Please open Map View first.',true);
  try{
    addSatelliteLayer();
    $('mapModeSatellite').classList.add('active');
    $('mapModeRoad').classList.remove('active');
    toast('Mappls hybrid / satellite style enabled.');
  }catch(e){toast(e.message,true)}
};

$('mapCountry').onclick=()=>{toast('India view');fitAll()};
$('fitMap').onclick=fitAll;
$('showRailheads').onclick=()=>{renderMarkers('Railhead');fitAll()};
$('showDistilleries').onclick=()=>{renderMarkers('Distillery');fitAll()};$('showDepots').onclick=()=>{renderMarkers('Depot');fitAll()};
$('zoomIn').onclick=()=>{try{map.setZoom(Math.min((map.getZoom?.()||7)+1,18))}catch(e){}};
$('zoomOut').onclick=()=>{try{map.setZoom(Math.max((map.getZoom?.()||7)-1,3))}catch(e){}};
$('toggleFullscreen').onclick=()=>{const el=document.querySelector('.mapcard');if(!document.fullscreenElement)el.requestFullscreen?.();else document.exitFullscreen?.()};$('mapFullscreen').onclick=()=>{const el=document.querySelector('.mapcard');if(!document.fullscreenElement)el.requestFullscreen?.();else document.exitFullscreen?.()};
if($('toggleSidebar')) $('toggleSidebar').onclick=()=>document.querySelector('.sidebar').classList.toggle('open');
if($('mobileMenu'))$('mobileMenu').onclick=()=>document.querySelector('.sidebar')?.classList.toggle('open');
if($('desktopMenuToggle'))$('desktopMenuToggle').onclick=()=>{
  const app=document.querySelector('.app');
  app.classList.toggle('sidebar-collapsed');
  const collapsed=app.classList.contains('sidebar-collapsed');
  $('desktopMenuToggle').textContent=collapsed?'☰':'☰';
  $('desktopMenuToggle').title=collapsed?'Expand Menu':'Collapse Menu';
  $('desktopMenuToggle').setAttribute('aria-label',collapsed?'Expand Menu':'Collapse Menu');
  saveUiState({sidebarCollapsed:collapsed});
  setTimeout(()=>{try{refreshMapLayout();}catch(e){}},240);
};
$('viaSelect').onchange=e=>{if(e.target.value&&!viaIds.includes(e.target.value)&&e.target.value!==$('origin').value&&e.target.value!==$('destination').value){viaIds.push(e.target.value);renderVia()}e.target.value=''};
$('testMappls').onclick=async()=>{try{const ok=await initMap();if(ok){$('apiDiag').innerHTML='<span style="color:#8df2c7">✓ Mappls Web Map loaded<br>✓ Mappls map tiles are active<br>✓ Secure Mappls Route proxy available<br>✓ Secure Mappls Matrix proxy configured</span>';toast('Mappls connection test passed.')}}catch(e){$('apiDiag').innerHTML='<span style="color:#ff9eaa">✗ '+esc(e.message)+'</span>';toast('Mappls connection test failed.',true)}};
if($('addQuick'))$('addQuick').onclick=()=>{document.querySelector('.tab[data-tab=locations]')?.click();$('addLocation')?.click()};
if($('matrixQuick'))$('matrixQuick').onclick=()=>document.querySelector('.tab[data-tab=matrix]')?.click();
if($('importQuick'))$('importQuick').onclick=()=>$('importData')?.click();
if($('exportQuick'))$('exportQuick').onclick=()=>$('exportData')?.click();
$('exportData').onclick=()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(locations,null,2)],{type:'application/json'}));a.download='ethanol-locations.json';a.click();URL.revokeObjectURL(a.href)};$('importData').onclick=()=>$('fileInput').click();$('fileInput').onchange=e=>{const f=e.target.files[0];if(!f)return;if(f.size>1024*1024){toast('Import file is too large. Maximum 1 MB.',true);e.target.value='';return}const r=new FileReader();r.onload=()=>{try{const x=JSON.parse(r.result);if(!Array.isArray(x)||x.length>500)throw new Error('Invalid location file: maximum 500 locations allowed.');const allowedTypes=new Set(['Depot','Railhead','Distillery','Other']);const clean=x.map((l,i)=>{if(!l||typeof l!=='object')throw new Error(`Invalid location at row ${i+1}.`);const name=String(l.name??'').trim();const type=String(l.type??'Other').trim();const lat=Number(l.lat),lng=Number(l.lng);if(!name||name.length>150)throw new Error(`Invalid location name at row ${i+1}.`);if(!allowedTypes.has(type))throw new Error(`Invalid location type at row ${i+1}.`);if(!Number.isFinite(lat)||lat<-90||lat>90||!Number.isFinite(lng)||lng<-180||lng>180)throw new Error(`Invalid coordinates at row ${i+1}.`);const id=String(l.id??`I-${Date.now()}-${i}`).trim();if(id.length>80)throw new Error(`Invalid location ID at row ${i+1}.`);return {...l,id,name,type,lat,lng}});locations=clean;saveLocations();fillSelects();renderMarkers();refreshKpis();toast('Locations imported and validated.')}catch(err){toast(err.message||'Invalid location file.',true)}};r.readAsText(f)};$('resetData').onclick=()=>{if(confirm('Reset all locations to the original 182-location dataset?')){locations=ORIGINAL_LOCATIONS.map(x=>({...x}));saveLocations();fillSelects();renderMarkers();toast('Original 182 locations restored.')}};$('clearLocal').onclick=()=>{localStorage.removeItem('ethanol_locations_v7');localStorage.removeItem('ethanol_locations_v6');location.reload()};
$('matrixAll').onclick=()=>{const ids=matrixEligible().map(x=>x.id);renderMatrixPicker(ids);toast('All '+ids.length+' locations in this combination selected.')};
$('matrixSourceA').onclick=()=>{const t=matrixTypes();renderMatrixPicker(locations.filter(x=>x.type===t.a).map(x=>x.id))};
$('matrixSourceB').onclick=()=>{const t=matrixTypes();renderMatrixPicker(locations.filter(x=>x.type===t.b).map(x=>x.id))};
$('matrixFirst8').onclick=()=>{renderMatrixPicker(matrixEligible().slice(0,8).map(x=>x.id))};
$('matrixClear').onclick=()=>{renderMatrixPicker([])};
$('matrixCombination').onchange=()=>{renderMatrixPicker();toast('Matrix combination changed.')};
$('searchBtn').onclick=async()=>{const q=$('mapSearch').value.toLowerCase().trim();if(!q)return toast('Enter a location name.');const l=locations.find(x=>x.name.toLowerCase().includes(q)||String(x.code||'').toLowerCase().includes(q)||String(x.railhead||'').toLowerCase().includes(q));if(!l)return toast('Location not found.',true);await goToLocationOnMap(l.id)};
fillDistilleryReportSelect();
function refreshDashboard(){ location.reload(); }
if($('refreshPage'))$('refreshPage').onclick=refreshDashboard;
async function showRoutePlannerView(){
  const ws=document.querySelector('.workspace');
  if(!ws)return;
  if(!(await initMap()))return;
  ws.classList.remove('mapfocus','fullmode');
  ws.classList.add('routefocus');
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  document.querySelector('.tab[data-tab="routeplanner"]')?.classList.add('active');
  document.querySelectorAll('.section').forEach(x=>x.classList.remove('active'));
  $('sec-routeplanner')?.classList.add('active');
  document.querySelectorAll('.topnav button').forEach(x=>x.classList.remove('active'));
  document.querySelector('.topnav button[data-top="routeplanner"]')?.classList.add('active');
  setTimeout(()=>{try{refreshMapLayout();}catch(e){}; document.querySelector('.main')?.scrollTo({top:0,behavior:'instant'});},180);
}
async function showMapView(options={}){
  const ws=document.querySelector('.workspace');
  if(!ws)return false;
  if(!(await initMap()))return false;
  const preserveViewport=!!options.preserveViewport;
  ws.classList.remove('routefocus','fullmode');
  ws.classList.add('mapfocus');
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  document.querySelector('.tab[data-tab="mapview"]')?.classList.add('active');
  document.querySelectorAll('.section').forEach(x=>x.classList.remove('active'));
  $('sec-routeplanner')?.classList.add('active');
  document.querySelectorAll('.topnav button').forEach(x=>x.classList.remove('active'));
  document.querySelector('.topnav button[data-top="mapview"]')?.classList.add('active');

  setTimeout(()=>{
    try{
      if(map&&typeof map.resize==='function')map.resize();
      attachDirectionPanel();
      // Do not refit the map when a Locations/Matrix action explicitly asked
      // to focus a single location or route. Otherwise a later layout refresh
      // can immediately move the viewport away from the requested point.
      if(!preserveViewport){
        if(lastRoute?.coords)mapplsFitBounds(lastRoute.coords,80);
        else if($('origin').value&&$('destination').value){
          const a=getLoc($('origin').value),b=getLoc($('destination').value);
          if(a&&b)mapplsFitBounds([a,b],80);
        }
      }
      if(map&&typeof map.resize==='function')setTimeout(()=>map.resize(),180);
      document.querySelector('.main')?.scrollTo({top:0,behavior:'instant'});
    }catch(e){console.warn('Map view layout refresh failed',e)}
  },220);
  return true;
}
$('toggleRouteDetails').onclick=()=>{setDirectionPanelCollapsed(!directionPanelCollapsed);};
$('backToRoute').onclick=showRoutePlannerView;
$('viewOnMap').onclick=showMapView;
window.addEventListener('resize',()=>{setTimeout(()=>{try{refreshMapLayout();}catch(e){}},120)});
document.addEventListener('fullscreenchange',()=>{setTimeout(()=>{try{refreshMapLayout();}catch(e){}},180)});
if(window.ResizeObserver){const ro=new ResizeObserver(()=>{try{refreshMapLayout();}catch(e){}});const mc=document.querySelector('.mapcard');if(mc)ro.observe(mc);} 

for(const t of document.querySelectorAll('.tab'))t.onclick=async()=>{
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
  t.classList.add('active');
  saveUiState({tab:t.dataset.tab});
  const ws=document.querySelector('.workspace');
  if(t.dataset.tab==='mapview'){
    await showMapView();
    return;
  }
  document.querySelectorAll('.section').forEach(x=>x.classList.remove('active'));
  const sec=$('sec-'+t.dataset.tab);
  if(sec)sec.classList.add('active');
  if(ws){ws.classList.remove('routefocus','mapfocus','fullmode');if(t.dataset.tab==='routeplanner'){ws.classList.add('routefocus');setTimeout(()=>{try{refreshMapLayout();}catch(e){};document.querySelector('.main')?.scrollTo({top:0,behavior:'instant'});},180);}else{ws.classList.add('fullmode');}}
  if(t.dataset.tab==='matrix')renderMatrixPicker();
  if(t.dataset.tab==='reports'){fillDistilleryReportSelect();setTimeout(()=>document.querySelector('.main')?.scrollTo({top:0,behavior:'instant'}),50)}
  document.querySelectorAll('.topnav button').forEach(x=>x.classList.remove('active'));
  document.querySelector('.topnav button[data-top="'+t.dataset.tab+'"]')?.classList.add('active');
};
for(const t of document.querySelectorAll('.topnav button'))t.onclick=async()=>{
  const tab=t.dataset.top;
  if(tab==='mapview'){await showMapView();return;}
  if(tab==='routeplanner'){await showRoutePlannerView();return;}
  const el=document.querySelector('.tab[data-tab="'+tab+'"]');
  if(el)el.click();
};
$('globalSearch').onkeydown=e=>{if(e.key==='Enter'){$('mapSearch').value=e.target.value;$('searchBtn').click()}};
$('langToggle').onclick=()=>{const cur=localStorage.getItem(LANG_KEY)||'en';applyLanguage(cur==='en'?'hi':'en')};
$('darkToggle').onclick=()=>{const cur=localStorage.getItem(THEME_KEY)||'light';setTheme(cur==='dark'?'light':'dark')};
$('alertToggle').onclick=()=>$('alertPop')?.classList.toggle('show');
document.addEventListener('click',e=>{if(!$('alertPop')||!$('alertToggle'))return;if(!$('alertPop').contains(e.target)&&e.target!==$('alertToggle')&&!$('alertToggle').contains(e.target))$('alertPop').classList.remove('show')});
$('clearRouteHistory').onclick=clearRouteHistory;
$('printReports').onclick=printReports;
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-action]');
  if(!el)return;
  const action=el.dataset.action;
  try{
    if(action==='toggleReportAccordion') return toggleReportAccordion(el.dataset.target);
    if(action==='removeVia') return window.removeVia?.(Number(el.dataset.index));
    if(action==='setEndpoint') return setEndpoint(el.dataset.id,el.dataset.which);
    if(action==='goToLocationOnMap') return goToLocationOnMap(el.dataset.id);
    if(action==='openMatrixRoute') return window.openMatrixRoute?.(el.dataset.source,el.dataset.destination);
  }catch(err){console.warn('Delegated action failed',action,err)}
});
(function boot(){
  fillSelects(); renderRouteHistory(); refreshKpis();
  const ui=loadUiState(); setTheme(localStorage.getItem(THEME_KEY)||'light'); applyLanguage(localStorage.getItem(LANG_KEY)||'en');
  const collapsed=!!ui.sidebarCollapsed; document.querySelector('.app')?.classList.toggle('sidebar-collapsed',collapsed); if($('desktopMenuToggle'))$('desktopMenuToggle').title=collapsed?'Expand Menu':'Collapse Menu';
  initMap();
  if(ui.tab&&ui.tab!=='mapview'){setTimeout(()=>document.querySelector('.tab[data-tab="'+ui.tab+'"]')?.click(),250)} else showMapView();
  if(window.innerWidth<900)document.querySelector('.sidebar').classList.remove('open');
})();
restoreReportAccordions();
