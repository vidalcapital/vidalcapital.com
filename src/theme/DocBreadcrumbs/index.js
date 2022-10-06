import React from 'react';
import DocBreadcrumbs from '@theme-original/DocBreadcrumbs';
import styles from './styles.module.css';

export default function DocBreadcrumbsWrapper(props) {
  return (
    <div className={styles.blackbg} style={{"text-align": "right"}}>
      <DocBreadcrumbs {...props} />
    </div>
  );
}
