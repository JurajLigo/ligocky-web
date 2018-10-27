//information about trips
const trips =
[{
    "code" : "Bratislava",
    "country" : "Slovakia",
    "countryCode": "SK",
    "countryPath": "Slovakia",
    "city" : "Bratislava",
    "tripName" : "",
    "desc" : "Here i studied, and currently live and work",
    "time" : "2004-present"
}, {
    "code" : "Topolcany",
    "countryCode": "SK",
    "countryPath": "Slovakia",
    "country" : "Slovakia",
    "city" : "Topolcany",
    "tripName" : "",
    "desc" : "My born city, here i grew up :)",
    "time" : "1986-2004"
}, {
    "code" : "San_Fransisco",
    "countryCode": "US",
    "countryPath" : "United_States",
    "country" : "United States - California",
    "city" : "San Fransisco",
    "tripName" : "(sighseeing of West America with Dorka, Erik, Dasa and Michal)",
    "desc" : "by bikes to the Golden bridge, non-american city with good atmosphere, Alcatraz",
    "time" : "4 days in 10/2013"
}, {
    "code" : "Los_Angeles",
    "countryCode": "US",
    "countryPath": "United_States",
    "country" : "United States - California",
    "city" : "Los Angeles",
    "tripName" : "(sighseeing of West America with Dorka, Erik, Dasa and Michal)",
    "desc" : "Halloween everywhere, NBA Game (GSW vs. LAC), Venice beach, Hollywood Walk of Fame",
    "time" : "2 days in 11/2013"
}, {
    "code" : "Monterey",
    "countryCode": "US",
    "countryPath": "United_States",
    "country" : "United States - California",
    "city" : "Monterey",
    "tripName" : "(sighseeing of West America with Dorka, Erik, Dasa and Michal)",
    "desc" : "amazing whalewatching, rainbow over whale's fountain, whale jump out of the water",
    "time" : "5 hours in 11/2013"
}, {
    "code" : "Big_Sur",
    "countryCode": "US",
    "countryPath": "United_States",
    "country" : "United States - California",
    "city" : "Big Sur",
    "tripName" : "(sighseeing of West America with Dorka, Erik, Dasa and Michal)",
    "desc" : "One million dollar view on beautiful ocean cliffs",
    "time" : "2 hours in 11/2013"
}, {
    "code" : "Yosemite",
    "countryCode": "US",
    "countryPath": "United_States",
    "country" : "United States - California",
    "city" : "Yosemite National Park",
    "tripName" : "(sighseeing of West America with Dorka, Erik, Dasa and Michal)",
    "desc" : "wonderful national park with big forrest, rocks and waterfalls",
    "time" : "1 day in 10/2013"
}, {
    "code" : "Death_Valley",
    "countryCode": "US",
    "countryPath": "United_States",
    "country" : "United States - California",
    "city" : "Death Valley National Park",
    "tripName" : "(sighseeing of West America with Dorka, Erik, Dasa and Michal)",
    "desc" : "one of the most driest places on the Earth, 86 meters above sea level, 50 C in the summer",
    "time" : "1 day in 10/2013"
}, {
    "code" : "Las_Vegas",
    "countryCode": "US",
    "countryPath": "United_States",
    "country" : "United States - Nevada",
    "city" : "Las Vegas",
    "tripName" : "(sighseeing of West America with Dorka, Erik, Dasa and Michal)",
    "desc" : "chillout, relaxing, sightseeing, shopping, halloween decoration everywhere",
    "time" : "3 days in 10/2013"
}, {
    "code" : "Zion",
    "countryCode": "US",
    "countryPath": "United_States",
    "country" : "United States - Utah",
    "city" : "Zion National Park",
    "tripName" : "(sighseeing of West America with Dorka, Erik, Dasa and Michal)",
    "desc" : "trekking in beautiful national park",
    "time" : "1 day in 10/2013"
}, {
    "code" : "Bryce_Canyon",
    "countryCode": "US",
    "countryPath": "United_States",
    "country" : "United States - Utah",
    "city" : "Bryce Canyon National Park",
    "tripName" : "(sighseeing of West America with Dorka, Erik, Dasa and Michal)",
    "desc" : "unbelievable rock formation, trekking",
    "time" : "1 day in 10/2013"
}, {
    "code" : "Arches",
    "countryCode": "US",
    "countryPath": "United_States",
    "country" : "United States - Utah",
    "city" : "Arches National Park",
    "tripName" : "(sighseeing of West America with Dorka, Erik, Dasa and Michal)",
    "desc" : "windy national park with big arches created by nature",
    "time" : "1 day in 10/2013"
}, {
    "code" : "Monument_Valley",
    "countryCode": "US",
    "countryPath": "United_States",
    "country" : "United States - Utah",
    "city" : "Monument Valley",
    "tripName" : "(sighseeing of West America with Dorka, Erik, Dasa and Michal)",
    "desc" : "sightseeing big monuments in park controlled by Indians",
    "time" : "4 hours in 10/2013"
}, {
    "code" : "Antelope_Canyon",
    "countryCode": "US",
    "countryPath": "United_States",
    "country" : "United States - Arizona",
    "city" : "Antelope Canyon",
    "tripName" : "(sighseeing of West America with Dorka, Erik, Dasa and Michal)",
    "desc" : "visiting fabulously slot canyon on Navajo land",
    "time" : "3 hours in 10/2013"
}, {
    "code" : "Grand_Canyon",
    "countryCode": "US",
    "country" : "United States - Arizona",
    "countryPath": "United_States",
    "city" : "Grand Canyon",
    "tripName" : "(sighseeing of West America with Dorka, Erik, Dasa and Michal)",
    "desc" : "short visit of monumental Grand Canyon, cold because Grand Canyon is 2 000 meters elevation",
    "time" : "6 hours in 10/2013"
}, {
    "code" : "Bregenz",
    "countryCode": "AT",
    "countryPath": "Austria",
    "country" : "Austria",
    "city" : "Bregenz",
    "tripName" : "(amazing erasmus in Barcelona period)",
    "desc" : "very short visit and dinner with Pedro, Zuzka B. and Pedros's uncle family",
    "time" : "4 hours in 09/2009"
}, {
    "code" : "ES-BCN",
    "countryCode": "ES",
    "country" : "Spain",
    "city" : "Barcelona",
    "tripName" : "(amazing erasmus in Barcelona period)",
    "desc" : "great times, manana, siesta, fiesta with Pedro, Zuzka T., Zuzka D. and Zuzka T.",
    "time" : "Six months in 2009"
}, {
    "code" : "Sitges",
    "countryCode": "ES",
    "countryPath": "Spain",
    "country" : "Spain",
    "city" : "Sitges",
    "tripName" : "((amazing erasmus in Barcelona period)",
    "desc" : "chillout trip to Costa Dorada, gay city",
    "time" : "1 day in 10/2009"
}, {
    "code" : "ES-BCN-2",
    "countryCode": "ES",
    "country" : "Spain",
    "city" : "Barcelona",
    "tripName" : "(amazing erasmus in Barcelona period)",
    "desc" : "famous el clasico with Dorka and  Slovak friends from my old Erasmus flat",
    "time" : "2 days in 08/2011"
}, {
    "code" : "Lloret_De_Mar",
    "countryCode": "ES",
    "country" : "Spain",
    "countryPath" : "Spain",
    "city" : "Lloret de Mar",
    "tripName" : "(amazing erasmus in Barcelona period)",
    "desc" : "visit summer resort with Zuzka B. and Pedro",
    "time" : "1 day in 08/2011"
}, {
    "code" : "Tarragona",
    "countryCode": "ES",
    "countryPath": "Spain",
    "country" : "Spain",
    "city" : "Tarragona",
    "tripName" : "(visit Zuzka and Andres with Dorka in Espana)",
    "desc" : "exploring old city and Rome ruins, chillout",
    "time" : "7 hours in 08/2011"
}, {
    "code" : "Salou",
    "country" : "Spain",
    "countryCode": "ES",
    "countryPath" : "Spain",
    "city" : "Cap Salou",
    "tripName" : "(visit Zuzka and Andres with Dorka in Espana)",
    "desc" : "chillout on the beach with Dorka, Zuzka and Andres",
    "time" : "4 days in 08/2011"
}, {
    "code" : "Porto",
    "countryCode": "PT",
    "countryPath" : "Portugal",
    "country" : "Portugal",
    "city" : "Porto",
    "tripName" : "(amazing erasmus in Barcelona period)",
    "desc" : "cheap flight from BCN, sightseeing and drink wine with Pedro, Zuzka B. a Zuzka T.",
    "time" : "3 days in 11/2009"
}, {
    "code" : "Monte_Carlo",
    "countryCode" : "MC",
    "countryPath": "Monaco",
    "country": "Monaco",
    "city" : "Monte Carlo",
    "tripName" : "(erasmus in Barcelona period)",
    "desc" : "very short visit during car trip to the Barcelona with Zuzka B. and Pedro",
    "time" : "4 hours in 09/2009"
}, {
    "code" : "Venice",
    "countryCode": "IT",
    "country" : "Italy",
    "countryPath" : "Italy",
    "city" : "Venice",
    "tripName" : "(erasmus in Barcelona period)",
    "desc" : "from sweet 16 degree in Barcelona to cold, snowy Venice with Zuzka B. and Pedro",
    "time" : "2 days in 12/2009"
}, {
    "code" : "London",
    "countryCode" : "GB",
    "countryPath" : "England",
    "country" : "England",
    "city" : "London",
    "tripName" : "",
    "desc" : "museums, parks, sightseeing, shopping with Dorka, my sister and Krusovce crew",
    "time" : "4 days in 05/2011"
}, {
    "code" : "Sunny_Beach",
    "countryCode": "BG",
    "country" : "Bulgaria",
    "countryPath" : "Bulgaria",
    "city" : "Sunny Beach",
    "tripName" : "(summer vacation with Dorka, sister and Krusovce crew on own)",
    "desc" : "chillout, volleyball, sunbathing, drinking cheap alcohol and food",
    "time" : "5 days in 08/2010"
}, {
    "code" : "Nessebar",
    "countryCode": "BG",
    "country" : "Bulgaria",
    "countryPath" : "Bulgaria",
    "city" : "Nessebar",
    "tripName" : "(summer vacation with Dorka, sister and Krusovce crew on own)",
    "desc" : "sightseeing nice, old Rome city Nessebar",
    "time" : "1 day in 08/2010"
}, {
    "code" : "Varna",
    "countryCode": "BG",
    "countryPath" : "Bulgaria",
    "country" : "Bulgaria",
    "city" : "Varna",
    "tripName" : "(summer vacation with Dorka, sister and Krusovce crew on own)",
    "desc" : "from Budapest to Varna through by train, exploring city",
    "time" : "6 hours in 08/2010"
}, {
    "code" : "Zakynthos",
    "countryCode": "GR",
    "country" : "Greece",
    "countryPath" : "Greece",
    "city" : "Zakynthos",
    "tripName" : "",
    "desc" : "nice summer, chillout, sightseeing vacation with Dorka and Radka on the beautiful, natural island",
    "time" : "7 days in 08/2012"
}, {
    "code" : "Budapest",
    "countryCode": "HU",
    "country" : "Hungary",
    "countryPath" : "Hungary",
    "city" : "Budapest",
    "tripName" : "",
    "desc" : "sightseeing in the main Hungarian metropoly, visiting aquarium with Dorka",
    "time" : "Weekend in 10/2011"
}, {
    "code" : "Praha",
    "countryCode": "CZ",
    "country" : "Czech Republic",
    "countryPath": "Czech_Republic",
    "city" : "Praha",
    "tripName" : "",
    "desc" : "visiting Dorka's good friend Eva, sightseeing, christmans markets",
    "time" : "Weekend in 12/2011"
}, {
    "code" : "Praha_2",
    "countryCode": "CZ",
    "country" : "Czech Republic",
    "countryPath": "Czech_Republic",
    "city" : "Praha",
    "tripName" : "",
    "desc" : "short visit in cold weather with Ivanko and Martin, Old Town Square sightseeing, parties",
    "time" : "Weekend in 01/2016"
}, {
    "code" : "Praha_3",
    "countryCode": "CZ",
    "country" : "Czech Republic",
    "city" : "Praha",
    "tripName" : "",
    "desc" : "visiting Ivanko's flat with Sasky, Diki and Pali",
    "time" : "3 days in 08/2016"
},{
    "code" : "Les_Deux_Alpes",
    "countryCode": "FR",
    "countryPath": "France",
    "country" : "France",
    "city" : "Les Deux Alpes",
    "tripName" : "",
    "tripName" : "",
    "desc" : "Skiing, drinking with Dorka, Krusovce crew and others",
    "time" : "1 Week in 01/2011"
}, {
    "code" : "Trapani",
    "countryCode": "IT",
    "countryPath" : "Italy",
    "country" : "Italy",
    "city" : "Trapani",
    "tripName" : "(exploring island and a lot of fun with colleagues from work)",
    "desc" : "no english speakers, visiting night life of city, enjoying food",
    "time" : "3 days in 10/2014"
}, {
    "code" : "Erice",
    "countryCode": "IT",
    "countryPath" : "Italy",
    "country" : "Italy",
    "city" : "Erice",
    "tripName" : "(exploring island and a lot of fun with colleagues from work)",
    "desc" : "nice old city on the slope with beauty views on island and see",
    "time" : "4 hours in 10/2014"
}, {
    "code" : "Palermo",
    "countryCode": "IT",
    "countryPath" : "Italy",
    "country" : "Italy",
    "city" : "Palermo",
    "tripName" : "(exploring island and a lot of fun with colleagues from work)",
    "desc" : "enjoy night life and food, i and miso osvat hungry every 2 hours",
    "time" : "1 day in 10/2014"
}, {
    "code" : "Cefalu",
    "countryCode": "IT",
    "countryPath" : "Italy",
    "country" : "Italy",
    "city" : "Cefalu",
    "tripName" : "(exploring island and a lot of fun with colleagues from work)",
    "desc" : "chillout on the beach and exploring this beautiful, old city",
    "time" : "4 hours in 10/2014"
}, {
    "code" : "Taormina",
    "country" : "Italy",
    "countryCode": "IT",
    "countryPath" : "Italy",
    "city" : "Taormina",
    "tripName" : "(exploring island and a lot of fun with colleagues from work)",
    "desc" : "nice, straggle city in moutain with nice views",
    "time" : "1 day in 10/2014"			
}
    , {
    "code" : "Etna",
    "countryCode": "IT",
    "countryPath" : "Italy",
    "country" : "Italy",
    "city" : "Etna",
    "tripName" : "(exploring island and a lot of fun with colleagues from work)",
    "desc" : "just in the base camp of volcano because lack of time and warmth feelings",
    "time" : "3 hours in 10/2014"
    },
    {
    "code" : "San_Vito_Lo_Copo",
    "countryCode": "IT",
    "countryPath" : "Italy",
    "country" : "Italy",
    "city" : "San Vito La Copo",
    "tripName" : "(exploring island and a lot of fun with colleagues from work)",
    "desc" : "best beach in Sicily, nice blue water, still good also in october",
    "time" : "4 hours in 10/2014"
    },
 {
    "code" : "Vodice",
    "countryCode": "HR",
    "country" : "Croatia",
    "countryPath" : "Croatia",
    "city" : "Vodice",
    "tripName" : "",
    "desc" : "chillout vacation on the beach with Dorka and Krusovce crew",
    "time" : "4 days in 08/2012"
}, {
    "code" : "Krka",
    "countryCode": "HR",
    "country" : "Croatia",
    "countryPath" : "Croatia",
    "city" : "Krka",
    "tripName" : "",
    "desc" : "visit nice national park, beautiful waterfall with Dorka, Jurko, Nataly and Radka",
    "time" : "4 days in 08/2012"
}, {
    "code" : "Krk",
    "countryCode": "HR",
    "countryPath": "Croatia",
    "country" : "Croatia",
    "city" : "Krk",
    "tripName" : "",
    "desc" : "chillout vacation on the beach with Dorka, Krusovce crew and Pedro",
    "time" : "4 days in 08/2013"
}, {
    "code" : "Baska",
    "countryCode": "HR",
    "country" : "Croatia",
    "countryPath" : "Croatia",
    "city" : "Baska",
    "tripName" : "",
    "desc" : "chillout, sport (3 kinds of racket sports) vacation on the beach with Miso Osvat (still kidding) and 3 girls",
    "time" : "5 days in 07/2015"
}, {
    "code" : "Zadar",
    "countryCode": "HR",
    "country" : "Croatia",
    "countryPath" : "Croatia",
    "city" : "Zadar",
    "tripName" : "(summer chillout, sightseeing trip with my ex and her sister)",
    "desc" : "exploring city, chillout on the beach",
    "time" : "1 day in 09/2014"
}, {
    "code" : "Primosten",
    "countryCode": "HR",
    "countryPath": "Croatia",
    "country" : "Croatia",
    "city" : "Primosten",
    "tripName" : "(summer chillout, sport trip with Pedro, Dianka, Pali and Miso",
    "desc" : "playing tennis, drinking, foam party, joking",
    "time" : "4 day in 09/2015"
}, {
    "code" : "Makarska",
    "countryCode": "HR",
    "country" : "Croatia",
    "countryPath" : "Croatia",
    "city" : "Makarska",
    "tripName" : "(summer chillout, sightseeing trip with my ex and her sister)",
    "desc" : "chillout on the beach, boat trip to best sand beach in Croatia",
    "time" : "3 days in 09/2014"
}, {
    "code" : "Sarajevo",
    "countryCode": "BA",
    "country" : "Bosnia and Herzegovina",
    "countryPath" : "Bosnia_Herzegovina",
    "city" : "Sarajevo",
    "tripName" : "(represent VUB bank with colleagues)",
    "desc" : "play basketball for VUB bank in international Intesa Sao Paolo event",
    "time" : "3 days in 09/2012"
}, {
    "code" : "Medjugorje",
    "countryPath": "Bosnia_Herzegovina",
    "countryCode": "BA",
    "country" : "Bosnia and Herzegovina",
    "tripName" : "(summer chillout,sightseeing trip with my ex and her sister)",
    "city" : "Medugorje",
    "desc" : "short, rainy visit christian place",
    "time" : "2 hours in 09/2014"
}, {
    "code" : "Mostar",
    "countryCode": "BA",
    "country" : "Bosnia and Herzegovina",
    "countryPath": "Bosnia_Herzegovina",
    "tripName" : "(summer chillout,sightseeing trip with my ex and her sister)",
    "city" : "Mostar",
    "desc" : "visit beautiful christian-moslim city joined by iconic bridge",
    "time" : "6 hours in 09/2014"
}, {
    "code" : "AT-VIENNA",
    "countryCode": "AT",
    "country" : "Austria",
    "city" : "Vienna",
    "tripName" : "(visit on velvet revolution day)",
    "desc" : "visit christmas market with Dorka and Krusovce crew",
    "time" : "17/11/2012"
}, {
    "code" : "Gaming",
    "countryCode": "AT",
    "country" : "Austria",
    "countryPath" : "Austria",
    "city" : "Gaming",
    "tripName" : "(visit austrian alpes with Dorka, Radka and Marek)",
    "desc" : "trekking in Alpes, visiting cave, beautiful waterfalls everywhere",
    "time" : "3 days in 05/2012"
}, {
    "code" : "Pamukkale",
    "countryCode": "TR",
    "country" : "Turkey",
    "countryPath" : "Turkey",
    "city" : "Pamukkale",
    "tripName" : "(sightseeing throug travel agency with Dorka)",
    "desc" : "visit iconic travertine terraces",
    "time" : "2 days in 03/2012"
}, {
    "code" : "Manavgat",
    "countryCode": "TR",
    "country" : "Turkey",
    "countryPath" : "Turkey",
    "city" : "Manavgat",
    "tripName" : "(sightseeing throug travel agency with Dorka)",
    "desc" : "visit turkey city by own because of beautiful mosque",
    "time" : "6 hours in 03/2012"
}, {
    "code" : "Kizilagac",
    "countryCode": "TR",
    "country" : "Turkey",
    "countryPath": "Turkey",
    "city" : "Kizilagac",
    "tripName" : "(sightseeing throug travel agency with Dorka)",
    "desc" : "chillout on the beach, cold sea, relax in all inclusive hotel",
    "time" : "4 days in 03/2012"
}, {
    "code" : "Antalya",
    "countryCode": "TR",
    "country" : "Turkey",
    "countryPath" : "Turkey",
    "city" : "Antalya",
    "tripName" : "(sightseeing throug travel agency with Dorka)",
    "desc" : "visit nice city under the snowy mountain",
    "time" : "1 day in 03/2012"
}, {
    "code" : "Moscow",
    "countryCode": "RU",
    "countryPath": "Russia",
    "country" : "Russia",
    "city" : "Moscow",
    "tripName" : "(6 hours in Moscow during flight from Havana)",
    "desc" : "visit cold Red square without warm clothes with Ivanko and Martin",
    "time" : "6 hours in 02/2015"
}, {
    "code" : "Havana",
    "countryCode": "CU",
    "country" : "Cuba",
    "countryPath" : "Cuba",
    "city" : "Havana",
    "tripName" : "(unbelievable Cuba trip with colleagues Ivanko and Martin)",
    "desc" : "incredible experiences, incredible city with unique atmospehre, cars and people, 3x times in Havana police station",
    "time" : "5 days in 02/2015"
}, {
    "code" : "Vinales",
    "countryCode": "CU",
    "country" : "Cuba",
    "countryPath" : "Cuba",
    "city" : "Vinales",
    "tripName" : "(unbelievable Cuba trip with colleagues Ivanko and Martin)",
    "desc" : "bike trip arround beautiful, tobacco valley, accommodation in casa particulares",
    "time" : "3 days in 02/2015"
}, {
    "code" : "Cienfuegos",
    "countryCode": "CU",
    "country" : "Cuba",
    "countryPath" : "Cuba",
    "city" : "Cienfuegos",
    "tripName" : "(unbelievable Cuba trip with colleagues Ivanko and Martin)",
    "desc" : "cheap ron, 14-days constantly drinking, and visit discos, interact with local people, meet nice German girls",
    "time" : "1 day in 02/2015"
}, {
    "code" : "Trinidad",
    "countryCode": "CU",
    "country" : "Cuba",
    "countryPath" : "Cuba",
    "city" : "Trininad",
    "tripName" : "(unbelievable Cuba trip with colleagues Ivanko and Martin)",
    "desc" : "sightseeing, bike trip arround UNESCO city and valley, puncture and try to presuade school's bus driver to get me in town",
    "time" : "2 days in 02/2015"
}, {
    "code" : "Santa_Clara",
    "countryCode": "CU",
    "country" : "Cuba",
    "countryPath" : "Cuba",
    "city" : "Santa Clara",
    "tripName" : "(unbelievable Cuba trip colleagues with Ivanko and Martin)",
    "desc" : "museum of Che Guevera, crappy cuban food without basic ingredients, no gums and handkerchiefs in 100 thousands city",
    "time" : "2 days in 02/2015"
}, {
    "code" : "Santa_Maria_Del_Mar",
    "countryCode": "CU",
    "country" : "Cuba",
    "countryPath" : "Cuba",
    "city" : "Santa Maria del Mar",
    "tripName" : "(unbelievable Cuba trip with colleagues Ivanko and Martin)",
    "desc" : "beautiful beach with nice gradient of blue water",
    "time" : "4 hours in 02/2015"
}, {
    "code" : "Ancon",
    "countryCode": "CU",
    "country" : "Cuba",
    "countryPath" : "Cuba",
    "city" : "Ancon playa",
    "tripName" : "(unbelievable Cuba trip with colleagues Ivanko and Martin)",
    "desc" : "beautiful beach, strong wind, in the water hotter than outside, ocean around Cuba never declines under 27 degree",
    "time" : "4 hours in 02/2015"
}, {
    "code" : "Tarifa",
    "countryCode": "ES",
    "countryPath": "Spain",
    "country" : "Spain",
    "city" : "Tarifa",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "southest point of Europe, pier on left hand calm mediterranean sea on right hand rough atlantic ocean",
    "time" : "4 hours in 04/2012"
},
{
    "code" : "Gibraltar",
    "countryCode": "GI",
    "country": "Gibraltar",
    "countryPath" : "Gibraltar",
    "city" : "Gibraltar",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "walking around small state, traffic light because plane, first mosque, view on Africa shores",
    "time" : "5 hours in 04/2012"
},
{
    "code" : "Malaga",
    "countryCode": "ES",
    "countryPath": "Spain",
    "country" : "Spain",
    "city" : "Malaga",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "here we began our big trip, flight from Bratislava, just eating in cafe bar and check some views on sea",
    "time" : "2 hours in 04/2012"
}, {
    "code" : "Ronda",
    "countryCode": "ES",
    "country" : "Spain",
    "countryPath" : "Spain",
    "city" : "Ronda",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "visit astonishing, incredible, beautiful, old city build between two big, rocky precipices joined by stoned bridge, watching football Barcelona vs. Chelsea",
    "time" : "3 hours in 04/2012"
}, {
    "code" : "Tanger",
    "countryCode": "MA",
    "countryPath": "Morocco",
    "country" : "Morocco",
    "city" : "Tanger",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "first Morocco city, cultural shock, still bothering by locals, neverending looking for rental car",
    "time" : "8 hours in 04/2012"
}, {
    "code" : "Chefchaouen",
    "countryCode": "MA",
    "country" : "Morocco",
    "countryPath" : "Morocco",
    "city" : "Chefchaouen",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "sighseeing nice city with all blue buildings, five in 12m2 room for 5 Euro, local offering visit of marihuana fields",
    "time" : "1 day in 04/2012"
},{
    "code" : "Goats_on_trees",
    "countryCode": "MA",
    "country" : "Morocco",
    "countryPath" : "Morocco",
    "city" : "Goats on argania trees",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "watching unbelievable goats on agania trees",
    "time" : "1 hour in 04/2012"
}
, {
    "code" : "Fes",
    "countryCode": "MA",
    "country" : "Morocco",
    "countryPath" : "Morocco",
    "city" : "Fes",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "best city in Morocco, incredible middleage atmosphere in medina (old city), domkeys and dirty everywhere",
    "time" : "1 day in 04/2012"
}, {
    "code" : "Ait_Benhaddou",
    "countryCode": "MA",
    "country" : "Morocco",
    "countryPath" : "Morocco",
    "city" : "Ait Ben Haddou",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "fortified middle-aged city, movies Gladiator, Mummy were filmed here, beautiful view on snowy slopes of Atlas",
    "time" : "4 hours in 04/2012"
}, {
    "code" : "Rabat",
    "countryCode": "MA",
    "country" : "Morocco",
    "countryPath" : "Morocco",
    "city" : "Rabat",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "king city, biggest cementery i have ever seen",
    "time" : "4 hours in 04/2012"
}, {
    "code" : "El_Jadida",
    "countryCode": "MA",
    "country" : "Morocco",
    "countryPath" : "Morocco",
    "city" : "El Jadida",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "former portugal city, local markets with meat and eggs outside",
    "time" : "3 hours in 04/2012"
}, {
    "code" : "Casablanca",
    "countryCode": "MA",
    "countryPath": "Morocco",
    "country" : "Morocco",
    "city" : "Casablanca",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "modern city, 7th biggest mosque in the world, tallest minaret (210 m) in the world, for 105 000 people",
    "time" : "3 hours in 04/2012"
}, {
    "code" : "Marrakesh",
    "countryCode": "MA",
    "countryPath": "Morocco",
    "country" : "Morocco",
    "city" : "Marrakesh",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "big local markets, crazy traffic, fresh orange juice for 0.5 Euro, local throw dazed snake on my shoulders :)",
    "time" : "2 days in 04/2012"
}, {
    "code" : "Merzougha",
    "countryCode": "MA",
    "country" : "Morocco",
    "countryPath" : "Morocco",
    "city" : "Merzougha",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "night in the car in dessert, big cold then big hot, big 100 meters tall dunes, camel trip to dunes, fresh shower in dessert",
    "time" : "1 day in 04/2012"
}, {
    "code" : "Ouzoud",
    "countryCode": "MA",
    "country" : "Morocco",
    "countryPath" : "Morocco",
    "city" : "Cascades d'Ouzoud",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "beautiful waterfalls, apes in the forrest, permanent rainbow over waterfall",
    "time" : "4 hours in 04/2012"
}, {
    "code" : "Legzira",
    "countryCode": "MA",
    "country" : "Morocco",
    "countryPath" : "Morocco",
    "city" : "Legzira and other Morocco shores",
    "tripName" : "(amazing and wild trip through Morocco with Ales, Janka, Adam and Andrej)",
    "desc" : "beautiful beach with unbelievable arches, best beach in terms of country scenery, it's my profile photo :)",
    "time" : "1 day in 04/2012"
}, {
    "code" : "Bangkok",
    "countryCode": "TH",
    "country" : "Thailand",
    "city" : "Bangkok",
    "tripName" : "(traveling Asia with Ivanko, Martin, Zuzka and Pali)",
    "desc" : "party on Khaosan Road, visiting temples, unbearable humidity and hot",
    "time" : "4 days in 02/2016"
},
{
    "code" : "Siemp_Reap",
    "countryCode": "KH",
    "country" : "Cambodia",
    "city" : "Siemp Reap",
    "tripName" : "(traveling Asia with Ivanko, Martin, Zuzka and Pali)",
    "desc" : "accommodation in nice hotel and making trips to city center, Angkor Wat and Tonle Sap",
    "time" : "1 day in 02/2016"
},
{
    "code" : "Angkor_Wat",
    "countryCode": "KH",
    "country" : "Cambodia",
    "city" : "Angkor Wat",
    "tripName" : "(traveling Asia with Ivanko, Martin, Zuzka and Pali)",
    "desc" : "sighseeing and biking in the largest temple complex in the world",
    "time" : "3 days in 02/2016"
},
{
    "code" : "Tonle_Sap",
    "countryCode": "KH",
    "country" : "Cambodia",
    "countryPath" : "Cambodia",
    "city" : "Tonle Sap",
    "tripName" : "(traveling Asia with Ivanko, Martin, Zuzka and Pali)",
    "desc" : "visiting largest freshwater lake in Southeast Asia and people living in the stilt houses",
    "time" : "4 hours in 02/2016"
},
{
    "code" : "Chiang_Rai",
    "countryCode": "TH",
    "country" : "Thailand",
    "countryPath" : "Thailand",
    "city" : "Chiang Rai",
    "tripName" : "(traveling Asia with Ivanko, Martin, Zuzka and Pali)",
    "desc" : "visiting amazing temple, first rain and also cold weather, trips and hikes to hill tribe villages",
    "time" : "3 days in 02/2016"
},		{
    "code" : "Karen_Village",
    "countryCode": "TH",
    "country" : "Thailand",
    "countryPath" : "Thailand",
    "city" : "Karen (Long neck) village",
    "tripName" : "(traveling Asia with Ivanko, Martin, Zuzka and Pali)",
    "desc" : "visiting hill tribe village known for a long neck women",
    "time" : "3 hours in 02/2016"
},
{
    "code" : "Ko_Samet",
    "countryCode": "TH",
    "country" : "Thailand",
    "city" : "Ko Samet",
    "tripName" : "(traveling Asia with Ivanko, Martin, Zuzka and Pali)",
    "desc" : "exploring island by bikes, relaxing on the beach, enjoying food and massages",
    "time" : "4 days in 02/2016"
},{
    "code" : "Chiang_Mai",
    "countryCode": "TH",
    "country" : "Thailand",
    "countryPath" : "Thailand",
    "city" : "Chiang Mai",
    "tripName" : "(traveling Asia with Ivanko, Martin, Zuzka and Pali)",
    "desc" : "visiting and drinking thai, college bar, celebrating my birthday",
    "time" : "5 hours in 02/2016"
},
{
    "code" : "Lahu_Village",
    "countryCode": "TH",
    "country" : "Thailand",
    "countryPath" : "Thailand",
    "city" : "Lahu village",
    "tripName" : "(traveling Asia with Ivanko, Martin, Zuzka and Pali)",
    "desc" : "hiking in the thai jungle full of elephant shit, lunch with homemade cutlery, one night in the bamboo house with locals",
    "time" : "2 days in 02/2016"
},
{
    "code" : "Athens",
    "countryCode": "GR",
    "country" : "Greece",
    "countryPath" : "Greece",
    "city" : "Athens",
    "tripName" : "",
    "desc" : "exploring amazing temples and ancient history in ancient city with Sasky, meeting refugees, enjoying greek meal",
    "time" : "4 days in 04/2016"
},
{
    "code" : "Rovinj",
    "countryCode": "HR",
    "country" : "Croatia",
    "countryPath" : "Croatia",
    "city" : "Rovinj",
    "tripName" : "(Me with Sasky, Pedro, Diki and Osvi)",
    "desc" : "relaxing vacation, tennis playing, biking, enjoying sea food, dolphin watching, paddleboarding",
    "time" : "4 days in 07/2016"
},
{
    "code" : "Balaton",
    "countryCode": "HU",
    "country" : "Hungary",
    "city" : "Balaton lake",
    "tripName" : "",
    "desc" : "biking around Balaton, visiting levander Tihany, enjoying shallow water, surprising, disgusting food",
    "time" : "3 days in 08/2016"
},
{
    "code" : "Olomouc",
    "countryCode": "CZ",
    "country" : "Czech Republic",
    "countryPath": "Czech_Republic",
    "city" : "Olomouc",
    "tripName" : "(sightseeing just with my two wheels partner - bike)",
    "desc" : "sightseeing, biking in the rain, historical city full of the churches, square in UNESCO",
    "time" : "1 day in 10/2016"
},
{
    "code" : "Fuerteventura",
    "countryCode": "ES",
    "country" : "Spain",
    "city" : "Fuerteventura (Canary Islands)",
    "tripName" : "(relaxing week with Osvi)",
    "desc" : "change Slovak winter (5 Celsia) for Canarian spring (24 Celsia), sunbathing, chillout, traveling around island, first time with surf, got robbed",
    "time" : "1 week in 11/2016"
},
{
    "code" : "Taba",
    "countryCode": "EG",
    "country" : "Egypt",
    "city" : "Taba",
    "tripName" : "(three states in the middle east in one week with Sasky)",
    "desc" : "",
    "time" : "3 days in 12/2016"
},
{
    "code" : "Eilat",
    "countryCode": "IL",
    "country" : "Israel",
    "city" : "Eilat",
    "tripName" : "(three states of the middle east in one week with Sasky)",
    "desc" : "",
    "time" : "1 day in 12/2016"
},
{
    "code" : "Aqaba",
    "countryCode": "Jo",
    "country" : "Jordan",
    "city" : "Aqaba",
    "tripName" : "(three states of the middle east in one week with Sasky)",
    "desc" : "",
    "time" : "1 day in 12/2016"
}
,
{
    "code" : "Wadi_Musa",
    "countryCode": "Jo",
    "country" : "Jordan",
    "city" : "Wadi Musa",
    "tripName" : "(three states of the middle east in one week with Sasky)",
    "desc" : "",
    "time" : "2 days in 12/2016"
},
{
    "code" : "Petra",
    "countryCode": "Jo",
    "country" : "Jordan",
    "city" : "Petra",
    "tripName" : "(three states of the middle east in one week with Sasky)",
    "desc" : "",
    "time" : "2 days in 12/2016"
}
]

export {trips};