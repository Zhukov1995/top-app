import React from "react";
import type { propTitle } from './title.prop';
import styles from '@/components/title/title.module.css';

const TitleTag = ({ tag, children }: propTitle): JSX.Element => {
    switch (tag) {
        case 'h1': return <h1 className={styles.h1}>{children}</h1>
        case 'h2': return <h2 className={styles.h2}>{children}</h2>
        case 'h3': return <h3 className={styles.h3}>{children}</h3>
        case 'h4': return <h4>{children}</h4>
        case 'h5': return <h5>{children}</h5>
        case 'h6': return <h6>{children}</h6>
        default: return <h1>{children}</h1>
    }
}

export default TitleTag;