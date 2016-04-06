
const YahooMilan = {}

const tickets = [
  { ticket:"BEN", value:"YAHOO/MI_BEN", caption:" (BEN)" },
{ ticket:"BNG", value:"YAHOO/MI_BNG", caption:" (BNG)" },
{ ticket:"CRA", value:"YAHOO/MI_CRA", caption:" (CRA)" },
{ ticket:"EDN", value:"YAHOO/MI_EDN", caption:" (EDN)" },
{ ticket:"EXP", value:"YAHOO/MI_EXP", caption:" (EXP)" },
{ ticket:"EXR", value:"YAHOO/MI_EXR", caption:" (EXR)" },
{ ticket:"FIP", value:"YAHOO/MI_FIP", caption:" (FIP)" },
{ ticket:"FIR", value:"YAHOO/MI_FIR", caption:" (FIR)" },
{ ticket:"FR", value:"YAHOO/MI_FR", caption:" (FR)" },
{ ticket:"FTE", value:"YAHOO/MI_FTE", caption:" (FTE)" },
{ ticket:"ITK", value:"YAHOO/MI_ITK", caption:" (ITK)" },
{ ticket:"ITKRP", value:"YAHOO/MI_ITKRP", caption:" (ITKRP)" },
{ ticket:"LTO", value:"YAHOO/MI_LTO", caption:" (LTO)" },
{ ticket:"MCL", value:"YAHOO/MI_MCL", caption:" (MCL)" },
{ ticket:"PP", value:"YAHOO/MI_PP", caption:" (PP)" },
{ ticket:"RCF", value:"YAHOO/MI_RCF", caption:" (RCF)" },
{ ticket:"RG", value:"YAHOO/MI_RG", caption:" (RG)" },
{ ticket:"SSI", value:"YAHOO/MI_SSI", caption:" (SSI)" },
{ ticket:"VIS", value:"YAHOO/MI_VIS", caption:" (VIS)" },
{ ticket:"YCSM", value:"YAHOO/MI_YCSM", caption:" (YCSM)" },
{ ticket:"YGE", value:"YAHOO/MI_YGE", caption:" (YGE)" },
{ ticket:"YRC", value:"YAHOO/MI_YRC", caption:" (YRC)" },
{ ticket:"YSE", value:"YAHOO/MI_YSE", caption:" (YSE)" },
{ ticket:"A2A", value:"YAHOO/MI_A2A", caption:"A2A (A2A)" },
{ ticket:"ACE", value:"YAHOO/MI_ACE", caption:"ACEA (ACE)" },
{ ticket:"AEG", value:"YAHOO/MI_AEG", caption:"ACEGAS-APS (AEG)" },
{ ticket:"ACO", value:"YAHOO/MI_ACO", caption:"ACOTEL GROUP (ACO)" },
{ ticket:"ACP", value:"YAHOO/MI_ACP", caption:"ACQUE POTABILI (ACP)" },
{ ticket:"ACS", value:"YAHOO/MI_ACS", caption:"ACSM-AGAM (ACS)" },
{ ticket:"AE", value:"YAHOO/MI_AE", caption:"AEDES (AE)" },
{ ticket:"AEF", value:"YAHOO/MI_AEF", caption:"AEFFE (AEF)" },
{ ticket:"AGN", value:"YAHOO/MI_AGN", caption:"AEGON (AGN)" },
{ ticket:"AFI", value:"YAHOO/MI_AFI", caption:"AEROPORTO FIRENZE (AFI)" },
{ ticket:"AGS", value:"YAHOO/MI_AGS", caption:"AGEAS (AGS)" },
{ ticket:"AH", value:"YAHOO/MI_AH", caption:"AHOLD (AH)" },
{ ticket:"AIC", value:"YAHOO/MI_AIC", caption:"AICON (AIC)" },
{ ticket:"AIN", value:"YAHOO/MI_AIN", caption:"AION (AIN)" },
{ ticket:"ALU", value:"YAHOO/MI_ALU", caption:"ALCATEL-LUCENT (ALU)" },
{ ticket:"ARN", value:"YAHOO/MI_ARN", caption:"ALERION CLEAN (ARN)" },
{ ticket:"ALV", value:"YAHOO/MI_ALV", caption:"ALLIANZ N (ALV)" },
{ ticket:"AMB", value:"YAHOO/MI_AMB", caption:"AMBROMOBILIARE SPA (AMB)" },
{ ticket:"AMP", value:"YAHOO/MI_AMP", caption:"AMPLIFON (AMP)" },
{ ticket:"STS", value:"YAHOO/MI_STS", caption:"ANSALDO STS (STS)" },
{ ticket:"AP", value:"YAHOO/MI_AP", caption:"ANTICHI PELLETTIERI (AP)" },
{ ticket:"APP", value:"YAHOO/MI_APP", caption:"APULIA PRONTOP. (APP)" },
{ ticket:"YAI", value:"YAHOO/MI_YAI", caption:"AREA IMPIANTI (YAI)" },
{ ticket:"ARE", value:"YAHOO/MI_ARE", caption:"ARENA (ARE)" },
{ ticket:"ASR", value:"YAHOO/MI_ASR", caption:"AS ROMA (ASR)" },
{ ticket:"ASC", value:"YAHOO/MI_ASC", caption:"ASCOPIAVE (ASC)" },
{ ticket:"AST", value:"YAHOO/MI_AST", caption:"ASTALDI (AST)" },
{ ticket:"AT", value:"YAHOO/MI_AT", caption:"ASTM (AT)" },
{ ticket:"ATL", value:"YAHOO/MI_ATL", caption:"ATLANTIA (ATL)" },
{ ticket:"AGL", value:"YAHOO/MI_AGL", caption:"AUTOGRILL (AGL)" },
{ ticket:"AUTME", value:"YAHOO/MI_AUTME", caption:"AUTOSTR.MERIDIONALI (AUTME)" },
{ ticket:"AXA", value:"YAHOO/MI_AXA", caption:"AXA (AXA)" },
{ ticket:"AZM", value:"YAHOO/MI_AZM", caption:"AZIMUT HOLDING (AZM)" },
{ ticket:"BEC", value:"YAHOO/MI_BEC", caption:"B&C SPEAKERS (BEC)" },
{ ticket:"CRG", value:"YAHOO/MI_CRG", caption:"BANCA CARIGE (CRG)" },
{ ticket:"CRGR", value:"YAHOO/MI_CRGR", caption:"BANCA CARIGE RSP (CRGR)" },
{ ticket:"BFE", value:"YAHOO/MI_BFE", caption:"BANCA FINNAT (BFE)" },
{ ticket:"BGN", value:"YAHOO/MI_BGN", caption:"BANCA GENERALI (BGN)" },
{ ticket:"IF", value:"YAHOO/MI_IF", caption:"BANCA IFIS (IF)" },
{ ticket:"BMPS", value:"YAHOO/MI_BMPS", caption:"BANCA MPS (BMPS)" },
{ ticket:"PRO", value:"YAHOO/MI_PRO", caption:"BANCA PROFILO (PRO)" },
{ ticket:"BP", value:"YAHOO/MI_BP", caption:"BANCO POPOLARE (BP)" },
{ ticket:"SANT", value:"YAHOO/MI_SANT", caption:"BANCO SANTANDER (SANT)" },
{ ticket:"BASF", value:"YAHOO/MI_BASF", caption:"BASF N (BASF)" },
{ ticket:"BAN", value:"YAHOO/MI_BAN", caption:"BASICNET (BAN)" },
{ ticket:"B", value:"YAHOO/MI_B", caption:"BASTOGI (B)" },
{ ticket:"BAY", value:"YAHOO/MI_BAY", caption:"BAYER N (BAY)" },
{ ticket:"BB", value:"YAHOO/MI_BB", caption:"BB BIOTECH N (BB)" },
{ ticket:"BIM", value:"YAHOO/MI_BIM", caption:"BCA INTERMOBILIARE (BIM)" },
{ ticket:"BPE", value:"YAHOO/MI_BPE", caption:"BCA POP. EMILIA R. (BPE)" },
{ ticket:"PMI", value:"YAHOO/MI_PMI", caption:"BCA POP. MILANO (PMI)" },
{ ticket:"BPSO", value:"YAHOO/MI_BPSO", caption:"BCA POP. SONDRIO (BPSO)" },
{ ticket:"SPO", value:"YAHOO/MI_SPO", caption:"BCA POP. SPOLETO (SPO)" },
{ ticket:"PEL", value:"YAHOO/MI_PEL", caption:"BCA POP.ETRUR-LAZIO (PEL)" },
{ ticket:"BDBR", value:"YAHOO/MI_BDBR", caption:"BCO DESIO BR. RNC (BDBR)" },
{ ticket:"BDB", value:"YAHOO/MI_BDB", caption:"BCO DESIO E BRIANZA (BDB)" },
{ ticket:"BSRP", value:"YAHOO/MI_BSRP", caption:"BCO SARDEGNA RSP (BSRP)" },
{ ticket:"BET", value:"YAHOO/MI_BET", caption:"BE (BET)" },
{ ticket:"BE", value:"YAHOO/MI_BE", caption:"BEGHELLI (BE)" },
{ ticket:"BNS", value:"YAHOO/MI_BNS", caption:"BENI STABILI (BNS)" },
{ ticket:"BEST", value:"YAHOO/MI_BEST", caption:"BEST UNION COMPANY (BEST)" },
{ ticket:"BIA", value:"YAHOO/MI_BIA", caption:"BIALETTI INDUSTRIE (BIA)" },
{ ticket:"BCM", value:"YAHOO/MI_BCM", caption:"BIANCAMANO (BCM)" },
{ ticket:"BSS", value:"YAHOO/MI_BSS", caption:"BIESSE (BSS)" },
{ ticket:"BIE", value:"YAHOO/MI_BIE", caption:"BIOERA  (BIE)" },
{ ticket:"BMW", value:"YAHOO/MI_BMW", caption:"BMW (BMW)" },
{ ticket:"BNP", value:"YAHOO/MI_BNP", caption:"BNP PARIBAS-A- (BNP)" },
{ ticket:"BOE", value:"YAHOO/MI_BOE", caption:"BOERO BARTOLOMEO (BOE)" },
{ ticket:"BLZ", value:"YAHOO/MI_BLZ", caption:"BOLZONI (BLZ)" },
{ ticket:"BF", value:"YAHOO/MI_BF", caption:"BONIFICHE FERRARESI (BF)" },
{ ticket:"BO", value:"YAHOO/MI_BO", caption:"BORGOSESIA (BO)" },
{ ticket:"BOR", value:"YAHOO/MI_BOR", caption:"BORGOSESIA RSP (BOR)" },
{ ticket:"BRE", value:"YAHOO/MI_BRE", caption:"BREMBO (BRE)" },
{ ticket:"BRI", value:"YAHOO/MI_BRI", caption:"BRIOSCHI (BRI)" },
{ ticket:"BC", value:"YAHOO/MI_BC", caption:"BRUNELLO C. SPA (BC)" },
{ ticket:"BZU", value:"YAHOO/MI_BZU", caption:"BUZZI UNICEM (BZU)" },
{ ticket:"BZUR", value:"YAHOO/MI_BZUR", caption:"BUZZI UNICEM RNC (BZUR)" },
{ ticket:"CAD", value:"YAHOO/MI_CAD", caption:"CAD IT (CAD)" },
{ ticket:"CAI", value:"YAHOO/MI_CAI", caption:"CAIRO COMMUNICATION (CAI)" },
{ ticket:"CLF", value:"YAHOO/MI_CLF", caption:"CALEFFI (CLF)" },
{ ticket:"CALT", value:"YAHOO/MI_CALT", caption:"CALTAGIRONE (CALT)" },
{ ticket:"CED", value:"YAHOO/MI_CED", caption:"CALTAGIRONE EDITORE (CED)" },
{ ticket:"CMF", value:"YAHOO/MI_CMF", caption:"CAMFIN (CMF)" },
{ ticket:"CPR", value:"YAHOO/MI_CPR", caption:"CAMPARI (CPR)" },
{ ticket:"CL", value:"YAHOO/MI_CL", caption:"CAPE LIVE (CL)" },
{ ticket:"CARR", value:"YAHOO/MI_CARR", caption:"CARRARO (CARR)" },
{ ticket:"CRR", value:"YAHOO/MI_CRR", caption:"CARREFOUR (CRR)" },
{ ticket:"CASS", value:"YAHOO/MI_CASS", caption:"CATTOLICA ASS (CASS)" },
{ ticket:"CDC", value:"YAHOO/MI_CDC", caption:"CDC (CDC)" },
{ ticket:"CTIC", value:"YAHOO/MI_CTIC", caption:"CELL THERAPEUTICS (CTIC)" },
{ ticket:"CMB", value:"YAHOO/MI_CMB", caption:"CEMBRE (CMB)" },
{ ticket:"CEM", value:"YAHOO/MI_CEM", caption:"CEMENTIR HOLDING (CEM)" },
{ ticket:"CLT", value:"YAHOO/MI_CLT", caption:"CENT DEL LATTE TOR (CLT)" },
{ ticket:"RIC", value:"YAHOO/MI_RIC", caption:"CERAMICHE RICCHETTI (RIC)" },
{ ticket:"CHL", value:"YAHOO/MI_CHL", caption:"CHL (CHL)" },
{ ticket:"CIA", value:"YAHOO/MI_CIA", caption:"CIA (CIA)" },
{ ticket:"CC", value:"YAHOO/MI_CC", caption:"CICCOLELLA (CC)" },
{ ticket:"CIR", value:"YAHOO/MI_CIR", caption:"CIR-COMP IND RIUNIT (CIR)" },
{ ticket:"CLE", value:"YAHOO/MI_CLE", caption:"CLASS EDITORI (CLE)" },
{ ticket:"COB", value:"YAHOO/MI_COB", caption:"COBRA (COB)" },
{ ticket:"COF", value:"YAHOO/MI_COF", caption:"COFIDE S.P.A. (COF)" },
{ ticket:"COG", value:"YAHOO/MI_COG", caption:"COGEME S. IN LIQUID (COG)" },
{ ticket:"CDR", value:"YAHOO/MI_CDR", caption:"COMP DELL RUOTA A (CDR)" },
{ ticket:"CNP", value:"YAHOO/MI_CNP", caption:"CONAFI PRESTITO (CNP)" },
{ ticket:"CVAL", value:"YAHOO/MI_CVAL", caption:"CRED. VALTELLINESE (CVAL)" },
{ ticket:"CB", value:"YAHOO/MI_CB", caption:"CRED.BERGAMASCO (CB)" },
{ ticket:"ACA", value:"YAHOO/MI_ACA", caption:"CREDIT AGRICOLE (ACA)" },
{ ticket:"CE", value:"YAHOO/MI_CE", caption:"CREDITO EMILIANO (CE)" },
{ ticket:"CRE", value:"YAHOO/MI_CRE", caption:"CRESPI (CRE)" },
{ ticket:"CSP", value:"YAHOO/MI_CSP", caption:"CSP INTERNATIONAL (CSP)" },
{ ticket:"DIS", value:"YAHOO/MI_DIS", caption:"D'AMICO INTL SHIPP (DIS)" },
{ ticket:"DA", value:"YAHOO/MI_DA", caption:"DADA  (DA)" },
{ ticket:"DAI", value:"YAHOO/MI_DAI", caption:"DAIMLER N (DAI)" },
{ ticket:"DMN", value:"YAHOO/MI_DMN", caption:"DAMIANI (DMN)" },
{ ticket:"DAN", value:"YAHOO/MI_DAN", caption:"DANIELI & C. (DAN)" },
{ ticket:"DANR", value:"YAHOO/MI_DANR", caption:"DANIELI & C. RSP (DANR)" },
{ ticket:"DNN", value:"YAHOO/MI_DNN", caption:"DANONE (DNN)" },
{ ticket:"DAL", value:"YAHOO/MI_DAL", caption:"DATALOGIC (DAL)" },
{ ticket:"DLG", value:"YAHOO/MI_DLG", caption:"DE LONGHI (DLG)" },
{ ticket:"DEA", value:"YAHOO/MI_DEA", caption:"DEA CAPITAL (DEA)" },
{ ticket:"DLC", value:"YAHOO/MI_DLC", caption:"DELCLIMA (DLC)" },
{ ticket:"DBK", value:"YAHOO/MI_DBK", caption:"DEUTSCHE BANK N (DBK)" },
{ ticket:"DTE", value:"YAHOO/MI_DTE", caption:"DEUTSCHE TELEKOM N (DTE)" },
{ ticket:"DIA", value:"YAHOO/MI_DIA", caption:"DIASORIN (DIA)" },
{ ticket:"DIB", value:"YAHOO/MI_DIB", caption:"DIGITAL BROS (DIB)" },
{ ticket:"DMA", value:"YAHOO/MI_DMA", caption:"DMAIL GROUP (DMA)" },
{ ticket:"EOAN", value:"YAHOO/MI_EOAN", caption:"E.ON N (EOAN)" },
{ ticket:"EDNR", value:"YAHOO/MI_EDNR", caption:"EDISON RNC (EDNR)" },
{ ticket:"EEMS", value:"YAHOO/MI_EEMS", caption:"EEMS (EEMS)" },
{ ticket:"EIT", value:"YAHOO/MI_EIT", caption:"EI TOWERS (EIT)" },
{ ticket:"ELN", value:"YAHOO/MI_ELN", caption:"EL.EN. (ELN)" },
{ ticket:"ELC", value:"YAHOO/MI_ELC", caption:"ELICA (ELC)" },
{ ticket:"EM", value:"YAHOO/MI_EM", caption:"EMAK (EM)" },
{ ticket:"ENEL", value:"YAHOO/MI_ENEL", caption:"ENEL (ENEL)" },
{ ticket:"EGPW", value:"YAHOO/MI_EGPW", caption:"ENEL GREEN POWER  (EGPW)" },
{ ticket:"ENT", value:"YAHOO/MI_ENT", caption:"ENERTRONICA (ENT)" },
{ ticket:"ENV", value:"YAHOO/MI_ENV", caption:"ENERVIT (ENV)" },
{ ticket:"ENG", value:"YAHOO/MI_ENG", caption:"ENGINEERING (ENG)" },
{ ticket:"ENI", value:"YAHOO/MI_ENI", caption:"ENI (ENI)" },
{ ticket:"ERG", value:"YAHOO/MI_ERG", caption:"ERG (ERG)" },
{ ticket:"ECA", value:"YAHOO/MI_ECA", caption:"ERGYCAPITAL (ECA)" },
{ ticket:"PRT", value:"YAHOO/MI_PRT", caption:"ESPRINET (PRT)" },
{ ticket:"EUK", value:"YAHOO/MI_EUK", caption:"EUKEDOS (EUK)" },
{ ticket:"ETH", value:"YAHOO/MI_ETH", caption:"EUROTECH (ETH)" },
{ ticket:"EXO", value:"YAHOO/MI_EXO", caption:"EXOR (EXO)" },
{ ticket:"XPR", value:"YAHOO/MI_XPR", caption:"EXPRIVIA (XPR)" },
{ ticket:"FP", value:"YAHOO/MI_FP", caption:"F.P.A. AXA - Equilibrato (FP)" },
{ ticket:"FKR", value:"YAHOO/MI_FKR", caption:"FALCK RENEWABLES (FKR)" },
{ ticket:"SFER", value:"YAHOO/MI_SFER", caption:"FERRAGAMO (SFER)" },
{ ticket:"F", value:"YAHOO/MI_F", caption:"FIAT (F)" },
{ ticket:"FI", value:"YAHOO/MI_FI", caption:"FIAT INDUSTRIAL (FI)" },
{ ticket:"FDA", value:"YAHOO/MI_FDA", caption:"FIDIA (FDA)" },
{ ticket:"FM", value:"YAHOO/MI_FM", caption:"FIERA MILANO (FM)" },
{ ticket:"FNC", value:"YAHOO/MI_FNC", caption:"FINMECCANICA (FNC)" },
{ ticket:"FTL", value:"YAHOO/MI_FTL", caption:"FINTEL ENERGIA GR.  (FTL)" },
{ ticket:"FIC", value:"YAHOO/MI_FIC", caption:"FIRST CAPITAL  (FIC)" },
{ ticket:"FNM", value:"YAHOO/MI_FNM", caption:"FNM (FNM)" },
{ ticket:"FSA", value:"YAHOO/MI_FSA", caption:"FONDIARIA-SAI (FSA)" },
{ ticket:"FSAR", value:"YAHOO/MI_FSAR", caption:"FONDIARIA-SAI RNC A (FSAR)" },
{ ticket:"FSRB", value:"YAHOO/MI_FSRB", caption:"FONDIARIA-SAI RNC B (FSRB)" },
{ ticket:"FDE", value:"YAHOO/MI_FDE", caption:"FRENDY ENERGY (FDE)" },
{ ticket:"FUL", value:"YAHOO/MI_FUL", caption:"FULLSIX (FUL)" },
{ ticket:"GAB", value:"YAHOO/MI_GAB", caption:"GABETTI (GAB)" },
{ ticket:"GSP", value:"YAHOO/MI_GSP", caption:"GAS PLUS (GSP)" },
{ ticket:"GSZ", value:"YAHOO/MI_GSZ", caption:"GDF SUEZ (GSZ)" },
{ ticket:"GE", value:"YAHOO/MI_GE", caption:"GEFRAN (GE)" },
{ ticket:"GEM", value:"YAHOO/MI_GEM", caption:"GEMINA  (GEM)" },
{ ticket:"GEMR", value:"YAHOO/MI_GEMR", caption:"GEMINA RSP (GEMR)" },
{ ticket:"G", value:"YAHOO/MI_G", caption:"GENERALI (G)" },
{ ticket:"GEO", value:"YAHOO/MI_GEO", caption:"GEOX (GEO)" },
{ ticket:"ES", value:"YAHOO/MI_ES", caption:"GR EDIT L'ESPRESSO (ES)" },
{ ticket:"HER", value:"YAHOO/MI_HER", caption:"HERA (HER)" },
{ ticket:"IGV", value:"YAHOO/MI_IGV", caption:"I GRANDI VIAGGI (IGV)" },
{ ticket:"IMA", value:"YAHOO/MI_IMA", caption:"I.M.A. (IMA)" },
{ ticket:"IGD", value:"YAHOO/MI_IGD", caption:"IGD (IGD)" },
{ ticket:"IKF", value:"YAHOO/MI_IKF", caption:"IKF S.P.A. (IKF)" },
{ ticket:"S24", value:"YAHOO/MI_S24", caption:"IL SOLE 24 ORE (S24)" },
{ ticket:"IMS", value:"YAHOO/MI_IMS", caption:"IMMSI (IMS)" },
{ ticket:"IPG", value:"YAHOO/MI_IPG", caption:"IMPREGILO (IPG)" },
{ ticket:"IPGR", value:"YAHOO/MI_IPGR", caption:"IMPREGILO RSP (IPGR)" },
{ ticket:"IND", value:"YAHOO/MI_IND", caption:"INDESIT COMPANY (IND)" },
{ ticket:"INDR", value:"YAHOO/MI_INDR", caption:"INDESIT COMPANY RNC (INDR)" },
{ ticket:"IIN", value:"YAHOO/MI_IIN", caption:"INDUSTRIA E INN (IIN)" },
{ ticket:"INGA", value:"YAHOO/MI_INGA", caption:"ING GROEP (INGA)" },
{ ticket:"IKG", value:"YAHOO/MI_IKG", caption:"INTEK GROUP (IKG)" },
{ ticket:"IKGR", value:"YAHOO/MI_IKGR", caption:"INTEK GROUP RISP. (IKGR)" },
{ ticket:"IKGRST", value:"YAHOO/MI_IKGRST", caption:"INTEK GROUP RSP (IKGRST)" },
{ ticket:"IP", value:"YAHOO/MI_IP", caption:"INTERPUMP GROUP (IP)" },
{ ticket:"ISP", value:"YAHOO/MI_ISP", caption:"INTESA SANPAOLO (ISP)" },
{ ticket:"ISPR", value:"YAHOO/MI_ISPR", caption:"INTESA SANPAOLO RSP (ISPR)" },
{ ticket:"IES", value:"YAHOO/MI_IES", caption:"INVEST E SVILUPPO (IES)" },
{ ticket:"IRC", value:"YAHOO/MI_IRC", caption:"IRCE (IRC)" },
{ ticket:"IRE", value:"YAHOO/MI_IRE", caption:"IREN  (IRE)" },
{ ticket:"ISG", value:"YAHOO/MI_ISG", caption:"ISAGRO (ISG)" },
{ ticket:"ITW", value:"YAHOO/MI_ITW", caption:"IT WAY (ITW)" },
{ ticket:"IT", value:"YAHOO/MI_IT", caption:"ITALCEMENTI (IT)" },
{ ticket:"ITR", value:"YAHOO/MI_ITR", caption:"ITALCEMENTI RSP (ITR)" },
{ ticket:"ITM", value:"YAHOO/MI_ITM", caption:"ITALMOBILIARE (ITM)" },
{ ticket:"ITMR", value:"YAHOO/MI_ITMR", caption:"ITALMOBILIARE RSP (ITMR)" },
{ ticket:"IVS", value:"YAHOO/MI_IVS", caption:"IVS GROUP  (IVS)" },
{ ticket:"JUVE", value:"YAHOO/MI_JUVE", caption:"JUVENTUS F.C. (JUVE)" },
{ ticket:"KRE", value:"YAHOO/MI_KRE", caption:"K.R.ENERGY (KRE)" },
{ ticket:"KNX", value:"YAHOO/MI_KNX", caption:"KINEXIA (KNX)" },
{ ticket:"OR", value:"YAHOO/MI_OR", caption:"L'OREAL (OR)" },
{ ticket:"LD", value:"YAHOO/MI_LD", caption:"LA DORIA (LD)" },
{ ticket:"LR", value:"YAHOO/MI_LR", caption:"LANDI RENZO (LR)" },
{ ticket:"LUX", value:"YAHOO/MI_LUX", caption:"LUXOTTICA GROUP (LUX)" },
{ ticket:"LVEN", value:"YAHOO/MI_LVEN", caption:"LVENTURE GROUP (LVEN)" },
{ ticket:"LVMH", value:"YAHOO/MI_LVMH", caption:"LVMH (LVMH)" },
{ ticket:"MEC", value:"YAHOO/MI_MEC", caption:"M&C  (MEC)" },
{ ticket:"MT", value:"YAHOO/MI_MT", caption:"MAIRE TECNIMONT (MT)" },
{ ticket:"MARR", value:"YAHOO/MI_MARR", caption:"MARR (MARR)" },
{ ticket:"MCK", value:"YAHOO/MI_MCK", caption:"MC-LINK (MCK)" },
{ ticket:"MCH", value:"YAHOO/MI_MCH", caption:"MEDIACONTECH (MCH)" },
{ ticket:"MS", value:"YAHOO/MI_MS", caption:"MEDIASET (MS)" },
{ ticket:"MB", value:"YAHOO/MI_MB", caption:"MEDIOBANCA (MB)" },
{ ticket:"MED", value:"YAHOO/MI_MED", caption:"MEDIOLANUM (MED)" },
{ ticket:"MEF", value:"YAHOO/MI_MEF", caption:"MERIDIANA F (MEF)" },
{ ticket:"ME", value:"YAHOO/MI_ME", caption:"MERIDIE (ME)" },
{ ticket:"MTH", value:"YAHOO/MI_MTH", caption:"METHORIOS (MTH)" },
{ ticket:"MIC", value:"YAHOO/MI_MIC", caption:"MIC (MIC)" },
{ ticket:"MI", value:"YAHOO/MI_MI", caption:"MILANO ASS. (MI)" },
{ ticket:"MIR", value:"YAHOO/MI_MIR", caption:"MILANO ASS. RSP (MIR)" },
{ ticket:"MIT", value:"YAHOO/MI_MIT", caption:"MITTEL  (MIT)" },
{ ticket:"MSK", value:"YAHOO/MI_MSK", caption:"MOLESKINE (MSK)" },
{ ticket:"MLM", value:"YAHOO/MI_MLM", caption:"MOLMED (MLM)" },
{ ticket:"MN", value:"YAHOO/MI_MN", caption:"MONDADORI EDIT (MN)" },
{ ticket:"MTV", value:"YAHOO/MI_MTV", caption:"MONDO TV (MTV)" },
{ ticket:"MTF", value:"YAHOO/MI_MTF", caption:"MONDO TV FRANCE (MTF)" },
{ ticket:"MON", value:"YAHOO/MI_MON", caption:"MONRIF (MON)" },
{ ticket:"MF", value:"YAHOO/MI_MF", caption:"MONTEFIBRE (MF)" },
{ ticket:"MFNC", value:"YAHOO/MI_MFNC", caption:"MONTEFIBRE RSP (MFNC)" },
{ ticket:"MMG", value:"YAHOO/MI_MMG", caption:"MOVIEMAX (MMG)" },
{ ticket:"MUV2", value:"YAHOO/MI_MUV2", caption:"MUNICHRE (MUV2)" },
{ ticket:"MOL", value:"YAHOO/MI_MOL", caption:"MUTUIONLINE (MOL)" },
{ ticket:"NRST", value:"YAHOO/MI_NRST", caption:"NEUROSOFT  (NRST)" },
{ ticket:"NICE", value:"YAHOO/MI_NICE", caption:"NICE (NICE)" },
{ ticket:"NOE", value:"YAHOO/MI_NOE", caption:"NOEMALIFE (NOE)" },
{ ticket:"NOK1V", value:"YAHOO/MI_NOK1V", caption:"NOKIA (NOK1V)" },
{ ticket:"NR", value:"YAHOO/MI_NR", caption:"NOVA RE (NR)" },
{ ticket:"OLI", value:"YAHOO/MI_OLI", caption:"OLIDATA (OLI)" },
{ ticket:"PAN", value:"YAHOO/MI_PAN", caption:"PANARIAGROUP (PAN)" },
{ ticket:"PLT", value:"YAHOO/MI_PLT", caption:"PARMALAT (PLT)" },
{ ticket:"PIA", value:"YAHOO/MI_PIA", caption:"PIAGGIO & C (PIA)" },
{ ticket:"PRL", value:"YAHOO/MI_PRL", caption:"PIERREL (PRL)" },
{ ticket:"PINF", value:"YAHOO/MI_PINF", caption:"PININFARINA (PINF)" },
{ ticket:"PQ", value:"YAHOO/MI_PQ", caption:"PIQUADRO (PQ)" },
{ ticket:"PC", value:"YAHOO/MI_PC", caption:"PIRELLI & C (PC)" },
{ ticket:"PCP", value:"YAHOO/MI_PCP", caption:"PIRELLI & C. RNC (PCP)" },
{ ticket:"PMSG", value:"YAHOO/MI_PMSG", caption:"PMS  (PMSG)" },
{ ticket:"PSF", value:"YAHOO/MI_PSF", caption:"POLIGRAFICA S. F. (PSF)" },
{ ticket:"POL", value:"YAHOO/MI_POL", caption:"POLIGRAFICI EDIT (POL)" },
{ ticket:"POPR", value:"YAHOO/MI_POPR", caption:"POLIGRAFICI P (POPR)" },
{ ticket:"PFG", value:"YAHOO/MI_PFG", caption:"POLTRONA FRAU (PFG)" },
{ ticket:"PRA", value:"YAHOO/MI_PRA", caption:"PRAMAC (PRA)" },
{ ticket:"PRS", value:"YAHOO/MI_PRS", caption:"PRELIOS (PRS)" },
{ ticket:"PF", value:"YAHOO/MI_PF", caption:"PREMAFIN FIN HP (PF)" },
{ ticket:"PR", value:"YAHOO/MI_PR", caption:"PREMUDA (PR)" },
{ ticket:"PRI", value:"YAHOO/MI_PRI", caption:"PRIMA INDUSTRIE (PRI)" },
{ ticket:"PRM", value:"YAHOO/MI_PRM", caption:"PRIMISUIMOTORI (PRM)" },
{ ticket:"PRY", value:"YAHOO/MI_PRY", caption:"PRYSMIAN (PRY)" },
{ ticket:"RAT", value:"YAHOO/MI_RAT", caption:"RATTI  (RAT)" },
{ ticket:"RCSR", value:"YAHOO/MI_RCSR", caption:"RCS MEDIA RNC -A- (RCSR)" },
{ ticket:"RCS", value:"YAHOO/MI_RCS", caption:"RCS MEDIAGROUP (RCS)" },
{ ticket:"RDB", value:"YAHOO/MI_RDB", caption:"RDB (RDB)" },
{ ticket:"REC", value:"YAHOO/MI_REC", caption:"RECORDATI (REC)" },
{ ticket:"RNO", value:"YAHOO/MI_RNO", caption:"RENAULT (RNO)" },
{ ticket:"RM", value:"YAHOO/MI_RM", caption:"RENO DE MEDICI (RM)" },
{ ticket:"REY", value:"YAHOO/MI_REY", caption:"REPLY (REY)" },
{ ticket:"LIT", value:"YAHOO/MI_LIT", caption:"RETELIT (LIT)" },
{ ticket:"RN", value:"YAHOO/MI_RN", caption:"RISANAMENTO (RN)" },
{ ticket:"YRM", value:"YAHOO/MI_YRM", caption:"ROSETTI MARINO  (YRM)" },
{ ticket:"ROS", value:"YAHOO/MI_ROS", caption:"ROSSS (ROS)" },
{ ticket:"PHIA", value:"YAHOO/MI_PHIA", caption:"ROY.PHILIPS (PHIA)" },
{ ticket:"RWE", value:"YAHOO/MI_RWE", caption:"RWE  (RWE)" },
{ ticket:"SSL", value:"YAHOO/MI_SSL", caption:"S.S.LAZIO (SSL)" },
{ ticket:"SAB", value:"YAHOO/MI_SAB", caption:"SABAF (SAB)" },
{ ticket:"SAM", value:"YAHOO/MI_SAM", caption:"SACOM (SAM)" },
{ ticket:"SG", value:"YAHOO/MI_SG", caption:"SAES GETTERS (SG)" },
{ ticket:"SGR", value:"YAHOO/MI_SGR", caption:"SAES GETTERS RNC (SGR)" },
{ ticket:"SFL", value:"YAHOO/MI_SFL", caption:"SAFILO GROUP (SFL)" },
{ ticket:"SPM", value:"YAHOO/MI_SPM", caption:"SAIPEM (SPM)" },
{ ticket:"SPMR", value:"YAHOO/MI_SPMR", caption:"SAIPEM RCV (SPMR)" },
{ ticket:"SANF", value:"YAHOO/MI_SANF", caption:"SANOFI (SANF)" },
{ ticket:"SAP", value:"YAHOO/MI_SAP", caption:"SAP (SAP)" },
{ ticket:"SRS", value:"YAHOO/MI_SRS", caption:"SARAS (SRS)" },
{ ticket:"SAT", value:"YAHOO/MI_SAT", caption:"SAT (SAT)" },
{ ticket:"SAVE", value:"YAHOO/MI_SAVE", caption:"SAVE (SAVE)" },
{ ticket:"SSB", value:"YAHOO/MI_SSB", caption:"SCREEN SERVICE (SSB)" },
{ ticket:"PGR", value:"YAHOO/MI_PGR", caption:"SEAT PAG GIALLE RNC (PGR)" },
{ ticket:"PG", value:"YAHOO/MI_PG", caption:"SEAT PAGINE GIALLE (PG)" },
{ ticket:"SRI", value:"YAHOO/MI_SRI", caption:"SERVIZI ITALIA (SRI)" },
{ ticket:"STC", value:"YAHOO/MI_STC", caption:"SETECO INT (STC)" },
{ ticket:"SIS", value:"YAHOO/MI_SIS", caption:"SIAS (SIS)" },
{ ticket:"SIE", value:"YAHOO/MI_SIE", caption:"SIEMENS N (SIE)" },
{ ticket:"SII", value:"YAHOO/MI_SII", caption:"SINTESI (SII)" },
{ ticket:"SNA", value:"YAHOO/MI_SNA", caption:"SNAI (SNA)" },
{ ticket:"SRG", value:"YAHOO/MI_SRG", caption:"SNAM  (SRG)" },
{ ticket:"SPF", value:"YAHOO/MI_SPF", caption:"SO PA F (SPF)" },
{ ticket:"YSF", value:"YAHOO/MI_YSF", caption:"SOFT STRATEGY (YSF)" },
{ ticket:"SO", value:"YAHOO/MI_SO", caption:"SOGEFI (SO)" },
{ ticket:"SOL", value:"YAHOO/MI_SOL", caption:"SOL (SOL)" },
{ ticket:"SRN", value:"YAHOO/MI_SRN", caption:"SORIN (SRN)" },
{ ticket:"GLE", value:"YAHOO/MI_GLE", caption:"STE GENERALE-A- (GLE)" },
{ ticket:"STEF", value:"YAHOO/MI_STEF", caption:"STEFANEL (STEF)" },
{ ticket:"STEFR", value:"YAHOO/MI_STEFR", caption:"STEFANEL RNC (STEFR)" },
{ ticket:"STM", value:"YAHOO/MI_STM", caption:"STMICROELECTRONICS  (STM)" },
{ ticket:"TIP", value:"YAHOO/MI_TIP", caption:"TAMBURI (TIP)" },
{ ticket:"TAS", value:"YAHOO/MI_TAS", caption:"TAS  (TAS)" },
{ ticket:"TBS", value:"YAHOO/MI_TBS", caption:"TBS GROUP (TBS)" },
{ ticket:"TME", value:"YAHOO/MI_TME", caption:"TELECOM IT MEDIA (TME)" },
{ ticket:"TMER", value:"YAHOO/MI_TMER", caption:"TELECOM IT MEDIARNC (TMER)" },
{ ticket:"TIT", value:"YAHOO/MI_TIT", caption:"TELECOM ITALIA (TIT)" },
{ ticket:"TITR", value:"YAHOO/MI_TITR", caption:"TELECOM ITALIA RNC (TITR)" },
{ ticket:"TEF", value:"YAHOO/MI_TEF", caption:"TELEFONICA (TEF)" },
{ ticket:"TEN", value:"YAHOO/MI_TEN", caption:"TENARIS (TEN)" },
{ ticket:"TRN", value:"YAHOO/MI_TRN", caption:"TERNA (TRN)" },
{ ticket:"TER", value:"YAHOO/MI_TER", caption:"TERNIENERGIA (TER)" },
{ ticket:"TES", value:"YAHOO/MI_TES", caption:"TESMEC  (TES)" },
{ ticket:"TIS", value:"YAHOO/MI_TIS", caption:"TISCALI  (TIS)" },
{ ticket:"TOD", value:"YAHOO/MI_TOD", caption:"TOD'S (TOD)" },
{ ticket:"TOT", value:"YAHOO/MI_TOT", caption:"TOTAL (TOT)" },
{ ticket:"TFI", value:"YAHOO/MI_TFI", caption:"TREVI FINANZ INDUST (TFI)" },
{ ticket:"TXT", value:"YAHOO/MI_TXT", caption:"TXT E-SOLUTIONS (TXT)" },
{ ticket:"UBI", value:"YAHOO/MI_UBI", caption:"UBI BANCA (UBI)" },
{ ticket:"UNL", value:"YAHOO/MI_UNL", caption:"UNI LAND (UNL)" },
{ ticket:"UCG", value:"YAHOO/MI_UCG", caption:"UNICREDIT (UCG)" },
{ ticket:"UCGR", value:"YAHOO/MI_UCGR", caption:"UNICREDIT RSP (UCGR)" },
{ ticket:"UNA", value:"YAHOO/MI_UNA", caption:"UNILEVER CERT (UNA)" },
{ ticket:"UAI", value:"YAHOO/MI_UAI", caption:"UNIONE ALBERGHI (UAI)" },
{ ticket:"UNI", value:"YAHOO/MI_UNI", caption:"UNIPOL (UNI)" },
{ ticket:"UNIP", value:"YAHOO/MI_UNIP", caption:"UNIPOL PRIV (UNIP)" },
{ ticket:"VLS", value:"YAHOO/MI_VLS", caption:"VALSOIA (VLS)" },
{ ticket:"VIN", value:"YAHOO/MI_VIN", caption:"VIANINI INDUSTRIA (VIN)" },
{ ticket:"VLA", value:"YAHOO/MI_VLA", caption:"VIANINI LAVORI (VLA)" },
{ ticket:"VITA", value:"YAHOO/MI_VITA", caption:"VITA SOCIETA' EDIT. (VITA)" },
{ ticket:"VAS", value:"YAHOO/MI_VAS", caption:"VITTORIA ASS. (VAS)" },
{ ticket:"VIV", value:"YAHOO/MI_VIV", caption:"VIVENDI (VIV)" },
{ ticket:"VRW", value:"YAHOO/MI_VRW", caption:"VRWAY (VRW)" },
{ ticket:"YOOX", value:"YAHOO/MI_YOOX", caption:"YOOX (YOOX)" },
{ ticket:"ZV", value:"YAHOO/MI_ZV", caption:"ZIGNAGO VETRO (ZV)" },
{ ticket:"ZUC", value:"YAHOO/MI_ZUC", caption:"ZUCCHI (ZUC)" },
{ ticket:"ZUCR", value:"YAHOO/MI_ZUCR", caption:"ZUCCHI RNC (ZUCR)" }
]

YahooMilan.getTickets = function(){
  return tickets;
}

export default YahooMilan
