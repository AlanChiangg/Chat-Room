const users = []

// 將使用者加入聊天室
function userJoin(id, username, room) {
  const user = { id, username, room }
  users.push(user)
  return user
}

// 取得現在的使用者
function getCurrentUser(id) {
  return users.find(user => user.id === id)
}

// 使用者離開聊天室時，刪除資料
function userLeave(id) {
  const index = users.findIndex(user => user.id === id)
  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

// 取得這房的所有使用者
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
}