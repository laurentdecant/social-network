export interface Selector {
  (...args: any[]): any;
}

export interface Action<TPayload = any, TMeta = any> {
  type: string;
  payload: TPayload;
  meta: TMeta;
}

export interface ActionCreator<
  TPayloadSelector extends Selector = any,
  TMetaSelector extends Selector = any
> {
  (...args: Parameters<TPayloadSelector> & Parameters<TMetaSelector>): Action<
    ReturnType<TPayloadSelector>,
    ReturnType<TMetaSelector>
  >;
  getType: () => string;
}
