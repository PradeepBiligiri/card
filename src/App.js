import './App.css';
import Card from './Card';

const prices = [
  {
    plan: 'FREE',
    currency: '$',
    amount: 0,
    period: '/month',
    listitems: [
      {
        itemName: 'Singel User',
        isblocked: false,
      },
      {
        itemName: '5 GB',
        isblocked: false,
      },
      {
        itemName: 'Unlimited Public Porjects',
        isblocked: false,
      },
      {
        itemName: 'Community Access',
        isblocked: false,
      },
      {
        itemName: 'Unlimited Private Porjects',
        isblocked: true,
      },
      {
        itemName: 'Dedicated Phone Support',
        isblocked: true,
      },
      {
        itemName: 'Free Subdomin',
        isblocked: true,
      },
      {
        itemName: 'Monthly Status Report',
        isblocked: true,
      },
    ],
  },
  {
    plan: 'PLUS',
    currency: '$',
    amount: 9,
    period: '/month',
    listitems: [
      {
        itemName: 'Singel User',
        isblocked: false,
      },
      {
        itemName: '50 GB',
        isblocked: false,
      },
      {
        itemName: 'Unlimited Public Porjects',
        isblocked: false,
      },
      {
        itemName: 'Community Access',
        isblocked: false,
      },
      {
        itemName: 'Unlimited Private Porjects',
        isblocked: false,
      },
      {
        itemName: 'Dedicated Phone Support',
        isblocked: false,
      },
      {
        itemName: 'Free Subdomin',
        isblocked: false,
      },
      {
        itemName: 'Monthly Status Report',
        isblocked: true,
      },
    ],
  },
  {
    plan: 'PRO',
    currency: '$',
    amount: 49,
    period: '/month',
    listitems: [
      {
        itemName: 'Unlimited User',
        isblocked: false,
      },
      {
        itemName: '150 GB',
        isblocked: false,
      },
      {
        itemName: 'Unlimited Public Porjects',
        isblocked: false,
      },
      {
        itemName: 'Community Access',
        isblocked: false,
      },
      {
        itemName: 'Unlimited Private Porjects',
        isblocked: false,
      },
      {
        itemName: 'Dedicated Phone Support',
        isblocked: false,
      },
      {
        itemName: 'Free Subdomin',
        isblocked: false,
      },
      {
        itemName: 'Monthly Status Report',
        isblocked: false,
      },
    ],
  },
];

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {prices.map((price) => {
            return <Card cardData={price}></Card>;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
