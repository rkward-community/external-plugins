RKWard external plugins
=======================

Provides a collaboration area for RKWard plugins that are not (yet) targetted
for inclusion in the offical RKWard releases.

See http://api.kde.org/doc/rkwardplugins/ for documentation on writing plugins for RKWard.
Contact rkward-devel@kde.org for help and requests.

Why use this repository?
========================

Why should you use this repository for developing RKWard plugins, instead of just any place? 

- Having this central repository
makes it easy for RKWard developers to see developments in plugins, and in particular to identify plugins that may
be useful additions to the RKWard official distribution.
- RKWard developers and community members can easily help you with details of your plugin.
- You will get help with maintainance tasks such as
-- Managing plugin translations
-- Creating plugin packages
-- Making plugin packages available for download

For plugins that are clearly targetted for inclusion in the official RKWard releases, or for patches to such plugins,
refer to the main source repo (currently in the process of moving to git.kde.org), or contact us on rkward-devel@kde.org .

Contributing
============
- Submit pull requests or patches
- Contact us to get write access

Many of the plugins here are using the 'rkwarddev' package. This means that their development is mainly focussed on one
script file, usually located at `<main dir>/inst/rkward/<script name>.R`. These scripts are written in `R` code and *generate*
all of the other plugin files when run. Therefore, in case you'd like to add to any plugin, please add to these script files.

Licence
=======

In principle, any plugin in this repository may specify a separate Licence (given in the DESCRIPTION) file of each package.
However, to keep things easily managable, the licence you chose should be compatible with GPL version 3 and up, preferrably also
with GPL version 2.
