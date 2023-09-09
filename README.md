# Chat-Room 即時聊天室

* 這是一個基於 Node.js Express 建立的專案，使用 [Socket.io](https://socket.io/) 達成即時聊天功能。

* 使用者可以分群聊天 - [Socket.io Rooms](https://socket.io/docs/v4/rooms/#default-room)
* 雲端伺服器佈署：[Render](https://render.com/)

## Chat-Room畫面

| Homepage | Chat |
| --------------- | ---------- |
| ![Homepage Image](https://github.com/AlanChiangg/Chat-Room/blob/main/public/images/homepage.jpg) | ![Chat Image](https://github.com/AlanChiangg/Chat-Room/blob/main/public/images/chat.jpg) |


## 使用方法

1. 開啟終端機，Clone 此專案
    ```
    git clone https://github.com/AlanChiangg/Chat-Room.git
    ```
2. 接著進入存放此專案的資料夾
    ```
    cd Chat-Room
    ```
3. 安裝 npm 套件
    ```
    npm install
    ```    
4. 本地使用的話，直接啟動
    ```
    npm start
    ```

## 開發環境與主要套件

* VS Code - 編程環境
* JavaScript - 程式語言
* node.js / express.js@4.18.2 - 後端框架
* socket.io@4.7.2 - 即時聊天
* dayjs@1.11.9 - 顯示時間