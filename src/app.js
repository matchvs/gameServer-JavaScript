const log4js = require('log4js');
const textEncoding = require('text-encoding');

const log = log4js.getLogger();

/**
 * 游戏逻辑处理入口
 * @class App
 */
class App {
    /**
     * Creates an instance of App.
     * @memberof App
     */
    constructor() {
    }

    /**
     * 设置推送handler
     * @param {Object} pushHander 
     * @memberof App
     */
    setPushHander(pushHander){
        this.pushHander = pushHander;
    }

    /**
     * 创建房间
     * @param {Object} request 
     * @param {number} request.gameID 游戏ID
     * @param {string} request.roomID 房间ID
     * @param {number} request.userID 用户ID
     * @param {Object} request.createExtInfo 房间创建扩展信息
     * @param {Number} request.createExtInfo.userID 创建者ID
     * @param {Uint8Array} request.createExtInfo.userProfile 创建者profile
     * @param {string} request.createExtInfo.roomID 房间ID
     * @param {number} request.createExtInfo.state 房间状态：1开放、2关闭
     * @param {number} request.createExtInfo.maxPlayer 最大人数
     * @param {number} request.createExtInfo.mode 游戏模式
     * @param {number} request.createExtInfo.canWatch 是否可观战
     * @param {Uint8Array} request.createExtInfo.roomProperty 房间属性
     * @param {number} request.createExtInfo.createFlag 房间创建途径：1 系统创建房间、2 玩家创建房间、3 gameServer创建房间
     * @param {string} request.createExtInfo.createTime 创建时间
     * @memberof App
     */
    onCreateRoom(request) {
        log.debug('onCreateRoom:', request);
    }

    /**
     * 删除房间
     * @param {Object} request
     * @param {number} request.gameID 游戏ID
     * @param {string} request.roomID 房间ID
     * @memberof App
     */
    onDeleteRoom(request) {
        log.debug('onDeleteRoom:', request);
    }
    
    /**
     * 玩家加入房间
     * @param {Object} request 
     * @param {number} request.gameID 游戏ID
     * @param {string} request.roomID 房间ID
     * @param {number} request.userID 用户ID
     * @param {Object} request.joinExtInfo 房间加入扩展信息
     * @param {number} request.joinExtInfo.userID 加入房间的玩家ID
     * @param {Uint8Array} request.joinExtInfo.userProfile 加入房间的玩家profile
     * @param {string} request.joinExtInfo.roomID 要加入的房间ID
     * @param {number} request.joinExtInfo.joinType 加入类型：1指定roomID、2属性匹配、3随机匹配、4重新加入、5创建房间并随后自动加入房间
     * @memberof App
     */
    onJoinRoom(request) {
        log.debug('onJoinRoom:', request);
    }
    
    /**
     * 房间停止加人
     * @param {Object} request 
     * @param {number} request.gameID 游戏ID
     * @param {string} request.roomID 房间ID
     * @param {number} request.userID 用户ID
     * @memberof App
     */
    onJoinOver(request) {
        log.debug('onJoinOver:', request);
    }

    /**
     * 房间允许加人
     * @param {Object} request 
     * @param {number} request.gameID 游戏ID
     * @param {string} request.roomID 房间ID
     * @param {number} request.userID 用户ID
     * @memberof App
     */
    onJoinOpen(request) {
        log.debug('onJoinOpen:', request);
    }
    
    /**
     * 玩家离开房间
     * @param {Object} request 
     * @param {number} request.gameID 游戏ID
     * @param {string} request.roomID 房间ID
     * @param {number} request.userID 用户ID
     * @memberof App
     */
    onLeaveRoom(request) {
        log.debug('onLeaveRoom:', request);
    }
    
    /**
     * 踢人
     * @param {Object} request 
     * @param {number} request.gameID 游戏ID
     * @param {string} request.roomID 房间ID
     * @param {number} request.userID 用户ID
     * @memberof App
     */
    onKickPlayer(request) {
        log.debug('onKickPlayer:', request);
    }
    
    /**
     * 同步玩家状态
     * @param {Object} request 
     * @param {number} request.gameID 游戏ID
     * @param {string} request.roomID 房间ID
     * @param {number} request.userID 用户ID
     * @param {number} request.state 1.网络异常、正在重连 2.重连成功 3.重连失败，退出房间
     * @memberof App
     */
    onUserState(request) {
        log.debug('onUserState:', request);
    }

    /**
     * 自定义消息
     * @param {Object} request 
     * @param {number} request.gameID 游戏ID
     * @param {string} request.roomID 房间ID
     * @param {number} request.userID 用户ID
     * @param {number} request.flag
     * @param {number[]} request.destsList
     * @param {Uint8Array} request.cpProto 自定义消息内容
     * @memberof App
     */
    onReceiveEvent(request) {
        log.debug('onReceiveEvent:', request);
        this.examplePush(request);
    }

    /**
     * 房间详情信息
     * @param {Object} request
     * @param {number} request.gameID 游戏ID
     * @param {string} request.roomID 房间ID
     * @param {number} request.userID 用户ID
     * @param {Object} request.roomDetail 房间详情
     * @param {string} request.roomDetail.roomID 房间ID 
     * @param {number} request.roomDetail.state 房间状态：1开放、2关闭
     * @param {number} request.roomDetail.maxPlayer 房间最大人数
     * @param {number} request.roomDetail.mode 模式
     * @param {number} request.roomDetail.canWatch 是否可观战
     * @param {Uint8Array} request.roomDetail.roomProperty 房间属性
     * @param {number} request.roomDetail.owner 房主
     * @param {number} request.roomDetail.createFlag 房间创建途径：1 系统创建房间、2 玩家创建房间、3 gameServer创建房间
     * @param {Object[]} request.roomDetail.playersList 房间用户列表
     * @param {number} request.roomDetail.playersList[].userID 用户ID
     * @param {Uint8Array} request.roomDetail.playersList[].userProfile 用户profile
     * @memberof App
     */
    onRoomDetail(request) {
        log.debug('onRoomDetail:', request);
    }

    /**
     * 修改房间自定义属性
     * @param {Object} request 
     * @param {number} request.gameID 游戏ID
     * @param {string} request.roomID 房间ID
     * @param {number} request.userID 用户ID
     * @param {number} request.roomProperty 房间自定义属性
     * @memberof App
     */
    onSetRoomProperty(request) {
        log.debug('onSetRoomProperty:', request);
    }

    /**
     * 设置帧率
     * @param {Object} request
     * @param {number} request.gameID
     * @param {string} request.roomID
     * @param {number} request.frameRate 帧率
     * @param {number} request.frameIndex 初始帧编号
     * @param {string} request.timestamp 时间戳
     * @param {number} request.enableGS GameServer是否参与帧同步
     * @memberof App
     */
    onSetFrameSyncRate(request) {
        log.debug('onSetFrameSyncRate:', request);
    }

    /**
     * 帧数据
     * @param {Object} request
     * @param {number} request.gameID
     * @param {string} request.roomID
     * @param {number} request.frameIndex 帧编号
     * @param {Object[]} request.frameItems 元数据集合
     * @param {number} request.frameItems[].srcUserID 发送用户ID
     * @param {string} request.frameItems[].cpProto 自定义消息内容
     * @param {string} request.frameItems[].timestamp 时间戳
     * @param {number} request.frameWaitCount 等待的帧数
     * @memberof App
     */
    onFrameUpdate(request) {
        log.debug('onFrameUpdate:', request);
    }

    /**
     * gameServer API 使用示例
     * @param {Object} request 
     */
    examplePush(request) {
        let content = new textEncoding.TextDecoder("utf-8").decode(request.cpProto);
        let args = content.split('|');
        let cmd = args[0];
        log.debug('examplePush msg:', cmd);
        switch (cmd) {
            case 'joinover':
                this.pushHander.joinOver({
                    gameID: request.gameID, 
                    roomID: request.roomID,
                });
                break;
            case 'joinopen':
                this.pushHander.joinOpen({
                    gameID: request.gameID, 
                    roomID: request.roomID,
                });
                break;
            case 'kickplayer':
                let destID = args[1];
                if (destID) {
                    this.pushHander.kickPlayer({
                        roomID: request.roomID,
                        destID: destID,
                    });
                }
                break;
            case 'roomDetail':
                this.pushHander.getRoomDetail({
                    gameID: request.gameID, 
                    roomID: request.roomID,
                });
                break;
            case 'setRoomProperty':
                let msg = args[1];
                if (msg) {
                    let roomProperty = new textEncoding.TextEncoder("utf-8").encode(msg);
                    this.pushHander.setRoomProperty({
                        gameID: request.gameID,
                        roomID: request.roomID,
                        roomProperty: roomProperty,
                    });
                }
                break;
            case 'createRoom':
                let roomProperty = new textEncoding.TextEncoder("utf-8").encode('hello');
                this.pushHander.createRoom({
                    gameID: request.gameID,
                    ttl: 600,
                    roomInfo: {
                        roomName: 'game server room',
                        maxPlayer: 2,
                        mode: 1,
                        canWatch: 1,
                        visibility: 1,
                        roomProperty: roomProperty,
                    },
                }, function(err, response) {
                    if (err) {
                        log.warn(err);
                    } else {
                        log.debug('create room response:', response);
                    }
                });
                break;
            case 'touchRoom':
                this.pushHander.touchRoom({
                    gameID: request.gameID,
                    roomID: args[1],
                    ttl: args[2],
                }, function(err, response) {
                    if (err) {
                        log.warn(err);
                    } else {
                        log.debug('change room ttl response:', response);
                    }
                });
                break;
            case 'destroyRoom':
                this.pushHander.destroyRoom({
                    gameID: request.gameID,
                    roomID: args[1],
                }, function(err, response) {
                    if (err) {
                        log.warn(err);
                    } else {
                        log.debug('destroy room response:', response);
                    }
                });
                break;
            case 'setFrameSyncRate':
                this.pushHander.setFrameSyncRate({
                    gameID: request.gameID,
                    roomID: request.roomID,
                    frameRate: args[1],
                });
                break;
            case 'frameBroadcast':
                this.pushHander.frameBroadcast({
                    gameID: request.gameID,
                    roomID: request.roomID,
                    cpProto: args[1],
                    operation: args[2],
                });
                break;
            default:
                this.pushHander.pushEvent({
                    gameID: request.gameID, 
                    roomID: request.roomID, 
                    pushType: 3, 
                    content: request.cpProto,
                });
                break;
        }
    }
}

module.exports = App;
