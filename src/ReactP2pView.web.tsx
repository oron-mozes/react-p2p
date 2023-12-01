import * as React from 'react';

import { ReactP2pViewProps } from './ReactP2p.types';

export default function ReactP2pView(props: ReactP2pViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
