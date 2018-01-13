interface SessionItem {
    [key: string]: any
}

export class Session {
    private static instance: Session
    static get Instance() {
        return this.instance || (this.instance = new Session())
    }

    private items: SessionItem = {}

    /**
     * content 返回整个session
     */
    content() {
        return this.items;
    }

    /**
     * keys 返回整个session的key集合
     */
    keys() {
        let keys = []
        for (let item in this.items) {//attr作为属性名
            keys.push(item)
        }
        return keys
    }

    /**
     * has 是否存在session
     * @param key 键名
     */
    has(key: string) {
        return this.items[key] ? true : false
    }

    /**
     * set 设置session
     * @param key 键名
     * @param value 值
     */
    set<T>(key: string, value: T) {
        this.items[key] = value
    }

    /**
     * get 获取session
     * @param key 键名
     */
    get<T>(key: string) {
        if (this.has(key)) {
            return <T>this.items[key]
        }

        return undefined
    }

    /**
     * del 删除session
     * @param key 键名
     */
    del(key: string) {
        if (this.has(key)) {
            delete this.items[key]
        }
    }

    /**
     * reset 重置整个session
     */
    reset() {
        this.items = {}
    }
}

const i = Session.Instance
export default i