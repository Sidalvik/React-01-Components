import ShopItemFunc from './components/ShopItemFunc/ShopItemFunc';
import ShopItemClass from './components/ShopItemClass/ShopItemClass';
import Calendar from './components/Calendar/Calendar';
import ShopItemModel from './models/ShopItemModel'; 

function App() {
  const item = new ShopItemModel(
    'Tiger of Sweden',
    'Leonard coat',
    'Minimalistic coat in cotton-blend',
    'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    399,
    '£');

  const now = new Date();
  // const year = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => <Calendar date={new Date(2022, item, Math.round(Math.random() * 31))} key={item}/>);
  const style = {
    marginTop: '3rem',
    marginBottom: '1rem',
    textDecoration: 'underline',
  }

  return (
    <div>
      <h1>Cource React. Components.</h1>
      <h2 style = {style}>Function component</h2>
      <ShopItemFunc item = {item}/>
      <h2 style = {style}>Class component</h2>
      <ShopItemClass item = {item}/>
      <h2 style = {style}>Calendar</h2>
      <div id="rootCalendar">
        <Calendar date={now}/>
        {/* {year} */}
      </div>
    </div>
  );
}


export default App;
