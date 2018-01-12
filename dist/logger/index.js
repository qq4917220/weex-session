/**
 * Logger 日志助手，模拟实现控制台日志输出
 */
var Logger = /** @class */ (function () {
    function Logger() {
        this.content = '';
        this.output = undefined;
    }
    Object.defineProperty(Logger, "Instance", {
        /**
         * Instance 获取Logger单例
         */
        get: function () {
            return this.instance || (this.instance = new Logger());
        },
        enumerable: true,
        configurable: true
    });
    /**
     * info 输出日志信息
     * @param str 日志信息
     */
    Logger.prototype.info = function (str) {
        console.log('info');
        console.log(str);
        if (this.output) {
            if (this.content != '') {
                str = "\r\n" + str;
            }
            this.content += str;
            this.output(this.content);
        }
    };
    Object.defineProperty(Logger.prototype, "Content", {
        /**
         * 日志内容
         */
        get: function () {
            return this.content;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * setOutput 设置输出函数
     * @param output 输出函数
     */
    Logger.prototype.setOutput = function (output) {
        console.log(output);
        this.output = output;
    };
    return Logger;
}());
export { Logger };
var i = Logger.Instance;
export default i;
