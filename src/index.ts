import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to ReactP2p.web.ts
// and on native platforms to ReactP2p.ts
import ReactP2pModule from "./ReactP2pModule";
import ReactP2pView from "./ReactP2pView";
import { ChangeEventPayload, ReactP2pViewProps } from "./ReactP2p.types";

// Get the native constant value.
export const PI = ReactP2pModule.PI;

export function hello(): string {
  return ReactP2pModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactP2pModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactP2pModule ?? NativeModulesProxy.ReactP2p);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export { ReactP2pView, ReactP2pViewProps, ChangeEventPayload };
