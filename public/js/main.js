const chatForm = document.getElementById('chat-form')
const chatMessages = document.querySelector('.chat-messages')
const roomName = document.getElementById('room-name')
const userList = document.getElementById('users')

// 從 URL 取得 username 和 room
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
})
// console.log(username, room)

const socket = io()

// 加入聊天房間
socket.emit('joinRoom', { username, room })

// 取得某房和此房內所有user
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room)
  outputUsers(users)
})

// 來自sever的訊息
socket.on('message', message => {
  // console.log(message)
  outputMessage(message)
  // 讓最新訊息置底
  chatMessages.scrollTop = chatMessages.scrollHeight
})

// 送出訊息
chatForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const msg = e.target.elements.msg.value

  // 送出訊息給sever
  socket.emit('chatMessage', msg)

  // 清空輸入框
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
})

function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `
    <p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">${message.text}</p>
  `;
  chatMessages.appendChild(div);
}

function outputRoomName(room) {
  roomName.innerHTML = `<i class="fa-solid fa-earth-americas"></i> ${room}`
}

function outputUsers(users) {
  userList.innerHTML = `
  ${users.map(user => `<li><i class="fa-solid fa-user-astronaut"></i> ${user.username}</li>`).join('')}
  `
}