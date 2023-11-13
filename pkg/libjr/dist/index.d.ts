/// <reference types="react" />

import { default as React_2 } from 'react';

export declare const Buttonice: React_2.FC<ButtoniceProps>;

declare interface ButtoniceProps {
    sz: string;
    makup: TButtonicePalette;
    onClick?: () => void;
    children: React.ReactNode;
}

export declare const createButtonColor: (c: TFgBgHg) => {
    hout: TPaletteColor;
    hover: TPaletteColor;
};

export declare const createButtonMakup: (c?: TFgBgHg, k?: TButtoniceKind) => {
    item: {
        hout: TPaletteColor;
        hover: TPaletteColor;
    };
    kind: TButtoniceKind;
};

export declare const Dropdown: React_2.FC<DropdownProps>;

declare interface DropdownProps {
    items: string[];
    initialValue: string;
    dropUp?: boolean;
    small?: boolean;
    sz?: string;
    onSelect?: (selected: string) => void;
}

export declare type InputChangeEvent = React.ChangeEvent<InputElement>;

export declare type InputElement = HTMLInputElement | HTMLTextAreaElement;

export declare const Modal: React_2.FC<ModalProps>;

export declare interface ModalProps {
    open: boolean;
    hide: () => void;
    children: React.ReactNode;
    title: string;
    focusitems?: string[];
    freeze?: boolean;
}

export declare const ModalReply: React_2.FC<ModalReplyProps>;

declare interface ModalReplyProps {
    onConfirm: () => void;
    onCancel: () => void;
    message?: string;
}

export declare const SplitBoard: React_2.FC<TSplitBoardProps>;

declare type TAlignToolbar = "vertical" | "horizontal";

declare type TButtoniceKind = 'circle' | 'rounded' | 'square';

declare type TButtonicePalette = {
    item: TPaletteMotion;
    kind: TButtoniceKind;
};

export declare type TDialogProps = {
    open: boolean;
    toggle: () => void;
};

declare type TDirectiontSplitBoard = 'row' | 'col';

export declare const TextEdit: React.FC<TextFieldProps>;

export declare interface TextFieldProps extends TTextFieldRender {
    label: string;
    name: string;
    placehorlder?: string;
    handleChange?: (text: string) => void;
}

declare type TFgBgHg = {
    fg: string;
    bg: string;
    hg: string;
};

declare type TMakupToolbar = {
    fg: string;
    bg: string;
    alpha: number;
    sz: string;
};

export declare const Toolbar: React_2.FC<TToolbarProps>;

declare type TPaletteColor = {
    fg: string;
    bg: string;
    alpha: number;
};

declare type TPaletteMotion = {
    hout: TPaletteColor;
    hover: TPaletteColor;
};

declare type TSplitBoardProps = {
    dir: TDirectiontSplitBoard;
    sz: string;
    one: React.ReactNode;
    two: React.ReactNode;
};

export declare type TTextFieldRender = {
    makup?: TTextInputMakup;
};

export declare interface TTextInputMakup {
    fg: string;
    bg: string;
    focusColor: string;
    placeColor: string;
    padV: string;
    padH: string;
    fontsz: string;
    h: string;
}

declare type TToolbarProps = {
    align: TAlignToolbar;
    makup: TMakupToolbar;
    head?: React.ReactNode;
    midst?: React.ReactNode;
    tail?: React.ReactNode;
};

export declare const useModal: () => {
    open: boolean;
    toggle: () => void;
};

export declare const usePortal: (wrapperId?: string) => HTMLDivElement | null;

export { }
