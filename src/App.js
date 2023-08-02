
const categories = [
  {
    name: "hats",
    id: 1,
  },
  {
    name: "jackets",
    id: 2,
  },
  {
    name: "sneakers",
    id: 3,
  },
  {
    name: "mens",
    id: 4,
  },
  {
    name: "womens",
    id: 5,
  }
]
const App = () => {
  return (
    <div className='categories-container'>
      {categories.map(({ name }) => {
        return (<div className='category-container'>
          <div className='category-image-container' />
          <div className='category-body-container'>
            <h2>{name}</h2>
            <p>Shop Now</p>
          </div>
        </div>)
      })
      }
    </div>
  );
};

export default App;
