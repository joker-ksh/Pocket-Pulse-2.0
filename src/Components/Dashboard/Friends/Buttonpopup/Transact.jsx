import * as React from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/system';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showToast } from '../../../../ToastState/Toastslice';
import axios from 'axios';
export default function Transact({me,friend,naam,fnaam}) {
  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? 'simple-popup' : undefined;

  const [transactionType, setTransactionType] = useState('lend');
  const [amount, setAmount] = useState('');


  const dispatch = useDispatch();

  const handleTransaction = async () => {
    console.log('Transaction:', transactionType, amount); 
    const amt = parseInt(amount);
    if (amt <= 0) {
      dispatch(showToast({message : 'Invalid amount', type : 'error'}));
    }
    
    try{
      const res = await axios.post('http://localhost:5000/api/user/transact', 
        {
          me: me,
          friend: friend,
          amount: amt,
          type: transactionType
        }, 
        {
          headers: {
            'Content-type': 'application/json'
          },
          withCredentials: true
      });
    }
    catch(e){
      console.log(e);
    }
    setTransactionType('lend');
    setAmount('');
  };


  return (
    <div>
      <Button aria-describedby={id} type="button" onClick={handleClick}>
        Transact
      </Button>
      <BasePopup id={id} open={open} anchor={anchor}>
        <PopupBody>
          <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-xl shadow-md w-full max-w-md mx-auto mt-10">
            <h1>{naam} - {fnaam}</h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setTransactionType('lend')}
                className={`px-4 py-2 rounded-lg ${transactionType === 'lend' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} transition duration-300`}
              >
                Lend
              </button>
              <button
                onClick={() => setTransactionType('borrow')}
                className={`px-4 py-2 rounded-lg ${transactionType === 'borrow' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'} transition duration-300`}
              >
                Borrow
              </button>
            </div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount in ₹"
              className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleTransaction}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Done
            </button>
          </div>
        </PopupBody>
      </BasePopup>
    </div>
  );
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const PopupBody = styled('div')(
  ({ theme }) => `
  width: max-content;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  box-shadow: ${
    theme.palette.mode === 'dark'
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`
  };
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  z-index: 1;
`,
);

const Button = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: ${blue[500]};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 1px solid ${blue[500]};
  box-shadow: 0 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 127, 255, 0.5)'
  }, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};

  &:hover {
    background-color: ${blue[600]};
  }

  &:active {
    background-color: ${blue[700]};
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;

    &:hover {
      background-color: ${blue[500]};
    }
  }
`,
);
