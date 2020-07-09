import React from 'react';

export interface NativeIniticonProps {
    text: string,
    size:number
    color?: string,
    backgroundColor?: string,
    single?: boolean
}

declare const NativeIniticon: React.Component<NativeIniticonProps>

export default NativeIniticon
