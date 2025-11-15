/**
 * 发布-订阅模式解耦
 * Author:huangshouhua
 * Date:2025-11-15
 */
class Middleware {
  private subscribersMap: Map<string, Set<((data: any) => void)>>;
  constructor() {
    this.subscribersMap = new Map<string, Set<((data: any) => void)>>();
  }
  /**
   * 发布
   * @param topic 主题
   * @param data 数据
   */
  emit(topic: string, data: any) {
    const subscribers = this.subscribersMap.get(topic) || new Set<((data: any) => void)>();
    subscribers.forEach((subscriber) => subscriber(data));
  }
  /**
   * 订阅
   * @param topic 主题
   * @param callback 回调函数
   */
  on(topic: string, callback: (data: any) => void) {
    const subscribers = this.subscribersMap.get(topic) || new Set<((data: any) => void)>();
    subscribers.add(callback);
    this.subscribersMap.set(topic, subscribers);
  }
  /**
   * 取消订阅
   * @param topic 主题
   * @param callback 可选，指定要移除的回调函数，如果不提供则移除该主题的所有订阅
   */
  off(topic: string, callback?: (data: any) => void) {
    if (callback) {
      const subscribers = this.subscribersMap.get(topic);
      if (subscribers) {
        subscribers.delete(callback);
        if (subscribers.size === 0) {
          this.subscribersMap.delete(topic);
        }
      }
    } else {
      this.subscribersMap.delete(topic);
    }
  }
}
export default Middleware;
