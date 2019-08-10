export interface Selector {
  (...args: any[]): any;
}

export interface Action<TPayload = any> {
  type: string;
  payload: TPayload;
}

export interface ActionCreator<TPayloadSelector extends Selector = any> {
  (...args: Parameters<TPayloadSelector>): Action<ReturnType<TPayloadSelector>>;
  getType: () => string;
}
