import {useState, useCallback} from 'react';
import {MdArrowForward, MdCheck} from 'react-icons/md';
import {css} from '@emotion/core';
import {toast} from 'react-toastify';
import axios from 'axios';
import {Basic} from './Button';
import {ORANGE_PEEL_COLOR} from '~/constants';
import Text from './Text';
import {isValidEmailAddress} from '~/utilities';

const styles = css`
  display: flex;
  flex: 1;
  background-color: #fff;
  max-width: 23.625rem;

  > .button {
    display: flex;
    flex: 1;
    padding: 0.75rem 1rem;

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
      font-size: 0.9375rem;
      font-weight: 200;
      line-height: 1.40625rem;
    }
  }

  > form {
    display: flex;
    flex: 1;
    flex-direction: row;

    input[type='email'] {
      display: flex;
      flex: 1;
      padding: 0.75rem 1rem;
      font-weight: 200;
      font-size: 1rem;
      font-weight: 1.5rem;

      &:active {
        color: #000;
      }

      &:-internal-autofill-previewed,
      &:-internal-autofill-selected {
        background-color: #fff !important;
        border-radius: 0.25rem;
      }
    }

    .button {
      cursor: pointer;
      display: flex;
      padding: 0.25rem;

      > div {
        padding: 0.6875rem 0.625rem 0.4375rem 0.625rem;
        background-color: ${ORANGE_PEEL_COLOR};
        color: #fff;

        > svg {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    }
  }
`;

const endpoint =
  'https://pmzb3nwjhk.execute-api.us-west-2.amazonaws.com/development';
const ctaTextByAction = {
  subscribe: 'Subscribe to the Newsletter',
  unsubscribe: 'Unsubscribe from the Newsletter',
};

export default ({action}) => {
  const [value, setValue] = useState('');
  const onChange = useCallback(({target: {value: v}}) => setValue(v), []);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onClick = async () => {
    const [internal, emailAddress] = value.includes('INTERNAL_USER')
      ? [true, value.split('INTERNAL_USER')[0]]
      : [false, value];
    const valid = isValidEmailAddress(emailAddress);
    let type;
    // eslint-disable-next-line
    let __html;
    if (valid) {
      const internalQueryString = internal ? '&internal=true' : '';
      const fullQueryString = `email_address=${encodeURIComponent(
        emailAddress,
      )}&action=${action}${internalQueryString}`;
      const requestUrl = `${endpoint}?${fullQueryString}`;
      const {data} = await axios.get(requestUrl);
      const successful = data.message.includes('Successfully');

      if (successful) {
        setValue('');
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
        type = 'success';
      } else {
        type = 'error';
      }

      ({message: __html} = data);
    } else {
      type = 'error';
      __html = 'Please enter a valid email address.';
    }

    // eslint-disable-next-line
    toast(<div dangerouslySetInnerHTML={{__html}} />, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      hideProgressBar: true,
      type,
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
            children={ctaTextByAction[action]}
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
            placeholder='your@email.com'
            {...{value, onChange}}
            onKeyPress={e => {
              const {key} = e;
              if (key === 'Enter') {
                e.preventDefault();
                onClick();
              }
            }}
          />

          <Basic {...{onClick}}>
            <div className='shadow actionable rounded'>
              {showSuccess ? <MdCheck /> : <MdArrowForward />}
            </div>
          </Basic>
        </form>
      )}
    </div>
  );
};
