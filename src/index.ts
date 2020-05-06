/**
 * Components
 */
export {
    motion,
    useExternalRef,
    createMotionComponent,
    HTMLMotionProps,
    SVGMotionProps,
    SVGAttributesAsMotionValues,
    ForwardRefComponent,
} from "./motion"
export { AnimatePresence } from "./components/AnimatePresence"
export { AnimateSharedLayout } from "./components/AnimateSharedLayout"

/**
 * Motion values
 */
export { MotionValue, motionValue, PassiveEffect, Subscriber } from "./value"
export { resolveMotionValue } from "./value/utils/resolve-motion-value"
export { useMotionValue } from "./value/use-motion-value"
export { useInvertedScale } from "./value/use-inverted-scale"
export { useTransform } from "./value/use-transform"
export { useSpring } from "./value/use-spring"
export { ScrollMotionValues } from "./value/scroll/utils"
export { useElementScroll } from "./value/scroll/use-element-scroll"
export { useViewportScroll } from "./value/scroll/use-viewport-scroll"

/**
 * Utils
 */
export {
    AnimationControls,
    animationControls,
} from "./animation/AnimationControls"
export { useAnimation } from "./animation/use-animation"
export {
    HoverHandlers,
    TapHandlers,
    PanHandlers,
    TapInfo,
    PanInfo,
    useTapGesture,
    usePanGesture,
    useGestures,
} from "./gestures"
export { useCycle } from "./utils/use-cycle"
export { transform } from "./utils/transform"
export { useReducedMotion } from "./utils/use-reduced-motion"
export { ReducedMotion } from "./components/ReducedMotion"
export { isValidMotionProp } from "./motion/utils/valid-prop"
export { usePresence } from "./components/AnimatePresence/use-presence"
export { useDragControls, DragControls } from "./behaviours/use-drag-controls"
export { useDomEvent } from "./events/use-dom-event"

/**
 * Contexts
 */
export {
    MotionPlugins,
    MotionPluginContext,
} from "./motion/context/MotionPluginContext"
export { MotionContext } from "./motion/context/MotionContext"
export { SharedLayoutContext } from "./components/AnimateSharedLayout/SharedLayoutContext"
export { PresenceContext } from "./components/AnimatePresence/PresenceContext"
export { AnimatePresenceProps } from "./components/AnimatePresence/types"

/**
 * Types
 */
export {
    AnimationProps,
    MotionProps,
    MotionCallbacks,
    MotionAdvancedProps,
    MotionStyle,
    MotionTransform,
    VariantLabels,
    RelayoutInfo,
    ResolveLayoutTransition,
} from "./motion/types"
export {
    Orchestration,
    Tween,
    Spring,
    Keyframes,
    Inertia,
    None,
    EasingFunction,
    TargetAndTransition,
    Transition,
    ResolvedKeyframesTarget,
    KeyframesTarget,
    CustomValueType,
    ResolvedSingleTarget,
    SingleTarget,
    ResolvedValueTarget,
    ValueTarget,
    Variant,
    Variants,
} from "./types"
export { EventInfo } from "./events/types"
export {
    AutoValueHandler,
    AutoValueHandlers,
} from "./motion/features/auto/values"
export { MotionFeature, FeatureProps } from "./motion/features/types"
export { GestureHandlers } from "./gestures"
export { DraggableProps, DragHandlers } from "./behaviours/types"
export * from "./types/geometry"
