## start locally
node src/index.js --service tsubasa-soccer-club --port 8080 --key sslcert/server.key --cert sslcert/server.cert -v

cd ~/zowe/extenders/tsubasa-soccer-club
## start on z/os uss 
KEYSTORE_DIRECTORY=~/zowe/keystore
KEYSTORE_ALIAS=localhost
KEYSTORE_PREFIX="${KEYSTORE_DIRECTORY}/${KEYSTORE_ALIAS}/${KEYSTORE_ALIAS}.keystore"
KEYSTORE_KEY=${KEYSTORE_PREFIX}.key
KEYSTORE_CERTIFICATE=${KEYSTORE_PREFIX}.cer-ebcdic
node src/index.js --service tsubasa-soccer-club --port 18000 --key ${KEYSTORE_KEY} --cert ${KEYSTORE_CERTIFICATE} -v

# register with API ML layer
cd ~/zowe/extenders/tsubasa-soccer-club
iconv -f IBM-1047 -t IBM-850 tsubasa-soccer-club.yml > ~/zowe/instance/workspace/api-mediation/api-defs/tsubasa-soccer-club.yml