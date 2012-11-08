## definition of the test suite
	suite <- new("RKTestSuite",
		id="rk.CohenKappa",
		## needed packages
		libraries = c("rk.CohenKappa"),
		## initCalls are run *before* any tests. Use this to set up the environment
		initCalls = list(
			function(){
				## load needed packages
				require("psych")

				## prepare needed data objects
				# taken from the examples of psych::cohen.kappa()
				rater.data <- cbind(c(1,2,3,4,5,6,7,8,9),c(1,3,1,6,1,5,5,6,7))

				# also taken from the examples of psych::cohen.kappa()
				cohen <- matrix(c(0.44, 0.07, 0.09, 0.05, 0.20, 0.05, 0.01, 0.03, 0.06),ncol=3,byrow=TRUE)
				# cohen.weights weight differences
				cohen.weights <- matrix(c(0,1,3,1,0,6,3,6,0),ncol=3)
			}
		),
		## the tests
		tests = list(
				## define the actual tests here
				new("RKTest", id="RKTest.example1", call=function(){
					rk.call.plugin ("rkward::cmp_CohensKappaCohensKappa", spn_Alphvlfr.real="0.05", spn_Nmbrfbsr.real="0.00", svb_Svrsltst.active="0", svb_Svrsltst.objectname="kappa.result", svb_Svrsltst.parent=".GlobalEnv", vrsl_Dtmtrxr2.available="rater.data", vrsl_Wghtmtrx.available="", submit.mode="submit")
				}),
				new("RKTest", id="RKTest.example2", call=function(){
					rk.call.plugin ("rkward::cmp_CohensKappaCohensKappa", spn_Alphvlfr.real="0.05", spn_Nmbrfbsr.real="200.00", svb_Svrsltst.active="0", svb_Svrsltst.objectname="kappa.result", svb_Svrsltst.parent=".GlobalEnv", vrsl_Dtmtrxr2.available="cohen", vrsl_Wghtmtrx.available="cohen.weights", submit.mode="submit")
				})
		),
		## postCalls are like initCalls, but run after all tests to clean up.
		postCalls = list(
			function(){}
		)
	)
