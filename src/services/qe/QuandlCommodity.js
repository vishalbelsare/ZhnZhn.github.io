
let QuandlCommodity = {};

let commodityTypes = [
        { caption: "A Metal", value: "a-metal"},
		   	{ caption: "Metal", value: "metal"},
		   	{ caption: "Grain", value: "grain"},
		   	{ caption: "Farms & Fishery", value: "farm"},
		   	{ caption: "Cruide Oil", value: "cruide"},
		   	{ caption: "Gasoline", value: "gasoline"},
		   	{ caption: "Natural Gas", value: "gas"},
		   	{ caption: "Coal", value: "coal"},
		   	{ caption: "Agriculture Soft", value: "soft"},
		   	{ caption: "Fruits & Nuts", value: "fruit"},
		   	{ caption: "Vegetable Oil", value: "oil"},
		   	{ caption: "Foresty", value: "foresty"},
		   	{ caption: "Textile & Fibres", value: "textile"},
		   	{ caption: "Fertilizers & Chemicals", value: "chemical"},
		   	{ caption: "Commodity Indexes", value: "indexe"},
];

const aMetal = [
 { caption: "Gold, London P.M. Fixing", value: "OFDP/GOLD_2"},
 { caption: "Gold, Engelhard industrial bullion", value: "WSJ/AU_EIB"},
 { caption: "Gold, Engelhard fabricated products", value: "WSJ/AU_EFP"},
 { caption: "Gold, Handy & Harman base", value: "WSJ/AU_HHB"},
 { caption: "Gold, Handy & Harman fabric", value: "WSJ/AU_HHF"},
 { caption: "Gold, Krugerrand, wholesale", value: "WSJ/AU_ZAR"},
 { caption: "Gold, Maple Leaf", value: "WSJ/AU_MPL"},
 { caption: "Gold, American Eagle", value: "WSJ/AU_EGL"},
 { caption: "Gold, Mexican peso", value: "WSJ/AU_MXP"},
 { caption: "Gold, Austria crown", value: "WSJ/AU_CRN"},
 { caption: "Gold, Austria phil", value: "WSJ/AU_PHL"},
 { caption: "Gold, World Gold Council", value: "WGC/GOLD_DAILY_USD"},
 { caption: "Gold, Bundesbank", value: "BUNDESBANK/BBK01_WT5511"},
 { caption: "Gold, COMEX Gold Futures", value: "OFDP/FUTURE_GC1"},
 { caption: "Gold, Shanghai Gold Futures", value: "SHFE/AUV2013"},
 { caption: "Gold, World Bank", value: "WORLDBANK/WLD_GOLD"},
 { caption: "Silver, Engelhard industrial bullion", value: "WSJ/AG_EIB"},
 { caption: "Silver, Engelhard fabricated products", value: "WSJ/AG_EFP"},
 { caption: "Silver, Handy & Harman base", value: "WSJ/AG_HHB"},
 { caption: "Silver, Handy & Harman fabric", value: "WSJ/AG_HHF"},
 { caption: "Silver, London fixing, USD equivalent", value: "OFDP/SILVER_5"},
 { caption: "Silver, Silver Coins, wholesale", value: "WSJ/AG_CNF"},
 { caption: "Silver, Shanghai Silver Futures", value: "SHFE/AGV2013"},
 { caption: "Silver, COMEX Silver Futures", value: "OFDP/FUTURE_SI1"},
 { caption: "Silver, World Bank", value: "WORLDBANK/WLD_SILVER"},
 { caption: "Platinum, Free Market", value: "WSJ/PL_MKT"},
 { caption: "Platinum, Engelhard industrial bullion", value: "WSJ/PL_EIB"},
 { caption: "Platinum, Engelhard fabricated products", value: "WSJ/PL_EFP"},
 { caption: "Platinum, Johnson Mathey London", value: "JOHNMATT/PLAT"},
 { caption: "Platinum, NYMEX Platinum Futures", value: "OFDP/FUTURE_PL1"},
 { caption: "Palladium, Engelhard industrial bullion", value: "WSJ/PA_EFP"},
 { caption: "Palladium, Engelhard fabricated products", value: "WSJ/PA_EFP"},
 { caption: "Palladium, Johnson Mathey London", value: "JOHNMATT/PALL"},
 { caption: "Palladium, NYMEX Palladium Futures", value: "OFDP/FUTURE_PA1"},
 { caption: "Iridium", value: "JOHNMATT/IRID"},
 { caption: "Rhodium", value: "JOHNMATT/RHOD"},
 { caption: "Ruthenium", value: "JOHNMATT/RUTH"},
];
const metal = [
       { caption: "Aluminum, LME", value: "OFDP/ALUMINIUM_21"},
		   { caption: "Aluminum, Ryan's Notes", value: "WSJ/AL_RYN"},
		   { caption: "Aluminum, ODA", value: "ODA/PALUM_USD"},
		   { caption: "Shanghai Aluminum Futures", value: "SHFE/ALV2013"},
		   { caption: "Cobalt, LME", value: "OFDP/COBALT_51"},
		   { caption: "Copper, LME", value: "OFDP/COPPER_6"},
		   { caption: "Copper, high grade, Comex spot", value: "WSJ/COPPER"},
		   { caption: "Copper, ODA", value: "ODA/PCOPP_USD"},
		   { caption: "Copper Futures", value: "OFDP/FUTURE_HG1"},
		   { caption: "Shanghai Copper Futures", value: "SHFE/CUV2013"},
		   { caption: "Iron Ore, 62% Fe CFR China", value: "WSJ/FE_TJN"},
		   { caption: "Iron Ore, Tianjin (ODA)", value: "ODA/PIORECR_USD"},
		   { caption: "Lead, LME", value: "OFDP/LEAD_31"},
		   { caption: "Lead, N. Am. Solder", value: "WSJ/LEAD"},
		   { caption: "Lead, ODA", value: "ODA/PLEAD_USD"},
		   { caption: "Shanghai Lead Futures", value: "SHFE/PBV2013"},
		   { caption: "Molybdenum, LME", value: "OFDP/MOLYBDENUM_56"},
		   { caption: "Nickel, LME ", value: "OFDP/NICKEL_41"},
		   { caption: "Nickel, ODA ", value: "ODA/PNICK_USD"},
		   { caption: "Steel Billet, LME", value: "OFDP/STEELBILLET_46"},
		   { caption: "Shredded Scrap, US Midwest", value: "WSJ/SH_SCRP"},
		   { caption: "Stainless Steel Scrap, US", value: "WSJ/ST_SCRP"},
		   { caption: "Steel, Hot-Rolled Coil US, FOB Midwest Mill", value: "WSJ/STEEL"},
		   { caption: "Steel Wire", value: "WORLDBANK/WLD_STL_JP_WIROD"},
		   { caption: "Shanghai Steel Rebar Futures", value: "SHFE/RBV2013"},
		   { caption: "Shanghai Steel Wire Futures", value: "SHFE/WRV2013"},
		   { caption: "Tin, LME", value: "OFDP/TIN_36"},
		   { caption: "Tin, N. Am. solder", value: "WSJ/TIN"},
		   { caption: "Tin, ODA", value: "ODA/PTIN_USD"},
		   { caption: "Zinc, LME", value: "OFDP/ZINC_26"},
		   { caption: "Zinc, N. Am", value: "WSJ/ZINC"},
		   { caption: "Zinc, ODA", value: "ODA/PZINC_USD"},
		   { caption: "Shanghai Zinc Futures", value: "SHFE/ZNV2013"},
];
const grain =[
       { caption: "Barley, Top-quality Minneapolis", value: "WSJ/BARLEY"},
		   { caption: "Barley, Western Canada (ODA)", value: "ODA/PBARL_USD"},
		   { caption: "Barley, Western Canada (WB)", value: "WORLDBANK/WLD_BARLEY"},
		   { caption: "Corn, Top Flight Grain Co-op", value: "TFGRAIN/CORN"},
		   { caption: "Corn, Central Illinois No. 2 Yellow", value: "WSJ/CORN_2"},
		   { caption: "Corn, CBOT Corn Futures", value: "OFDP/FUTURE_C1"},
		   { caption: "Corn, Corn Gluten Feed, Midwest", value: "WSJ/CORN_FEED"},
		   { caption: "Corn, Corn Gluten Meal, Midwest", value: "WSJ/CORN_MEAL"},
		   { caption: "Corn, U.S. Gulf Imports", value: "WORLDBANK/WLD_MAIZE"},
		   { caption: "Corn, No. 2 Milling Minneapolis", value: "WSJ/OATS"},
		   { caption: "Oats, CBOT Oats Futures", value: "OFDP/FUTURE_O1"},
		   { caption: "Oats, 5% Broken White, Thailand", value: "WSJ/RICE_THAI"},
		   { caption: "Rice, Thailand (ODA)", value: "ODA/PRICENPQ_USD"},
		   { caption: "Rice, No. 2 Long Grain Milled", value: "WSJ/RICE_2"},
		   { caption: "Rice, CBOT Rice Futures ", value: "OFDP/FUTURE_RR1"},
		   { caption: "Rice, Top Flight Grain Co-op", value: "TFGRAIN/SOYBEANS"},
		   { caption: "Soybean, No. 1 Yellow, Illinois", value: "WSJ/SOYB_1"},
		   { caption: "Soybean, CBOT Soybean Futures", value: "OFDP/FUTURE_S1"},
		   { caption: "Soybean, Soybean Meal, Central Illinois", value: "WSJ/SOYB_MEAL"},
		   { caption: "Soybean, CBOT Soybean Meal Futures", value: "OFDP/FUTURE_SM1"},
		   { caption: "Soybean, Soybean Oil, Crude, Central Illinois", value: "WSJ/SOYB_OIL"},
		   { caption: "Wheat, Soybean Oil", value: "WORLDBANK/WLD_SOYBEAN_OIL"},
		   { caption: "Wheat, CBOT Soybean Oil Futures", value: "OFDP/FUTURE_BO1"},
		   { caption: "Wheat, Spring 14% protein, Minneapolis", value: "WSJ/WHEAT_MN"},
		   { caption: "Wheat, No. 2 Soft Red, St Louis", value: "WSJ/WHEAT_2"},
		   { caption: "Wheat, Hard, Kansas City", value: "WSJ/WHEAT_KC"},
		   { caption: "Wheat, No. 1 Soft White, Portland OR", value: "WSJ/WHEAT_1"},
		   { caption: "Wheat, Gulf of Mexico", value: "ODA/PWHEAMT_USD"},
		   { caption: "Wheat, CBOT Wheat Futures ", value: "OFDP/FUTURE_W1"},
		   { caption: "Wheat, Kansas City Bran", value: "WSJ/BRAN"},
		   { caption: "Kansas City Flour", value: "WSJ/FLOUR"},
		   { caption: "Sorghum", value: "WSJ/SORGHUM"},
];
const farm = [
  { caption: "Dairy, Milk, Non-Fat Dry, Chicago", value: "WSJ/MILK"},
  { caption: "Dairy, CME Milk Futures", value: "OFDP/FUTURE_DA1"},
  { caption: "Dairy, Cheddar Cheese, Barrels, Chicago", value: "WSJ/CHEESE_BRL"},
  { caption: "Dairy, Cheddar Cheese, Blocks, Chicago", value: "WSJ/CHEESE_BLK"},
  { caption: "Cattle, Beef, choice grades 1-3", value: "WSJ/BEEF_C"},
  { caption: "Cattle, Beef, select grades 1-3", value: "WSJ/BEEF_S"},
  { caption: "Cattle, Beef (ODA)", value: "ODA/PBEEF_USD"},
  { caption: "Cattle, CME Live Cattle Futures", value: "OFDP/FUTURE_LC1"},
  { caption: "Cattle, CME Feeder Cattle Futures", value: "OFDP/FUTURE_FC1"},
  { caption: "Cattle, Cattle Hides", value: "WSJ/HIDES"},
  { caption: "Cattle, Hides, Chicago (ODA)", value: "ODA/PHIDE_USD"},
  { caption: "Cattle, Steers, Texas-Oklahoma average", value: "WSJ/STEERS"},
  { caption: "Cattle, Steers, feeder, Oklahoma city average", value: "WSJ/FEEDER"},
  { caption: "Cattle, Broiler chickens, dressed ‘A’ grade", value: "WSJ/CHKN_A"},
  { caption: "Poulty, Broiler chickens, national composite weighted average", value: "WSJ/CHKN_NTL"},
  { caption: "Poulty, Chicken, Georgia (ODA)", value: "ODA/PPOULT_USD"},
  { caption: "Poulty, Eggs, Large White, Chicago", value: "WSJ/EGGS"},
  { caption: "Poulty, Hams, 17-20 lbs, Mid US FOB", value: "WSJ/HAMS"},
  { caption: "Pork, Hogs, Iowa-South Minnesota average", value: "WSJ/HOGS"},
  { caption: "Pork, Pork Bellies, 12-14 lbs, Mid US", value: "WSJ/PBELLY"},
  { caption: "Pork, Pork Loins, 13-19 lbs, Mid US", value: "WSJ/PLOIN"},
  { caption: "Pork, Pork, Chicago (ODA)", value: "ODA/PPORK_USD"},
  { caption: "Pork, CME Lean Hog Futures", value: "OFDP/FUTURE_LN1"},
  { caption: "Pork, Butter, AA Chicago", value: "WSJ/BUTTER"},
  { caption: "Fats, Grease, Choice White, Chicago", value: "WSJ/GREASE"},
  { caption: "Fats, Lard, Chicago", value: "WSJ/LARD"},
  { caption: "Fats, Tallow, Bleachable, Chicago", value: "WSJ/TALLOW_B"},
  { caption: "Fats, Tallow, Edible, Chicago", value: "WSJ/TALLOW_E"},
  { caption: "Fats, Lamb", value: "ODA/PLAMB_USD"},
  { caption: "Wool", value: "ODA/PWOOLC_USD"},
  { caption: "Salmon", value: "ODA/PSALM_USD"},
  { caption: "Shrimp", value: "ODA/PSHRI_USD"},
  { caption: "Fishmeal", value: "ODA/PFISH_USD"},
];
const cruide = [
       { caption: "NYMEX RBOB Gasoline Futures", value: "OFDP/FUTURE_RB1"},
		   { caption: "NYMEX Crude Oil Futures", value: "OFDP/FUTURE_CL1"},
		   { caption: "ICE Brent Crude Oil Futures", value: "OFDP/FUTURE_B1"},
		   { caption: "U.S. Landed Costs of Canadian Light Sour Blend Crude Oil", value: "DOE/I19263000008"},
		   { caption: "Los Angeles Reformulated RBOB Regular Gasoline Spot", value: "DOE/EER_EPMRR_PF4_Y05LA_DPG"},
		   { caption: "WTI Crude Oil Spot Cushing, OK FOB", value: "DOE/RWTC"},
		   { caption: "Europe Brent Crude Oil Spot FOB", value: "DOE/RBRTE"},
		   { caption: "U.S. FOB Costs of Non-OPEC Countries Crude Oil", value: "DOE/I070000004"},
		   { caption: "U.S. FOB Costs of OPEC Countries Crude Oil", value: "DOE/I060000004"},
		   { caption: "Crude Oils from 1861", value: "BRP/CRUDE_OIL_PRICES"},
		   { caption: "OPEC Reference Basket", value: "OPEC/ORB"},
		   { caption: "Dubai Crude Oil", value: "ODA/POILDUB_USD"},
		   { caption: "Blended Crude Oil", value: "ODA/POILAPSP_USD"},
		   { caption: "WTI Crude Oil", value: "ODA/POILWTI_USD"},
		   { caption: "Brent Crude Oil", value: "ODA/POILBRE_USD"},
];
const gasoline = [
       { caption: "EU & Central Asia : Pump for gasoline (US$ per liter)", value: "WORLDBANK/ECS_EP_PMP_SGAS_CD"},
		   { caption: "US Midgrade Conventional Gas", value: "FRED/GASMIDCOVW"},
		   { caption: "Conventional Gasolines: New York Harbor, Regular", value: "FRED/DGASNYH"},
		   { caption: "US Regular Conventional Gas", value: "FRED/GASREGCOVW"},
		   { caption: "Conventional Gasolines: U.S. Gulf Coast, Regular", value: "FRED/DGASUSGULF"},
		   { caption: "Consumer Index for All Urban Consumers: Gasoline (all types)", value: "FRED/CUUR0000SETB01"},
		   { caption: "US All Grades Conventional Gas", value: "FRED/GASALLCOVW"},
];
const gas = [
         { caption: "NYMEX Natural Gas Futures", value: "OFDP/FUTURE_NG1"},
			   { caption: "ICE UK Natural Gas Futures", value: "OFDP/FUTURE_M1"},
			   { caption: "Natural Gas, Transco Zone 3", value: "WSJ/NG_TRAN3"},
			   { caption: "Natural Gas, Panhandle East", value: "WSJ/NG_PHE"},
			   { caption: "Natural Gas, Opal ", value: "WSJ/NG_OPAL"},
			   { caption: "Natural Gas, Haynesville N. LA", value: "WSJ/NG_HAYN"},
			   { caption: "Natural Gas, Transco Zone 6 NY", value: "WSJ/NG_TRAN6"},
			   { caption: "Natural Gas, Marcellus NE PA", value: "WSJ/NG_MARC"},
			   { caption: "Natural Gas, Henry Hub", value: "WSJ/NG_HH"},
			   { caption: "Natural Gass (vs. Crude)", value: "BRP/GAS_PRICES"},
			   { caption: "Germany Natural Gas", value: "ODA/PNGASEU_USD"},
			   { caption: "Henry Hub Natural Gas", value: "ODA/PNGASUS_USD"},
			   { caption: "Japan Natural Gas", value: "ODA/PNGASJP_USD"},
			   { caption: "Natural Gas: Henry Hub, LA", value: "FRED/GASPRICE"},
			   { caption: "Import (End Use): Gas-natural", value: "FRED/IR10110"},
];
const coal = [
       { caption: "U.S. Coals, 1949-2005", value: "EPI/152"},
		   { caption: "US Coals by Region", value: "DOE/COAL"},
		   { caption: "Coals, BRP", value: "BRP/COAL_PRICES"},
		   { caption: "Coal, South African export Monthly", value: "INDEXMUNDI/COMMODITY_COALSOUTHAFRICANEXPORTPRICE"},
		   { caption: "Coal, ODA", value: "ODA/PCOALAU_USD"},
		   { caption: "Coal, Australia", value: "WORLDBANK/WLD_COAL_AUS"},
		   { caption: "Coal Exports, for Great Britain", value: "FRED/M04111GBM318NNBR"},
		   { caption: "Wholesale of Coal for Essen, Germany", value: "FRED/M04I1ADE00ESSM372NNBR"},
];
const soft = [
       { caption: "Arabica Coffee", value: "ODA/PCOFFOTM_USD"},
		   { caption: "Robusta Coffee", value: "ODA/PCOFFROB_USD"},
		   { caption: "Coffee Futures", value: "OFDP/FUTURE_KC1"},
		   { caption: "Cocoa beans", value: "ODA/PCOCO_USD"},
		   { caption: "Cocoa Futures", value: "OFDP/FUTURE_CC1"},
		   { caption: "Tobacco", value: "WORLDBANK/WLD_TOBAC_US"},
		   { caption: "Tea", value: "ODA/PTEA_USD"},
		   { caption: "Tea, Mombasa auctions", value: "WORLDBANK/WLD_TEA_MOMBASA"},
		   { caption: "US Imports Sugar", value: "ODA/PSUGAUSA_USD"},
		   { caption: "Sugar No. 11 Futures", value: "OFDP/FUTURE_SB1"},
];
const fruit = [
      { caption: "Groundnuts (Peanuts)", value: "ODA/PGNUTS_USD"},
		  { caption: "Oranges", value: "ODA/PORANG_USD"},
			{ caption: "Orange Juice Futures", value: "OFDP/FUTURE_OJ1"},
			{ caption: "Bananas", value: "ODA/PBANSOP_USD"},
			{ caption: "Bananas, US", value: "WORLDBANK/WLD_BANANA_US"},
];
const oil = [
       { caption: "Corn Oil, Crude Wet/Dry Mill", value: "WSJ/CORN_OIL"},
		   { caption: "Rapeseed Oil", value: "ODA/PROIL_USD"},
		   { caption: "Sunflower Oil", value: "ODA/PSUNO_USD"},
		   { caption: "Olive Oil", value: "ODA/POLVOIL_USD"},
		   { caption: "Palm Oil", value: "ODA/PPOIL_USD"},
		   { caption: "Palmkernal oil", value: "WORLDBANK/WLD_PLMKRNL_OIL"},
		   { caption: "Groundnut oil", value: "WORLDBANK/WLD_GRNUT_OIL"},
];
const foresty = [
  { caption: "Hard Logs", value: "ODA/PLOGSK_USD"},
  { caption: "Soft Logs", value: "ODA/PLOGORE_USD"},
  { caption: "Copra", value: "WORLDBANK/WLD_COPRA"},
  { caption: "Soft Sawnwood", value: "ODA/PSAWORE_USD"},
  { caption: "Hard Sawnwood", value: "ODA/PSAWMAL_USD"},
  { caption: "Woodpulp", value: "WORLDBANK/WLD_WOODPULP"},
  { caption: "Plywood", value: "WORLDBANK/WLD_PLYWOOD"},
  { caption: "Lumber Futures", value: "OFDP/FUTURE_LB1"},
  { caption: "Rubber", value: "ODA/PRUBB_USD"},
];
const textile = [
  { caption: "Cotton", value: "ODA/PCOTTIND_USD"},
  { caption: "Cotton, 1 1/16 strand lw-md Memphis", value: "WSJ/COTTON"},
  { caption: "Cotton No. 2 Futures", value: "OFDP/FUTURE_CT1"},
  { caption: "Wool, 64’s, Staple, Terr. Delivery", value: "WSJ/WOOL"},
  { caption: "Burlap, 10-oz, 40-inch NY yard nominal", value: "WSJ/BURLAP"},
  { caption: "Cotlook ‘A’ Index", value: "WSJ/COTLOOK"}
];
const chemical = [
  { caption: "Urea, E. Europe, bulk", value: "WORLDBANK/WLD_UREA_EE_BULK"},
  { caption: "Phosphate rock Pric", value: "WORLDBANK/WLD_PHOSROCK"},
  { caption: "Potash (Potassium Chloride)", value: "WORLDBANK/WLD_POTASH"},
  { caption: "TSP", value: "WORLDBANK/WLD_TSP"},
  { caption: "DAP", value: "WORLDBANK/WLD_DAP"},
];
const indexe = [
  { caption: "Fertilizers Index, 2000=100" ,value: "WORLDBANK/WLD_IFERTILIZERS"},
  { caption: "Food Index, 2000=100", value: "WORLDBANK/WLD_IFOOD"},
  { caption: "1 Timber Index, 2000=100", value: "WORLDBANK/WLD_ITIMBER"},
  { caption: "Metals and minerals Index, 2000=100", value: "WORLDBANK/WLD_IMETMIN"},
  { caption: "Beverages Index, 2000=100", value: "WORLDBANK/WLD_IBEVERAGES"},
  { caption: "Energy Index, 2000=100", value: "WORLDBANK/WLD_IENERGY"},
  { caption: "Non-energy commodities Index, 2000=100", value: "WORLDBANK/WLD_INONFUEL"},
  { caption: "Fats and oils Index, 2000=100", value: "WORLDBANK/WLD_IFATS_OILS"},
  { caption: "Agriculture Index, 2000=100", value:"WORLDBANK/WLD_IAGRICULTURE"},
  { caption: "Grains Index, 2000=100", value: "WORLDBANK/WLD_IGRAINS"},
  { caption: "Raw materials Index, 2000=100", value:"WORLDBANK/WLD_IRAW_MATERIAL"},
  { caption: "2 Oth raw materials Index, 2000=100", value: "WORLDBANK/WLD_IOTHERRAWMAT"},
  { caption: "Other food Index, 2000=100", value: "WORLDBANK/WLD_IOTHERFOOD"},
];

let hmCommodities = Object.create(null);
hmCommodities['a-metal'] = aMetal;
hmCommodities['metal'] = metal;
hmCommodities['grain'] = grain;
hmCommodities['farm'] = farm;
hmCommodities['cruide'] = cruide;
hmCommodities['gasoline'] = gasoline;
hmCommodities['gas'] = gas;
hmCommodities['coal'] = coal;
hmCommodities['soft'] = soft;
hmCommodities['fruit'] = fruit;
hmCommodities['oil'] = oil;
hmCommodities['foresty'] = foresty;
hmCommodities['textile'] = textile;
hmCommodities['chemical'] = chemical;
hmCommodities['indexe'] = indexe;

QuandlCommodity.getCommodityTypes = function(){
  return commodityTypes;
}

QuandlCommodity.getCommodities = function(commodityValue){
  return hmCommodities[commodityValue];
}

export default QuandlCommodity;
