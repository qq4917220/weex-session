export interface SessionItem {
    [key: string]: any;
}
export declare class Session {
    private static instance;
    static readonly Instance: Session;
    private items;
    /**
     * content 返回整个session
     */
    content(): SessionItem;
    /**
     * keys 返回整个session的key集合
     */
    keys(): string[];
    /**
     * has 是否存在session
     * @param key 键名
     */
    has(key: string): boolean;
    /**
     * set 设置session
     * @param key 键名
     * @param value 值
     */
    set<T>(key: string, value: T): void;
    /**
     * get 获取session
     * @param key 键名
     */
    get<T>(key: string): T | undefined;
    /**
     * del 删除session
     * @param key 键名
     */
    del(key: string): void;
    /**
     * reset 重置整个session
     */
    reset(): void;
}
declare const i: Session;
export default i;
