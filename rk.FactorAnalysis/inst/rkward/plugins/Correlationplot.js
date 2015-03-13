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

	var vrslDtcrrltn = getString("vrsl_Dtcrrltn");
	var radColors = getString("rad_Colors");
	var spnFrom = getString("spn_from");
	var spnTo = getString("spn_to");
	var spnNmbrfshd = getString("spn_Nmbrfshd");
	var inpMaintitl = getString("inp_Maintitl");
	var spnNmbrfctg = getString("spn_Nmbrfctg");
	var frmShowlgndChecked = getBoolean("frm_Showlgnd.checked");

	// create the plot
	if(full) {
		new Header(i18n("Correlation plot")).print();

	}

	var frmShowlgndChecked = getValue("frm_Showlgnd.checked");
	

	if(full) {
		echo("rk.graph.on()\n");
	}
	echo("\ttry({\n");

	

	// the actual plot:
	echo("\t\tcor.plot(");
	if(vrslDtcrrltn) {
		echo("\n\t\t\tr=" + vrslDtcrrltn);
	}
	if(radColors == "false") {
		echo(",\n\t\t\tcolors=FALSE");
	}
	if(spnNmbrfshd != 51) {
		echo(",\n\t\t\tn=" + spnNmbrfshd);
	}
	if(inpMaintitl != "Correlation plot") {
		echo(",\n\t\t\tmain=\"" + inpMaintitl + "\"");
	}
	if(spnFrom != -1 | spnTo != 1) {
		echo(",\n\t\t\tzlim=c(" + spnFrom + "," + spnTo + ")");
	}
	if(frmShowlgndChecked) {
		if(spnNmbrfctg != 10) {
	echo(",\n\t\t\tn.legend=" + spnNmbrfctg);
}
	} else {
		echo(",\n\t\t\tshow.legend=FALSE");
	}
	echo("\n\t\t)");

	

	echo("\n\t})\n");
	if(full) {
		echo("rk.graph.off()\n");
	}
}