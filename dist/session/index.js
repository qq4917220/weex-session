var Session = /** @class */ (function () {
    function Session() {
        this.items = {};
    }
    Object.defineProperty(Session, "Instance", {
        get: function () {
            return this.instance || (this.instance = new Session());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * content 返回整个session
     */
    Session.prototype.content = function () {
        return this.items;
    };
    /**
     * keys 返回整个session的key集合
     */
    Session.prototype.keys = function () {
        var keys = [];
        for (var item in this.items) {
            keys.push(item);
        }
        return keys;
    };
    /**
     * has 是否存在session
     * @param key 键名
     */
    Session.prototype.has = function (key) {
        return this.items[key] ? true : false;
    };
    /**
     * set 设置session
     * @param key 键名
     * @param value 值
     */
    Session.prototype.set = function (key, value) {
        this.items[key] = value;
    };
    /**
     * get 获取session
     * @param key 键名
     */
    Session.prototype.get = function (key) {
        if (this.has(key)) {
            return this.items[key];
        }
        return undefined;
    };
    /**
     * del 删除session
     * @param key 键名
     */
    Session.prototype.del = function (key) {
        if (this.has(key)) {
            delete this.items[key];
        }
    };
    /**
     * reset 重置整个session
     */
    Session.prototype.reset = function () {
        this.items = {};
    };
    return Session;
}());
export { Session };
var i = Session.Instance;
export default i;
