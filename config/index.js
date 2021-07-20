// 当前环境是否为生产环境
const IS_PROD_ENV = process.env.NODE_ENV === 'production'
// 生产地址
// const PROD_IP = '192.168.1.231'
const PROD_IP = '192.168.1.61'
// 本地测试地址
const DEV_IP = '192.168.2.95'

// nacos 参数
const NACOS_URL = 'http://192.168.1.232:8848'
const IP = IS_PROD_ENV ? PROD_IP : DEV_IP
const namespaceId = 'guodun-aiosign'
const serviceName = 'htmlToPdf'

const clientBeatInterval = 5000

const PORT = 7030
const DEV_PORT = 8188
const CURRENT_PORT = IS_PROD_ENV ? PORT : DEV_PORT

const beatParams = JSON.stringify({
  ip: IP,
  port: PORT,
  healthy: true,
  namespaceId: namespaceId,
  serviceName: serviceName,
})

const initRequestUrl = `${NACOS_URL}/nacos/v1/ns/instance?ip=${IP}&port=${PORT}&namespaceId=${namespaceId}&serviceName=${serviceName}&enabled=true&healthy=true`
const instanceBetaUrl = `${NACOS_URL}/nacos/v1/ns/instance/beat?beat=${beatParams}&serviceName=${serviceName}`


module.exports = {
  CURRENT_PORT,
  initRequestUrl,
  instanceBetaUrl,
  clientBeatInterval
}
