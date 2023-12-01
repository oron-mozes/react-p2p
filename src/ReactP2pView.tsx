import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactP2pViewProps } from './ReactP2p.types';

const NativeView: React.ComponentType<ReactP2pViewProps> =
  requireNativeViewManager('ReactP2p');

export default function ReactP2pView(props: ReactP2pViewProps) {
  return <NativeView {...props} />;
}
