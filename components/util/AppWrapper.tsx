import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion"
export default function MovieSection() {

    return (
        <div className="">

        </div>
    )
}

function Resize({ children }: { children: any }) {
    const DRAG_HANDLE_WIDTH = 4;
    const RESIZABLE_DEFAULT_WIDTH = 300;


    const x = useMotionValue(RESIZABLE_DEFAULT_WIDTH);
    const width = useTransform(x, (x) => `${x + 0.5 * DRAG_HANDLE_WIDTH}px`);
    return (
        <div>

        </div>
    )
}