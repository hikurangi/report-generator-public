npm install && \
npm uninstall electron && \
rm package-lock.json && \
export npm_config_platform=win32 && \
npm install electron -D && \
unset npm_config_platform