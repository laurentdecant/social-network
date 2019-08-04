export interface Action<TPayload = any> {
  type: string;
  payload: TPayload;
}

export type ActionCreator<TPayload = any> = ((
  props: TPayload
) => Action<TPayload>) & {
  getType: () => string;
};
