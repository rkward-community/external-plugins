\name{NEWS}
\title{News for Package 'rk.FactorAnalysis'}
\section{Changes in rk.FactorAnalysis version 0.01-9 (2012-10-08)}{
  \subsection{fixed}{
    \itemize{
      \item bug in testing for rotation method led to errors when trying to compute
        variance explained when orthogonal rotation was used with PCA. the result
        was that no real output was generated, only an error message
    }
  }
  \subsection{added}{
    \itemize{
      \item added VSS/MAP dialog
    }
  }
  \subsection{changed}{
    \itemize{
      \item moved parallel analysis and scree plot from \code{"plots"} to \code{"analysis"}
    }
  }
}
\section{Changes in rk.FactorAnalysis version 0.01-8 (2012-09-29)}{
  \subsection{fixed}{
    \itemize{
      \item added generic pre/post plot options
      \item ChangeLog now shows the correct package name...
      \item a typo (thx birk ;-))
    }
  }
}
\section{Changes in rk.FactorAnalysis version 0.01-7 (2012-08-26)}{
  \subsection{fixed}{
    \itemize{
      \item scree plot dialog referenced the wrong varselector
    }
  }
  \subsection{added}{
    \itemize{
      \item dialog for Horn's parallel analysis plots
    }
  }
}
\section{Changes in rk.FactorAnalysis version 0.01-6 (2012-04-07)}{
  \subsection{changes}{
    \itemize{
      \item added a ChangeLog file
      \item rebuild package for R 2.15
    }
  }
}
