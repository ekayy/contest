$(function(){
	var tags = [ "1300 On Fillmore", 
"54 Mint - Vineria Ristorante", 
"5A5 Steak Lounge", 
"A La Turca", 
"A16", 
"Absinthe", 
"Acquerello", 
"Aicha Moroccan Cuisine", 
"Akiko's Restaurant", 
"Alamo Square Seafood Grill", 
"Albona Ristorante Istriano", 
"Alegrias", 
"Alexander's Steakhouse", 
"Alice's Restaurant", 
"Allegro Romano", 
"Amasia Hide's Sushi Bar", 
"Amber India", 
"Ame", 
"Anchor Oyster Bar", 
"Angkor Borei", 
"Aperto Restaurant", 
"AQ Restaurant & Bar", 
"Arabian Nights", 
"Arang", 
"Arinell Pizza", 
"Arlequin Cafe", 
"Auntie April's Chicken n Waffles", 
"Aziza", 
"B Star Bar", 
"Baker & Banker", 
"Bar Agricole", 
"Bar Bambino Cafe and Wine Bar", 
"Bar Crudo", 
"Bar Jules", 
"Bar Tartine", 
"Barbacco", 
"Beast and The Hare", 
"Bella Trattoria", 
"Benu", 
"Beretta", 
"Betelnut", 
"Bi-Rite Creamery", 
"Bisou", 
"Bistro Aix", 
"Bistro Central Parc", 
"Bix Restaurant", 
"Boboquivari's", 
"Bocadillos", 
"Bouche", 
"Boulevard", 
"Bourbon & Branch", 
"Boxing Room", 
"Brenda's French Soul Food", 
"Broken Record", 
"Bund Shanghai", 
"Burma Superstar", 
"Cafe Claude", 
"Cafe Du Nord", 
"Cafe Jacqueline", 
"Campton Place Restaurant", 
"Candybar", 
"Canela", 
"Canteen", 
"Capannina", 
"Capital Restaurant", 
"Cha Cha Cha", 
"Cha-Ya Vegetarian Japanese", 
"Chapeau!", 
"Chez Maman", 
"Chez Papa Bistrot", 
"Chez Papa Resto", 
"Chez Spencer", 
"Chiaroscuro", 
"Christopher Elbow Artisanal Chocolate", 
"Cinderella Bakery and Cafe", 
"Cioppino's", 
"Citizen's Band", 
"Coco500", 
"Coffee Bar", 
"Coi", 
"Colibri Mexican Bistro", 
"Commonwealth", 
"Contigo", 
"Cotogna", 
"Crab House At Pier 39", 
"Craftsman & Wolves", 
"Delarosa", 
"Delfina", 
"Don Pisto's", 
"Dong Bei Mama", 
"Dosa on Fillmore", 
"Dosa on Valencia", 
"Dottie's True Blue Cafe", 
"Dynamo Donut and Coffee", 
"E'Tutto Qua", 
"El Metate", 
"Emmy's Spaghetti Shack", 
"Esperpento", 
"Espetus Churrascaria", 
"Etcetera Wine Bar", 
"Farallon", 
"Farina Focaccia & Cucina Italiana", 
"farm:table", 
"Farmerbrown", 
"Farmerbrown's Little Skillet", 
"Fifth Floor", 
"Fino Restaurant", 
"Firefly", 
"Firenze by Night Ristorante", 
"Fleur De Lys", 
"Flour + Water", 
"Forbes Island", 
"Foreign Cinema", 
"Four Barrel Coffee", 
"Frances", 
"Franchino", 
"Frascati", 
"Fresca", 
"Fringale", 
"Gallardos Mexican Food", 
"Gamine", 
"Gary Danko", 
"Georges", 
"Gialina", 
"Gitane", 
"Golden Era Vegetarian Restaurant", 
"Goood Frikin' Chicken", 
"Gracias Madre", 
"Greenburger's", 
"Greens", 
"Gyro King", 
"Hakka Restaurant", 
"Hard Knox Cafe", 
"Harris' Restaurant", 
"Heirloom Cafe", 
"Helmand Palace", 
"Hillstone", 
"Hog & Rocks", 
"Hog Island Oyster Co.", 
"House of Prime Rib", 
"Humphry Slocombe Ice Cream", 
"Hyde Street Seafood House and Raw Bar", 
"Incanto", 
"Ino Sushi", 
"Ironwood BBQ", 
"Isa", 
"Izakaya Sozai", 
"Jardiniere", 
"Kabuto Restaurant", 
"Kazu Sushi", 
"Keiko à Nob Hill", 
"Kingdom of Dumplings", 
"Kiss Seafood", 
"Knead Patisserie", 
"Kokkari Estiatorio", 
"L'ardoise BIstro", 
"L'Osteria Del Forno", 
"La Bricola", 
"La Ciccia", 
"La Folie", 
"La Mar Cebicheria Peruana", 
"La Palma Mexicatessen", 
"La Santaneca De La Mission", 
"La Torta Gorda", 
"Lahore Karahi", 
"Las Tinajas", 
"Lavash", 
"Le Charm French Bistro", 
"Le P'tit Laurent", 
"Leopold's", 
"Lers Ros", 
"Limón Peruvian Rotisserie", 
"Little Star Pizza", 
"Little Vietnam Cafe", 
"Locanda", 
"Lolo", 
"Loving Hut", 
"Luella", 
"Lupa", 
"Magnolia Gastropub & Brewery", 
"Mama's", 
"Mamacita", 
"Mandalay", 
"Marlowe", 
"Maverick", 
"Michael Mina", 
"Miillennium", 
"Minako Organic Japanese Restaurant", 
"Mission Beach Cafe", 
"Mission Chinese Food", 
"Muguboka", 
"My Tofu House", 
"Nihon Whisky Lounge", 
"Nob Hill Cafe", 
"Nob Hill Grille", 
"Noeteca", 
"Nojo", 
"Nopa", 
"Nopalito", 
"Old Mandarin Islamic", 
"Olea", 
"Out the Door", 
"Outerlands", 
"Oyaji Restaurant", 
"Ozumo", 
"Pacific Cafe", 
"Pagan", 
"Pagolac", 
"Pal's Takeaway", 
"Park Chow", 
"Park Tavern", 
"Pasion", 
"Pauline's Pizza", 
"Perbacco", 
"Pesce", 
"Piccino", 
"Piperade", 
"Pisces California Cuisine", 
"Pizzeria Delfina", 
"Plow", 
"Poc Chuc", 
"Poesia", 
"PPQ Dungeness Island", 
"Prospect", 
"Queen's Louisiana Po-Boy Cafe", 
"Quince", 
"R&G Lounge", 
"Ragazza", 
"Range", 
"Red Door Cafe", 
"Revolution Cafe", 
"Rich Table", 
"Ristorante Milano", 
"Roy's Restaurant", 
"Ryoko Restaurant & Bar", 
"Saha", 
"Saison", 
"Sakana Sushi & Grill", 
"Samovar Tea Lounge", 
"San Tung", 
"Sanraku", 
"Schmidt's", 
"Scoma's Restaurant", 
"Serpentine", 
"Seven Hills", 
"Shabu House", 
"Shalimar", 
"Skool", 
"Slanted Door", 
"Slow Club", 
"Sociale", 
"Sodini's Green Valley Restaurant", 
"Sons & Daughters", 
"Sotto Mare", 
"Source", 
"South Sea Seafood Village", 
"SPQR", 
"Spruce", 
"St. Vincent", 
"Starbelly", 
"State Bird Provisions", 
"Stella Pastry & Cafe", 
"Straw", 
"Street", 
"Suppenkuche", 
"Sushi Zone", 
"Swan Oyster Depot", 
"Sycamore", 
"Tadich Grill", 
"Tanuki Restaurant", 
"Tartine Bakery", 
"Terzo", 
"Thai Idea Vegetarian", 
"The Alembic", 
"The Blue Plate", 
"The Butler & The Chef Bistro", 
"The Cigar Bar & Grill", 
"The Codmother Fish and Chips", 
"The Corner Store", 
"The Front Porch", 
"The House", 
"The Monk's Kettle", 
"The Richmond", 
"The Rotunda", 
"The Sentinel", 
"Tommaso's Ristorante Italiano", 
"Tony's Pizza Napoletana", 
"Trattoria Contadina", 
"Tropisueno", 
"Txoko", 
"Umami Burger", 
"Universal Cafe", 
"Vicoletto", 
"Walzwerk", 
"Wayfare Tavern", 
"Weird Fish", 
"Wexler's", 
"Woodhouse Fish Company", 
"YakiniQ Cafe", 
"Yank Sing", 
"Yummy Yummy", 
"Zare at Fly Trap", 
"Zarzuela", 
"Zazie", 
"Zero Zero", 
"Zuni Cafe", 
"Zushi Puzzle" ];
	$( "#autocomplete" ).autocomplete({
	    source: function( request, response ) {
	            var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
	            response( $.grep( tags, function( item ){
	                return matcher.test( item );
	            }) );
	        }
	});
});


