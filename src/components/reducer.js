export const initialState = {
  authInfo:{},
  cartList:[],
  productList:[{
    title: 'The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness',
    price: '1.02',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_SY400_.jpg'
  },
  {
    title: 'Life\'s Amazing Secrets:How to Find Balance and Purpose in Your Life',
    price: '2.03',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81N7FmJhbhL._AC_SY400_.jpg'
  },
  {
    title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones by James Clear Notebook Paperback with 8.5 x 11 in 100 pages',
    price: '3.04',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SY400_.jpg.jpg'
  },
  {
    title: 'Rich Dad Poor Dad: 20th Anniversary Edition: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!',
    price: '4.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_SY400_.jpg'
  },
  {
    title: 'Ikigai: The Japanese Secret to a Long and Happy Life',
    price: '5.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY400_.jpg'
  },
  {
    title: 'Grandma\'s Bag Of Stories',
    price: '6.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/81jv44QdNwL._AC_SY400_.jpg'
  },
  {
    title: 'Word Power Made Easy: The Complete Handbook for Building a Superior Vocabulary',
    price: '7.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/818e+fq7+BL._AC_SY400_.jpg'
  },
  {
    title: 'The Power of Your Subconscious Mind Paperback – November 24, 2008',
    price: '8.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/71sBtM3Yi5L._AC_SY400_.jpg'
  },
  {
    title: 'Attitude Is Everything: Change Your Attitude... Change Your Life!',
    price: '9.00',
    rating: '4',
    imageURL: 'https://m.media-amazon.com/images/I/710jnzKlDTL._AC_SY400_.jpg'
  }]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { 
        ...state, 
        cartList:[...state.cartList, action.payload]
      };
    case 'REMOVE_FROM_CART':
      return { 
        ...state, 
        cartList: state.cartList.filter(item => item.id !== action.payload)
      };
    case 'SIGN_IN':
      return{
        ...state,
        authInfo:action.payload
      }
    default:
      return state;
  }
}