import type { ComponentPublicInstance, FunctionalComponent } from "vue";

declare global {
  declare type Recordable<T = any> = Record<string, T>;
  declare type Nullable<T> = T | null;
}

declare module "vue" {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>;
}
