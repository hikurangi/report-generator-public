npm install && \
npm uninstall electron && \
# @electron-forge/cli \
# @electron-forge/maker-deb \
# @electron-forge/maker-rpm \
# @electron-forge/maker-squirrel \
# @electron-forge/maker-zip && \
export npm_config_platform=win32 && \
npm install electron -D && \
# @electron-forge/cli \
# @electron-forge/maker-deb \
# @electron-forge/maker-rpm \
# @electron-forge/maker-squirrel \
# @electron-forge/maker-zip && \
unset npm_config_platform