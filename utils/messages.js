const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc') // 引入世界時間插件
const timezone = require('dayjs/plugin/timezone') // // 引入時區插件
const zhTw = require('dayjs/locale/zh-tw') // 引入繁中

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale(zhTw)

function formatMessage(username, text) {
  return {
    username,
    text,
    time: dayjs().tz('Asia/Taipei')
      .format('A h:mm')
      .replace('AM', '上午')
      .replace('PM', '下午')
  }
}

module.exports = formatMessage