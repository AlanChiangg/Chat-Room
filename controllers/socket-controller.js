const formatMessage = require('../utils/messages');
const { userJoin, userLeave, getRoomUsers, getCurrentUser } = require('../utils/users');

module.exports = (io) => {
  // 有人連線時執行
  io.on('connection', socket => {
    socket.on('joinRoom', ({ username, room }) => {
      const user = userJoin(socket.id, username, room)

      socket.join(user.room)

      // 歡迎使用者
      socket.emit('message', formatMessage('管理員', '歡迎來到聊天室'))

      // 有人加入時廣播
      socket.broadcast
        .to(user.room)
        .emit(
          'message',
          formatMessage('管理員', `${user.username}加入聊天室`)
        )

      //傳 users 和 room 資料
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      })

      //取得sever端的chatMessage
      socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id)

        io.to(user.room).emit('message', formatMessage(user.username, msg))
      })

      // 有人離開時廣播
      socket.on('disconnect', () => {
        const user = userLeave(socket.id)
        if (user) {
          io.to(user.room).emit('message', formatMessage('管理員', `${user.username}離開聊天室`))
        }
        io.to(user.room).emit('roomUsers', {
          room: user.room,
          users: getRoomUsers(user.room)
        })
      })
    })
  })
}