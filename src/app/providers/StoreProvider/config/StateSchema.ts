import { CounterSchema } from 'entity/Counter';
import { UserSchema } from 'entity/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entity/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions } from 'react-router';
// @ts-ignore
import { To } from 'history';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  // асинхронные редьюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove:(key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
}
