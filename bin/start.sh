echo 'tsubasa succer club start begin'

# find node bin
NODE_BIN=${NODE_HOME}/bin/node

echo "LAUNCH_COMPONENT: ${LAUNCH_COMPONENT} "
COMPONENT_DIR=$(dirname "${LAUNCH_COMPONENT}")
echo "COMPONENT_DIR: ${COMPONENT_DIR}"

# load config from env
echo 'load tsubasa succer club config'
. ${COMPONENT_DIR}/bin/env.sh

echo "start stsubasa succer club app on port ${MY_API_PORT}"
#start component
$NODE_BIN $COMPONENT_DIR/src/index.js \
  --service ${MY_API_NAME} \
	--port ${MY_API_PORT} \
	--key  ${KEYSTORE_KEY} \
	--cert ${KEYSTORE_CERTIFICATE} \
	-v &

echo 'tsubasa succer club start done'
