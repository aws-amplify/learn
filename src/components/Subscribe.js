import {useState, useCallback} from 'react';
import {MdArrowForward, MdDone} from 'react-icons/md';
import {css} from '@emotion/core';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import {toast} from 'react-toastify';
import {includes} from 'ramda';
import {Basic} from './Button';
import {ORANGE_PEEL_COLOR} from '~/constants';
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

    &:active {
      .text {
        color: #000;
      }
    }

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

    .button {
      cursor: pointer;
      display: flex;
      padding: 4px;

      > div {
        padding: 11px 10px 7px 10px;
        background-color: ${ORANGE_PEEL_COLOR};
        color: #fff;
      }
    }
  }
`;

export default () => {
  const [value, setValue] = useState('');
  const onChange = useCallback(({target: {value: v}}) => setValue(v), []);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const onClick = async () => {
    const response = await addToMailchimp(value);
    const {result, msg} = response;
    const updateMessage = includes(
      'is already subscribed to list Amplify.',
      msg,
    )
      ? 'Already subscribed'
      : msg;

    if (result === 'success') {
      setValue('');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 1000);
    }

    // eslint-disable-next-line
    toast(<div dangerouslySetInnerHTML={{__html: updateMessage}} />, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      hideProgressBar: true,
      type: result,
    });
  };

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
        <form>
          <input
            autoFocus
            type='email'
            autoCapitalize='off'
            autoCorrect='off'
            className='subscribe-input'
            placeholder='your@email.com'
            onKeyPress={e => {
              const {key} = e;
              if (key === 'Enter') {
                e.preventDefault();
                onClick();
              }
            }}
            {...{value, onChange}}
          />

          <Basic {...{onClick}}>
            <div className='shadow actionable rounded'>
              {showSuccess ? (
                <MdDone size={20} />
              ) : (
                <MdArrowForward size={20} />
              )}
            </div>
          </Basic>
        </form>
      )}
    </div>
  );
};
