// this code was generated using the rkwarddev package.
//perhaps don't make changes here, but in the rkwarddev script instead!



function preprocess(){
	// add requirements etc. here
	echo("require(pwr)\n");
}

function calculate(){
	// read in variables from dialog
	var radPwrParam = getValue("rad_pwr_param");
	var radPwrParam2samples = getValue("rad_pwr_param_2samples");
	var radPwrParam2df = getValue("rad_pwr_param_2df");
	var drpPwrStat = getValue("drp_pwr_stat");
	var spnNmbrfgrp = getValue("spn_Nmbrfgrp");
	var drpPwrType = getValue("drp_pwr_type");
	var drpPwrProptype = getValue("drp_pwr_proptype");
	var drpPwrHypothesis = getValue("drp_pwr_hypothesis");
	var radEffctEta = getValue("rad_effct_eta");
	var spnPower = getValue("spn_Power");
	var pwrSpinDf = getValue("pwr_spin_df");
	var pwrSpinDfu = getValue("pwr_spin_dfu");
	var pwrSpinDfv = getValue("pwr_spin_dfv");
	var pwrSpinSample0 = getValue("pwr_spin_sample0");
	var pwrSpinSample1 = getValue("pwr_spin_sample1");
	var pwrSpinSample2 = getValue("pwr_spin_sample2");
	var spnEffectsz = getValue("spn_Effectsz");
	var spnSgnfcncl = getValue("spn_Sgnfcncl");
	var svbSvrsltst = getValue("svb_Svrsltst");

	// the R code to be evaluated
	echo("\tpwr.result <- ");
	if(drpPwrStat == "pwr.t.test") {
		if(drpPwrType == "two.sample.diff") {
		echo("pwr.t2n.test(");
	if(radPwrParam != "sample") {
		echo("\n\t\tn1=" + pwrSpinSample1 + ",\n\t\tn2=" + pwrSpinSample2);
	} else if(radPwrParam2samples == "n2") {
		echo("\n\t\tn1=" + pwrSpinSample1 + ",");
	} else {
		echo("\n\t\tn2=" + pwrSpinSample2 + ",");
	}
	} else {
		echo("pwr.t.test(");
	if(radPwrParam != "sample") {
		echo("\n\t\tn=" + pwrSpinSample0);
	}
	}
	if(radPwrParam != "effect") {
		if(radPwrParam != "sample") {
		echo(",");
	}
	echo("\n\t\td=" + spnEffectsz);
	}
	}
	if(drpPwrStat == "pwr.r.test") {
		echo("pwr.r.test(");
	if(radPwrParam != "sample") {
		echo("\n\t\tn=" + pwrSpinSample0);
	}
	if(radPwrParam != "effect") {
		if(radPwrParam != "sample") {
		echo(",");
	}
	echo("\n\t\tr=" + spnEffectsz);
	}
	}
	if(drpPwrStat == "pwr.anova.test") {
		echo("pwr.anova.test(");
	echo("\n\t\tk=" + spnNmbrfgrp);
	if(radPwrParam != "sample") {
		echo(",\n\t\tn=" + pwrSpinSample0);
	}
	if(radPwrParam != "effect") {
		if(radEffctEta == "f") {
			echo(",\n\t\tf=" + spnEffectsz);
		} else {
			echo(",\n\t\tf=sqrt(" + spnEffectsz + "/(1-" + spnEffectsz + ")) # calculate f from eta squared");
		}
	}
	}
	if(drpPwrStat == "pwr.f2.test") {
		echo("pwr.f2.test(");
	if(radPwrParam != "sample") {
		echo(",\n\t\tu=" + pwrSpinDfu + ",\n\t\tv=" + pwrSpinDfv);
	} else if(radPwrParam2df == "v") {
		echo("\n\t\tu=" + pwrSpinDfu);
	} else {
		echo("\n\t\tv=" + pwrSpinDfv);
	}
	if(radPwrParam != "effect") {
		echo(",\n\t\tf2=" + spnEffectsz);
	}
	}
	if(drpPwrStat == "pwr.chisq.test") {
		echo("pwr.chisq.test(");
	if(radPwrParam != "effect") {
		echo("\n\t\tw=" + spnEffectsz);
	}
	if(radPwrParam != "sample") {
		if(radPwrParam != "effect") {
		echo(",");
	}
	echo("\n\t\tN=" + pwrSpinSample0);
	}
	echo(",\n\t\tdf=" + pwrSpinDf);
	}
	if(drpPwrStat == "pwr.p.test") {
		if(drpPwrProptype == "two.sample.same") {
		echo("pwr.2p.test(");
	}
	if(drpPwrProptype == "two.sample.diff") {
		echo("pwr.2p2n.test(");
	}
	if(drpPwrProptype == "one.sample") {
		echo("pwr.p.test(");
	}
	if(radPwrParam != "effect") {
		echo("\n\t\th=" + spnEffectsz);
	}
	if(radPwrParam != "sample") {
		if(radPwrParam != "effect") {
		echo(",");
	}
	if(drpPwrProptype != "two.sample.diff") {
		echo("\n\t\tn=" + pwrSpinSample0);
	} else {
		echo("\n\t\tn1=" + pwrSpinSample1 + ",\n\t\tn2=" + pwrSpinSample2);
	}
	} else if(drpPwrProptype == "two.sample.diff") {
		if(radPwrParam2samples == "n2") {
			echo("\n\t\tn1=" + pwrSpinSample1 + ",");
		} else {
			echo("\n\t\tn2=" + pwrSpinSample2 + ",");
		}
	}
	}
	if(drpPwrStat == "pwr.norm.test") {
		echo("pwr.norm.test(");
	if(radPwrParam != "effect") {
		echo("\n\t\td=" + spnEffectsz);
	}
	if(radPwrParam != "sample") {
		if(radPwrParam != "effect") {
		echo(",");
	}
	echo("\n\t\tn=" + pwrSpinSample0);
	}
	}
	if(radPwrParam != "significance") {
		if(spnSgnfcncl != 0.05) {
			echo("\n\t\tsig.level=" + spnSgnfcncl + ",");
		}
	} else {
		echo(",\n\t\tsig.level=NULL");
	}
	if(radPwrParam != "power") {
		echo(",\n\t\tpower=" + spnPower);
	}
	if(drpPwrStat == "pwr.t.test" & drpPwrType != "two.sample.diff" & drpPwrType != "two.sample") {
		echo(",\n\t\ttype=\"" + drpPwrType + "\"");
	}
	if(drpPwrStat != "pwr.anova.test" & drpPwrStat != "pwr.f2.test" & drpPwrStat != "pwr.chisq.test") {
		if(drpPwrHypothesis != "two.sided") {
			echo(",\n\t\talternative=\"" + drpPwrHypothesis + "\"");
		}
	}
	echo("\n\t)\n\n");
}

function printout(){
	// printout the results
	echo("rk.header(\"Power analysis results\")\n");

	echo("rk.print(pwr.result)\n");
	//// save result object
	// read in saveobject variables
	var svbSvrsltst = getValue("svb_Svrsltst");
	var svbSvrsltstActive = getValue("svb_Svrsltst.active");
	var svbSvrsltstParent = getValue("svb_Svrsltst.parent");
	// assign object to chosen environment
	if(svbSvrsltstActive) {
		echo(".GlobalEnv$" + svbSvrsltst + " <- pwr.result\n");
	}

}

