"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var YahooCoppenhagen = {};

var tickets = [{ ticket: "AAB", value: "YAHOO/CO_AAB", caption: "AALBORG BOLDSPIL (AAB)" }, { ticket: "ALMB", value: "YAHOO/CO_ALMB", caption: "ALM. BRAND (ALMB)" }, { ticket: "ATHENA", value: "YAHOO/CO_ATHENA", caption: "ATHENA IT-GROUP (ATHENA)" }, { ticket: "BO", value: "YAHOO/CO_BO", caption: "BANG & OLUFSEN  (BO)" }, { ticket: "BAVA", value: "YAHOO/CO_BAVA", caption: "BAVARIAN NORDIC (BAVA)" }, { ticket: "BIOPOR", value: "YAHOO/CO_BIOPOR", caption: "BIOPORTO (BIOPOR)" }, { ticket: "BLVIS", value: "YAHOO/CO_BLVIS", caption: "BLUE VISION (BLVIS)" }, { ticket: "HART", value: "YAHOO/CO_HART", caption: "BRDR.HARTMANN -B- (HART)" }, { ticket: "CBRAIN", value: "YAHOO/CO_CBRAIN", caption: "CBRAIN (CBRAIN)" }, { ticket: "CHEMM", value: "YAHOO/CO_CHEMM", caption: "CHEMOMETEC (CHEMM)" }, { ticket: "CHR", value: "YAHOO/CO_CHR", caption: "CHR. HANSEN HOLDING (CHR)" }, { ticket: "COLOB", value: "YAHOO/CO_COLOB", caption: "COLOPLAST -B- (COLOB)" }, { ticket: "COLUM", value: "YAHOO/CO_COLUM", caption: "COLUMBUS (COLUM)" }, { ticket: "COM", value: "YAHOO/CO_COM", caption: "COMENDO -A- (COM)" }, { ticket: "KBHL", value: "YAHOO/CO_KBHL", caption: "COPENHAGEN AIRPORT (KBHL)" }, { ticket: "DNORD", value: "YAHOO/CO_DNORD", caption: "D/S NORDEN (DNORD)" }, { ticket: "DAB", value: "YAHOO/CO_DAB", caption: "DANSKE ANDELSKASSER (DAB)" }, { ticket: "DANSKE", value: "YAHOO/CO_DANSKE", caption: "DANSKE BANK (DANSKE)" }, { ticket: "DANTH", value: "YAHOO/CO_DANTH", caption: "DANTHERM (DANTH)" }, { ticket: "DELTAQ", value: "YAHOO/CO_DELTAQ", caption: "DELTAQ (DELTAQ)" }, { ticket: "DFDS", value: "YAHOO/CO_DFDS", caption: "DFDS (DFDS)" }, { ticket: "DIBA", value: "YAHOO/CO_DIBA", caption: "DIBA (DIBA)" }, { ticket: "DJUR", value: "YAHOO/CO_DJUR", caption: "DJURSLANDS BANK (DJUR)" }, { ticket: "DKC", value: "YAHOO/CO_DKC", caption: "DK COMPANY (DKC)" }, { ticket: "DLH", value: "YAHOO/CO_DLH", caption: "DLH  (DLH)" }, { ticket: "DSV", value: "YAHOO/CO_DSV", caption: "DSV (DSV)" }, { ticket: "EAC", value: "YAHOO/CO_EAC", caption: "EAST ASIATIC (EAC)" }, { ticket: "EGNETY", value: "YAHOO/CO_EGNETY", caption: "EGNS INV EJD. TYSKL (EGNETY)" }, { ticket: "ENALYZ", value: "YAHOO/CO_ENALYZ", caption: "ENALYZER (ENALYZ)" }, { ticket: "ESOFT", value: "YAHOO/CO_ESOFT", caption: "ESOFT SYSTEMS (ESOFT)" }, { ticket: "EI", value: "YAHOO/CO_EI", caption: "EUROINVESTOR (EI)" }, { ticket: "EWII", value: "YAHOO/CO_EWII", caption: "EUROP WIND INV (EWII)" }, { ticket: "EXQ", value: "YAHOO/CO_EXQ", caption: "EXIQON (EXQ)" }, { ticket: "FASTPC", value: "YAHOO/CO_FASTPC", caption: "FASTPASSCORP (FASTPC)" }, { ticket: "FFARMS", value: "YAHOO/CO_FFARMS", caption: "FIRSTFARMS (FFARMS)" }, { ticket: "FLS", value: "YAHOO/CO_FLS", caption: "FLSMIDTH & CO. (FLS)" }, { ticket: "FPEPI", value: "YAHOO/CO_FPEPI", caption: "FORMUEPLEJE EPIKUR (FPEPI)" }, { ticket: "FPMER", value: "YAHOO/CO_FPMER", caption: "FORMUEPLEJE MERKUR (FPMER)" }, { ticket: "FPOPT", value: "YAHOO/CO_FPOPT", caption: "FORMUEPLEJE OPTIMUM (FPOPT)" }, { ticket: "FPPAR", value: "YAHOO/CO_FPPAR", caption: "FORMUEPLEJE PARETO (FPPAR)" }, { ticket: "FPPEN", value: "YAHOO/CO_FPPEN", caption: "FORMUEPLEJE PENTA (FPPEN)" }, { ticket: "GABR", value: "YAHOO/CO_GABR", caption: "GABRIEL HOLDING (GABR)" }, { ticket: "GEN", value: "YAHOO/CO_GEN", caption: "GENMAB (GEN)" }, { ticket: "GJ", value: "YAHOO/CO_GJ", caption: "GLUNZ & JENSEN (GJ)" }, { ticket: "GN", value: "YAHOO/CO_GN", caption: "GN STORE NORD (GN)" }, { ticket: "GES", value: "YAHOO/CO_GES", caption: "GREENTECH ENERGY (GES)" }, { ticket: "GRLA", value: "YAHOO/CO_GRLA", caption: "GROENLANDSBANKEN (GRLA)" }, { ticket: "HH", value: "YAHOO/CO_HH", caption: "H+H INTERNATIONAL (HH)" }, { ticket: "LUN", value: "YAHOO/CO_LUN", caption: "H. LUNDBECK (LUN)" }, { ticket: "IC", value: "YAHOO/CO_IC", caption: "IC COMPANYS (IC)" }, { ticket: "JMI", value: "YAHOO/CO_JMI", caption: "JENSEN & MOLLER (JMI)" }, { ticket: "JDAN", value: "YAHOO/CO_JDAN", caption: "JEUDAN (JDAN)" }, { ticket: "JOBNDX", value: "YAHOO/CO_JOBNDX", caption: "JOBINDEX (JOBNDX)" }, { ticket: "JYSK", value: "YAHOO/CO_JYSK", caption: "JYSKE BANK (JYSK)" }, { ticket: "KLIMA", value: "YAHOO/CO_KLIMA", caption: "KLIMAINVEST (KLIMA)" }, { ticket: "KRE", value: "YAHOO/CO_KRE", caption: "KREDITBANKEN (KRE)" }, { ticket: "LASP", value: "YAHOO/CO_LASP", caption: "LAAN & SPAR BANK (LASP)" }, { ticket: "LOLB", value: "YAHOO/CO_LOLB", caption: "LOLLANDS BANK (LOLB)" }, { ticket: "MATAS", value: "YAHOO/CO_MATAS", caption: "MATAS (MATAS)" }, { ticket: "MPI", value: "YAHOO/CO_MPI", caption: "MEDICAL PROGN (MPI)" }, { ticket: "MERM", value: "YAHOO/CO_MERM", caption: "MERMAID (MERM)" }, { ticket: "MNBA", value: "YAHOO/CO_MNBA", caption: "MOENS BANK (MNBA)" }, { ticket: "MOLS", value: "YAHOO/CO_MOLS", caption: "MOLS-LINIEN (MOLS)" }, { ticket: "NEUR", value: "YAHOO/CO_NEUR", caption: "NEUROSEARCH (NEUR)" }, { ticket: "NEWCAP", value: "YAHOO/CO_NEWCAP", caption: "NEWCAP HOLDING (NEWCAP)" }, { ticket: "NKT", value: "YAHOO/CO_NKT", caption: "NKT HOLDING (NKT)" }, { ticket: "NRDF", value: "YAHOO/CO_NRDF", caption: "NORDFYNS BANK (NRDF)" }, { ticket: "NORDIC", value: "YAHOO/CO_NORDIC", caption: "NORDIC SHIPHOLDING (NORDIC)" }, { ticket: "NRDC", value: "YAHOO/CO_NRDC", caption: "NORDICOM (NRDC)" }, { ticket: "NORDJB", value: "YAHOO/CO_NORDJB", caption: "NORDJYSKE BANK (NORDJB)" }, { ticket: "NRSU", value: "YAHOO/CO_NRSU", caption: "NORRESUNBY BK (NRSU)" }, { ticket: "NORTHM", value: "YAHOO/CO_NORTHM", caption: "NORTH MEDIA (NORTHM)" }, { ticket: "NUNA", value: "YAHOO/CO_NUNA", caption: "NUNAMINERALS (NUNA)" }, { ticket: "OJBA", value: "YAHOO/CO_OJBA", caption: "OESTJYDSK BANK (OJBA)" }, { ticket: "OSSR", value: "YAHOO/CO_OSSR", caption: "OSSUR (OSSR)" }, { ticket: "PNDORA", value: "YAHOO/CO_PNDORA", caption: "PANDORA (PNDORA)" }, { ticket: "PARKEN", value: "YAHOO/CO_PARKEN", caption: "PARKEN SPORT & ENT (PARKEN)" }, { ticket: "PRIMOF", value: "YAHOO/CO_PRIMOF", caption: "PRIME OFFICE (PRIMOF)" }, { ticket: "RELLA", value: "YAHOO/CO_RELLA", caption: "RELLA HOLD (RELLA)" }, { ticket: "RILBA", value: "YAHOO/CO_RILBA", caption: "RINGKJOBING LANDBO (RILBA)" }, { ticket: "RBREW", value: "YAHOO/CO_RBREW", caption: "ROYAL UNIBREW (RBREW)" }, { ticket: "RTX", value: "YAHOO/CO_RTX", caption: "RTX (RTX)" }, { ticket: "SALB", value: "YAHOO/CO_SALB", caption: "SALLING BANK (SALB)" }, { ticket: "SBS", value: "YAHOO/CO_SBS", caption: "SCANDI BRAKE SYSTEM (SBS)" }, { ticket: "SPEAS", value: "YAHOO/CO_SPEAS", caption: "SCANDI PRIV EQUITY (SPEAS)" }, { ticket: "SCHO", value: "YAHOO/CO_SCHO", caption: "SCHOUW (SCHO)" }, { ticket: "SIM", value: "YAHOO/CO_SIM", caption: "SIMCORP (SIM)" }, { ticket: "SKAKO", value: "YAHOO/CO_SKAKO", caption: "SKAKO (SKAKO)" }, { ticket: "SKJE", value: "YAHOO/CO_SKJE", caption: "SKJERN BANK (SKJE)" }, { ticket: "SCD", value: "YAHOO/CO_SCD", caption: "SMALL CAP DENMARK (SCD)" }, { ticket: "SMART", value: "YAHOO/CO_SMART", caption: "SMARTGUY GROUP (SMART)" }, { ticket: "SPG", value: "YAHOO/CO_SPG", caption: "SP GROUP (SPG)" }, { ticket: "SPNO", value: "YAHOO/CO_SPNO", caption: "SPAR BANK NORD (SPNO)" }, { ticket: "SPHIM", value: "YAHOO/CO_SPHIM", caption: "SPKAS HIMMERLAND (SPHIM)" }, { ticket: "ROV", value: "YAHOO/CO_ROV", caption: "SSBV-ROVSING (ROV)" }, { ticket: "SVEND", value: "YAHOO/CO_SVEND", caption: "SVENDBORG SPAREKASS (SVEND)" }, { ticket: "SYDB", value: "YAHOO/CO_SYDB", caption: "SYDBANK (SYDB)" }, { ticket: "TDC", value: "YAHOO/CO_TDC", caption: "TDC (TDC)" }, { ticket: "TIV", value: "YAHOO/CO_TIV", caption: "TIVOLI (TIV)" }, { ticket: "TKDV", value: "YAHOO/CO_TKDV", caption: "TK DEVELOPMENT (TKDV)" }, { ticket: "TOP", value: "YAHOO/CO_TOP", caption: "TOPDANMARK (TOP)" }, { ticket: "TOPO", value: "YAHOO/CO_TOPO", caption: "TOPOTARGET (TOPO)" }, { ticket: "TPSL", value: "YAHOO/CO_TPSL", caption: "TOPSIL SEMICON MAT (TPSL)" }, { ticket: "TORM", value: "YAHOO/CO_TORM", caption: "TORM (TORM)" }, { ticket: "TOTA", value: "YAHOO/CO_TOTA", caption: "TOTALBANKEN (TOTA)" }, { ticket: "TMCOM", value: "YAHOO/CO_TMCOM", caption: "TRAVELMARKET (TMCOM)" }, { ticket: "TRIFOR", value: "YAHOO/CO_TRIFOR", caption: "TRIFORK (TRIFOR)" }, { ticket: "TRYG", value: "YAHOO/CO_TRYG", caption: "TRYG (TRYG)" }, { ticket: "UIE", value: "YAHOO/CO_UIE", caption: "UNITED INTL ENTERP (UIE)" }, { ticket: "UPB", value: "YAHOO/CO_UPB", caption: "UNITED PLANT. (UPB)" }, { ticket: "VELO", value: "YAHOO/CO_VELO", caption: "VELOXIS PHARMACEUTI (VELO)" }, { ticket: "VWS", value: "YAHOO/CO_VWS", caption: "VESTAS WIND SYSTEMS (VWS)" }, { ticket: "VEFY", value: "YAHOO/CO_VEFY", caption: "VESTFYNS BANK (VEFY)" }, { ticket: "VJBA", value: "YAHOO/CO_VJBA", caption: "VESTJYSK BANK (VJBA)" }, { ticket: "VIBHK", value: "YAHOO/CO_VIBHK", caption: "VIBORG HANDBOLD-B- (VIBHK)" }, { ticket: "VIINT", value: "YAHOO/CO_VIINT", caption: "VICTOR INT. (VIINT)" }, { ticket: "VIPRO", value: "YAHOO/CO_VIPRO", caption: "VICTORIA PROP (VIPRO)" }, { ticket: "VORD", value: "YAHOO/CO_VORD", caption: "VORDINGBORG BANK (VORD)" }, { ticket: "WDH", value: "YAHOO/CO_WDH", caption: "WILLIAM DEMANT HLDG (WDH)" }, { ticket: "WIRTEK", value: "YAHOO/CO_WIRTEK", caption: "WIRTEK (WIRTEK)" }, { ticket: "ZEAL", value: "YAHOO/CO_ZEAL", caption: "ZEALAND PHARMA (ZEAL)" }];

YahooCoppenhagen.getTickets = function () {
  return tickets;
};

exports.default = YahooCoppenhagen;
//# sourceMappingURL=D:\_Dev\_React\_ERC\js\services\qy\YahooCoppenhagen.js.map