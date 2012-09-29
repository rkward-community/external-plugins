// 



function preprocess(){
	// add requirements etc. here
	echo("require(MPTinR2)\n");
}

function calculate(){
	// read in variables from dialog
	var vrslDtvctrmt = getValue("vrsl_Dtvctrmt");
	var drpModlfrmt = getValue("drp_Modlfrmt");
	var vrslMdlbmptm = getValue("vrsl_Mdlbmptm");
	var brwModelfil = getValue("brw_Modelfil");
	var drpModeltyp = getValue("drp_Modeltyp");
	var brwRstrctns = getValue("brw_Rstrctns");
	var svbSvrsltst = getValue("svb_Svrsltst");
	var spnNmbrfptm = getValue("spn_Nmbrfptm");
	var spnCnfdncnt = getValue("spn_Cnfdncnt");
	var chcParamtrs = getValue("chc_Paramtrs");
	var chcGdnssfft = getValue("chc_Gdnssfft");
	var chcInfrmtnc = getValue("chc_Infrmtnc");

	// the R code to be evaluated
	echo("\tMPTinR2.result <- fit.mpt(");
	if(drpModlfrmt == "file" && brwModelfil) {
		echo("\n\t\tmodel=\"" + brwModelfil + "\"");
	}
	if(drpModlfrmt == "object" && vrslMdlbmptm) {
		echo("\n\t\tmodel=" + vrslMdlbmptm);
	}
	if(vrslDtvctrmt) {
		echo(",\n\t\tdata=" + vrslDtvctrmt);
	}
	if(brwRstrctns) {
		echo(",\n\t\trestrictions.filename=\"" + brwRstrctns + "\"");
	}
	if(drpModlfrmt == "file" && drpModeltyp != "easy") {
		echo(",\n\t\tmodel.type=\"" + drpModeltyp + "\"");
	}
	if(spnCnfdncnt != 95) {
		echo(",\n\t\tci=" + spnCnfdncnt);
	}
	if(spnNmbrfptm != 5) {
		echo(",\n\t\tn.optim=" + spnNmbrfptm);
	}
	echo("\n\t)\n");
	if(chcParamtrs) {
		echo("\t# Get parameters\n\tMPTinR2.par <- parameters(MPTinR2.result)\n");
	}
	if(chcGdnssfft) {
		echo("\t# Goodness of fit\n\tMPTinR2.gof <- goodness.of.fit(MPTinR2.result)\n");
	}
	if(chcInfrmtnc) {
		echo("\t# Information criteria\n\tMPTinR2.inf <- information.criteria(MPTinR2.result)\n");
	}
	echo("\n");
}

function printout(){
	// printout the results


	var chcParamtrs = getValue("chc_Paramtrs");
	var chcGdnssfft = getValue("chc_Gdnssfft");
	var chcInfrmtnc = getValue("chc_Infrmtnc");
	echo("\trk.header(\"Multinomial Processing Trees (MPTinR2)\",\n\tparameters=list(\n\t\t\"Number of trees\"=MPTinR2.result@model@check$n.trees,\n\t\t\"Number of categories\"=MPTinR2.result@model@check$n.categories,\n\t\t\"Number of free parameters\"=MPTinR2.result@model@check$n.free.parameters,\n\t\t\"Number of fixed parameters\"=MPTinR2.result@model@check$n.fixed.parameters),\n\tlevel=1)\n");
	echo("\trk.header(\"Degrees of freedom\", level=4)\n");
	echo("\trk.results(data.frame(t(MPTinR2.result@model@check$df)))\n");
	if(chcGdnssfft) {
		echo("\n\trk.header(\"Goodness of fit\", level=4)\n");
		echo("\trk.print(\"Individual:\")\n");
		echo("\trk.results(data.frame(MPTinR2.gof$individual), print.rownames=TRUE)\n");
		echo("\trk.print(\"<br />Sum:\")\n");
		echo("\trk.results(data.frame(t(MPTinR2.gof$sum)))\n");
		echo("\trk.print(\"<br />Aggregated:\")\n");
		echo("\trk.results(data.frame(t(MPTinR2.gof$aggregated)))\n");
	}
	if(chcInfrmtnc) {
		echo("\n\trk.header(\"Information criteria\", level=4)\n");
		echo("\trk.print(\"Individual:\")\n");
		echo("\trk.results(data.frame(MPTinR2.inf$individual), print.rownames=TRUE)\n");
		echo("\trk.print(\"<br />Sum:\")\n");
		echo("\trk.results(data.frame(t(MPTinR2.inf$sum)))\n");
		echo("\trk.print(\"<br />Aggregated:\")\n");
		echo("\trk.results(data.frame(t(MPTinR2.inf$aggregated)))\n");
	}
	if(chcParamtrs) {
		echo("\n\trk.header(\"Parameter estimates\", level=4)\n");
		echo("\trk.print(\"Individual:\")\n");
		echo("\trk.results(data.frame(MPTinR2.result@estimates), print.rownames=TRUE)\n");
		echo("\trk.print(\"<br />Mean values:\")\n");
		echo("\trk.results(data.frame(MPTinR2.par$mean))\n");
		echo("\trk.print(\"<br />Aggregated data:\")\n");
		echo("\trk.results(data.frame(MPTinR2.par$aggregated))\n\n");
	}
	//// save result object
	// read in saveobject variables
	var svbSvrsltst = getValue("svb_Svrsltst");
	var svbSvrsltstActive = getValue("svb_Svrsltst.active");
	var svbSvrsltstParent = getValue("svb_Svrsltst.parent");
	// assign object to chosen environment
	if(svbSvrsltstActive) {
		echo(".GlobalEnv$" + svbSvrsltst + " <- MPTinR2.result\n");
	}

}

