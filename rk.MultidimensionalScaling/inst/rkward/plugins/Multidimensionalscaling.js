// this code was generated using the rkwarddev package.
//perhaps don't make changes here, but in the rkwarddev script instead!

// define variables globally
var frmUsnlysbsChecked = getValue("frm_Usnlysbs.checked");
var vrslSlctdvrbShortname = getValue("vrsl_Slctdvrb.shortname").split("\n").join("\", \"");
var frmDtprprtnEnabled = getValue("frm_Dtprprtn.enabled");

function preprocess(){
	// add requirements etc. here
	echo("require(MASS)\n");
}

function calculate(){
	// read in variables from dialog
	var vrslDtdtfrmm = getValue("vrsl_Dtdtfrmm");
	var vrslSlctdvrb = getValue("vrsl_Slctdvrb");
	var chcRmvmssng = getValue("chc_Rmvmssng");
	var chcStdrdzvl = getValue("chc_Stdrdzvl");
	var svbSvrsltst = getValue("svb_Svrsltst");
	var spnMxmmdmns = getValue("spn_Mxmmdmns");
	var drpCmpttnmt = getValue("drp_Cmpttnmt");
	var spnPwrfMnkw = getValue("spn_PwrfMnkw");
	var drpSclngmth = getValue("drp_Sclngmth");
	var spnMxmmnmbr = getValue("spn_Mxmmnmbr");
	var spnIntlrndm = getValue("spn_Intlrndm");
	var chcPltrslts = getValue("chc_Pltrslts");
	var spnTextsize = getValue("spn_Textsize");
	var drpTextpstn = getValue("drp_Textpstn");
	var frmPltlblsfChecked = getValue("frm_Pltlblsf.checked");

	// the R code to be evaluated
	if(frmUsnlysbsChecked && vrslSlctdvrbShortname != "") {
		echo("\t# Use subset of variables\n\t" + vrslDtdtfrmm + " <- subset(" + vrslDtdtfrmm + ", select=c(\"" + vrslSlctdvrbShortname + "\"))\n");
	}
	if(frmDtprprtnEnabled == "true" && chcRmvmssng == "true") {
		echo("\t# Listwise removal of missings\n\t" + vrslDtdtfrmm + " <- na.omit(" + vrslDtdtfrmm + ")\n");
	}
	if(frmDtprprtnEnabled == "true" && chcStdrdzvl == "true") {
		echo("\t# Standardizing values\n\t" + vrslDtdtfrmm + " <- scale(" + vrslDtdtfrmm + ")\n");
	}
	if(frmDtprprtnEnabled == "true") {
		echo("\t# Compute distance matrix\n\tmds.distances <- dist(");
		if(vrslDtdtfrmm) {
			echo("\n\t\tx=" + vrslDtdtfrmm);
		}
		echo(",\n\t\tmethod=\"" + drpCmpttnmt + "\"");
		if(drpCmpttnmt == "minkowski") {
			echo(",\n\t\tp=" + spnPwrfMnkw);
		}
		echo("\n\t)\n");
		echo("\t# The actual multidimensional scaling\n\t\tmds.result <- " + drpSclngmth + "(");
		if(vrslDtdtfrmm) {
			echo("\n\t\td=mds.distances");
		}
		echo(",\n\t\tk=" + spnMxmmdmns);
		echo("\n\t)\n\n");
	} else {
		echo("\t# The actual multidimensional scaling\n\t\tmds.result <- " + drpSclngmth + "(");
		if(vrslDtdtfrmm) {
			echo("\n\t\td=" + vrslDtdtfrmm);
		}
		echo(",\n\t\tk=" + spnMxmmdmns);
		echo("\n\t)\n\n");
	}
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
	var vrslDtdtfrmm = getValue("vrsl_Dtdtfrmm");
	var vrslSlctdvrb = getValue("vrsl_Slctdvrb");
	var chcRmvmssng = getValue("chc_Rmvmssng");
	var chcStdrdzvl = getValue("chc_Stdrdzvl");
	var svbSvrsltst = getValue("svb_Svrsltst");
	var spnMxmmdmns = getValue("spn_Mxmmdmns");
	var drpCmpttnmt = getValue("drp_Cmpttnmt");
	var spnPwrfMnkw = getValue("spn_PwrfMnkw");
	var drpSclngmth = getValue("drp_Sclngmth");
	var spnMxmmnmbr = getValue("spn_Mxmmnmbr");
	var spnIntlrndm = getValue("spn_Intlrndm");
	var chcPltrslts = getValue("chc_Pltrslts");
	var spnTextsize = getValue("spn_Textsize");
	var drpTextpstn = getValue("drp_Textpstn");
	var frmPltlblsfChecked = getValue("frm_Pltlblsf.checked");

	// create the plot
	if(full) {
		echo("rk.header(\"Multidimensional scaling\")\n");
	}

	var frmPltlblsfChecked = getValue("frm_Pltlblsf.checked");
	if(chcPltrslts) {
		echo("\n");
		var embRkwrdclrchsGCodePrintout = getValue("emb_rkwrdclrchsG.code.printout");
		// in case there are generic plot options defined:
	var embRkwrdpltptnGCodePreprocess = getValue("emb_rkwrdpltptnG.code.preprocess");
	var embRkwrdpltptnGCodePrintout = getValue("emb_rkwrdpltptnG.code.printout");
	var embRkwrdpltptnGCodeCalculate = getValue("emb_rkwrdpltptnG.code.calculate");

	if(full) {
		echo("rk.graph.on()\n");
	}
	echo("\ttry({\n");

	// insert any option-setting code that should be run before the actual plotting commands:
	printIndentedUnlessEmpty("\t\t", embRkwrdpltptnGCodePreprocess, "\n", "");

	// the actual plot:
	// label text color:
	echo("\t\tplot(mds.result");
	if(drpSclngmth == "isoMDS" || drpSclngmth == "sammon") {
		echo("[[\"points\"]]");
	}
	if(!embRkwrdpltptnGCodePrintout.match(/main\s*=/)) {
		echo(",\n\t\t\tmain=\"Multidimensional scaling\"");
	}
	if(!embRkwrdpltptnGCodePrintout.match(/sub\s*=/)) {
		echo(",\n\t\t\tsub=\"Solution with " + spnMxmmdmns + " dimensions (" + drpSclngmth + ")\"");
	}
	if(frmPltlblsfChecked && drpTextpstn == 0) {
		echo(",\n\t\t\ttype=\"n\"");
	}
	echo(embRkwrdpltptnGCodePrintout.replace(/, /g, ",\n\t\t\t"));
	echo(")");
	if(frmPltlblsfChecked) {
		echo("\n\t\ttext(mds.result");
			if(drpSclngmth == "isoMDS" || drpSclngmth == "sammon") {
				echo("[[\"points\"]],\n\t\t\trownames(mds.result[[\"points\"]])");
			} else {
				echo(",\n\t\t\trownames(mds.result)");
			}
			if(spnTextsize != 1) {
				echo(",\n\t\t\tcex=" + spnTextsize);
			}
			if(drpTextpstn != 0) {
				echo(",\n\t\t\tpos=" + drpTextpstn);
			}
			echo(embRkwrdclrchsGCodePrintout + ")");
	}

	// insert any option-setting code that should be run after the actual plot:
	printIndentedUnlessEmpty("\t\t", embRkwrdpltptnGCodeCalculate, "\n", "");

	echo("\n\t})\n");
	if(full) {
		echo("rk.graph.off()\n");
	}
	}
	if(full) {
		echo("\nrk.print(mds.result)\n");
		if(frmUsnlysbsChecked & vrslSlctdvrbShortname != "") {
			echo("\nrk.header(\"Subset of variables included the analysis\", level=3)\nrk.print(list(\"" + vrslSlctdvrbShortname + "\"))\n\n");
		}
	}

	// left over from the printout function

	//// save result object
	// read in saveobject variables
	var svbSvrsltst = getValue("svb_Svrsltst");
	var svbSvrsltstActive = getValue("svb_Svrsltst.active");
	var svbSvrsltstParent = getValue("svb_Svrsltst.parent");
	// assign object to chosen environment
	if(svbSvrsltstActive) {
		echo(".GlobalEnv$" + svbSvrsltst + " <- mds.result\n");
	}


}