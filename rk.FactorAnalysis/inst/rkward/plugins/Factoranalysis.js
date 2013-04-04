// this code was generated using the rkwarddev package.
//perhaps don't make changes here, but in the rkwarddev script instead!

// define variables globally
 var isObrot;

function preprocess(){
	// add requirements etc. here
	echo("require(psych)\n");
}

function calculate(){
	// read in variables from dialog
	var vrslCrrltnmt = getValue("vrsl_Crrltnmt");
	var radFctrngmt = getValue("rad_Fctrngmt");
	var radCrrltnmt = getValue("rad_Crrltnmt");
	var spnNmbrffct = getValue("spn_Nmbrffct");
	var svbSvrsltst = getValue("svb_Svrsltst");
	var drpPCARotate = getValue("drp_PCA_rotate");
	var drpEFARotate = getValue("drp_EFA_rotate");
	var drpEFAFactmeth = getValue("drp_EFA_factmeth");
	var radIntlcmmn = getValue("rad_Intlcmmn");
	var radMtrxtfct = getValue("rad_Mtrxtfct");
	var radMtrxtscr = getValue("rad_Mtrxtscr");
	var chcShwrsdls = getValue("chc_Shwrsdls");
	var chcApplyKsr = getValue("chc_ApplyKsr");
	var radioMissingsPCA = getValue("radio_missings_PCA");
	var drpMthdtfnd = getValue("drp_Mthdtfnd");
	var radioMissingsEFA = getValue("radio_missings_EFA");
	var spnNmbrfbGF = getValue("spn_NmbrfbGF");
	var spnNmbrftrt = getValue("spn_Nmbrftrt");
	var spnUntlchng = getValue("spn_Untlchng");
	var spnMxmmnmbr = getValue("spn_Mxmmnmbr");
	var spnMrkrtmth = getValue("spn_Mrkrtmth");
	var spnShwdcmls = getValue("spn_Shwdcmls");
	var frmFndcmpnnChecked = getValue("frm_Fndcmpnn.checked");
	var frmPrfrmbtsChecked = getValue("frm_Prfrmbts.checked");

	// the R code to be evaluated
	var obrot = new Array("promax", "oblimin", "simplimax", "bentlerQ", "geominQ", "biquartimin", "cluster");

	if((obrot.indexOf(drpEFARotate) == -1 && radFctrngmt != "PCA") | (obrot.indexOf(drpPCARotate) == -1 && radFctrngmt == "PCA")) {
		isObrot = false;
	} else {
		isObrot = true;
	}
	echo("\tFA.results <- ");
	if(radFctrngmt == "PCA") {
		echo("principal(");
	} else if(chcApplyKsr) {
		echo("kaiser(" + radCrrltnmt + "(");
	} else {
		echo(radCrrltnmt + "(");
	}
	if(vrslCrrltnmt) {
		if(radFctrngmt == "EFA" && radCrrltnmt == "fa.poly") {
			echo("x=" + vrslCrrltnmt);
		} else {
			echo("r=" + vrslCrrltnmt);
		}
	}
	if(spnNmbrffct > 1) {
		echo(",\n\t\tnfactors=" + spnNmbrffct);
	}
	if(radFctrngmt == "PCA" || radCrrltnmt == "fa") {
		if(chcShwrsdls) {
			echo(",\n\t\tresiduals=TRUE");
		}
	}
	if(radFctrngmt == "PCA") {
		echo(",\n\t\trotate=\"" + drpPCARotate + "\"");
	} else if(chcApplyKsr) {
		echo(",\n\t\trotate=\"none\"");
	} else {
		echo(",\n\t\trotate=\"" + drpEFARotate + "\"");
	}
	if(spnNmbrfbGF > 0) {
		echo(",\n\t\tn.obs=" + spnNmbrfbGF);
	}
	if(radFctrngmt == "PCA") {
		if(frmFndcmpnnChecked) {
			echo(",\n\t\tscores=TRUE");
		}
		if(frmFndcmpnnChecked & radioMissingsPCA != "none") {
			echo(",\n\t\tmissing=TRUE,\n\t\timpute=\"" + radioMissingsPCA + "\"");
		}
	} else {
		if(frmPrfrmbtsChecked) {
			echo(",\n\t\tn.iter=" + spnNmbrftrt);
		}
		if(radCrrltnmt == "fa") {
			echo(",\n\t\tscores=\"" + drpMthdtfnd + "\"");
		}
		if(radIntlcmmn == "false") {
			echo(",\n\t\tSMC=FALSE");
		}
		if(radCrrltnmt == "fa" && radMtrxtfct == "true") {
			echo(",\n\t\tcovar=TRUE");
		}
		if(radioMissingsEFA != "none") {
			echo(",\n\t\tmissing=TRUE,\n\t\timpute=\"" + radioMissingsEFA + "\"");
		}
		if(frmPrfrmbtsChecked & spnUntlchng != 0.001) {
			echo(",\n\t\tmin.err=" + spnUntlchng);
		}
		if(frmPrfrmbtsChecked & spnMxmmnmbr != 50) {
			echo(",\n\t\tmax.iter=" + spnMxmmnmbr);
		}
		echo(",\n\t\tfm=\"" + drpEFAFactmeth + "\"");
		if(radMtrxtscr == "false") {
			echo(",\n\t\toblique.scores=FALSE");
		}
	}
	if(radFctrngmt == "EFA" && chcApplyKsr) {
		echo("), rotate=\"" + drpEFARotate + "\"");
	}
	echo(")\n\n");
}

function printout(){
	// printout the results


	var radFctrngmt = getValue("rad_Fctrngmt");
	var spnNmbrffct = getValue("spn_Nmbrffct");
	var drpPCARotate = getValue("drp_PCA_rotate");
	var drpEFAFactmeth = getValue("drp_EFA_factmeth");
	var drpEFARotate = getValue("drp_EFA_rotate");
	var chcApplyKsr = getValue("chc_ApplyKsr");
	var spnShwdcmls = getValue("spn_Shwdcmls");
	var spnMrkrtmth = getValue("spn_Mrkrtmth");
	echo("\tdigits <- function(obj) {\n\t\treturn(format(round(obj, digits=" + spnShwdcmls + "), nsmall=" + spnShwdcmls + "))\n\t}\n\t# Make matrix from loadings, for more flexible output\n\tFA.load.dim <- dim(FA.results$loadings)\n\tFA.load.names <- dimnames(FA.results$loadings)\n\t# Nicen component names\n\tFA.load.names[[2]] <- paste(");
	if(radFctrngmt == "PCA") {
		echo("\"Component\"");
	} else {
		echo("\"Factor\"");
	}
	echo(", 1:length(FA.load.names[[2]]))\n\tFA.load <- FA.results$loadings[!is.character(FA.results$loadings)]\n\tFA.load.mtx <- matrix(FA.load, nrow=FA.load.dim[1], dimnames=FA.load.names)\n\t# For printout, highlight loadings\n\tidx.load <- FA.load >= " + spnMrkrtmth + "\n\tFA.load.print <- digits(FA.load)\n\tFA.load.print[idx.load] <- paste(\"<b>\", FA.load.print[idx.load], \"</b>\", sep=\"\")\n\tFA.load.print <- matrix(FA.load.print, nrow=FA.load.dim[1], dimnames=FA.load.names)\n\t# Append communality and uniqueness\n\tFA.load.print <- cbind(FA.load.print,\n\t\t\"communality\"=paste(\"<span style=\\\"color:grey;\\\">\", digits(FA.results$communality), \"</span>\", sep=\"\"),\n\t\t\"uniqueness\"=paste(\"<span style=\\\"color:grey;\\\">\", digits(FA.results$uniquenesses), \"</span>\", sep=\"\"))\n\t# Append sum of squared loadings\n");
	if(isObrot) {
		echo("\tFA.s2load <- diag(FA.results$Phi %*% t(FA.results$loadings) %*% FA.results$loadings)\n");
	} else {
		echo("\tFA.s2load <- colSums(FA.results$loadings^2)\n");
	}
	echo("\t# Variance explained\n\tFA.varExp <- 100 * FA.s2load / FA.load.dim[1]\n\tFA.load.print <- rbind(FA.load.print,\n\t\t\"Sum of squared loadings\"=c(paste(\"<span style=\\\"color:grey;\\\">\", digits(FA.s2load), \"</span>\", sep=\"\"),\n\t\tdigits(sum(FA.s2load)), \"\"),\n\t\t\"Variance explained (%)\"=c(paste(\"<span style=\\\"color:grey;\\\">\", digits(FA.varExp), \"</span>\", sep=\"\"), \"\", \"\"),\n\t\t\"Variance explained (cum %)\"=c(paste(\"<span style=\\\"color:grey;\\\">\", digits(cumsum(FA.varExp)), \"</span>\", sep=\"\"), \"\", \"\"))\n\t# Finally, make it a data.frame\n\tFA.load.print <- data.frame(FA.load.print, stringsAsFactors=FALSE)\n");
	if(isObrot) {
		echo("\t# Prepare correlation matrix for printout\n\t\tcomp.corr <- digits(FA.results$Phi)\n\t\tdimnames(comp.corr) <- list(FA.load.names[[2]],FA.load.names[[2]])\n");
	}
	echo("\t# Prepare score*factors matrix for printout\n\tscfc.corr <- data.frame(rbind(\n\t\t\"Correlation of scores with factors\"=digits(sqrt(FA.results$R2)),\n\t\t\"Multiple R square of scores with factors\"=digits(FA.results$R2),\n\t\t\"Minimum correlation of possible factor scores\"=digits((2*FA.results$R2)-1)), stringsAsFactors=FALSE)\n\tcolnames(scfc.corr) <- FA.load.names[[2]]\n\n\t# Ok, here the actual output starts\n");
	if(radFctrngmt == "PCA") {
		echo("rk.header(\"Principal Component Analysis\"");
	} else {
		echo("rk.header(\"Factor Analysis\"");
	}
	echo(",\n\tparameters=list(");
	if(radFctrngmt == "PCA") {
		echo("\t\t\"Number of components\", " + spnNmbrffct + ",\n" + "\t\t\"Rotation\", \"" + drpPCARotate + "\"");
	} else {
		echo("\t\t\"Number of factors\", " + spnNmbrffct + ",\n" + "\t\t\"Factoring method\", \"" + drpEFAFactmeth + "\",\n" + "\t\t\"Rotation\", \"" + drpEFARotate + "\"");
		if(chcApplyKsr) {
			echo(",\n\t\t\"Normalization\", \"Kaiser\"");
		}
	}
	echo("))\n");
	echo("rk.results(list(\n\t\"Degrees of freedom\"=FA.results$dof,\n\t\"Fit\"=digits(FA.results$fit),\n\t\"Fit (off diag)\"=digits(FA.results$fit.off)\n\t))\n");
	echo("rk.header(\"Loadings\", level=4)\n");
	echo("rk.results(FA.load.print)\n");
	if(isObrot) {
		echo("rk.header(\"Factor correlations\", level=4)\nrk.results(data.frame(comp.corr, stringsAsFactors=FALSE))\n");
	}
	echo("rk.header(\"Measures of factor score adequacy\", level=4)\n");
	echo("rk.results(scfc.corr)\n");
	//// save result object
	// read in saveobject variables
	var svbSvrsltst = getValue("svb_Svrsltst");
	var svbSvrsltstActive = getValue("svb_Svrsltst.active");
	var svbSvrsltstParent = getValue("svb_Svrsltst.parent");
	// assign object to chosen environment
	if(svbSvrsltstActive) {
		echo(".GlobalEnv$" + svbSvrsltst + " <- FA.results\n");
	}

}

