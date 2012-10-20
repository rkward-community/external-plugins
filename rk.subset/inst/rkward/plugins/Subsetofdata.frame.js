// this code was generated using the rkwarddev package.
//perhaps don't make changes here, but in the rkwarddev script instead!



function preprocess(){
	// add requirements etc. here

}

function calculate(){
	// read in variables from dialog
	var varData = getValue("var_data");
	var vrslSlctdvrb = getValue("vrsl_Slctdvrb");
	var vrslFilterby = getValue("vrsl_Filterby");
	var drpFltrAll = getValue("drp_fltr_all");
	var drpFltrFct = getValue("drp_fltr_fct");
	var drpFltrLgc = getValue("drp_fltr_lgc");
	var inpVlpstdss = getValue("inp_Vlpstdss");
	var svbSvrsltst = getValue("svb_Svrsltst");
	var frmOnlyssbsChecked = getValue("frm_Onlyssbs.checked");
	var frmFltrrwsbChecked = getValue("frm_Fltrrwsb.checked");

	// the R code to be evaluated
	var frmOnlyssbsChecked = getValue("frm_Onlyssbs.checked");
	var vrslSlctdvrbShortname = getValue("vrsl_Slctdvrb.shortname").split("\n").join("\", \"");
	var frmFltrrwsbChecked = getValue("frm_Fltrrwsb.checked");
	var vrslFilterbyShortname = getValue("vrsl_Filterby.shortname").split("\n").join("\", \"");
	var drpFltrAllVisible = getValue("drp_fltr_all.visible");
	var drpFltrFctVisible = getValue("drp_fltr_fct.visible");
	var drpFltrLgcVisible = getValue("drp_fltr_lgc.visible");
	var frmOnlyssbsChecked = getValue("frm_Onlyssbs.checked");
	var vrslSlctdvrbShortname = getValue("vrsl_Slctdvrb.shortname").split("\n").join("\", \"");
	var frmFltrrwsbChecked = getValue("frm_Fltrrwsb.checked");
	var vrslFilterbyShortname = getValue("vrsl_Filterby.shortname").split("\n").join("\", \"");
	echo("\tsset.result <- subset(");
	if(varData) {
		echo("\n\t\t" + varData);
	}
	if(drpFltrAllVisible == "true" && frmFltrrwsbChecked && vrslFilterbyShortname != "") {
		if(drpFltrAll == "!%in%") {
			echo(",\n\t\t!" + vrslFilterbyShortname + " %in% " + inpVlpstdss);
		} else {
			echo(",\n\t\t" + vrslFilterbyShortname + " " + drpFltrAll + " " + inpVlpstdss);
		}
	} else if(drpFltrFctVisible == "true" && frmFltrrwsbChecked && vrslFilterbyShortname != "") {
		if(drpFltrFct == "!%in%") {
			echo(",\n\t\t!" + vrslFilterbyShortname + " %in% " + inpVlpstdss);
		} else {
			echo(",\n\t\t" + vrslFilterbyShortname + " " + drpFltrFct + " " + inpVlpstdss);
		}
	} else if(drpFltrLgcVisible == "true" && frmFltrrwsbChecked) {
		if(drpFltrLgc == "TRUE") {
			echo(",\n\t\t" + vrslFilterbyShortname);
		} else {
			echo(",\n\t\t!" + vrslFilterbyShortname);
		}
	}
	if(frmOnlyssbsChecked && vrslSlctdvrbShortname != "") {
		echo(",\n\t\tselect=c(\"" + vrslSlctdvrbShortname + "\")");
	}
	echo("\n\t)\n\n");
}

function printout(){
	// printout the results
	echo("rk.header(\"Data subset\")\n");


	//// save result object
	// read in saveobject variables
	var svbSvrsltst = getValue("svb_Svrsltst");
	var svbSvrsltstActive = getValue("svb_Svrsltst.active");
	var svbSvrsltstParent = getValue("svb_Svrsltst.parent");
	// assign object to chosen environment
	if(svbSvrsltstActive) {
		echo(".GlobalEnv$" + svbSvrsltst + " <- sset.result\n");
	}

}

