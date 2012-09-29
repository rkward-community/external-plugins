// this code was generated using the rkwarddev package.
//perhaps don't make changes here, but in the rkwarddev script instead!



function preprocess(){
	// add requirements etc. here
	echo("require(psych)\n");
}

function calculate(){
}

function printout(){
	// all the real work is moved to a custom defined function doPrintout() below
	// true in this case means: We want all the headers that should be printed in the output:
	doPrintout(true);
}

function preview(){
	preprocess();
	calculate();
	doPrintout(false);
}

function doPrintout(full){
	// read in variables from dialog
	var vrslData = getValue("vrsl_Data");
	var inpMaintitl = getValue("inp_Maintitl");
	var radShwEgnvl = getValue("rad_ShwEgnvl");
	var drpPrllFactmeth = getValue("drp_prll_factmeth");
	var spnNmbrfbs0 = getValue("spn_Nmbrfbs0");
	var spnNmbrftrt = getValue("spn_Nmbrftrt");
	var chcEstmtSMC = getValue("chc_EstmtSMC");
	var chcPltrrrbr = getValue("chc_Pltrrrbr");
	var chcShowlgnd = getValue("chc_Showlgnd");
	var svbSvdttwrk = getValue("svb_Svdttwrk");

	// create the plot
	if(full) {
		echo("rk.header(\"Parallel analysis (Horn) results\")\n");
	}

	

	if(full) {
		echo("rk.graph.on()\n");
	}
	echo("\ttry({\n");

	

	// the actual plot:
	echo("\t\tparallel.data <- fa.parallel(");
	if(vrslData) {
		echo("\n\t\t\t" + vrslData);
	}
	if(spnNmbrfbs0 != 0) {
		echo(",\n\t\t\tn.obs=" + spnNmbrfbs0);
	}
	if(drpPrllFactmeth != "minres") {
		echo(",\n\t\t\tfm=\"" + drpPrllFactmeth + "\"");
	}
	if(radShwEgnvl != "both") {
		echo(",\n\t\t\tfa=\"" + radShwEgnvl + "\"");
	}
	if(inpMaintitl != "Parallel Analysis Scree Plots") {
		echo(",\n\t\t\tmain=\"" + inpMaintitl + "\"");
	}
	if(spnNmbrftrt != 20) {
		echo(",\n\t\t\tn.iter=" + spnNmbrftrt);
	}
	if(chcPltrrrbr) {
		echo(",\n\t\t\terror.bars=TRUE");
	}
	if(chcEstmtSMC) {
		echo(",\n\t\t\tSMC=TRUE");
	}
	if(!chcShowlgnd) {
		echo(",\n\t\t\tshow.legend=FALSE");
	}
	echo(")");

	

	echo("\n\t})\n");
	if(full) {
		echo("rk.graph.off()\n");
	}

	// left over from the printout function

	//// save result object
	// read in saveobject variables
	var svbSvdttwrk = getValue("svb_Svdttwrk");
	var svbSvdttwrkActive = getValue("svb_Svdttwrk.active");
	var svbSvdttwrkParent = getValue("svb_Svdttwrk.parent");
	// assign object to chosen environment
	if(svbSvdttwrkActive) {
		echo(".GlobalEnv$" + svbSvdttwrk + " <- parallel.data\n");
	}


}