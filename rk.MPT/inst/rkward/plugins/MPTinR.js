// this code was generated using the rkwarddev package.
//perhaps don't make changes here, but in the rkwarddev script instead!

function preprocess(){
	// add requirements etc. here
	echo("require(MPTinR)\n");
}

function calculate(){
	// read in variables from dialog
	var vrslDtvctrmt = getValue("vrsl_Dtvctrmt");
	var brwModelfil = getValue("brw_Modelfil");
	var drpModeltyp = getValue("drp_Modeltyp");
	var brwRstrctns = getValue("brw_Rstrctns");
	var spnNmbrfrMC = getValue("spn_NmbrfrMC");
	var chcFllFIArs = getValue("chc_FllFIArs");
	var spnNmbrfptm = getValue("spn_Nmbrfptm");
	var chcFllptmrs = getValue("chc_Fllptmrs");
	var spnCnfdncnt = getValue("spn_Cnfdncnt");
	var chcEnfrcnql = getValue("chc_Enfrcnql");
	var chcSrtprmtr = getValue("chc_Srtprmtr");
	var svbSvrsltst = getValue("svb_Svrsltst"); 
	var frmEstmtFIAChecked = getValue("frm_EstmtFIA.checked");

	// the R code to be evaluated

	var frmEstmtFIAChecked = getValue("frm_EstmtFIA.checked");
	echo("\tMPTinR.result <- fit.mpt(");
	if(vrslDtvctrmt) {
		echo("\n\t\tdata=" + vrslDtvctrmt);
	} else {}
	if(brwModelfil) {
		echo(",\n\t\tmodel.filename=\"" + brwModelfil + "\"");
	} else {}
	if(brwRstrctns) {
		echo(",\n\t\trestrictions.filename=\"" + brwRstrctns + "\"");
	} else {}
	if(spnNmbrfptm != 5) {
		echo(",\n\t\tn.optim=" + spnNmbrfptm);
	} else {}
	if(frmEstmtFIAChecked) {
		echo(",\n\t\tfia=" + spnNmbrfrMC);
	} else {}
	if(spnCnfdncnt != 95) {
		echo(",\n\t\tci=" + spnCnfdncnt);
	} else {}
	if(frmEstmtFIAChecked && chcFllFIArs && !chcFllptmrs) {
		echo(",\n\t\toutput=\"fia\"");
	} else {}
	if(chcFllptmrs) {
		echo(",\n\t\toutput=\"full\"");
	} else {}
	if(!chcEnfrcnql) {
		echo(",\n\t\treparam.ineq=FALSE");
	} else {}
	if(!chcSrtprmtr) {
		echo(",\n\t\tsort.param=FALSE");
	} else {}
	if(drpModeltyp != "easy") {
		echo(",\n\t\tmodel.type=\"" + drpModeltyp + "\"");
	} else {}
	echo("\n\t)\n\n");
}

function printout(){
	// printout the results
	echo("rk.header(\"Multinomial Processing Trees\", level=1)\n");

	echo("\trk.header(\"Parameter estimation (MPTinR)\", level=3)\n");
	echo("\trk.print(MPTinR.result)\n");
	var svbSvrsltst = getValue("svb_Svrsltst");
	var svbSvrsltstActive = getValue("svb_Svrsltst.active");
	var svbSvrsltstParent = getValue("svb_Svrsltst.parent");
	if(svbSvrsltstActive) {
		echo("assign(\"" + svbSvrsltst + "\", MPTinR.result, envir=" + svbSvrsltstParent + ")\n");
	} else {}

}

