import { JSX } from "react";

export type GetProps<T> = T extends (props: infer P) => JSX.Element ? P : never;
