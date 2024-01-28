import {
  ButtonHTMLAttributes,
  ChangeEventHandler,
  DOMAttributes,
  Dispatch,
  FocusEventHandler,
  HTMLAttributes,
  InputHTMLAttributes,
  MouseEventHandler,
  SetStateAction,
} from 'react';

export type TReactChild =
  | string
  | JSX.Element
  | JSX.Element[]
  | (string | JSX.Element)[]
  | number
  | null;

export type TReactHTMLDiv = HTMLAttributes<HTMLDivElement>;

export type TReactHTMLInput = InputHTMLAttributes<HTMLInputElement>;

export type TReactHTMLButton = DOMAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type TSize = 'sm' | 'md' | 'lg' | 'xl';

export type TSetState<T> = Dispatch<SetStateAction<T>>;

export type TEventInput = FocusEventHandler<HTMLInputElement> &
  ChangeEventHandler<HTMLInputElement>;

export type TClickButton = MouseEventHandler<HTMLButtonElement>;
