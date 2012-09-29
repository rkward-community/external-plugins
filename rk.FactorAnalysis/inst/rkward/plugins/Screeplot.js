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
	var radDrwscrfr = getValue("rad_Drwscrfr");
	var spnEigenval = getValue("spn_Eigenval");
	var frmHrzntllnChecked = getValue("frm_Hrzntlln.checked");

	// create the plot
	if(full) {
		echo("rk.header(\"Scree plot results\")\n");
	}

	var frmHrzntllnChecked = getValue("frm_Hrzntlln.checked");
	

	if(full) {
		echo("rk.graph.on()\n");
	}
	echo("\ttry({\n");

	

	// the actual plot:
	echo("\t\tscree(");
	if(vrslData) {
		echo("\n\t\t\t" + vrslData);
	}
	if(radDrwscrfr == "comp") {
		echo(",\n\t\t\tfactors=FALSE");
	}
	if(radDrwscrfr == "fact") {
		echo(",\n\t\t\tpc=FALSE");
	}
	if(inpMaintitl != "Scree plot") {
		echo(",\n\t\t\tmain=\"" + inpMaintitl + "\"");
	}
	if(frmHrzntllnChecked) {
		if(spnEigenval != 1) {
	echo(",\n\t\t\thline=" + spnEigenval);
}
	} else {
		echo(",\n\t\t\thline=-1");
	}
	echo(")");

	

	echo("\n\t})\n");
	if(full) {
		echo("rk.graph.off()\n");
	}
}