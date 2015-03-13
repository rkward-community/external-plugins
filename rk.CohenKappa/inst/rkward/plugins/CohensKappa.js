// this code was generated using the rkwarddev package.
//perhaps don't make changes here, but in the rkwarddev script instead!



function preprocess(){
	// add requirements etc. here
	echo("require(psych)\n");
}

function calculate(){
	// read in variables from dialog

	var vrslDtmtrxr2 = getString("vrsl_Dtmtrxr2");
	var vrslWghtmtrx = getString("vrsl_Wghtmtrx");
	var spnNmbrfbsr = getString("spn_Nmbrfbsr");
	var spnAlphvlfr = getString("spn_Alphvlfr");
	var svbSvrsltst = getString("svb_Svrsltst");

	// the R code to be evaluated
	echo("\tkappa.result <- cohen.kappa(");
	if(vrslDtmtrxr2) {
		echo("\n\t\tx=" + vrslDtmtrxr2);
	}
	if(vrslWghtmtrx) {
		echo(",\n\t\tw=" + vrslWghtmtrx);
	}
	if(spnNmbrfbsr > 0) {
		echo(",\n\t\tn.obs=" + spnNmbrfbsr);
	}
	if(spnAlphvlfr != 0.05) {
		echo(",\n\t\talpha=" + spnAlphvlfr);
	}
	echo("\n\t)\n\n");
}

function printout(){
	// printout the results
	new Header(i18n(""Cohen's Kappa and weighted Kappa"")).print();


	echo("\trk.header(\"Correlation coefficients and confidence boundaries\", level=3)\n");
	echo("\trk.print(kappa.result[[\"confid\"]])\n");
	echo("\trk.print(paste(\"<b>Alpha level:</b>\", kappa.result[[\"plevel\"]]))\n");
	echo("\trk.print(paste(\"<b>Number of subjects:</b>\", kappa.result[[\"n.obs\"]]))\n\n");
	//// save result object
	// read in saveobject variables
	var svbSvrsltst = getValue("svb_Svrsltst");
	var svbSvrsltstActive = getValue("svb_Svrsltst.active");
	var svbSvrsltstParent = getValue("svb_Svrsltst.parent");
	// assign object to chosen environment
	if(svbSvrsltstActive) {
		echo(".GlobalEnv$" + svbSvrsltst + " <- kappa.result\n");
	}

}

