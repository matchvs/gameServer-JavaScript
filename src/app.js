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
     * @param {number} request.createExtInfo.canWatch 是否可观战：1 可以、2 不可以
     * @param {Uint8Array} request.createExtInfo.roomProperty 房间属性
     * @param {number} request.createExtInfo.createFlag 房间创建途径：1 系统创建房间、2 玩家创建房间、3 gameServer创建房间、4 组队房间
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
     * @param {number} request.joinExtInfo.joinType 加入类型：1指定roomID、2属性匹配、3随机匹配、4重新加入、5创建房间并随后自动加入房间、6观战者切换为玩家、7小队成员加入
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
     * @param {number} request.roomDetail.canWatch 是否可观战：1 可以、2 不可以
     * @param {Uint8Array} request.roomDetail.roomProperty 房间属性
     * @param {number} request.roomDetail.owner 房主
     * @param {number} request.roomDetail.createFlag 房间创建途径：1 系统创建房间、2 玩家创建房间、3 gameServer创建房间
     * @param {Object[]} request.roomDetail.playersList 房间用户列表
     * @param {number} request.roomDetail.playersList[].userID 用户ID
     * @param {Uint8Array} request.roomDetail.playersList[].userProfile 用户profile
     * @param {Object} request.roomDetail.watchRoom 观战房间详情
     * @param {Object} request.roomDetail.watchRoom.watchInfo 观战房间信息
     * @param {string} request.roomDetail.watchRoom.watchInfo.roomID 房间ID
     * @param {number} request.roomDetail.watchRoom.watchInfo.state 观战房间状态，1：回放房间；2：游戏中房间
     * @param {Object} request.roomDetail.watchRoom.watchInfo.watchSetting 观战设置
     * @param {number} request.roomDetail.watchRoom.watchInfo.watchSetting.maxWatch 最大观战人数
     * @param {boolean} request.roomDetail.watchRoom.watchInfo.watchSetting.watchPersistent 观战是否持久化
     * @param {number} request.roomDetail.watchRoom.watchInfo.watchSetting.watchDelayMs 观战延迟时间，单位为毫秒
     * @param {number} request.roomDetail.watchRoom.watchInfo.watchSetting.cacheTime 缓存时间
     * @param {number} request.roomDetail.watchRoom.watchInfo.curWatch 当前观战人数
     * @param {Object[]} request.roomDetail.watchRoom.watchPlayersList 观战用户列表
     * @param {number} request.roomDetail.watchRoom.watchPlayersList[].userID 用户ID
     * @param {Uint8Array} request.roomDetail.watchRoom.watchPlayersList[].userProfile 用户profile
     * @param {Object[]} request.roomDetail.brigadesList 大队列表
     * @param {number} request.roomDetail.brigadesList[].brigadeID 大队ID
     * @param {Object[]} request.roomDetail.brigadesList[].teamsList 小队列表
     * @param {Object} request.roomDetail.brigadesList[].teamsList.teamInfo 小队信息
     * @param {string} request.roomDetail.brigadesList[].teamsList.teamInfo.teamID 小队ID
     * @param {string} request.roomDetail.brigadesList[].teamsList.teamInfo.password 小队密码
     * @param {number} request.roomDetail.brigadesList[].teamsList.teamInfo.capacity 小队的容量
     * @param {number} request.roomDetail.brigadesList[].teamsList.teamInfo.mode 游戏模式
     * @param {number} request.roomDetail.brigadesList[].teamsList.teamInfo.visibility 小队的可见性：0 不可见、1 可见
     * @param {number} request.roomDetail.brigadesList[].teamsList.teamInfo.owner 小队的队长
     * @param {Object[]} request.roomDetail.brigadesList[].teamsList.playerList 小队的队员列表
     * @param {number} request.roomDetail.brigadesList[].teamsList.playerList[].userID 小队队员的用户ID
     * @param {Uint8Array} request.roomDetail.brigadesList[].teamsList.playerList[].userProfile 小队队员的用户profile
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
     * @param {number} request.cacheFrameMS 缓存帧的毫秒数(0为不开启缓存功能；-1为缓存所有数据)
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
                    watchSetting: {
                        maxWatch: 3,
                        watchPersistent: false,
                        watchDelayMs: 10*1000,
                        cacheTime: 60*1000,
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
                let frameRate = args[1];
                let tmpCacheFrameMS = args[2];
                if (frameRate && tmpCacheFrameMS) {
                    this.pushHander.setFrameSyncRate({
                        gameID: request.gameID,
                        roomID: request.roomID,
                        frameRate: frameRate,
                        enableGS: 1,
                        cacheFrameMS: tmpCacheFrameMS,
                    });
                }
                else {
                    log.warn('no cacheFrameMS');
                }
                break;
            case 'getCacheData':
                let cacheFrameMS = args[1];
                if (cacheFrameMS) {
                    this.pushHander.getCacheData({
                        gameID: request.gameID,
                        roomID: request.roomID,
                        cacheFrameMS: cacheFrameMS,
                    });
                }
                else {
                    log.warn('no cacheFrameMS');
                }
                break;
            case 'frameBroadcast':
                this.pushHander.frameBroadcast({
                    gameID: request.gameID,
                    roomID: request.roomID,
                    cpProto: args[1],
                    operation: args[2],
                });
                break;
            case 'metric':
                let name = args[1];
                let value = args[2];
                if (name && value) {
                    this.pushHander.reportMetric([{
                        name: name,
                        value: parseInt(value),
                    }], function(err, response) {
                        if (err) {
                            log.warn(err);
                        } else {
                            log.debug('set metric response:', response);
                        }
                    });
                }
                break;
            default:
                this.pushHander.pushEvent({
                    gameID: request.gameID, 
                    roomID: request.roomID, 
                    pushType: 1, 
                    destsList: [request.userID], 
                    content: request.cpProto,
                });
                break;
        }
    }
}

module.exports = App;
