/**
 * TodoTemplate
 *
 * @package templates
 */
import React from 'react';
import styles from './styles.module.css';

const TodoTemplate = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Todo List</h1>
        <section className={styles.common}>
          <h2 className={styles.subtitle}>ADD TODO</h2>
          <input
            className={styles.input}
            type={'text'}
            placeholder={'New Todo'}
          />
        </section>
        <section className={styles.common}>
          <input
            className={styles.input}
            type={'text'}
            placeholder={'Search Keyword'}
          />
        </section>
        <section className={styles.common}></section>
      </div>
    </>
  );
};

export default TodoTemplate;
