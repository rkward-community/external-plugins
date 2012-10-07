// this code was generated using the rkwarddev package.
//perhaps don't make changes here, but in the rkwarddev script instead!



function preprocess(){
	// add requirements etc. here
	echo("require(psych)\n");
}

function calculate(){
	// read in variables from dialog
	var vrslData = getValue("vrsl_Data");
	var drpVssFactmeth = getValue("drp_vss_factmeth");
	var spnNmbrfbsr = getValue("spn_Nmbrfbsr");
	var drpVssRotate = getValue("drp_vss_rotate");
	var chcFtthdgnl = getValue("chc_Ftthdgnl");
	var inpMaintitl = getValue("inp_Maintitl");
	var chcCnnctdff = getValue("chc_Cnnctdff");
	var svbSvdttwrk = getValue("svb_Svdttwrk");
	var frmPltrsltsChecked = getValue("frm_Pltrslts.checked");

	// the R code to be evaluated
	echo("\t\tVSS.data <- VSS(");
	if(vrslData) {
		echo("\n\t\t\t" + vrslData);
	}
	if(spnNmbrfbsr != 0) {
		echo(",\n\t\t\tn.obs=" + spnNmbrfbsr);
	}
	if(drpVssFactmeth != "minres") {
		echo(",\n\t\t\tfm=\"" + drpVssFactmeth + "\"");
	}
	if(drpVssRotate != "varimax") {
		echo(",\n\t\t\trotate=\"" + drpVssRotate + "\"");
	}
	if(chcFtthdgnl) {
		echo(",\n\t\t\tdiagonal=TRUE");
	}
	echo(",\n\t\t\tplot=FALSE)\n");
	echo("\n\t\tvss.stat.vars <- c(\"dof\",\"chisq\",\"prob\",\"sqresid\",\"fit\",\"cfit.1\",\"cfit.2\")\n" + "\n\t\tvss.stat.results <- as.data.frame(cbind(Factors=1:length(VSS.data[[\"map\"]]), MAP=VSS.data[[\"map\"]], VSS.data[[\"vss.stats\"]][,vss.stat.vars]))\n" + "\t\tcolnames(vss.stat.results)[3:9] <- paste(\"VSS\", vss.stat.vars, sep=\".\")\n\n" + "\t\tmin.MAP <- which.min(VSS.data[[\"map\"]])\n" + "\t\tmin.VSS1 <- which.min(VSS.data[[\"cfit.1\"]])\n" + "\t\tmin.VSS2 <- which.min(VSS.data[[\"cfit.2\"]])\n\n");
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
	var drpVssFactmeth = getValue("drp_vss_factmeth");
	var spnNmbrfbsr = getValue("spn_Nmbrfbsr");
	var drpVssRotate = getValue("drp_vss_rotate");
	var chcFtthdgnl = getValue("chc_Ftthdgnl");
	var inpMaintitl = getValue("inp_Maintitl");
	var chcCnnctdff = getValue("chc_Cnnctdff");
	var svbSvdttwrk = getValue("svb_Svdttwrk");
	var frmPltrsltsChecked = getValue("frm_Pltrslts.checked");

	// create the plot
	if(full) {
		echo("rk.header(\"Very Simple Structure/Minimum Average Partial results\")\n");
	}

	var frmPltrsltsChecked = getValue("frm_Pltrslts.checked");
	if(frmPltrsltsChecked) {
		

	if(full) {
		echo("rk.graph.on()\n");
	}
	echo("\ttry({\n");

	

	// the actual plot:
	echo("\t\tVSS.plot(VSS.data");
	if(inpMaintitl != "Very Simple Structure") {
		echo(",\n\t\t\ttitle=\"" + inpMaintitl + "\"");
	}
	if(chcCnnctdff) {
		echo(",\n\t\t\tline=TRUE");
	}
	echo(")");

	

	echo("\n\t})\n");
	if(full) {
		echo("rk.graph.off()\n");
	}
	}
	echo("rk.header(\"Very Simple Structure\", level=4)\n" + "rk.print(paste(\"VSS complexity 1 achieves a maximimum of \", round(VSS.data[[\"cfit.1\"]][min.VSS1], digits=3), \" with \", min.VSS1, \" factors.\", sep=\"\"))\n" + "rk.print(paste(\"VSS complexity 2 achieves a maximimum of \", round(VSS.data[[\"cfit.2\"]][min.VSS2], digits=3), \" with \", min.VSS2, \" factors.\", sep=\"\"))\n" + "rk.header(\"Minimum Average Partial\", level=4)\n" + "rk.print(paste(\"The Velicer MAP criterion achieves a minimum of \", round(VSS.data[[\"map\"]][min.MAP], digits=3), \" with \", min.MAP, \" factors.\", sep=\"\"))\n" + "rk.header(\"Statistics\", level=4)\n" + "rk.results(vss.stat.results)\n\n");

	// left over from the printout function

	//// save result object
	// read in saveobject variables
	var svbSvdttwrk = getValue("svb_Svdttwrk");
	var svbSvdttwrkActive = getValue("svb_Svdttwrk.active");
	var svbSvdttwrkParent = getValue("svb_Svdttwrk.parent");
	// assign object to chosen environment
	if(svbSvdttwrkActive) {
		echo(".GlobalEnv$" + svbSvdttwrk + " <- VSS.data\n");
	}


}