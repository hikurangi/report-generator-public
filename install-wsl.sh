# I install the Windows version of electron, so electron-orge generates
# a W10 build of the app rather than a Linux one
npm install && \
npm uninstall electron && \
rm package-lock.json && \
export npm_config_platform=win32 && \
npm install electron -D && \
unset npm_config_platform