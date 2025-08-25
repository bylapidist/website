import { useCallback, useId, useState } from "react";

export interface UseDisclosureOptions {
    initialOpen?: boolean;
}

export function useDisclosure({
    initialOpen = false,
}: UseDisclosureOptions = {}) {
    const [isOpen, setIsOpen] = useState(initialOpen);
    const panelId = useId();

    const open = useCallback(() => {
        setIsOpen(true);
    }, []);
    const close = useCallback(() => {
        setIsOpen(false);
    }, []);
    const toggle = useCallback(() => {
        setIsOpen((v) => !v);
    }, []);

    function getTriggerProps<
        T extends {
            onClick?: (e: React.MouseEvent<HTMLElement>) => void;
        } & Record<string, unknown>,
    >(
        props: T = {} as T,
    ): T & {
        "aria-expanded": boolean;
        "aria-controls": string;
    } {
        return {
            ...props,
            "aria-expanded": isOpen,
            "aria-controls": panelId,
            onClick: (event: React.MouseEvent<HTMLElement>) => {
                props.onClick?.(event);
                toggle();
            },
        } as T & { "aria-expanded": boolean; "aria-controls": string };
    }

    function getPanelProps<T extends { id?: string }>(
        props: T = {} as T,
    ): T & { id: string; hidden: boolean } {
        return {
            id: panelId,
            hidden: !isOpen,
            ...props,
        } as T & { id: string; hidden: boolean };
    }

    return { isOpen, open, close, toggle, getTriggerProps, getPanelProps };
}
