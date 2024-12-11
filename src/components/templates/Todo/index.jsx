/**
 * TodoTemplate
 *
 * @package templates
 */
import React, { useState } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFile,
  faPenToSquare,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

const TodoTemplate = () => {
  // state定義
  const [addInput, setAddInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const lists = [
    {
      id: 1,
      title: 'Todo1',
    },
    {
      id: 2,
      title: 'Todo2',
    },
  ];

  // action定義
  const onChangeAddInput = (e) => setAddInput(e.target.value);
  const onChangeSearchInput = (e) => setSearchInput(e.target.value);
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
            value={addInput}
            onChange={onChangeAddInput}
          />
        </section>
        <section className={styles.common}>
          <input
            className={styles.input}
            type={'text'}
            placeholder={'Search Keyword'}
            value={searchInput}
            onChange={onChangeSearchInput}
          />
        </section>
        <section className={styles.common}>
          <ul className={styles.list}>
            {lists.length > 0 &&
              lists.map((todo) => (
                <li key={todo.id} className={styles.todo}>
                  <span className={styles.task}>{todo.title}</span>
                  <div className={styles.far}>
                    <FontAwesomeIcon icon={faTrashCan} size="lg" />
                  </div>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default TodoTemplate;
