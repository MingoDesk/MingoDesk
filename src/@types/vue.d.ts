import { camelize } from '@vue/shared';
import { capitalize } from '@vue/shared';
import { computed } from '@vue/reactivity';
import { ComputedGetter } from '@vue/reactivity';
import { ComputedRef } from '@vue/reactivity';
import { customRef } from '@vue/reactivity';
import { DebuggerEvent } from '@vue/reactivity';
import { DebuggerOptions } from '@vue/reactivity';
import { DeepReadonly } from '@vue/reactivity';
import { effect } from '@vue/reactivity';
import { EffectScope } from '@vue/reactivity';
import { effectScope } from '@vue/reactivity';
import { getCurrentScope } from '@vue/reactivity';
import { isProxy } from '@vue/reactivity';
import { isReactive } from '@vue/reactivity';
import { isReadonly } from '@vue/reactivity';
import { isRef } from '@vue/reactivity';
import { markRaw } from '@vue/reactivity';
import { normalizeClass } from '@vue/shared';
import { normalizeProps } from '@vue/shared';
import { normalizeStyle } from '@vue/shared';
import { onScopeDispose } from '@vue/reactivity';
import { proxyRefs } from '@vue/reactivity';
import { reactive } from '@vue/reactivity';
import { ReactiveEffect } from '@vue/reactivity';
import { ReactiveEffectOptions } from '@vue/reactivity';
import { ReactiveFlags } from '@vue/reactivity';
import { readonly } from '@vue/reactivity';
import { Ref } from '@vue/reactivity';
import { ref } from '@vue/reactivity';
import { shallowReactive } from '@vue/reactivity';
import { shallowReadonly } from '@vue/reactivity';
import { shallowRef } from '@vue/reactivity';
import { ShallowUnwrapRef } from '@vue/reactivity';
import { ShapeFlags } from '@vue/shared';
import { SlotFlags } from '@vue/shared';
import { stop as stop_2 } from '@vue/reactivity';
import { toDisplayString } from '@vue/shared';
import { toHandlerKey } from '@vue/shared';
import { toRaw } from '@vue/reactivity';
import { toRef } from '@vue/reactivity';
import { ToRefs } from '@vue/reactivity';
import { toRefs } from '@vue/reactivity';
import { TrackOpTypes } from '@vue/reactivity';
import { TriggerOpTypes } from '@vue/reactivity';
import { triggerRef } from '@vue/reactivity';
import { unref } from '@vue/reactivity';
import { UnwrapNestedRefs } from '@vue/reactivity';
import { UnwrapRef } from '@vue/reactivity';
import { WritableComputedOptions } from '@vue/reactivity';
import { WritableComputedRef } from '@vue/reactivity';

export declare function $computed<T>(getter: () => T): ComputedRefValue<T>;

export declare function $fromRefs<T>(source: T): ShallowUnwrapRef<T>;

export declare function $raw<T>(value: ComputedRefValue<T>): ComputedRef<T>;

export declare function $raw<T>(value: T): Ref<T>;

export declare function $ref<T>(arg: T | Ref<T>): UnwrapRef<T>;

/**
 * Default allowed non-declared props on component in TSX
 */
export declare interface AllowedComponentProps {
  class?: unknown;
  style?: unknown;
}

export declare interface App<HostElement = any> {
  version: string;
  config: AppConfig;
  use(plugin: Plugin_2, ...options: any[]): this;
  mixin(mixin: ComponentOptions): this;
  component(name: string): Component | undefined;
  component(name: string, component: Component): this;
  directive(name: string): Directive | undefined;
  directive(name: string, directive: Directive): this;
  mount(rootContainer: HostElement | string, isHydrate?: boolean, isSVG?: boolean): ComponentPublicInstance;
  unmount(): void;
  provide<T>(key: InjectionKey<T> | string, value: T): this;
  _uid: number;
  _component: ConcreteComponent;
  _props: Data | null;
  _container: HostElement | null;
  _context: AppContext;
  _instance: ComponentInternalInstance | null;
  /**
   * v2 compat only
   */
  filter?(name: string): Function | undefined;
  filter?(name: string, filter: Function): this;
  /* Excluded from this release type: _createRoot */
}

export declare interface AppConfig {
  readonly isNativeTag?: (tag: string) => boolean;
  performance: boolean;
  optionMergeStrategies: Record<string, OptionMergeFunction>;
  globalProperties: Record<string, any>;
  errorHandler?: (err: unknown, instance: ComponentPublicInstance | null, info: string) => void;
  warnHandler?: (msg: string, instance: ComponentPublicInstance | null, trace: string) => void;
  /**
   * Options to pass to @vue/compiler-dom.
   * Only supported in runtime compiler build.
   */
  compilerOptions: RuntimeCompilerOptions;
  /**
   * @deprecated use config.compilerOptions.isCustomElement
   */
  isCustomElement?: (tag: string) => boolean;
  /**
   * Temporary config for opt-in to unwrap injected refs.
   * TODO deprecate in 3.3
   */
  unwrapInjectedRef?: boolean;
}

export declare interface AppContext {
  app: App;
  config: AppConfig;
  mixins: ComponentOptions[];
  components: Record<string, Component>;
  directives: Record<string, Directive>;
  provides: Record<string | symbol, any>;
  /* Excluded from this release type: optionsCache */
  /* Excluded from this release type: propsCache */
  /* Excluded from this release type: emitsCache */
  /* Excluded from this release type: reload */
  /* Excluded from this release type: filters */
}

declare interface AppRecord {
  id: number;
  app: App;
  version: string;
  types: Record<string, string | Symbol>;
}

export declare type AsyncComponentLoader<T = any> = () => Promise<AsyncComponentResolveResult<T>>;

export declare interface AsyncComponentOptions<T = any> {
  loader: AsyncComponentLoader<T>;
  loadingComponent?: Component;
  errorComponent?: Component;
  delay?: number;
  timeout?: number;
  suspensible?: boolean;
  onError?: (error: Error, retry: () => void, fail: () => void, attempts: number) => any;
}

declare type AsyncComponentResolveResult<T = Component> =
  | T
  | {
      default: T;
    };

export declare const BaseTransition: new () => {
  $props: BaseTransitionProps<any>;
};

export declare interface BaseTransitionProps<HostElement = RendererElement> {
  mode?: 'in-out' | 'out-in' | 'default';
  appear?: boolean;
  persisted?: boolean;
  onBeforeEnter?: (el: HostElement) => void;
  onEnter?: (el: HostElement, done: () => void) => void;
  onAfterEnter?: (el: HostElement) => void;
  onEnterCancelled?: (el: HostElement) => void;
  onBeforeLeave?: (el: HostElement) => void;
  onLeave?: (el: HostElement, done: () => void) => void;
  onAfterLeave?: (el: HostElement) => void;
  onLeaveCancelled?: (el: HostElement) => void;
  onBeforeAppear?: (el: HostElement) => void;
  onAppear?: (el: HostElement, done: () => void) => void;
  onAfterAppear?: (el: HostElement) => void;
  onAppearCancelled?: (el: HostElement) => void;
}

declare const enum BooleanFlags {
  shouldCast = 0,
  shouldCastTrue = 1,
}

export declare function callWithAsyncErrorHandling(
  fn: Function | Function[],
  instance: ComponentInternalInstance | null,
  type: ErrorTypes,
  args?: unknown[]
): any[];

export declare function callWithErrorHandling(
  fn: Function,
  instance: ComponentInternalInstance | null,
  type: ErrorTypes,
  args?: unknown[]
): any;

export { camelize };

export { capitalize };

/**
 * Use this for features with the same syntax but with mutually exclusive
 * behavior in 2 vs 3. Only warn if compat is enabled.
 * e.g. render function
 */
declare function checkCompatEnabled(
  key: DeprecationTypes,
  instance: ComponentInternalInstance | null,
  ...args: any[]
): boolean;

declare interface ClassComponent {
  new (...args: any[]): ComponentPublicInstance<any, any, any, any, any>;
  __vccOpts: ComponentOptions;
}

export declare function cloneVNode<T, U>(
  vnode: VNode<T, U>,
  extraProps?: (Data & VNodeProps) | null,
  mergeRef?: boolean
): VNode<T, U>;

declare const Comment_2: unique symbol;
export { Comment_2 as Comment };

declare type CompatConfig = Partial<Record<DeprecationTypes, boolean | 'suppress-warning'>> & {
  MODE?: 2 | 3 | ((comp: Component | null) => 2 | 3);
};

/* Excluded from this release type: compatUtils */

/**
 * @deprecated the default `Vue` export has been removed in Vue 3. The type for
 * the default export is provided only for migration purposes. Please use
 * named imports instead - e.g. `import { createApp } from 'vue'`.
 */
export declare type CompatVue = Pick<App, 'version' | 'component' | 'directive'> & {
  configureCompat: typeof configureCompat;
  new (options?: ComponentOptions): LegacyPublicInstance;
  version: string;
  config: AppConfig & LegacyConfig;
  nextTick: typeof nextTick;
  use(plugin: Plugin_2, ...options: any[]): CompatVue;
  mixin(mixin: ComponentOptions): CompatVue;
  component(name: string): Component | undefined;
  component(name: string, component: Component): CompatVue;
  directive(name: string): Directive | undefined;
  directive(name: string, directive: Directive): CompatVue;
  compile(template: string): RenderFunction;
  /**
   * @deprecated
   */
  extend: (options?: ComponentOptions) => CompatVue;
  /**
   * @deprecated Vue 3 no longer needs set() for adding new properties.
   */
  set(target: any, key: string | number | symbol, value: any): void;
  /**
   * @deprecated Vue 3 no longer needs delete() for property deletions.
   */
  delete(target: any, key: string | number | symbol): void;
  /**
   * @deprecated use `reactive` instead.
   */
  observable: typeof reactive;
  /**
   * @deprecated filters have been removed from Vue 3.
   */
  filter(name: string, arg?: any): null;
  /* Excluded from this release type: cid */
  /* Excluded from this release type: options */
  /* Excluded from this release type: util */
  /* Excluded from this release type: super */
};

declare interface CompiledSlotDescriptor {
  name: string;
  fn: Slot;
}

/**
 * A type used in public APIs where a component type is expected.
 * The constructor type is an artificial type returned by defineComponent().
 */
export declare type Component<
  Props = any,
  RawBindings = any,
  D = any,
  C extends ComputedOptions = ComputedOptions,
  M extends MethodOptions = MethodOptions
> = ConcreteComponent<Props, RawBindings, D, C, M> | ComponentPublicInstanceConstructor<Props>;

/**
 * Interface for declaring custom options.
 *
 * @example
 * ```ts
 * declare module '@vue/runtime-core' {
 *   interface ComponentCustomOptions {
 *     beforeRouteUpdate?(
 *       to: Route,
 *       from: Route,
 *       next: () => void
 *     ): void
 *   }
 * }
 * ```
 */
export declare interface ComponentCustomOptions {}

/**
 * Custom properties added to component instances in any way and can be accessed through `this`
 *
 * @example
 * Here is an example of adding a property `$router` to every component instance:
 * ```ts
 * import { createApp } from 'vue'
 * import { Router, createRouter } from 'vue-router'
 *
 * declare module '@vue/runtime-core' {
 *   interface ComponentCustomProperties {
 *     $router: Router
 *   }
 * }
 *
 * // effectively adding the router to every component instance
 * const app = createApp({})
 * const router = createRouter()
 * app.config.globalProperties.$router = router
 *
 * const vm = app.mount('#app')
 * // we can access the router from the instance
 * vm.$router.push('/')
 * ```
 */
export declare interface ComponentCustomProperties {}

/**
 * For extending allowed non-declared props on components in TSX
 */
export declare interface ComponentCustomProps {}

declare type ComponentInjectOptions = string[] | ObjectInjectOptions;

/**
 * We expose a subset of properties on the internal instance as they are
 * useful for advanced external libraries and tools.
 */
export declare interface ComponentInternalInstance {
  uid: number;
  type: ConcreteComponent;
  parent: ComponentInternalInstance | null;
  root: ComponentInternalInstance;
  appContext: AppContext;
  /**
   * Vnode representing this component in its parent's vdom tree
   */
  vnode: VNode;
  /* Excluded from this release type: next */
  /**
   * Root vnode of this component's own vdom tree
   */
  subTree: VNode;
  /**
   * Bound effect runner to be passed to schedulers
   */
  update: SchedulerJob;
  /* Excluded from this release type: render */
  /* Excluded from this release type: ssrRender */
  /* Excluded from this release type: provides */
  /* Excluded from this release type: scope */
  /* Excluded from this release type: accessCache */
  /* Excluded from this release type: renderCache */
  /* Excluded from this release type: components */
  /* Excluded from this release type: directives */
  /* Excluded from this release type: filters */
  /* Excluded from this release type: propsOptions */
  /* Excluded from this release type: emitsOptions */
  /* Excluded from this release type: inheritAttrs */
  /**
   * is custom element?
   */
  isCE?: boolean;
  /**
   * custom element specific HMR method
   */
  ceReload?: (newStyles?: string[]) => void;
  proxy: ComponentPublicInstance | null;
  exposed: Record<string, any> | null;
  exposeProxy: Record<string, any> | null;
  /* Excluded from this release type: withProxy */
  /* Excluded from this release type: ctx */
  data: Data;
  props: Data;
  attrs: Data;
  slots: InternalSlots;
  refs: Data;
  emit: EmitFn;
  /* Excluded from this release type: emitted */
  /* Excluded from this release type: propsDefaults */
  /* Excluded from this release type: setupState */
  /* Excluded from this release type: devtoolsRawSetupState */
  /* Excluded from this release type: setupContext */
  /* Excluded from this release type: suspense */
  /* Excluded from this release type: suspenseId */
  /* Excluded from this release type: asyncDep */
  /* Excluded from this release type: asyncResolved */
  isMounted: boolean;
  isUnmounted: boolean;
  isDeactivated: boolean;
  /* Excluded from this release type: bc */
  /* Excluded from this release type: c */
  /* Excluded from this release type: bm */
  /* Excluded from this release type: m */
  /* Excluded from this release type: bu */
  /* Excluded from this release type: u */
  /* Excluded from this release type: bum */
  /* Excluded from this release type: um */
  /* Excluded from this release type: rtc */
  /* Excluded from this release type: rtg */
  /* Excluded from this release type: a */
  /* Excluded from this release type: da */
  /* Excluded from this release type: ec */
  /* Excluded from this release type: sp */
}

declare interface ComponentInternalOptions {
  /* Excluded from this release type: __scopeId */
  /* Excluded from this release type: __cssModules */
  /* Excluded from this release type: __hmrId */
  /**
   * Compat build only, for bailing out of certain compatibility behavior
   */
  __isBuiltIn?: boolean;
  /**
   * This one should be exposed so that devtools can make use of it
   */
  __file?: string;
}

export declare type ComponentObjectPropsOptions<P = Data> = {
  [K in keyof P]: Prop<P[K]> | null;
};

export declare type ComponentOptions<
  Props = {},
  RawBindings = any,
  D = any,
  C extends ComputedOptions = any,
  M extends MethodOptions = any,
  Mixin extends ComponentOptionsMixin = any,
  Extends extends ComponentOptionsMixin = any,
  E extends EmitsOptions = any
> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E> &
  ThisType<CreateComponentPublicInstance<{}, RawBindings, D, C, M, Mixin, Extends, E, Readonly<Props>>>;

export declare interface ComponentOptionsBase<
  Props,
  RawBindings,
  D,
  C extends ComputedOptions,
  M extends MethodOptions,
  Mixin extends ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin,
  E extends EmitsOptions,
  EE extends string = string,
  Defaults = {}
> extends LegacyOptions<Props, D, C, M, Mixin, Extends>,
    ComponentInternalOptions,
    ComponentCustomOptions {
  setup?: (
    this: void,
    props: Readonly<
      LooseRequired<
        Props & UnionToIntersection<ExtractOptionProp<Mixin>> & UnionToIntersection<ExtractOptionProp<Extends>>
      >
    >,
    ctx: SetupContext<E>
  ) => Promise<RawBindings> | RawBindings | RenderFunction | void;
  name?: string;
  template?: string | object;
  render?: Function;
  components?: Record<string, Component>;
  directives?: Record<string, Directive>;
  inheritAttrs?: boolean;
  emits?: (E | EE[]) & ThisType<void>;
  expose?: string[];
  serverPrefetch?(): Promise<any>;
  compilerOptions?: RuntimeCompilerOptions;
  /* Excluded from this release type: ssrRender */
  /* Excluded from this release type: __ssrInlineRender */
  /* Excluded from this release type: __asyncLoader */
  /* Excluded from this release type: __asyncResolved */
  call?: (this: unknown, ...args: unknown[]) => never;
  __isFragment?: never;
  __isTeleport?: never;
  __isSuspense?: never;
  __defaults?: Defaults;
}

export declare type ComponentOptionsMixin = ComponentOptionsBase<any, any, any, any, any, any, any, any, any, any>;

export declare type ComponentOptionsWithArrayProps<
  PropNames extends string = string,
  RawBindings = {},
  D = {},
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = EmitsOptions,
  EE extends string = string,
  Props = Readonly<
    {
      [key in PropNames]?: any;
    }
  > &
    EmitsToProps<E>
> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, {}> & {
  props: PropNames[];
} & ThisType<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E>>;

export declare type ComponentOptionsWithObjectProps<
  PropsOptions = ComponentObjectPropsOptions,
  RawBindings = {},
  D = {},
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = EmitsOptions,
  EE extends string = string,
  Props = Readonly<ExtractPropTypes<PropsOptions>> & EmitsToProps<E>,
  Defaults = ExtractDefaultPropTypes<PropsOptions>
> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, Defaults> & {
  props: PropsOptions & ThisType<void>;
} & ThisType<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E, Props, Defaults, false>>;

export declare type ComponentOptionsWithoutProps<
  Props = {},
  RawBindings = {},
  D = {},
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = EmitsOptions,
  EE extends string = string,
  PE = Props & EmitsToProps<E>
> = ComponentOptionsBase<PE, RawBindings, D, C, M, Mixin, Extends, E, EE, {}> & {
  props?: undefined;
} & ThisType<CreateComponentPublicInstance<PE, RawBindings, D, C, M, Mixin, Extends, E>>;

export declare type ComponentPropsOptions<P = Data> = ComponentObjectPropsOptions<P> | string[];

export declare type ComponentPublicInstance<
  P = {}, // props type extracted from props option
  B = {}, // raw bindings returned from setup()
  D = {}, // return from data()
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  E extends EmitsOptions = {},
  PublicProps = P,
  Defaults = {},
  MakeDefaultsOptional extends boolean = false,
  Options = ComponentOptionsBase<any, any, any, any, any, any, any, any, any>
> = {
  $: ComponentInternalInstance;
  $data: D;
  $props: MakeDefaultsOptional extends true
    ? Partial<Defaults> & Omit<P & PublicProps, keyof Defaults>
    : P & PublicProps;
  $attrs: Data;
  $refs: Data;
  $slots: Slots;
  $root: ComponentPublicInstance | null;
  $parent: ComponentPublicInstance | null;
  $emit: EmitFn<E>;
  $el: any;
  $options: Options & MergedComponentOptionsOverride;
  $forceUpdate: ReactiveEffect;
  $nextTick: typeof nextTick;
  $watch(source: string | Function, cb: Function, options?: WatchOptions): WatchStopHandle;
} & P &
  ShallowUnwrapRef<B> &
  UnwrapNestedRefs<D> &
  ExtractComputedReturns<C> &
  M &
  ComponentCustomProperties;

declare type ComponentPublicInstanceConstructor<
  T extends ComponentPublicInstance<Props, RawBindings, D, C, M> = ComponentPublicInstance<any>,
  Props = any,
  RawBindings = any,
  D = any,
  C extends ComputedOptions = ComputedOptions,
  M extends MethodOptions = MethodOptions
> = {
  __isFragment?: never;
  __isTeleport?: never;
  __isSuspense?: never;
  new (...args: any[]): T;
};

declare type ComponentWatchOptionItem = WatchOptionItem | WatchOptionItem[];

declare type ComponentWatchOptions = Record<string, ComponentWatchOptionItem>;

export { computed };

export declare type ComputedOptions = Record<string, ComputedGetter<any> | WritableComputedOptions<any>>;

export { ComputedRef };

declare const ComputedRefMarker: unique symbol;

declare type ComputedRefValue<T> = T & {
  [ComputedRefMarker]?: any;
};

/**
 * Concrete component type matches its actual value: it's either an options
 * object, or a function. Use this where the code expects to work with actual
 * values, e.g. checking if its a function or not. This is mostly for internal
 * implementation code.
 */
export declare type ConcreteComponent<
  Props = {},
  RawBindings = any,
  D = any,
  C extends ComputedOptions = ComputedOptions,
  M extends MethodOptions = MethodOptions
> = ComponentOptions<Props, RawBindings, D, C, M> | FunctionalComponent<Props, any>;

declare function configureCompat(config: CompatConfig): void;

declare interface Constructor<P = any> {
  __isFragment?: never;
  __isTeleport?: never;
  __isSuspense?: never;
  new (...args: any[]): {
    $props: P;
  };
}

export declare type CreateAppFunction<HostElement> = (
  rootComponent: Component,
  rootProps?: Data | null
) => App<HostElement>;

/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */
export declare function createBlock(
  type: VNodeTypes | ClassComponent,
  props?: Record<string, any> | null,
  children?: any,
  patchFlag?: number,
  dynamicProps?: string[]
): VNode;

/**
 * @private
 */
export declare function createCommentVNode(text?: string, asBlock?: boolean): VNode;

declare function createCompatVue(
  createApp: CreateAppFunction<Element>,
  createSingletonApp: CreateAppFunction<Element>
): CompatVue;

declare function createComponentInstance(
  vnode: VNode,
  parent: ComponentInternalInstance | null,
  suspense: SuspenseBoundary | null
): ComponentInternalInstance;

export declare type CreateComponentPublicInstance<
  P = {},
  B = {},
  D = {},
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = {},
  PublicProps = P,
  Defaults = {},
  MakeDefaultsOptional extends boolean = false,
  PublicMixin = IntersectionMixin<Mixin> & IntersectionMixin<Extends>,
  PublicP = UnwrapMixinsType<PublicMixin, 'P'> & EnsureNonVoid<P>,
  PublicB = UnwrapMixinsType<PublicMixin, 'B'> & EnsureNonVoid<B>,
  PublicD = UnwrapMixinsType<PublicMixin, 'D'> & EnsureNonVoid<D>,
  PublicC extends ComputedOptions = UnwrapMixinsType<PublicMixin, 'C'> & EnsureNonVoid<C>,
  PublicM extends MethodOptions = UnwrapMixinsType<PublicMixin, 'M'> & EnsureNonVoid<M>,
  PublicDefaults = UnwrapMixinsType<PublicMixin, 'Defaults'> & EnsureNonVoid<Defaults>
> = ComponentPublicInstance<
  PublicP,
  PublicB,
  PublicD,
  PublicC,
  PublicM,
  E,
  PublicProps,
  PublicDefaults,
  MakeDefaultsOptional,
  ComponentOptionsBase<P, B, D, C, M, Mixin, Extends, E, string, Defaults>
>;

/**
 * @private
 */
export declare function createElementBlock(
  type: string,
  props?: Record<string, any> | null,
  children?: any,
  patchFlag?: number,
  dynamicProps?: string[],
  shapeFlag?: number
): VNode<
  RendererNode,
  RendererElement,
  {
    [key: string]: any;
  }
>;

export declare function createElementVNode(
  type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT,
  props?: (Data & VNodeProps) | null,
  children?: unknown,
  patchFlag?: number,
  dynamicProps?: string[] | null,
  shapeFlag?: number | ShapeFlags,
  isBlockNode?: boolean,
  needFullChildrenNormalization?: boolean
): VNode<
  RendererNode,
  RendererElement,
  {
    [key: string]: any;
  }
>;

export declare function createHydrationRenderer(options: RendererOptions<Node, Element>): HydrationRenderer;

declare function createRecord(id: string, component: ComponentOptions | ClassComponent): boolean;

/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */
export declare function createRenderer<HostNode = RendererNode, HostElement = RendererElement>(
  options: RendererOptions<HostNode, HostElement>
): Renderer<HostElement>;

/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */
export declare function createSlots(
  slots: Record<string, Slot>,
  dynamicSlots: (CompiledSlotDescriptor | CompiledSlotDescriptor[] | undefined)[]
): Record<string, Slot>;

/**
 * @private
 */
export declare function createStaticVNode(content: string, numberOfNodes: number): VNode;

declare function createSuspenseBoundary(
  vnode: VNode,
  parent: SuspenseBoundary | null,
  parentComponent: ComponentInternalInstance | null,
  container: RendererElement,
  hiddenContainer: RendererElement,
  anchor: RendererNode | null,
  isSVG: boolean,
  slotScopeIds: string[] | null,
  optimized: boolean,
  rendererInternals: RendererInternals,
  isHydrating?: boolean
): SuspenseBoundary;

/**
 * @private
 */
export declare function createTextVNode(text?: string, flag?: number): VNode;

export declare const createVNode: typeof _createVNode;

declare function _createVNode(
  type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT,
  props?: (Data & VNodeProps) | null,
  children?: unknown,
  patchFlag?: number,
  dynamicProps?: string[] | null,
  isBlockNode?: boolean
): VNode;

export { customRef };

declare type Data = Record<string, unknown>;

export { DebuggerEvent };

declare type DebuggerHook = (e: DebuggerEvent) => void;

export { DeepReadonly };

declare type DefaultFactory<T> = (props: Data) => T | null | undefined;

declare type DefaultKeys<T> = {
  [K in keyof T]: T[K] extends
    | {
        default: any;
      }
    | BooleanConstructor
    | {
        type: BooleanConstructor;
      }
    ? T[K] extends {
        type: BooleanConstructor;
        required: true;
      }
      ? never
      : K
    : never;
}[keyof T];

export declare function defineAsyncComponent<
  T extends Component = {
    new (): ComponentPublicInstance;
  }
>(source: AsyncComponentLoader<T> | AsyncComponentOptions<T>): T;

export declare type DefineComponent<
  PropsOrPropOptions = {},
  RawBindings = {},
  D = {},
  C extends ComputedOptions = ComputedOptions,
  M extends MethodOptions = MethodOptions,
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = Record<string, any>,
  EE extends string = string,
  PP = PublicProps,
  Props = Readonly<ExtractPropTypes<PropsOrPropOptions>> & EmitsToProps<E>,
  Defaults = ExtractDefaultPropTypes<PropsOrPropOptions>
> = ComponentPublicInstanceConstructor<
  CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E, PP & Props, Defaults, true> & Props
> &
  ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, Defaults> &
  PP;

export declare function defineComponent<Props, RawBindings = object>(
  setup: (props: Readonly<Props>, ctx: SetupContext) => RawBindings | RenderFunction
): DefineComponent<Props, RawBindings>;

export declare function defineComponent<
  Props = {},
  RawBindings = {},
  D = {},
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = EmitsOptions,
  EE extends string = string
>(
  options: ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>
): DefineComponent<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>;

export declare function defineComponent<
  PropNames extends string,
  RawBindings,
  D,
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = Record<string, any>,
  EE extends string = string
>(
  options: ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M, Mixin, Extends, E, EE>
): DefineComponent<
  Readonly<
    {
      [key in PropNames]?: any;
    }
  >,
  RawBindings,
  D,
  C,
  M,
  Mixin,
  Extends,
  E,
  EE
>;

export declare function defineComponent<
  PropsOptions extends Readonly<ComponentPropsOptions>,
  RawBindings,
  D,
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Mixin extends ComponentOptionsMixin = ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin = ComponentOptionsMixin,
  E extends EmitsOptions = Record<string, any>,
  EE extends string = string
>(
  options: ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE>
): DefineComponent<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE>;

/**
 * Vue `<script setup>` compiler macro for declaring a component's emitted
 * events. The expected argument is the same as the component `emits` option.
 *
 * Example runtime declaration:
 * ```js
 * const emit = defineEmits(['change', 'update'])
 * ```
 *
 * Example type-based decalration:
 * ```ts
 * const emit = defineEmits<{
 *   (event: 'change'): void
 *   (event: 'update', id: number): void
 * }>()
 *
 * emit('change')
 * emit('update', 1)
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */
export declare function defineEmits<EE extends string = string>(emitOptions: EE[]): EmitFn<EE[]>;

export declare function defineEmits<E extends EmitsOptions = EmitsOptions>(emitOptions: E): EmitFn<E>;

export declare function defineEmits<TypeEmit>(): TypeEmit;

/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. varaibles inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */
export declare function defineExpose(exposed?: Record<string, any>): void;

/**
 * Vue `<script setup>` compiler macro for declaring component props. The
 * expected argument is the same as the component `props` option.
 *
 * Example runtime declaration:
 * ```js
 * // using Array syntax
 * const props = defineProps(['foo', 'bar'])
 * // using Object syntax
 * const props = defineProps({
 *   foo: String,
 *   bar: {
 *     type: Number,
 *     required: true
 *   }
 * })
 * ```
 *
 * Equivalent type-based decalration:
 * ```ts
 * // will be compiled into equivalent runtime declarations
 * const props = defineProps<{
 *   foo?: string
 *   bar: number
 * }>()
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */
export declare function defineProps<PropNames extends string = string>(
  props: PropNames[]
): Readonly<
  {
    [key in PropNames]?: any;
  }
>;

export declare function defineProps<PP extends ComponentObjectPropsOptions = ComponentObjectPropsOptions>(
  props: PP
): Readonly<ExtractPropTypes<PP>>;

export declare function defineProps<TypeProps>(): Readonly<TypeProps>;

export declare const enum DeprecationTypes {
  GLOBAL_MOUNT = 'GLOBAL_MOUNT',
  GLOBAL_MOUNT_CONTAINER = 'GLOBAL_MOUNT_CONTAINER',
  GLOBAL_EXTEND = 'GLOBAL_EXTEND',
  GLOBAL_PROTOTYPE = 'GLOBAL_PROTOTYPE',
  GLOBAL_SET = 'GLOBAL_SET',
  GLOBAL_DELETE = 'GLOBAL_DELETE',
  GLOBAL_OBSERVABLE = 'GLOBAL_OBSERVABLE',
  GLOBAL_PRIVATE_UTIL = 'GLOBAL_PRIVATE_UTIL',
  CONFIG_SILENT = 'CONFIG_SILENT',
  CONFIG_DEVTOOLS = 'CONFIG_DEVTOOLS',
  CONFIG_KEY_CODES = 'CONFIG_KEY_CODES',
  CONFIG_PRODUCTION_TIP = 'CONFIG_PRODUCTION_TIP',
  CONFIG_IGNORED_ELEMENTS = 'CONFIG_IGNORED_ELEMENTS',
  CONFIG_WHITESPACE = 'CONFIG_WHITESPACE',
  CONFIG_OPTION_MERGE_STRATS = 'CONFIG_OPTION_MERGE_STRATS',
  INSTANCE_SET = 'INSTANCE_SET',
  INSTANCE_DELETE = 'INSTANCE_DELETE',
  INSTANCE_DESTROY = 'INSTANCE_DESTROY',
  INSTANCE_EVENT_EMITTER = 'INSTANCE_EVENT_EMITTER',
  INSTANCE_EVENT_HOOKS = 'INSTANCE_EVENT_HOOKS',
  INSTANCE_CHILDREN = 'INSTANCE_CHILDREN',
  INSTANCE_LISTENERS = 'INSTANCE_LISTENERS',
  INSTANCE_SCOPED_SLOTS = 'INSTANCE_SCOPED_SLOTS',
  INSTANCE_ATTRS_CLASS_STYLE = 'INSTANCE_ATTRS_CLASS_STYLE',
  OPTIONS_DATA_FN = 'OPTIONS_DATA_FN',
  OPTIONS_DATA_MERGE = 'OPTIONS_DATA_MERGE',
  OPTIONS_BEFORE_DESTROY = 'OPTIONS_BEFORE_DESTROY',
  OPTIONS_DESTROYED = 'OPTIONS_DESTROYED',
  WATCH_ARRAY = 'WATCH_ARRAY',
  PROPS_DEFAULT_THIS = 'PROPS_DEFAULT_THIS',
  V_FOR_REF = 'V_FOR_REF',
  V_ON_KEYCODE_MODIFIER = 'V_ON_KEYCODE_MODIFIER',
  CUSTOM_DIR = 'CUSTOM_DIR',
  ATTR_FALSE_VALUE = 'ATTR_FALSE_VALUE',
  ATTR_ENUMERATED_COERCION = 'ATTR_ENUMERATED_COERCION',
  TRANSITION_CLASSES = 'TRANSITION_CLASSES',
  TRANSITION_GROUP_ROOT = 'TRANSITION_GROUP_ROOT',
  COMPONENT_ASYNC = 'COMPONENT_ASYNC',
  COMPONENT_FUNCTIONAL = 'COMPONENT_FUNCTIONAL',
  COMPONENT_V_MODEL = 'COMPONENT_V_MODEL',
  RENDER_FUNCTION = 'RENDER_FUNCTION',
  FILTERS = 'FILTERS',
  PRIVATE_APIS = 'PRIVATE_APIS',
}

export declare let devtools: DevtoolsHook;

declare interface DevtoolsHook {
  emit: (event: string, ...payload: any[]) => void;
  on: (event: string, handler: Function) => void;
  once: (event: string, handler: Function) => void;
  off: (event: string, handler: Function) => void;
  appRecords: AppRecord[];
}

export declare type Directive<T = any, V = any> = ObjectDirective<T, V> | FunctionDirective<T, V>;

export declare type DirectiveArguments = Array<
  [Directive] | [Directive, any] | [Directive, any, string] | [Directive, any, string, DirectiveModifiers]
>;

export declare interface DirectiveBinding<V = any> {
  instance: ComponentPublicInstance | null;
  value: V;
  oldValue: V | null;
  arg?: string;
  modifiers: DirectiveModifiers;
  dir: ObjectDirective<any, V>;
}

export declare type DirectiveHook<T = any, Prev = VNode<any, T> | null, V = any> = (
  el: T,
  binding: DirectiveBinding<V>,
  vnode: VNode<any, T>,
  prevVNode: Prev
) => void;

declare type DirectiveModifiers = Record<string, boolean>;

export { effect };

export { EffectScope };

export { effectScope };

declare type EmitFn<Options = ObjectEmitsOptions, Event extends keyof Options = keyof Options> = Options extends Array<
  infer V
>
  ? (event: V, ...args: any[]) => void
  : {} extends Options
  ? (event: string, ...args: any[]) => void
  : UnionToIntersection<
      {
        [key in Event]: Options[key] extends (...args: infer Args) => any
          ? (event: key, ...args: Args) => void
          : (event: key, ...args: any[]) => void;
      }[Event]
    >;

export declare type EmitsOptions = ObjectEmitsOptions | string[];

declare type EmitsToProps<T extends EmitsOptions> = T extends string[]
  ? {
      [K in string & `on${Capitalize<T[number]>}`]?: (...args: any[]) => any;
    }
  : T extends ObjectEmitsOptions
  ? {
      [K in string & `on${Capitalize<string & keyof T>}`]?: K extends `on${infer C}`
        ? T[Uncapitalize<C>] extends null
          ? (...args: any[]) => any
          : T[Uncapitalize<C>]
        : never;
    }
  : {};

declare type EnsureNonVoid<T> = T extends void ? {} : T;

declare type ErrorCapturedHook<TError = unknown> = (
  err: TError,
  instance: ComponentPublicInstance | null,
  info: string
) => boolean | void;

export declare const enum ErrorCodes {
  SETUP_FUNCTION = 0,
  RENDER_FUNCTION = 1,
  WATCH_GETTER = 2,
  WATCH_CALLBACK = 3,
  WATCH_CLEANUP = 4,
  NATIVE_EVENT_HANDLER = 5,
  COMPONENT_EVENT_HANDLER = 6,
  VNODE_HOOK = 7,
  DIRECTIVE_HOOK = 8,
  TRANSITION_HOOK = 9,
  APP_ERROR_HANDLER = 10,
  APP_WARN_HANDLER = 11,
  FUNCTION_REF = 12,
  ASYNC_COMPONENT_LOADER = 13,
  SCHEDULER = 14,
}

declare type ErrorTypes = LifecycleHooks | ErrorCodes;

declare type ExtractComputedReturns<T extends any> = {
  [key in keyof T]: T[key] extends {
    get: (...args: any[]) => infer TReturn;
  }
    ? TReturn
    : T[key] extends (...args: any[]) => infer TReturn
    ? TReturn
    : never;
};

export declare type ExtractDefaultPropTypes<O> = O extends object
  ? {
      [K in DefaultKeys<O>]: InferPropType<O[K]>;
    }
  : {};

declare type ExtractMixin<T> = {
  Mixin: MixinToOptionTypes<T>;
}[T extends ComponentOptionsMixin ? 'Mixin' : never];

declare type ExtractOptionProp<T> = T extends ComponentOptionsBase<
  infer P, // Props
  any, // RawBindings
  any, // D
  any, // C
  any, // M
  any, // Mixin
  any, // Extends
  any
>
  ? unknown extends P
    ? {}
    : P
  : {};

export declare type ExtractPropTypes<O> = O extends object
  ? {
      [K in keyof O]?: unknown;
    } & // This is needed to keep the relation between the option prop and the props, allowing to use ctrl+click to navigate to the prop options. see: #3656
      {
        [K in RequiredKeys<O>]: InferPropType<O[K]>;
      } &
      {
        [K in OptionalKeys<O>]?: InferPropType<O[K]>;
      }
  : {
      [K in string]: any;
    };

export declare const Fragment: {
  new (): {
    $props: VNodeProps;
  };
  __isFragment: true;
};

export declare interface FunctionalComponent<P = {}, E extends EmitsOptions = {}> extends ComponentInternalOptions {
  (props: P, ctx: Omit<SetupContext<E>, 'expose'>): any;
  props?: ComponentPropsOptions<P>;
  emits?: E | (keyof E)[];
  inheritAttrs?: boolean;
  displayName?: string;
}

export declare type FunctionDirective<T = any, V = any> = DirectiveHook<T, any, V>;

export declare const getCurrentInstance: () => ComponentInternalInstance | null;

export { getCurrentScope };

export declare function getTransitionRawChildren(children: VNode[], keepComment?: boolean): VNode[];

export declare function guardReactiveProps(props: (Data & VNodeProps) | null): (Data & VNodeProps) | null;

export declare function h(type: string, children?: RawChildren): VNode;

export declare function h(type: string, props?: RawProps | null, children?: RawChildren | RawSlots): VNode;

export declare function h(type: typeof Text_2 | typeof Comment_2, children?: string | number | boolean): VNode;

export declare function h(
  type: typeof Text_2 | typeof Comment_2,
  props?: null,
  children?: string | number | boolean
): VNode;

export declare function h(type: typeof Fragment, children?: VNodeArrayChildren): VNode;

export declare function h(type: typeof Fragment, props?: RawProps | null, children?: VNodeArrayChildren): VNode;

export declare function h(type: typeof Teleport, props: RawProps & TeleportProps, children: RawChildren): VNode;

export declare function h(type: typeof Suspense, children?: RawChildren): VNode;

export declare function h(
  type: typeof Suspense,
  props?: (RawProps & SuspenseProps) | null,
  children?: RawChildren | RawSlots
): VNode;

export declare function h<P, E extends EmitsOptions = {}>(
  type: FunctionalComponent<P, E>,
  props?: (RawProps & P) | ({} extends P ? null : never),
  children?: RawChildren | RawSlots
): VNode;

export declare function h(type: Component, children?: RawChildren): VNode;

export declare function h<P>(type: ConcreteComponent | string, children?: RawChildren): VNode;

export declare function h<P>(
  type: ConcreteComponent<P> | string,
  props?: (RawProps & P) | ({} extends P ? null : never),
  children?: RawChildren
): VNode;

export declare function h(type: Component, props: null, children?: RawChildren | RawSlots): VNode;

export declare function h<P>(
  type: ComponentOptions<P>,
  props?: (RawProps & P) | ({} extends P ? null : never),
  children?: RawChildren | RawSlots
): VNode;

export declare function h(type: Constructor, children?: RawChildren): VNode;

export declare function h<P>(
  type: Constructor<P>,
  props?: (RawProps & P) | ({} extends P ? null : never),
  children?: RawChildren | RawSlots
): VNode;

export declare function h(type: DefineComponent, children?: RawChildren): VNode;

export declare function h<P>(
  type: DefineComponent<P>,
  props?: (RawProps & P) | ({} extends P ? null : never),
  children?: RawChildren | RawSlots
): VNode;

export declare function handleError(
  err: unknown,
  instance: ComponentInternalInstance | null,
  type: ErrorTypes,
  throwInDev?: boolean
): void;

export declare interface HMRRuntime {
  createRecord: typeof createRecord;
  rerender: typeof rerender;
  reload: typeof reload;
}

declare function hydrateSuspense(
  node: Node,
  vnode: VNode,
  parentComponent: ComponentInternalInstance | null,
  parentSuspense: SuspenseBoundary | null,
  isSVG: boolean,
  slotScopeIds: string[] | null,
  optimized: boolean,
  rendererInternals: RendererInternals,
  hydrateNode: (
    node: Node,
    vnode: VNode,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    slotScopeIds: string[] | null,
    optimized: boolean
  ) => Node | null
): Node | null;

declare function hydrateTeleport(
  node: Node,
  vnode: TeleportVNode,
  parentComponent: ComponentInternalInstance | null,
  parentSuspense: SuspenseBoundary | null,
  slotScopeIds: string[] | null,
  optimized: boolean,
  {
    o: { nextSibling, parentNode, querySelector },
  }: RendererInternals<Node, Element>,
  hydrateChildren: (
    node: Node | null,
    vnode: VNode,
    container: Element,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    slotScopeIds: string[] | null,
    optimized: boolean
  ) => Node | null
): Node | null;

export declare interface HydrationRenderer extends Renderer<Element | ShadowRoot> {
  hydrate: RootHydrateFunction;
}

declare type InferDefaults<T> = {
  [K in keyof T]?: NotUndefined<T[K]> extends number | string | boolean | symbol | Function
    ? NotUndefined<T[K]>
    : (props: T) => NotUndefined<T[K]>;
};

declare type InferPropType<T> = [T] extends [null]
  ? any
  : [T] extends [
      {
        type: null | true;
      }
    ]
  ? any
  : [T] extends [
      | ObjectConstructor
      | {
          type: ObjectConstructor;
        }
    ]
  ? Record<string, any>
  : [T] extends [
      | BooleanConstructor
      | {
          type: BooleanConstructor;
        }
    ]
  ? boolean
  : [T] extends [
      | DateConstructor
      | {
          type: DateConstructor;
        }
    ]
  ? Date
  : [T] extends [Prop<infer V, infer D>]
  ? unknown extends V
    ? D
    : V
  : T;

export declare function initCustomFormatter(): void;

export declare function inject<T>(key: InjectionKey<T> | string): T | undefined;

export declare function inject<T>(key: InjectionKey<T> | string, defaultValue: T, treatDefaultAsFactory?: false): T;

export declare function inject<T>(
  key: InjectionKey<T> | string,
  defaultValue: T | (() => T),
  treatDefaultAsFactory: true
): T;

export declare interface InjectionKey<T> extends Symbol {}

/* Excluded from this release type: InternalRenderFunction */

declare type InternalSlots = {
  [name: string]: Slot | undefined;
};

declare type IntersectionMixin<T> = IsDefaultMixinComponent<T> extends true
  ? OptionTypesType<{}, {}, {}, {}, {}>
  : UnionToIntersection<ExtractMixin<T>>;

declare type InvalidateCbRegistrator = (cb: () => void) => void;

declare function isCompatEnabled(
  key: DeprecationTypes,
  instance: ComponentInternalInstance | null,
  enableForBuiltIn?: boolean
): boolean;

declare type IsDefaultMixinComponent<T> = T extends ComponentOptionsMixin
  ? ComponentOptionsMixin extends T
    ? true
    : false
  : false;

export declare function isMemoSame(cached: VNode, memo: any[]): boolean;

export { isProxy };

export { isReactive };

export { isReadonly };

export { isRef };

export declare const isRuntimeOnly: () => boolean;

export declare function isVNode(value: any): value is VNode;

export declare const KeepAlive: {
  new (): {
    $props: VNodeProps & KeepAliveProps;
  };
  __isKeepAlive: true;
};

export declare interface KeepAliveProps {
  include?: MatchPattern;
  exclude?: MatchPattern;
  max?: number | string;
}

export declare type LegacyConfig = {
  /**
   * @deprecated `config.silent` option has been removed
   */
  silent?: boolean;
  /**
   * @deprecated use __VUE_PROD_DEVTOOLS__ compile-time feature flag instead
   * https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags
   */
  devtools?: boolean;
  /**
   * @deprecated use `config.isCustomElement` instead
   * https://v3.vuejs.org/guide/migration/global-api.html#config-ignoredelements-is-now-config-iscustomelement
   */
  ignoredElements?: (string | RegExp)[];
  /**
   * @deprecated
   * https://v3.vuejs.org/guide/migration/keycode-modifiers.html
   */
  keyCodes?: Record<string, number | number[]>;
  /**
   * @deprecated
   * https://v3.vuejs.org/guide/migration/global-api.html#config-productiontip-removed
   */
  productionTip?: boolean;
};

declare interface LegacyOptions<
  Props,
  D,
  C extends ComputedOptions,
  M extends MethodOptions,
  Mixin extends ComponentOptionsMixin,
  Extends extends ComponentOptionsMixin
> {
  compatConfig?: CompatConfig;
  [key: string]: any;
  data?: (
    this: CreateComponentPublicInstance<Props, {}, {}, {}, MethodOptions, Mixin, Extends>,
    vm: CreateComponentPublicInstance<Props, {}, {}, {}, MethodOptions, Mixin, Extends>
  ) => D;
  computed?: C;
  methods?: M;
  watch?: ComponentWatchOptions;
  provide?: Data | Function;
  inject?: ComponentInjectOptions;
  filters?: Record<string, Function>;
  mixins?: Mixin[];
  extends?: Extends;
  beforeCreate?(): void;
  created?(): void;
  beforeMount?(): void;
  mounted?(): void;
  beforeUpdate?(): void;
  updated?(): void;
  activated?(): void;
  deactivated?(): void;
  /** @deprecated use `beforeUnmount` instead */
  beforeDestroy?(): void;
  beforeUnmount?(): void;
  /** @deprecated use `unmounted` instead */
  destroyed?(): void;
  unmounted?(): void;
  renderTracked?: DebuggerHook;
  renderTriggered?: DebuggerHook;
  errorCaptured?: ErrorCapturedHook;
  /**
   * runtime compile only
   * @deprecated use `compilerOptions.delimiters` instead.
   */
  delimiters?: [string, string];
  /**
   * #3468
   *
   * type-only, used to assist Mixin's type inference,
   * typescript will try to simplify the inferred `Mixin` type,
   * with the `__differenciator`, typescript won't be able to combine different mixins,
   * because the `__differenciator` will be different
   */
  __differentiator?: keyof D | keyof C | keyof M;
}

declare type LegacyPublicInstance = ComponentPublicInstance & LegacyPublicProperties;

declare interface LegacyPublicProperties {
  $set(target: object, key: string, value: any): void;
  $delete(target: object, key: string): void;
  $mount(el?: string | Element): this;
  $destroy(): void;
  $scopedSlots: Slots;
  $on(event: string | string[], fn: Function): this;
  $once(event: string, fn: Function): this;
  $off(event?: string | string[], fn?: Function): this;
  $children: LegacyPublicProperties[];
  $listeners: Record<string, Function | Function[]>;
}

declare type LifecycleHook<TFn = Function> = TFn[] | null;

declare const enum LifecycleHooks {
  BEFORE_CREATE = 'bc',
  CREATED = 'c',
  BEFORE_MOUNT = 'bm',
  MOUNTED = 'm',
  BEFORE_UPDATE = 'bu',
  UPDATED = 'u',
  BEFORE_UNMOUNT = 'bum',
  UNMOUNTED = 'um',
  DEACTIVATED = 'da',
  ACTIVATED = 'a',
  RENDER_TRIGGERED = 'rtg',
  RENDER_TRACKED = 'rtc',
  ERROR_CAPTURED = 'ec',
  SERVER_PREFETCH = 'sp',
}

declare type LooseRequired<T> = {
  [P in string & keyof T]: T[P];
};

declare type MapSources<T, Immediate> = {
  [K in keyof T]: T[K] extends WatchSource<infer V>
    ? Immediate extends true
      ? V | undefined
      : V
    : T[K] extends object
    ? Immediate extends true
      ? T[K] | undefined
      : T[K]
    : never;
};

export { markRaw };

declare type MatchPattern = string | RegExp | string[] | RegExp[];

declare type MergedComponentOptions = ComponentOptions & MergedComponentOptionsOverride;

declare type MergedComponentOptionsOverride = {
  beforeCreate?: MergedHook;
  created?: MergedHook;
  beforeMount?: MergedHook;
  mounted?: MergedHook;
  beforeUpdate?: MergedHook;
  updated?: MergedHook;
  activated?: MergedHook;
  deactivated?: MergedHook;
  /** @deprecated use `beforeUnmount` instead */
  beforeDestroy?: MergedHook;
  beforeUnmount?: MergedHook;
  /** @deprecated use `unmounted` instead */
  destroyed?: MergedHook;
  unmounted?: MergedHook;
  renderTracked?: MergedHook<DebuggerHook>;
  renderTriggered?: MergedHook<DebuggerHook>;
  errorCaptured?: MergedHook<ErrorCapturedHook>;
};

/* Excluded from this release type: mergeDefaults */

declare type MergedHook<T = () => void> = T | T[];

export declare function mergeProps(...args: (Data & VNodeProps)[]): Data;

export declare interface MethodOptions {
  [key: string]: Function;
}

declare type MixinToOptionTypes<T> = T extends ComponentOptionsBase<
  infer P,
  infer B,
  infer D,
  infer C,
  infer M,
  infer Mixin,
  infer Extends,
  any,
  any,
  infer Defaults
>
  ? OptionTypesType<P & {}, B & {}, D & {}, C & {}, M & {}, Defaults & {}> &
      IntersectionMixin<Mixin> &
      IntersectionMixin<Extends>
  : never;

declare type MountChildrenFn = (
  children: VNodeArrayChildren,
  container: RendererElement,
  anchor: RendererNode | null,
  parentComponent: ComponentInternalInstance | null,
  parentSuspense: SuspenseBoundary | null,
  isSVG: boolean,
  slotScopeIds: string[] | null,
  optimized: boolean,
  start?: number
) => void;

declare type MountComponentFn = (
  initialVNode: VNode,
  container: RendererElement,
  anchor: RendererNode | null,
  parentComponent: ComponentInternalInstance | null,
  parentSuspense: SuspenseBoundary | null,
  isSVG: boolean,
  optimized: boolean
) => void;

declare type MoveFn = (
  vnode: VNode,
  container: RendererElement,
  anchor: RendererNode | null,
  type: MoveType,
  parentSuspense?: SuspenseBoundary | null
) => void;

declare function moveTeleport(
  vnode: VNode,
  container: RendererElement,
  parentAnchor: RendererNode | null,
  {
    o: { insert },
    m: move,
  }: RendererInternals,
  moveType?: TeleportMoveTypes
): void;

declare const enum MoveType {
  ENTER = 0,
  LEAVE = 1,
  REORDER = 2,
}

declare type MultiWatchSources = (WatchSource<unknown> | object)[];

declare type NextFn = (vnode: VNode) => RendererNode | null;

export declare function nextTick<T = void>(this: T, fn?: (this: T) => void): Promise<void>;

export { normalizeClass };

declare type NormalizedProp =
  | null
  | (PropOptions & {
      [BooleanFlags.shouldCast]?: boolean;
      [BooleanFlags.shouldCastTrue]?: boolean;
    });

declare type NormalizedProps = Record<string, NormalizedProp>;

declare type NormalizedPropsOptions = [NormalizedProps, string[]] | [];

export { normalizeProps };

export { normalizeStyle };

declare function normalizeSuspenseChildren(vnode: VNode): void;

declare function normalizeVNode(child: VNodeChild): VNode;

declare type NotUndefined<T> = T extends undefined ? never : T;

declare const NULL_DYNAMIC_COMPONENT: unique symbol;

export declare interface ObjectDirective<T = any, V = any> {
  created?: DirectiveHook<T, null, V>;
  beforeMount?: DirectiveHook<T, null, V>;
  mounted?: DirectiveHook<T, null, V>;
  beforeUpdate?: DirectiveHook<T, VNode<any, T>, V>;
  updated?: DirectiveHook<T, VNode<any, T>, V>;
  beforeUnmount?: DirectiveHook<T, null, V>;
  unmounted?: DirectiveHook<T, null, V>;
  getSSRProps?: SSRDirectiveHook;
  deep?: boolean;
}

export declare type ObjectEmitsOptions = Record<string, ((...args: any[]) => any) | null>;

declare type ObjectInjectOptions = Record<
  string | symbol,
  | string
  | symbol
  | {
      from?: string | symbol;
      default?: unknown;
    }
>;

declare type ObjectWatchOptionItem = {
  handler: WatchCallback | string;
} & WatchOptions;

export declare function onActivated(hook: Function, target?: ComponentInternalInstance | null): void;

export declare const onBeforeMount: (
  hook: () => any,
  target?: ComponentInternalInstance | null
) => false | Function | undefined;

export declare const onBeforeUnmount: (
  hook: () => any,
  target?: ComponentInternalInstance | null
) => false | Function | undefined;

export declare const onBeforeUpdate: (
  hook: () => any,
  target?: ComponentInternalInstance | null
) => false | Function | undefined;

export declare function onDeactivated(hook: Function, target?: ComponentInternalInstance | null): void;

export declare function onErrorCaptured<TError = Error>(
  hook: ErrorCapturedHook<TError>,
  target?: ComponentInternalInstance | null
): void;

export declare const onMounted: (
  hook: () => any,
  target?: ComponentInternalInstance | null
) => false | Function | undefined;

export declare const onRenderTracked: (
  hook: DebuggerHook,
  target?: ComponentInternalInstance | null
) => false | Function | undefined;

export declare const onRenderTriggered: (
  hook: DebuggerHook,
  target?: ComponentInternalInstance | null
) => false | Function | undefined;

export { onScopeDispose };

export declare const onServerPrefetch: (
  hook: () => any,
  target?: ComponentInternalInstance | null
) => false | Function | undefined;

export declare const onUnmounted: (
  hook: () => any,
  target?: ComponentInternalInstance | null
) => false | Function | undefined;

export declare const onUpdated: (
  hook: () => any,
  target?: ComponentInternalInstance | null
) => false | Function | undefined;

/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */
export declare function openBlock(disableTracking?: boolean): void;

declare type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;

export declare type OptionMergeFunction = (to: unknown, from: unknown) => any;

declare type OptionTypesKeys = 'P' | 'B' | 'D' | 'C' | 'M' | 'Defaults';

declare type OptionTypesType<
  P = {},
  B = {},
  D = {},
  C extends ComputedOptions = {},
  M extends MethodOptions = {},
  Defaults = {}
> = {
  P: P;
  B: B;
  D: D;
  C: C;
  M: M;
  Defaults: Defaults;
};

declare type PatchBlockChildrenFn = (
  oldChildren: VNode[],
  newChildren: VNode[],
  fallbackContainer: RendererElement,
  parentComponent: ComponentInternalInstance | null,
  parentSuspense: SuspenseBoundary | null,
  isSVG: boolean,
  slotScopeIds: string[] | null
) => void;

declare type PatchChildrenFn = (
  n1: VNode | null,
  n2: VNode,
  container: RendererElement,
  anchor: RendererNode | null,
  parentComponent: ComponentInternalInstance | null,
  parentSuspense: SuspenseBoundary | null,
  isSVG: boolean,
  slotScopeIds: string[] | null,
  optimized: boolean
) => void;

declare type PatchFn = (
  n1: VNode | null, // null means this is a mount
  n2: VNode,
  container: RendererElement,
  anchor?: RendererNode | null,
  parentComponent?: ComponentInternalInstance | null,
  parentSuspense?: SuspenseBoundary | null,
  isSVG?: boolean,
  slotScopeIds?: string[] | null,
  optimized?: boolean
) => void;

declare type Plugin_2 =
  | (PluginInstallFunction & {
      install?: PluginInstallFunction;
    })
  | {
      install: PluginInstallFunction;
    };
export { Plugin_2 as Plugin };

declare type PluginInstallFunction = (app: App, ...options: any[]) => any;

/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */
export declare function popScopeId(): void;

export declare type Prop<T, D = T> = PropOptions<T, D> | PropType<T>;

declare type PropConstructor<T = any> =
  | {
      new (...args: any[]): T & {};
    }
  | {
      (): T;
    }
  | PropMethod<T>;

declare type PropMethod<T, TConstructor = any> = [T] extends [(...args: any) => any]
  ? {
      new (): TConstructor;
      (): T;
      readonly prototype: TConstructor;
    }
  : never;

declare interface PropOptions<T = any, D = T> {
  type?: PropType<T> | true | null;
  required?: boolean;
  default?: D | DefaultFactory<D> | null | undefined | object;
  validator?(value: unknown): boolean;
}

declare type PropsWithDefaults<Base, Defaults> = Base &
  {
    [K in keyof Defaults]: K extends keyof Base ? NotUndefined<Base[K]> : never;
  };

export declare type PropType<T> = PropConstructor<T> | PropConstructor<T>[];

export declare function provide<T>(key: InjectionKey<T> | string | number, value: T): void;

export { proxyRefs };

declare type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;

/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */
export declare function pushScopeId(id: string | null): void;

export declare function queuePostFlushCb(cb: SchedulerJobs): void;

declare type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);

declare type RawProps = VNodeProps & {
  __v_isVNode?: never;
  [Symbol.iterator]?: never;
} & Record<string, any>;

declare type RawSlots = {
  [name: string]: unknown;
  $stable?: boolean;
  /* Excluded from this release type: _ctx */
  /* Excluded from this release type: _ */
};

export { reactive };

export { ReactiveEffect };

export { ReactiveEffectOptions };

export { readonly };

export { Ref };

export { ref };

/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */
export declare function registerRuntimeCompiler(_compile: any): void;

declare function reload(id: string, newComp: ComponentOptions | ClassComponent): void;

declare type RemoveFn = (vnode: VNode) => void;

declare function renderComponentRoot(instance: ComponentInternalInstance): VNode;

export declare interface Renderer<HostElement = RendererElement> {
  render: RootRenderFunction<HostElement>;
  createApp: CreateAppFunction<HostElement>;
}

export declare interface RendererElement extends RendererNode {}

declare interface RendererInternals<HostNode = RendererNode, HostElement = RendererElement> {
  p: PatchFn;
  um: UnmountFn;
  r: RemoveFn;
  m: MoveFn;
  mt: MountComponentFn;
  mc: MountChildrenFn;
  pc: PatchChildrenFn;
  pbc: PatchBlockChildrenFn;
  n: NextFn;
  o: RendererOptions<HostNode, HostElement>;
}

export declare interface RendererNode {
  [key: string]: any;
}

export declare interface RendererOptions<HostNode = RendererNode, HostElement = RendererElement> {
  patchProp(
    el: HostElement,
    key: string,
    prevValue: any,
    nextValue: any,
    isSVG?: boolean,
    prevChildren?: VNode<HostNode, HostElement>[],
    parentComponent?: ComponentInternalInstance | null,
    parentSuspense?: SuspenseBoundary | null,
    unmountChildren?: UnmountChildrenFn
  ): void;
  insert(el: HostNode, parent: HostElement, anchor?: HostNode | null): void;
  remove(el: HostNode): void;
  createElement(
    type: string,
    isSVG?: boolean,
    isCustomizedBuiltIn?: string,
    vnodeProps?:
      | (VNodeProps & {
          [key: string]: any;
        })
      | null
  ): HostElement;
  createText(text: string): HostNode;
  createComment(text: string): HostNode;
  setText(node: HostNode, text: string): void;
  setElementText(node: HostElement, text: string): void;
  parentNode(node: HostNode): HostElement | null;
  nextSibling(node: HostNode): HostNode | null;
  querySelector?(selector: string): HostElement | null;
  setScopeId?(el: HostElement, id: string): void;
  cloneNode?(node: HostNode): HostNode;
  insertStaticContent?(
    content: string,
    parent: HostElement,
    anchor: HostNode | null,
    isSVG: boolean
  ): [HostNode, HostNode];
}

export declare type RenderFunction = () => VNodeChild;

/**
 * v-for string
 * @private
 */
export declare function renderList(
  source: string,
  renderItem: (value: string, index: number) => VNodeChild
): VNodeChild[];

/**
 * v-for number
 */
export declare function renderList(
  source: number,
  renderItem: (value: number, index: number) => VNodeChild
): VNodeChild[];

/**
 * v-for array
 */
export declare function renderList<T>(source: T[], renderItem: (value: T, index: number) => VNodeChild): VNodeChild[];

/**
 * v-for iterable
 */
export declare function renderList<T>(
  source: Iterable<T>,
  renderItem: (value: T, index: number) => VNodeChild
): VNodeChild[];

/**
 * v-for object
 */
export declare function renderList<T>(
  source: T,
  renderItem: <K extends keyof T>(value: T[K], key: K, index: number) => VNodeChild
): VNodeChild[];

/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */
export declare function renderSlot(
  slots: Slots,
  name: string,
  props?: Data,
  fallback?: () => VNodeArrayChildren,
  noSlotted?: boolean
): VNode;

declare type RequiredKeys<T> = {
  [K in keyof T]: T[K] extends
    | {
        required: true;
      }
    | {
        default: any;
      }
    | BooleanConstructor
    | {
        type: BooleanConstructor;
      }
    ? T[K] extends {
        default: undefined | (() => undefined);
      }
      ? never
      : K
    : never;
}[keyof T];

declare function rerender(id: string, newRender?: Function): void;

/**
 * @private
 */
export declare function resolveComponent(name: string, maybeSelfReference?: boolean): ConcreteComponent | string;

/**
 * @private
 */
export declare function resolveDirective(name: string): Directive | undefined;

/**
 * @private
 */
export declare function resolveDynamicComponent(component: unknown): VNodeTypes;

/* Excluded from this release type: resolveFilter */

/* Excluded from this release type: resolveFilter_2 */

export declare function resolveTransitionHooks(
  vnode: VNode,
  props: BaseTransitionProps<any>,
  state: TransitionState,
  instance: ComponentInternalInstance
): TransitionHooks;

export declare type RootHydrateFunction = (vnode: VNode<Node, Element>, container: Element | ShadowRoot) => void;

export declare type RootRenderFunction<HostElement = RendererElement> = (
  vnode: VNode | null,
  container: HostElement,
  isSVG?: boolean
) => void;

/**
 * Subset of compiler options that makes sense for the runtime.
 */
export declare interface RuntimeCompilerOptions {
  isCustomElement?: (tag: string) => boolean;
  whitespace?: 'preserve' | 'condense';
  comments?: boolean;
  delimiters?: [string, string];
}

declare interface SchedulerJob extends Function {
  id?: number;
  active?: boolean;
  computed?: boolean;
  /**
   * Indicates whether the effect is allowed to recursively trigger itself
   * when managed by the scheduler.
   *
   * By default, a job cannot trigger itself because some built-in method calls,
   * e.g. Array.prototype.push actually performs reads as well (#1740) which
   * can lead to confusing infinite loops.
   * The allowed cases are component update functions and watch callbacks.
   * Component update functions may update child component props, which in turn
   * trigger flush: "pre" watch callbacks that mutates state that the parent
   * relies on (#1801). Watch callbacks doesn't track its dependencies so if it
   * triggers itself again, it's likely intentional and it is the user's
   * responsibility to perform recursive state mutation that eventually
   * stabilizes (#1727).
   */
  allowRecurse?: boolean;
  /**
   * Attached by renderer.ts when setting up a component's render effect
   * Used to obtain component information when reporting max recursive updates.
   * dev only.
   */
  ownerInstance?: ComponentInternalInstance;
}

declare type SchedulerJobs = SchedulerJob | SchedulerJob[];

/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */
export declare function setBlockTracking(value: number): void;

/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */
declare function setCurrentRenderingInstance(
  instance: ComponentInternalInstance | null
): ComponentInternalInstance | null;

export declare function setDevtoolsHook(hook: DevtoolsHook): void;

export declare function setTransitionHooks(vnode: VNode, hooks: TransitionHooks): void;

declare function setupComponent(instance: ComponentInternalInstance, isSSR?: boolean): Promise<void> | undefined;

export declare interface SetupContext<E = EmitsOptions> {
  attrs: Data;
  slots: Slots;
  emit: EmitFn<E>;
  expose: (exposed?: Record<string, any>) => void;
}

declare type SetupRenderEffectFn = (
  instance: ComponentInternalInstance,
  initialVNode: VNode,
  container: RendererElement,
  anchor: RendererNode | null,
  parentSuspense: SuspenseBoundary | null,
  isSVG: boolean,
  optimized: boolean
) => void;

export { shallowReactive };

export { shallowReadonly };

export { shallowRef };

export { ShallowUnwrapRef };

export declare type Slot = (...args: any[]) => VNode[];

export declare type Slots = Readonly<InternalSlots>;

/**
 * Use this for features where legacy usage is still possible, but will likely
 * lead to runtime error if compat is disabled. (warn in all cases)
 */
declare function softAssertCompatEnabled(
  key: DeprecationTypes,
  instance: ComponentInternalInstance | null,
  ...args: any[]
): boolean;

export declare const ssrContextKey: unique symbol;

declare type SSRDirectiveHook = (binding: DirectiveBinding, vnode: VNode) => Data | undefined;

/* Excluded from this release type: ssrUtils */

export declare const Static: unique symbol;

export { stop_2 as stop };

export declare const Suspense: {
  new (): {
    $props: VNodeProps & SuspenseProps;
  };
  __isSuspense: true;
};

export declare interface SuspenseBoundary {
  vnode: VNode<RendererNode, RendererElement, SuspenseProps>;
  parent: SuspenseBoundary | null;
  parentComponent: ComponentInternalInstance | null;
  isSVG: boolean;
  container: RendererElement;
  hiddenContainer: RendererElement;
  anchor: RendererNode | null;
  activeBranch: VNode | null;
  pendingBranch: VNode | null;
  deps: number;
  pendingId: number;
  timeout: number;
  isInFallback: boolean;
  isHydrating: boolean;
  isUnmounted: boolean;
  effects: Function[];
  resolve(force?: boolean): void;
  fallback(fallbackVNode: VNode): void;
  move(container: RendererElement, anchor: RendererNode | null, type: MoveType): void;
  next(): RendererNode | null;
  registerDep(instance: ComponentInternalInstance, setupRenderEffect: SetupRenderEffectFn): void;
  unmount(parentSuspense: SuspenseBoundary | null, doRemove?: boolean): void;
}

declare const SuspenseImpl: {
  name: string;
  __isSuspense: boolean;
  process(
    n1: VNode | null,
    n2: VNode,
    container: RendererElement,
    anchor: RendererNode | null,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    isSVG: boolean,
    slotScopeIds: string[] | null,
    optimized: boolean,
    rendererInternals: RendererInternals
  ): void;
  hydrate: typeof hydrateSuspense;
  create: typeof createSuspenseBoundary;
  normalize: typeof normalizeSuspenseChildren;
};

export declare interface SuspenseProps {
  onResolve?: () => void;
  onPending?: () => void;
  onFallback?: () => void;
  timeout?: string | number;
}

export declare const Teleport: {
  new (): {
    $props: VNodeProps & TeleportProps;
  };
  __isTeleport: true;
};

declare const TeleportImpl: {
  __isTeleport: boolean;
  process(
    n1: TeleportVNode | null,
    n2: TeleportVNode,
    container: RendererElement,
    anchor: RendererNode | null,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    isSVG: boolean,
    slotScopeIds: string[] | null,
    optimized: boolean,
    internals: RendererInternals
  ): void;
  remove(
    vnode: VNode,
    parentComponent: ComponentInternalInstance | null,
    parentSuspense: SuspenseBoundary | null,
    optimized: boolean,
    {
      um: unmount,
      o: { remove: hostRemove },
    }: RendererInternals,
    doRemove: Boolean
  ): void;
  move: typeof moveTeleport;
  hydrate: typeof hydrateTeleport;
};

declare const enum TeleportMoveTypes {
  TARGET_CHANGE = 0,
  TOGGLE = 1,
  REORDER = 2,
}

export declare interface TeleportProps {
  to: string | RendererElement | null | undefined;
  disabled?: boolean;
}

declare type TeleportVNode = VNode<RendererNode, RendererElement, TeleportProps>;

declare const Text_2: unique symbol;
export { Text_2 as Text };

export { toDisplayString };

export { toHandlerKey };

/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */
export declare function toHandlers(obj: Record<string, any>): Record<string, any>;

export { toRaw };

export { toRef };

export { ToRefs };

export { toRefs };

export { TrackOpTypes };

/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */
export declare function transformVNodeArgs(transformer?: typeof vnodeArgsTransformer): void;

export declare interface TransitionHooks<HostElement extends RendererElement = RendererElement> {
  mode: BaseTransitionProps['mode'];
  persisted: boolean;
  beforeEnter(el: HostElement): void;
  enter(el: HostElement): void;
  leave(el: HostElement, remove: () => void): void;
  clone(vnode: VNode): TransitionHooks<HostElement>;
  afterLeave?(): void;
  delayLeave?(el: HostElement, earlyRemove: () => void, delayedLeave: () => void): void;
  delayedLeave?(): void;
}

export declare interface TransitionState {
  isMounted: boolean;
  isLeaving: boolean;
  isUnmounting: boolean;
  leavingVNodes: Map<any, Record<string, VNode>>;
}

export { TriggerOpTypes };

export { triggerRef };

declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

declare type UnmountChildrenFn = (
  children: VNode[],
  parentComponent: ComponentInternalInstance | null,
  parentSuspense: SuspenseBoundary | null,
  doRemove?: boolean,
  optimized?: boolean,
  start?: number
) => void;

declare type UnmountFn = (
  vnode: VNode,
  parentComponent: ComponentInternalInstance | null,
  parentSuspense: SuspenseBoundary | null,
  doRemove?: boolean,
  optimized?: boolean
) => void;

export { unref };

declare type UnwrapMixinsType<T, Type extends OptionTypesKeys> = T extends OptionTypesType ? T[Type] : never;

export { UnwrapRef };

export declare function useAttrs(): SetupContext['attrs'];

export declare function useSlots(): SetupContext['slots'];

export declare const useSSRContext: <T = Record<string, any>>() => T | undefined;

export declare function useTransitionState(): TransitionState;

export declare const version: string;

export declare interface VNode<
  HostNode = RendererNode,
  HostElement = RendererElement,
  ExtraProps = {
    [key: string]: any;
  }
> {
  /* Excluded from this release type: __v_isVNode */
  /* Excluded from this release type: __v_skip */
  type: VNodeTypes;
  props: (VNodeProps & ExtraProps) | null;
  key: string | number | symbol | null;
  ref: VNodeNormalizedRef | null;
  /**
   * SFC only. This is assigned on vnode creation using currentScopeId
   * which is set alongside currentRenderingInstance.
   */
  scopeId: string | null;
  /* Excluded from this release type: slotScopeIds */
  children: VNodeNormalizedChildren;
  component: ComponentInternalInstance | null;
  dirs: DirectiveBinding[] | null;
  transition: TransitionHooks<HostElement> | null;
  el: HostNode | null;
  anchor: HostNode | null;
  target: HostElement | null;
  targetAnchor: HostNode | null;
  /* Excluded from this release type: staticCount */
  suspense: SuspenseBoundary | null;
  /* Excluded from this release type: ssContent */
  /* Excluded from this release type: ssFallback */
  shapeFlag: number;
  patchFlag: number;
  /* Excluded from this release type: dynamicProps */
  /* Excluded from this release type: dynamicChildren */
  appContext: AppContext | null;
  /* Excluded from this release type: memo */
  /* Excluded from this release type: isCompatRoot */
  /* Excluded from this release type: ce */
}

declare let vnodeArgsTransformer:
  | ((
      args: Parameters<typeof _createVNode>,
      instance: ComponentInternalInstance | null
    ) => Parameters<typeof _createVNode>)
  | undefined;

export declare type VNodeArrayChildren = Array<VNodeArrayChildren | VNodeChildAtom>;

export declare type VNodeChild = VNodeChildAtom | VNodeArrayChildren;

declare type VNodeChildAtom = VNode | string | number | boolean | null | undefined | void;

declare type VNodeMountHook = (vnode: VNode) => void;

export declare type VNodeNormalizedChildren = string | VNodeArrayChildren | RawSlots | null;

declare type VNodeNormalizedRef = VNodeNormalizedRefAtom | VNodeNormalizedRefAtom[];

declare type VNodeNormalizedRefAtom = {
  i: ComponentInternalInstance;
  r: VNodeRef;
  f?: boolean;
};

export declare type VNodeProps = {
  key?: string | number | symbol;
  ref?: VNodeRef;
  onVnodeBeforeMount?: VNodeMountHook | VNodeMountHook[];
  onVnodeMounted?: VNodeMountHook | VNodeMountHook[];
  onVnodeBeforeUpdate?: VNodeUpdateHook | VNodeUpdateHook[];
  onVnodeUpdated?: VNodeUpdateHook | VNodeUpdateHook[];
  onVnodeBeforeUnmount?: VNodeMountHook | VNodeMountHook[];
  onVnodeUnmounted?: VNodeMountHook | VNodeMountHook[];
};

declare type VNodeRef = string | Ref | ((ref: object | null, refs: Record<string, any>) => void);

export declare type VNodeTypes =
  | string
  | VNode
  | Component
  | typeof Text_2
  | typeof Static
  | typeof Comment_2
  | typeof Fragment
  | typeof TeleportImpl
  | typeof SuspenseImpl;

declare type VNodeUpdateHook = (vnode: VNode, oldVNode: VNode) => void;

export declare function warn(msg: string, ...args: any[]): void;

declare function warnDeprecation(
  key: DeprecationTypes,
  instance: ComponentInternalInstance | null,
  ...args: any[]
): void;

export declare function watch<T extends MultiWatchSources, Immediate extends Readonly<boolean> = false>(
  sources: [...T],
  cb: WatchCallback<MapSources<T, false>, MapSources<T, Immediate>>,
  options?: WatchOptions<Immediate>
): WatchStopHandle;

export declare function watch<T extends Readonly<MultiWatchSources>, Immediate extends Readonly<boolean> = false>(
  source: T,
  cb: WatchCallback<MapSources<T, false>, MapSources<T, Immediate>>,
  options?: WatchOptions<Immediate>
): WatchStopHandle;

export declare function watch<T, Immediate extends Readonly<boolean> = false>(
  source: WatchSource<T>,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchOptions<Immediate>
): WatchStopHandle;

export declare function watch<T extends object, Immediate extends Readonly<boolean> = false>(
  source: T,
  cb: WatchCallback<T, Immediate extends true ? T | undefined : T>,
  options?: WatchOptions<Immediate>
): WatchStopHandle;

export declare type WatchCallback<V = any, OV = any> = (
  value: V,
  oldValue: OV,
  onInvalidate: InvalidateCbRegistrator
) => any;

export declare type WatchEffect = (onInvalidate: InvalidateCbRegistrator) => void;

export declare function watchEffect(effect: WatchEffect, options?: WatchOptionsBase): WatchStopHandle;

declare type WatchOptionItem = string | WatchCallback | ObjectWatchOptionItem;

export declare interface WatchOptions<Immediate = boolean> extends WatchOptionsBase {
  immediate?: Immediate;
  deep?: boolean;
}

export declare interface WatchOptionsBase extends DebuggerOptions {
  flush?: 'pre' | 'post' | 'sync';
}

export declare function watchPostEffect(effect: WatchEffect, options?: DebuggerOptions): WatchStopHandle;

export declare type WatchSource<T = any> = Ref<T> | ComputedRef<T> | (() => T);

export declare type WatchStopHandle = () => void;

export declare function watchSyncEffect(effect: WatchEffect, options?: DebuggerOptions): WatchStopHandle;

/* Excluded from this release type: withAsyncContext */

/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */
export declare function withCtx(
  fn: Function,
  ctx?: ComponentInternalInstance | null,
  isNonScopedSlot?: boolean
): Function;

/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` decalration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */
export declare function withDefaults<Props, Defaults extends InferDefaults<Props>>(
  props: Props,
  defaults: Defaults
): PropsWithDefaults<Props, Defaults>;

/**
 * Adds directives to a VNode.
 */
export declare function withDirectives<T extends VNode>(vnode: T, directives: DirectiveArguments): T;

export declare function withMemo(
  memo: any[],
  render: () => VNode<any, any>,
  cache: any[],
  index: number
): VNode<
  any,
  any,
  {
    [key: string]: any;
  }
>;

/**
 * Only for backwards compat
 * @private
 */
export declare const withScopeId: (_id: string) => typeof withCtx;

export { WritableComputedOptions };

export { WritableComputedRef };

export {};

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.

declare module '@vue/reactivity' {
  export interface RefUnwrapBailTypes {
    runtimeCoreBailTypes:
      | VNode
      | {
          // directly bailing on ComponentPublicInstance results in recursion
          // so we use this as a bail hint
          $: ComponentInternalInstance;
        };
  }
}

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.
type _defineProps = typeof defineProps;
type _defineEmits = typeof defineEmits;
type _defineExpose = typeof defineExpose;
type _withDefaults = typeof withDefaults;

type _ref = typeof $ref;
type _computed = typeof $computed;
type _fromRefs = typeof $fromRefs;
type _raw = typeof $raw;

declare global {
  const defineProps: _defineProps;
  const defineEmits: _defineEmits;
  const defineExpose: _defineExpose;
  const withDefaults: _withDefaults;

  const $ref: _ref;
  const $computed: _computed;
  const $fromRefs: _fromRefs;
  const $raw: _raw;
}
