import {useState, useCallback, useMemo, useReducer} from 'react';
import {MdArrowForward} from 'react-icons/md';
import {css} from '@emotion/core';
import {Basic} from './Button';
import {ORANGE_PEEL_COLOR, SAN_JUAN_COLOR} from '~/constants';
import Text from './Text';

const styles = css`
  display: flex;
  flex: 1;
  background-color: #fff;
  max-width: 378px;

  > .button {
    display: flex;
    flex: 1;
    padding: 12px 16px;

    > .text {
      display: flex;
      flex: 1;
      text-align: center;
      justify-content: center;
    }
  }

  > form {
    display: flex;
    flex: 1;
    flex-direction: row;

    > .hidden {
      display: none;
    }

    input[type='email'] {
      display: flex;
      flex: 1;
      padding: 12px 16px;

      &:active {
        color: #000;
      }

      &:-internal-autofill-previewed,
      &:-internal-autofill-selected {
        background-color: #fff !important;
        border-radius: 4px;
      }
    }

    label {
      cursor: pointer;
      display: flex;
      padding: 4px;

      > div {
        padding: 0px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${ORANGE_PEEL_COLOR};
        border-radius: 4px;
        color: #fff;
      }
    }
  }
`;

export default () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div css={styles} className='rounded'>
      {!showForm && (
        <Basic
          onClick={() => setShowForm(true)}
          className='actionable three-dee rounded'
        >
          <Text
            className='subscribe-label'
            children='Subscribe to the Newsletter'
          />
        </Basic>
      )}

      {showForm && (
        <form
          action='https://amazon.us20.list-manage.com/subscribe/post?u=1dc41125a628ca803765f7800&amp;id=3e69babeab'
          method='post'
          id='mc-embedded-subscribe-form'
          name='mc-embedded-subscribe-form'
          className='validate'
          target='_blank'
          noValidate
        >
          <input
            autoFocus
            type='email'
            autoCapitalize='off'
            autoCorrect='off'
            name='EMAIL'
            className='subscribe-input'
            id='mce-EMAIL'
            placeholder='your@email.com'
          />

          <input
            className='hidden'
            type='text'
            name='b_1dc41125a628ca803765f7800_3e69babeab'
            tabIndex='-1'
            value=''
          />

          <label htmlFor='mc-embedded-subscribe'>
            <div>
              <MdArrowForward size={20} />
            </div>
          </label>

          <input
            className='hidden'
            type='submit'
            value='Subscribe'
            name='subscribe'
            id='mc-embedded-subscribe'
          />
        </form>
      )}
    </div>
  );
};
