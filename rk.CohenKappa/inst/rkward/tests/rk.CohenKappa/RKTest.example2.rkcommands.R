local({
## Vorbereiten
require(psych)
## Berechne
	kappa.result <- cohen.kappa(
		x=cohen,
		w=cohen.weights,
		n.obs=200
	)

## Drucke Ergebnisse
rk.header("Cohen's Kappa and weighted Kappa")
	rk.header("Correlation coefficients and confidence boundaries", level=3)
	rk.print(kappa.result[["confid"]])
	rk.print(paste("<b>Alpha level:</b>", kappa.result[["plevel"]]))
	rk.print(paste("<b>Number of subjects:</b>", kappa.result[["n.obs"]]))

})
