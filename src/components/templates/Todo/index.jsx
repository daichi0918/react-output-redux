/**
 * TodoTemplate
 *
 * @package templates
 */
import React, { useMemo, useState } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addList, deleteList } from '../../../store/todoSlice';

const TodoTemplate = () => {
  const originalTodoList = useSelector((state) => state.todos.lists);
  const dispatch = useDispatch();
  // state定義
  const [addInput, setAddInput] = useState('');
  const [searchInput, setSearchInput] = useState('');

  // action定義
  const onChangeAddInput = (e) => setAddInput(e.target.value);
  const onChangeSearchInput = (e) => setSearchInput(e.target.value);

  const handleAddNewTodo = (e) => {
    if (e.key === 'Enter' && addInput !== '') {
      dispatch(addList({ title: addInput }));
      setAddInput('');
    }
  };

  /**
   * 表示用TodoList
   */
  const showTodoList = useMemo(() => {
    return originalTodoList.filter((todo) => {
      const regexp = new RegExp('^' + searchInput, 'i');
      return todo.title.match(regexp);
    });
  }, [searchInput, originalTodoList]);
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
            onKeyDown={(e) => handleAddNewTodo(e)}
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
            {showTodoList.length > 0 &&
              showTodoList.map((todo) => (
                <li key={todo.id} className={styles.todo}>
                  <span className={styles.task}>{todo.title}</span>
                  <div className={styles.far}>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      size="lg"
                      onClick={() =>
                        dispatch(deleteList({ id: todo.id, title: todo.title }))
                      }
                    />
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
