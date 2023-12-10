"use client";

// useLayoutState.js
import { useState, useEffect } from 'react';
import { scroll } from 'framer-motion';

const useLayoutState = () => {
    const [open, setOpen] = useState(false);
    const [selectedLink, setSelectedLink] = useState(null);
    const [placement, setPlacement] = useState('right');
    const [scrollValue, setscrollValue] = useState(0);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onChange = (e) => {
        setPlacement(e.target.value);
    };

    useEffect(() => {
        scroll((progress) => {
            const scroll = Math.floor(progress * 100);
            setscrollValue(scroll);
        });
    }, []);

    return {
        open,
        selectedLink,
        placement,
        scrollValue,
        showDrawer,
        onClose,
        onChange,
    };
};

export default useLayoutState;
